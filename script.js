const colorButton = document.getElementById('colorButton');

const colorPairs = [
  ['#ffffff', '#000000', '#bfbfbfff', '#000000ff', '#3c3c3cff','#ffffffff'],
  ['#0fffbf', '#000000', '#00ffff', '#ff00ff', '#ff66ff', '#000000'],
  ['#ff4500', '#ffffff', '#ff8c42', '#ff6347', '#ff7f50', '#ffffff'],
  ['#fff4e6', '#5a2e1c', '#f6b26b', '#d97434', '#ff8c42', '#5a2e1c'],
  ['#6a0dad', '#f8f0ff', '#9b30ff', '#8a2be2', '#a64ca6', '#ffffff'],
  ['#ffedf7', '#300032', '#ff92c2', '#ff0066', '#ff3399', '#ffffff'],
  ['#ffdd00', '#000000', '#ffd633', '#ff9900', '#ffcc33', '#000000'],
  ['#0077ff', '#ffffff', '#00bfff', '#00ffff', '#66ffff', '#000000'],
  ['#f0fff4', '#2f4f2f', '#b2d8b2', '#4caf50', '#81c784', '#ffffff'],
  ['#fff8f0', '#3c2f2f', '#f2d1c9', '#d27c7c', '#f5bcbc', '#3c2f2f'],
  ['#00008b', '#000000ff', '#00b7ffff', '#0077ff', '#005fcc', '#ffffffff'],
];

let index = -1;
let hoverStyle = document.createElement('style');
document.head.appendChild(hoverStyle);

colorButton.addEventListener('click', () => {

    index = (index + 1) % colorPairs.length;

    const [bgColor, textColor, boxColor, buttonColor, hoverColor, textColor2] = colorPairs[index];

    document.body.style.backgroundColor = bgColor;

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
    box.style.backgroundColor = boxColor;
    box.style.color = textColor;
    });

    const header = document.querySelector('header');
    header.style.backgroundColor = boxColor;
    header.style.color = textColor;

    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
    btn.style.backgroundColor = buttonColor;
    btn.style.color = textColor2;
    });

    const linkButtons = document.querySelectorAll('.link-button');
    linkButtons.forEach(btn => {
    btn.style.backgroundColor = buttonColor;
    btn.style.color = textColor2;
    });

    hoverStyle.textContent = `
    button:hover, .link-button:hover {
    background-color: ${hoverColor} !important;
    color: ${textColor2} !important;
    }`;

});
