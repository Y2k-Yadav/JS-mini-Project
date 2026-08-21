let rndclr = document.getElementsByClassName('rndclr')[0];
let body = document.getElementsByTagName('body');
let span = document.getElementsByTagName('span');
let aplycolor = document.getElementsByClassName('aplycolor')[0];
let inputtag = document.getElementById('inputtag');

let val = '';
span.innerHTML = 'white';

// ---------- Input handling ----------
inputtag.addEventListener('input', () => {
    val = inputtag.value.trim();
});

inputtag.addEventListener('keydown', (e) => {

    if (e.key == 'Enter')
    {
        applyColor(val)
    }
})

function checkValidColor() {
    if (val !== '') {
        val = val.toLowerCase();
        applyColor(val);
    } else {
        alert('Please enter a color value.');
    }
}

aplycolor.addEventListener('click', checkValidColor);

// ---------- Random color ----------
function randomColor() {
    let colorcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let clr = '';

    for (let index = 0; index < 6; index++) {
        let number = Math.floor(Math.random() * 16);
        clr += colorcode[number];
    }

    body[0].style.backgroundColor = `#${clr}`;
    span[0].innerHTML = `#${clr}`;
}

rndclr.addEventListener('click', randomColor);

// ---------- Apply color (hex / rgb / name) ----------
function applyColor(val) {
    if (val.includes('#')) {
        // Hex color
        val = val.replace('#', '');
        let test = document.createElement('div');
        test.style.backgroundColor = `#${val}`;

        if (test.style.backgroundColor !== '') {
            body[0].style.backgroundColor = `#${val}`;
            span[0].innerHTML = `#${val}`;
        } else {
            alert('Please enter a valid hex color code (e.g. #ff0000).');
        }

    } else if (val.includes(',')) {
        // RGB color
        let test = document.createElement('div');
        test.style.backgroundColor = `rgb(${val})`;

        if (test.style.backgroundColor !== '') {
            body[0].style.backgroundColor = `rgb(${val})`;
            span[0].innerHTML = `rgb(${val})`;
        } else {
            alert('Please enter a valid rgb color (e.g. 255,0,0).');
        }

    } else {
        // Named color
        let test = document.createElement('div');
        test.style.backgroundColor = `${val}`;

        if (test.style.backgroundColor !== '') {
            body[0].style.backgroundColor = `${val}`;
            span[0].innerHTML = `${val}`;
        } else {
            alert('Please enter a valid color name (e.g. red).');
        }
    }
}