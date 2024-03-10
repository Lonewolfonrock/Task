const slide = document.querySelectorAll(".Heroimage");
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
        console.log(counter);
        if (counter > 2) {
            counter = 1;
        }
        slideImage();
    }, 4000);
};

sliderGenerator();
//120 //200 // 250



const initialuser1 = document.querySelector(".users1");
const initialuser2 = document.querySelector(".users2");
const initialuser3 = document.querySelector(".users3");


moveSlider=(value)=>{

    const user1 = document.querySelector(".users1");
    const user2 = document.querySelector(".users2");
    const user3 = document.querySelector(".users3");
    

    if(value=='l'){
        var temp = user2.innerHTML;
        user2.innerHTML=user1.innerHTML;
        user1.innerHTML=temp;
    }
    else if(value=='r'){
        var temp =user2.innerHTML;
        user2.innerHTML=user3.innerHTML;
        user3.innerHTML=temp;
    }

}



