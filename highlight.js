var displayPane = document.createElement('div');
displayPane.id = 'keypress-visualizer';
styleDisplayPane();

function styleDisplayPane() {
    displayPane.style.zIndex = '2147483647';
    displayPane.style.position = 'absolute';
    displayPane.style.bottom = '10px';
    displayPane.style.left = '10px';

    displayPane.style.fontFamily = '"Courier New", monospace';
    displayPane.style.fontSize = '30px';
    displayPane.style.color = 'white';
    displayPane.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    displayPane.style.opacity = '.5';
    displayPane.style.borderRadius = '5px';
}

let previousTimer;
document.onkeydown = function ($event) {
    const currentText = displayPane.innerText;
    displayPane.innerText = currentText + $event.key;

    if (displayPane.innerText) {
        displayPane.style.padding = '10px 10px';
    }

    if (previousTimer) {
        clearTimeout(previousTimer);
    }

    previousTimer = setTimeout(() => {
        displayPane.innerText = '';
        displayPane.style.padding = '0';
    }, 1000);
};

document.getElementsByTagName('body')[0].appendChild(displayPane);
