document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');

const colorPairs = [
    ['#1E2A38', '#E3E9F0', '#334E68', '#5B7B91', '#9FBACD', '#dde9f1ff'],
    ['#f8c6e1ff', '#300032', '#ff92c2', '#ff008cff', '#ff3399', '#ffffff'],
    ['#8cb8e6ff', '#000000ff', '#b2d4f2', '#4a90e2', '#81b3f4', '#ffffff'],
    ['#0B132B', '#d0d0d0ff', '#1C2541', '#3A506B', '#293e57ff', '#aec8d0ff'],
    ['#89bc80ff', '#000000ff', '#b2d8b2', '#4caf50', '#81c784', '#ffffff'],
    ['#6a0dad', '#f8f0ff', '#9b30ff', '#5c01b1ff', '#631dc7ff', '#ffffff'],
    ['#0077ff', '#000000ff', '#00bfff', '#1e46d6ff', '#2063ffff', '#ffffffff'],
    ['#1B3B1A', '#E5F4E3', '#2E5939', '#8FB996', '#729473ff', '#000000ff'],
    ['#e5e5e5ff', '#000000', '#bfbfbfff', '#4b4b4bff', '#3c3c3cff', '#ffffffff'],
 
];


    // Read saved global color index or default to -1
    let index = parseInt(localStorage.getItem('globalColorIndex')) || -1;

    let hoverStyle = document.createElement('style');
    document.head.appendChild(hoverStyle);

    function applyColors(idx) {
        const [bgColor, textColor, boxColor, buttonColor, hoverColor, textColor2] = colorPairs[idx];

        document.body.style.backgroundColor = bgColor;

        document.querySelectorAll('.box').forEach(box => {
            box.style.backgroundColor = boxColor;
            box.style.color = textColor;
        });

        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundColor = boxColor;
            header.style.color = textColor;
        }

        const h1 = document.querySelectorAll('h1');
        h1.forEach(el => el.style.color = textColor); // <-- set new color

        document.querySelectorAll('button, .link-button').forEach(btn => {
            btn.style.backgroundColor = buttonColor;
            btn.style.color = textColor2;
        });

        const homeButton = document.querySelector('.home-button');
        if (homeButton) {
            homeButton.style.backgroundColor = buttonColor;
            homeButton.style.color = textColor2;
        }

        hoverStyle.textContent = `
            button:hover, .link-button:hover, .home-button:hover {
                background-color: ${hoverColor} !important;
                color: ${textColor2} !important;
            }
        `;
    }

    // Apply saved color on page load (even if no button exists)
    if (index >= 0) applyColors(index);

    // Only add click handler if button exists
    if (colorButton) {
        colorButton.addEventListener('click', () => {
            index = (index + 1) % colorPairs.length;
            localStorage.setItem('globalColorIndex', index); // SAVE globally
            applyColors(index);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  // Clicker Game
  let score = 0;
  let startTime = null;
  const target = 100;

  const scoreDisplay = document.getElementById('score');
  const clicker = document.getElementById('clicker');
  const message = document.getElementById('message');

  clicker.addEventListener('click', () => {
    // Start timer on first click
    if (score === 0) startTime = Date.now();

    score++;
    scoreDisplay.textContent = score;

    if (score >= target) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
      message.textContent = `🎉 You reached ${target} clicks in ${elapsed} seconds!`;
      score = 0;            // reset for next round
      scoreDisplay.textContent = score;
      startTime = null;
    }
  });

});