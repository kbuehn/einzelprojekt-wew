import {formData} from './scripts/forms'
import {loadDogContent} from './scripts/dogs'
import './styles/bootstrap.min.css';
import './styles/style.scss';


//personalized greeting
const form = document.querySelector('form')!;
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formInput = formData(form);
        if (formInput.name !== "" && formInput.age !== "" && formInput.email !== "" && formInput.password !== "") {
            alert("Hello "+formInput.name+", i'm glad you entered your data so I can greet you");
        }
        else {
            alert("Wrong values, please fill in all data correctly.");
        }
    });
}


//validation
const htmlName = <HTMLInputElement>document.getElementById("name");
if (htmlName) {
    htmlName.addEventListener('blur', () => {
        if (htmlName.value.length === 0) {
            htmlName.style.borderColor = "blue";
            htmlName.style.border = "solid";
        } else {
            htmlName.style.border = "";
            htmlName.style.borderColor = "";
        }
    });
}

const htmlAge = <HTMLInputElement>document.getElementById("age");
if (htmlAge) {
    htmlAge.addEventListener('blur', () => {
        if (htmlAge.value.length === 0) {
            htmlAge.style.border = "solid";
            htmlAge.style.borderColor = "blue";
        } else {
            htmlAge.style.border = "";
            htmlAge.style.borderColor = "";
        }

    });
}
const htmlMail = <HTMLInputElement>document.getElementById("email");
if (htmlMail) {
    htmlMail.addEventListener('blur', () => {
        if (htmlMail.value.length === 0) {
            htmlMail.style.border = "solid";
            htmlMail.style.borderColor = "blue";
        } else {
            htmlMail.style.border = "";
            htmlMail.style.borderColor = "";
        }
    });
}
const htmlPassword = <HTMLInputElement>document.getElementById("pw");
if (htmlPassword) {
    htmlPassword.addEventListener('blur', () => {
        if (htmlPassword.value.length < 6) {
            htmlPassword.style.border = "solid";
            htmlPassword.style.borderColor = "blue";
        } else {
            htmlPassword.style.border = "";
            htmlPassword.style.borderColor = "";
        }
    });
}

/*
async function ajaxCall(callback: (fact: string) => any) {
    await fetch("https://catfact.ninja/fact?max_length=140").then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            // Examine the text in the response
            response.json().then((data) => {
                callback(data.fact)
            });
        });
}*/



