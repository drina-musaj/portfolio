const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


const images = document.querySelectorAll('.projectItem');
const popupbox = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

const sendBtn = document.querySelector('.form-submit-btn');



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n=> n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


images.forEach(projectItem => {
      projectItem.addEventListener("click", () => {
          popupbox.style.display = "flex";
      });
    
  });

  closeBtn.addEventListener("click", () => {
    popupbox.style.display = "none";
  });

  popupbox.addEventListener("click", (e) => {
    if (e.target === popupbox) {
      popupbox.style.display = "none";
    }
  });

  sendBtn.addEventListener("click", () =>{
    alert("Form Sent Sucessfully!");
  })
