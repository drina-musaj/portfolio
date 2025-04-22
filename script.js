const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


const images = document.querySelectorAll('.projectItem');
const popupbox = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const modalInner = document.querySelector('.modal-inner');

const sendBtn = document.querySelector('.form-submit-btn');



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n=> n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


const projectImg = {
  project1: [
    'images/project-test1.jpg',
    'images/project-test2.jpg',
    'images/project-test3.jpg',
    'images/project-test4.jpg'
  ],
  project2: [
    'images/foodApp.png',
    'images/foodLanding.png'
  ],
  project3: [
    'images/schoolApp.png',
    'images/eduLanding.png'
  ],
  project4: [
    'images/project4Test1.jpg',
    'images/project4Test2.jpg',
    'images/project4Test3.jpg'
  ]
};


images.forEach(projectItem => {
      projectItem.addEventListener("click", () => {
        const projectKey = projectItem.getAttribute('data-image');
        const imgs = projectImg[projectKey];
    
        modalInner.innerHTML = '';
    
        imgs.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = 'project image';
          modalInner.appendChild(img);
        });
    
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
