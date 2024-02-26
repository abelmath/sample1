// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const custColorBtn = document.querySelector('.custColor');
const randColorBtn = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');

// Function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value);
    const pTag = document.getElementById('studentID');
    pTag.textContent = '200552821';

    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (userInput >= 0 && userInput <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (userInput > 20 && userInput <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (userInput > 40 && userInput <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (userInput > 60 && userInput <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNum;
    changeCustomColor();
}

// Function to generate options for select list
function addList() {
    const imageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    imageNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        imageSelect.appendChild(option);
    });
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = "img/" + selectedImage;
}

// Event listeners for on click event of buttons and select
custColorBtn.addEventListener('click', changeCustomColor);
randColorBtn.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Call addList function to generate options for select list
addList();
