// const { count } = require("console");

let count = 0;

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'd') {
        result.textContent = "ถูกต้อง KU ย่อมาจาก Kasetsart University";
        result.style.color = 'green';
        count = 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}


function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'b') {
        result.textContent = "ถูกต้อง ปรีดี พนมยงค์ เป็นผู้ก่อตั้ง TU (มหาวิทยาลัยธรรมศาสตร์)";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result3.textContent = "คุณได้ทั้งหมด " + count + " คะแนน";
    count = 0;
}