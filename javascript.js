// Initialize variables and target elements //
let input1 = document.getElementById('input1'),
    enterText = document.getElementById('enterText'),
    checker = document.getElementById('checker'),
    textContainer = document.getElementById('text-container'),
    doneText = document.getElementById('done-text'),
    newDiv = [],
    transferDiv,
    counter = 0;

// Move entered text
function enteredText (value) {
    newDiv[counter] = document.createElement('div');
    newDiv[counter] .classList.add('boxes');
    textContainer.appendChild(newDiv[counter]);
    newDiv[counter] .innerText = value;
}

// Check for pressed key
input1.addEventListener("keyup", (e) => {
    let keyPressed = e.key;
    if (input1.value == '') {

    } 
    else if (keyPressed == 'Enter') {
        counter++;
        let value = input1.value;
        input1.value = '';
        enteredText(value);
     }
});


// Transfer text from do to done
function transferText () {
    transferDiv = document.createElement('div');
    transferDiv.classList.add('boxes');
    doneText.appendChild(transferDiv);
    console.log('works')

    let value = newDiv[counter] .innerText;
    transferDiv.innerText = value;
    newDiv[counter] .innerText = '';
    newDiv[counter] .remove();
    counter--;
}

// Check for checkbox change
checker.addEventListener("change", (e) => {
    let loopNumber = counter;
    for ( let i = 0; i < loopNumber; i++) {
        transferText();
    }
    
    checker.checked = false;
}
)

