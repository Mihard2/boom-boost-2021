const sliderBlock = document.querySelector('.slider');
if (sliderBlock) {
    const slider = new ChiefSlider('.slider', {
        loop: false
    });
}

const sliderControl = document.getElementById('slider-control');
const srollSlid_Wrap = document.querySelector('.scroll-slider__wrapp');
const scrollSlid_Width = srollSlid_Wrap.offsetWidth;
const scrollSlid_Scroll = srollSlid_Wrap.scrollWidth - scrollSlid_Width;
const srcollStep = scrollSlid_Scroll / 1000;

sliderControl.addEventListener('input', () => {
    srollSlid_Wrap.scrollLeft = sliderControl.value * 10 * srcollStep;
});

srollSlid_Wrap.addEventListener('scroll', ()=> {
    sliderControl.value = srollSlid_Wrap.scrollLeft / srcollStep / 10;
});