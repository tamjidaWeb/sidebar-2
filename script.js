let btn= document.querySelector("#btn");
let sidebar= document.querySelector(".sidebar");
// let sidebar= document.querySelector(".sidebar");
btn.onclick = function(){
    sidebar.classList.toggle("collapsed");
}

console.log('connected');



const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// toggle style switcher

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

//  theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(colors) {
    alternateStyles.forEach((style) => {
        if (colors === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}




function showThankYouModal() {  
    // Display the modal  
    document.getElementById("thankYouModal").style.display = "block";  

    // Optionally, you can clear the form after displaying the modal  
    document.getElementById('name').value = '';  
    document.getElementById('email').value = '';  
    document.getElementById('subject').value = '';  
    document.getElementById('message').value = '';  
}  

function closeModal() {  
    document.getElementById("thankYouModal").style.display = "none";  
}  

// Close the modal if the user clicks outside of it  
window.onclick = function(event) {  
    const modal = document.getElementById("thankYouModal");  
    if (event.target == modal) {  
        closeModal();  
    }  
}  

//  theme light and dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});