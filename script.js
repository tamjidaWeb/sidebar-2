let btn= document.querySelector("#btn");
let sidebar= document.querySelector(".sidebar");
// let sidebar= document.querySelector(".sidebar");
btn.onclick = function(){
    sidebar.classList.toggle("collapsed");
}

console.log('connected');
