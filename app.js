const slide = document.querySelectorAll(".heroimage");
let counter = 1;

slide.forEach((slide, index) => {
    slide.style.top = "0";
  slide.style.top = `${index * 180}%`; 
});

const slideImage = () => {
    slide.forEach((slide) => {
        if(window.innerWidth<=700){
            slide.style.transform = `translateY(-${(counter - 1) * 250}%)`;
        }
        else{
            slide.style.transform = `translateY(-${(counter-1) * 120}%)`;

        }
    });
};

const sliderGenerator = () => {
    setInterval(() => {
        counter++;
        console.log(counter)
        if (counter > 2) {
            counter = 1;
        }
        slideImage();
    }, 5000);
};

sliderGenerator();


//120 //200