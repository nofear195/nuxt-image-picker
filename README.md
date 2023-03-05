# Nuxt Image Picker

This repository provides a tool (Vue.js component) for picking images and assigning them to different categories. With this tool, you can easily label your images for machine learning and computer vision projects, such as object detection or image classification.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/nofear195/nuxt-image-picker.git
```

2. Install dependencies:

```bash
cd nuxt-image-picker
npm install
```

3. Run the app on http://localhost:3000 :

```bash
npm run dev
```

## Usage

```javascript
import { File, Label, getRandomHEXCodeColor } from '~~/utils/picker.services';

<template>
    <ImagePicker :files="files" :labels="labels" @change-file-label="changeFileLabel" />
</template>
<script setup lang="ts">
    import { File, Label, getRandomHEXCodeColor } from '~~/utils/picker.services';

    const files: File[] = reactive([]);
    const labels: Label[] = reactive([]);

    function changeFileLabel(file: File): void {
        const target = files.find(item => item.name === file.name);
        if (!target) return;
        target.label = file.label;
    }
</script>
```

### Shortkeys

|Shortcut Key| Action|
|:-----------|:------|
|   Alt + Mouse Scroll up    |  Zoom In Image  |
|   Alt + Mouse Scroll down    |  Zoom Out Image  |

### Props

```js
class Label {
  name:string ="";
  color: string="";
}

class File {
  name: string="";
  src: string="";
  label?: Label;
}
```

## Demo

Here's a live demo of the component in action: [Link to Demo](https://nofear195.github.io/nuxt-image-picker/)


## Screenshots

![This is a screenshot](/screenshot.png)

#### Reference Image Resource

- [https://pixabay.com](https://pixabay.com)
