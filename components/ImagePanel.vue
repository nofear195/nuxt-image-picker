<template>
    <div class="flex flex-col focus:outline-none h-full border  p-5" ref="classifier" tabindex="1" @mouseove="enterArea"
        @keydown.exact="changeCurrentLabelByHotKey" @wheel="resizeImageSizeByWheel">
        <div class="h-1/6 flex justify-between">
            <div class="w-1/5">
                <el-slider v-model="imageViewSize" :min="20" :max="100" :show-tooltip="false"></el-slider>
            </div>
            <div class="w-1/5">
                <el-select v-model="currentLabelName">
                    <el-option v-for="label in labels" :key="label.name" :value="label.name"></el-option>
                </el-select>
            </div>
            <div class="w-1/5">
                <el-select v-model="selectValue" clearable>
                    <el-option key="all" :label="getLabelCount('all')" value="all"></el-option>
                    <el-option key="unpick" :label="getLabelCount('unpick')" value="unpick"></el-option>
                    <el-option v-for="label in labels" :key="label.name" :label="getLabelCount(label.name)"
                        :value="label.name"></el-option>
                </el-select>
            </div>
        </div>
        <div class="h-5/6 hover:cursor-pointer flex flex-wrap overflow-auto items-center justify-evenly">
            <template v-for="file in filterFiles" :key="file.name">
                <div class="box-border flex flex-col relative border border-solid m-3"
                    :style="`border-color:${file.label ? file.label.color : ''};width: ${imageViewSize}%`"
                    @click="classifyFiles(file.name)">
                    <div v-if="file.label">
                        <el-button class="absolute z-10 right-[2%] top-[2%]" circle
                            :style="`background: ${file.label.color}`">
                            <el-icon style="color:white">
                                <Check />
                            </el-icon>
                        </el-button>
                    </div>
                    <el-image :src="file.src" fit="cover"></el-image>
                    <div class="text-center">{{ file.name }}</div>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Ref } from 'vue';
import { File, Label } from '../utils/picker.services';
import { Check } from '@element-plus/icons-vue'

const props = defineProps<{
    files: File[],
    labels: Label[],
}>();

const emits = defineEmits<{
    (e: "changeCurrentLabel", label: number): void;
}>();

const imageViewSize: Ref<number> = ref(0);
const selectValue: Ref<string> = ref("all");
const classifier: Ref<HTMLDivElement | null> = ref(null);
const currentLabelName: Ref<string> = ref('');


watch(props.labels, () => {
    currentLabelName.value = props.labels[0].name;
})

const filterFiles = computed<File[]>(() => {
    if (props.files.length === 0) return [];

    if (selectValue.value === "all") return props.files;

    if (selectValue.value === "unpick") return props.files.filter((file) => file.label === undefined);

    return props.files.filter((file) => file.label?.name === selectValue.value)
});


function enterArea(): void {
    classifier.value?.focus();
}

function changeCurrentLabelByHotKey(event: KeyboardEvent): void {
    const pressKeyToNumber = Number(event.key);
    if (isNaN(pressKeyToNumber)) return;
    emits('changeCurrentLabel', pressKeyToNumber)
}

function resizeImageSizeByWheel(event: WheelEvent): void {
    const altKey = event.altKey;
    if (!altKey) return;
    const direction = event.deltaY > 0 ? "down" : "up";

    direction === "down" ? imageViewSize.value-- : imageViewSize.value++;
}

function getLabelCount(name: string): string {
    if (name === "all") return `all (${props.files.length})`;

    const unpickNumber = props.files.filter((item) => typeof item.label === 'undefined');

    if (name === "unpick") return `unpick (${unpickNumber.length})`;

    const pickedNumber = props.files.filter(item => item.label && item.label.name === name)

    return `${name} (${pickedNumber.length})`;
}

function classifyFiles(name: string): void {
    if (props.labels.length === 0) return;
    const target = props.files.find((item) => item.name === name);
    if (!target) return;
    const currentLabel = props.labels.find((label) => label.name === currentLabelName.value)
    if (!currentLabel) return;


    if (!target.label) {
        target.label = currentLabel
        return;
    }

    if (target.label.name === currentLabel.name) {
        target.label = undefined;

    } else {
        target.label = currentLabel
    }
}

</script>