function addImageSwapper() {
    let myImage = document.getElementById('chrome-img');
    myImage.onclick = function () {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/chrome-icon-1.png') {
            myImage.setAttribute('src', 'images/chrome-icon-2.png');
        } else {
            myImage.setAttribute('src', 'images/chrome-icon-1.png');
        }
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        let myHeading = document.getElementById('user-h1');
        myHeading.textContent = 'Chrome is cool, ' + myName;
    }
}

function addButtonListener() {
    let myButton = document.getElementById('user-btn');
    myButton.onclick = function () {
        setUserName();
    };
}

function checkUserNameH1() {
    let myHeading = document.getElementById('user-h1');

    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Chrome is cool, ' + storedName;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    addImageSwapper();
    addButtonListener();
    checkUserNameH1();
});
