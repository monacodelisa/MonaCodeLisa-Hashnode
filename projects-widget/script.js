const projectsContainer = document.querySelector(".projects-container");
const projectsGallery = document.querySelector(".projects-gallery");
const projectsMain = document.querySelector(".projects-main");
const mainImg = document.querySelector(".main-img");
const mainLink = document.createElement("div");
const threeGridImg = document.querySelectorAll(".three-grid");
const threeGridLinks = document.querySelectorAll(".three-grid-links");

let link = document.createElement("a");
link.href = "https://www.example.com";
link.innerHTML = "Go to Example.com";

projectsContainer.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;")

projectsMain.setAttribute("style", "display: flex; justify-content: center; align-items: center;")

projectsGallery.setAttribute("style", "display: flex; justify-content: center; align-items: center;")

// Main Image

mainImg.style.cssText = "width: 50%; margin: auto; border-radius: 1rem; position: relative"

mainLink.classList.add("main-link");

mainImg.addEventListener("mouseover", function() {
	mainImg.appendChild(mainLink);
	mainLink.style.cssText = "width: 5rem; height: 5rem; background-color: grey; color: white; position: absolute"
	mainLink.innerText = "Hello";
});

mainImg.addEventListener("mouseout", function() {
    mainImg.removeChild(mainLink);
});


// Gallery Images

threeGridLinks.forEach(link => {
	link.style.cssText = "margin: 0 1rem;"
})

threeGridImg.forEach(image => {
	image.style.cssText = "width: 100%; margin: 0 1rem; border-radius: 1rem;"
})

// social.style.cssText = "margin-bottom: 1.5rem;"
