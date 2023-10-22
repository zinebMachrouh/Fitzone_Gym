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
        if (answer.style.display === 'flex') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'flex';
        }
    });
});


