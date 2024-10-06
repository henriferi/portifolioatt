const nameContact = document.getElementById("nameContact");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const btnSubmit = document.getElementById("btn-submit");
const contactErrorName = document.getElementById("message-error-name");
const contactErrorEmail = document.getElementById("message-error-email");
const contactErrorSubject = document.getElementById("message-error-subject");
const contactErrorMessage = document.getElementById("message-error-message");



function init () {
    btnSubmit.addEventListener("click", () => {

        const formValidation = () => {
            const nameContactValue = nameContact.value; 
            const emailValue = email.value;
            const subjectValue = subject.value;
            const messageValue = message.value;
        
            if(nameContactValue === "") {
        
                contactErrorName.innerHTML = "Por favor informe seu nome";
        
            } else if (emailValue === "") {
                
                contactErrorEmail.innerHTML = "Por favor preencha seu email"
    
            } else if (subjectValue === "") {
    
                contactErrorSubject.innerHTML = "Por favor informe o assunto";
    
            } else if (messageValue === "") {
                
                contactErrorMessage.innerHTML = "Por favor deixe uma mensagem";
    
            } else {
                alert("Mensagem enviada, entrarei em contato!");
            }
        }
        return formValidation();
    })
}

init();



