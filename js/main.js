// Variable including char will be randomize
let string = "0123456789abcdef";

// Function which choose random 6 number or letter to create unique backgroundColor for individual tile whit buttons and burgers
function randomColor(string) {
    let bgColor = "";

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * string.length);
        bgColor += string[index];
    }
    return bgColor;
}

const buttons = [...document.querySelectorAll(".main__burger-place")];


//Section where assign a choosen color (btw. inline style)
[...document.querySelectorAll('.buttons__square')].forEach(item => {
    item.style.backgroundColor = "#" + randomColor(string);
});

[...document.querySelectorAll('.main__square')].forEach(item => {
    item.style.backgroundColor = "#" + randomColor(string);
})



function activeButton() {
    this.classList.toggle('is--active')
}

buttons.forEach(function (button) {
    button.addEventListener('click', activeButton);
})