const subBtn = document.querySelector(".submitBtn");
const OkBtn = document.querySelector(".okBtn");
const popUp = document.querySelector(".pop-up");

subBtn.addEventListener("click" , () => {
    popUp.classList.add("pop-up-open");
    popUp.classList.add("active");
    subBtn.style.display = "none";
})

OkBtn.addEventListener("click" , () =>{
    popUp.classList.remove("pop-up-open");
    subBtn.style.display = "block";
})