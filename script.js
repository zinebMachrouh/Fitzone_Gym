const questions = document.querySelectorAll('.qst');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const chev = question.lastElementChild;
        console.log(chev);
        if (answer.style.display === 'flex') {
            answer.style.display = 'none';
            chev.style.transform = "rotate(0deg)";
        } else {
            answer.style.display = 'flex';
            chev.style.transform = "rotate(180deg)";
        }
    });
});


function checkFname(){
    let fname = document.getElementById("fname");

    if (fname.value.length < 3) {
        fname.classList.add("error");
        fname.nextElementSibling.style.display = "block";
    }else{
        fname.classList.add("success");
        fname.nextElementSibling.style.display = "none";
    }
}

function checkLname(){
    let lname = document.getElementById("lname");

    if (lname.value.length < 3) {
        lname.classList.add("error");
        lname.nextElementSibling.style.display = "block";
    }else{
        lname.classList.add("success");
        lname.nextElementSibling.style.display = "none";
    }
}

function checkNum() {
    let pNum = document.getElementById("pNum");
    let numRegex = /^\+212\d{9}$/;

    if (numRegex.test(pNum.value)) {
        pNum.classList.add("success");
        pNum.nextElementSibling.style.display = "none";
    }else{
        pNum.classList.add("error");
        pNum.nextElementSibling.style.display = "block";
    }
}

function checkCin() {
    let cin = document.getElementById("cin");
    let cinRegex = /^[A-Z]{2}\d{5,6}$/;

    if (cinRegex.test(cin.value)) {
        cin.classList.add("success");
        cin.nextElementSibling.style.display = "none";
    }else{
        cin.classList.add("error");
        cin.nextElementSibling.style.display = "block";
    }
}

function checkEmail() {
    let email = document.getElementById("email");
    let emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-z]{2,}$/;

    if (emailRegex.test(email.value)) {
        email.classList.add("success");
        email.nextElementSibling.style.display = "none";
    }else{
        email.classList.add("error");
        email.nextElementSibling.style.display = "block";
    }
}
