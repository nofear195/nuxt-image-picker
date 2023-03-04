class Label {
  name:string ="";
  color: string="";
}

class File {
  name: string="";
  src: string="";
  label?: Label;
}

function getRandomHEXCodeColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export { Label, File, getRandomHEXCodeColor };