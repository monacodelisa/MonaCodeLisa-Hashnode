const projectsContainer = document.querySelector(".projects-container");
const projectsGallery = document.querySelector(".projects-gallery");
const mainImgWrapper = document.querySelector(".main-image-wrapper");
const mainImgCaption = document.querySelector(".main-img-caption");
const threeGridWrapper = document.querySelectorAll(".three-grid-img-wrapper");
const threeGridImg = document.querySelectorAll(".three-grid");
const threeGridImgCaption = document.querySelectorAll(".three-grid-img-caption");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const links = document.querySelectorAll("a");
const paragraphs = document.querySelectorAll("p");


//Global Styles

projectsContainer.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;")

// carousel.setAttribute("style", "display: flex; justify-content: center; align-items: center; min-height: 10rem;")

h1.forEach(heading => {
	heading.style.cssText = "margin: 0; font-family: 'Ubuntu', sans-serif;"
});

h2.forEach(heading => {
	heading.style.cssText = "margin: 0; font-family: 'Ubuntu', sans-serif;"
}); 

links.forEach(link => {
	link.style.cssText = "color: white;"
});

paragraphs.forEach(p => {
	p.style.cssText = "color: white; font-family: 'Ubuntu', sans-serif; margin: 0.3rem 0 0;"
});


// Carousel
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel__button--right");
const prevBtn = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides nex to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide'); 
}

const updateDots = (currentDot, targetDot) => {    
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide')
}

const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');

    } else if (targetIndex === slides.length -1 ) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
}

// When I click left, move slides to the left
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
})

// When I click right, move slides to the right
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
})

// When I click the nav indicators move to corresponding slide
dotsNav.addEventListener('click', e => {
    // what indicator was clicked on
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
})

// Main Image

// mainImgWrapper.style.cssText = "width: 45vw; min-height: 55vh; margin: auto;position: relative;"

// mainImg.style.cssText = "width: 100%; margin-bottom: 2rem; border-radius: 1rem;"

// mainImgCaption.style.cssText = "display: none"

// mainImgWrapper.addEventListener("mouseover", function() {
//     mainImgCaption.style.cssText = "position: absolute; top: 20%; left: 0; width: 100%; height: 50%; overflow: hidden; background-color: #373737a8; color: white; font-size: 1.3rem; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer"
// });

// mainImgWrapper.addEventListener("mouseout", function() {
//     mainImgCaption.style.cssText = "display: none" 
// });


// Gallery Grid 

projectsGallery.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; align-items: center;")

threeGridWrapper.forEach(wrapper => {
	wrapper.style.cssText = "position: relative; width: 30%; margin: 1rem;"
})

threeGridImg.forEach(image => {
	image.style.cssText = "width: 100%; border-radius: 1rem;"
})

threeGridImgCaption.forEach(caption => {
	caption.style.cssText = "display: none"
})

threeGridWrapper.forEach((wrapper, index) => {
    wrapper.addEventListener("mouseover", function() {
        let imgCaption = threeGridImgCaption[index];
        imgCaption.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; background-color: #373737a8; color: white; font-size: 1.3rem; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 1rem; cursor: pointer;";
    });
});


threeGridWrapper.forEach((wrapper, index) => {
    wrapper.addEventListener("mouseout", function() {
        let imgCaption = threeGridImgCaption[index];
        imgCaption.style.cssText = "display: none;";
    });
});






