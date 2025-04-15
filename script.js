const images = document.querySelectorAll('.projectItem');
const popupbox = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');


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