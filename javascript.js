let input1 = document.getElementById('input1'),
    enterText = document.getElementById('enterText');
    checker = document.getElementById('checker');

function enteredText (value) {
    enterText.innerText = value;
}

input1.addEventListener("keyup", (e) => {
    let keyPressed = e.key;
     if (keyPressed == 'Enter') {
        let value = input1.value;
        enteredText(value);
        input1.value = '';
     }
});

function transferText () {
    let value = enterText.innerText;
    doneText.innerText  = value;
    enterText.innerText = '';
}

checker.addEventListener("change", (e) => {
    transferText();
    checker.checked = false;
}
)