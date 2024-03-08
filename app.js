const slide = document.querySelectorAll(".heroimage");
let counter = 1;

slide.forEach((slide, index) => {
  slide.style.top = `${index * 180}%`; 
});

const slideImage = () => {
    const getTranslateY = (counter, windowWidth) => {
        switch (true) {
            case windowWidth < 500:
                return (counter - 1) * 270;
            case windowWidth < 830:
                return (counter - 1) * 220;
            case windowWidth < 1200:
                return (counter - 1) * 160;
            default:
                return (counter - 1) * 120;
        }
    };

    slide.forEach((slide) => {
        const translateY = getTranslateY(counter, window.innerWidth);
        slide.style.transform = `translateY(-${translateY}%)`;
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
    }, 4000);
};

sliderGenerator();
//120 //200 // 250


