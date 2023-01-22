const projectsContainer = document.querySelector(".projects-container");
const projectsGallery = document.querySelector(".projects-gallery");
const projectsMain = document.querySelector(".projects-main");
const mainImgWrapper = document.querySelector(".main-image-wrapper");
const mainImg = document.querySelector(".main-img");
const mainImgCaption = document.querySelector(".main-img-caption");
const threeGridImg = document.querySelectorAll(".three-grid");
const threeGridLinks = document.querySelectorAll(".three-grid-links");

const headings = document.querySelectorAll("h1");
const links = document.querySelectorAll("a");

let link = document.createElement("a");
link.href = "https://www.example.com";
link.innerHTML = "Go to Example.com";

projectsContainer.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;")

projectsMain.setAttribute("style", "display: flex; justify-content: center; align-items: center;")

projectsGallery.setAttribute("style", "display: flex; justify-content: center; align-items: center;")

// Main Image

mainImgWrapper.style.cssText = "width: 45vw; min-height: 55vh; margin: auto;position: relative;"

mainImg.style.cssText = "width: 100%; margin-bottom: 2rem; border-radius: 1rem;"

mainImgWrapper.addEventListener("mouseover", function() {
    mainImgCaption.style.cssText = "position: absolute; top: 20%; left: 0; width: 100%; height: 50%; overflow: hidden; background-color: #373737a8; color: white; font-size: 1.3rem; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer"
});

mainImgWrapper.addEventListener("mouseout", function() {
    mainImgCaption.style.cssText = "display: none" 
});


//General Styles
headings.forEach(heading => {
	heading.style.cssText = "margin: 0; font-family: 'Ubuntu', sans-serif;"
})

links.forEach(link => {
	link.style.cssText = "color: white"
})
// Gallery Images

threeGridLinks.forEach(link => {
	link.style.cssText = "margin: 0 1rem;"
})

threeGridImg.forEach(image => {
	image.style.cssText = "width: 100%; margin: 0 1rem; border-radius: 1rem;"
})


// social.style.cssText = "margin-bottom: 1.5rem;"
