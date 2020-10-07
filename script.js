const closeButton = document.querySelector('.close-nav');

const openButton = document.querySelector('.open-nav');

const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 


//$(document).ready(function () {
//  $('.btn-send').click(function (event){
//     event.preventDefault()
//        console.log('Clicked button')
//      
//        var name = $('.subject').val()
//        var email = $('.email').val()
//        var message = $('message').val()
//        var statusElm = $('.status')
//        statusElm.empty
//    
//      
//      if (name.length > 1) {
//        statusElm.append('<div>Subject is valid</div>')
//        }else {
//        statusElm.append('<div>Subject is not valid</div>')
//      }
//      
//      
//      if (email.length > 5 && email.includes('@') && email.includes('.')){
//        statusElm.append('<div>Email is valid</div>')
//      }else {
//        statusElm.append('<div>Email is not valid</div>')
//      }
//      
//      
//      if (message.length >= 10) {
//          statusElm.append('<div>Message is valid</div>')
//      } else {
//          statusElm.append('<div>Message is not valid</div>')
//      }
//
//         }) 
//             }) 


function validateEmail(input) { 
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputText = document.getElementById("email");
    if(input.value.match(mailFormat)) {
        document.contact-form.email.focus();
        console.log("A valid password has been entered");
    } else {
        alert("You have entered an invalid email address!");
         document.contact-form.email.focus();
        return false;
    }
}

document.getElementById("submit").onclick = function() { 
    validateEmail(); 
}