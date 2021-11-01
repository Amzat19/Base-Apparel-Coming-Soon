const mailText = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', invalidText => {
    invalidText.preventDefault();

    const emailValue = mailText.value;

    if (!validateEmail(emailValue)) {
        form.classList.add('error')
    } else 
    {
        form.classList.remove('error');
    }
});


function validateEmail(email) {
    let correctEmail = /\w+@[a-z].[a-z]/;
    return correctEmail.test(email);

}