const btn = document.getElementById("submit");

const nameRegex = /^(?=.*[a-zA-Zא-ת]).{3,20}/;
const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const phoneRegex = /0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/;
const freeTextRegex = /^(?=.*[a-zA-Zא-ת]).{10,100}/;

const fNameMsg = document.getElementById("fNameMsg");
const lNameMsg = document.getElementById("lNameMsg");
const emailMsg = document.getElementById("emailMsg");
const phoneMsg = document.getElementById("phoneMsg");
const freeTextMsg = document.getElementById("freeTextMsg");

const check = (input) => {
    if (input.name === 'fName') {
        !nameRegex.test(input.value) ? input.setCustomValidity('name between 3-8 characters please') : input.setCustomValidity('');
        fNameMsg.textContent = input.validationMessage;
    }
    if (input.name === 'lName') {
        !nameRegex.test(input.value) ? input.setCustomValidity('name between 3-8 characters please') : input.setCustomValidity('');
        lNameMsg.textContent = input.validationMessage;
    }
    if (input.name === 'email') {
        !emailRegex.test(input.value) ? input.setCustomValidity('email must be a valid email address') : input.setCustomValidity('');
        emailMsg.textContent = input.validationMessage;
    }
    if (input.name === 'phone') {
        !phoneRegex.test(input.value) ? input.setCustomValidity('phone must be a valid israeli phone number') : input.setCustomValidity('');
        phoneMsg.textContent = input.validationMessage;
    }
    if (input.name === 'freeText') {
        !freeTextRegex.test(input.value) ? input.setCustomValidity('text between 10-100 characters please') : input.setCustomValidity('');
        freeTextMsg.textContent = input.validationMessage;
    }
    input.validity.valid ? input.style = 'border-color: gray' : input.style = 'border-color: rgb(226, 225, 225)'
}

btn.addEventListener("click", (e) => {
    let isValid = true;
    e.preventDefault();
    Object.entries(e.target.form).forEach(element => {
        console.log(element);
        if (!element[1].validity.valid) {
            isValid = false;
        }
    });
    if (isValid) {
        alert("thank you!");
        window.location.reload();
    } else alert("please fill all required fields correctly");
});