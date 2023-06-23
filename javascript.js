// Initialize variables and target elements //
let input1 = document.getElementById('input1'),
    enterText = document.getElementById('enterText'),
    checker = document.getElementById('checker'),
    checker2 = document.getElementById('checker2'),
    textContainer = document.getElementById('text-container'),
    doneText = document.getElementById('done-text'),
    button = document.getElementById('theme'),
    circle = document.getElementById('circle'),
    newDiv = [],
    transferDiv,
    counter = 0;
    toggle = false;

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

// Check for checkbox1 change
checker.addEventListener("change", (e) => {
    let loopNumber = counter;
    for ( let i = 0; i < loopNumber; i++) {
        transferText();
    }
    
    checker.checked = false;
}
)

// Check for checkbox2 change 
checker2.addEventListener("change" , (e) => {
    deleteTasks();
    checker2.checked = false;
}
)

function deleteTasks () {
    doneText.innerHTML = '';
}

// Check for button change 
button.addEventListener("click" , (e) => {
    console.log('works');
    if (toggle === false) {
        circle.style.transform =  "translateX(33px)";
        document.documentElement.style.setProperty('--linear-color1', 'rgb(239, 243, 231)');
        document.documentElement.style.setProperty('--linear-color2', 'rgb(0, 255, 128)');
        toggle = true;
    }
    else {
        circle.style.transform =  "translateX(0)";
        document.documentElement.style.setProperty('--linear-color1', '');
        document.documentElement.style.setProperty('--linear-color2', '');
        toggle = false;
    }
});
