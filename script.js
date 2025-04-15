const images = document.querySelectorAll('.projectItem');
const popupbox = document.querySelector('.popup');

images.forEach(projectItem => {
      projectItem.addEventListener("click", () => {
          popupbox.style.display = "flex";
      });
    
  });


