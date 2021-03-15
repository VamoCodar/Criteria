function verificacaoSlides() {
    let carouselItems = "auto";

    const swiperWrapper = document.querySelector(".descricao .swiper-wrapper")

    const swiperContainer = document.querySelector(".descricao .swiper-container");

    if (swiperWrapper.children.length === 0) {
        swiperContainer.style.display = "none"
    } else if (swiperWrapper.children.length === 1) {
        let carouselItems = 1;

    } else if (swiperWrapper.children.length >= 2) {
        let carouselItems = 2;
        document.body.classList.add("carousel__cheio")

    }


    var swiper = new Swiper(".swiper-container", {
        slidesPerView: carouselItems,
        spaceBetween: 10,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
    console.log(swiperWrapper.children.length);
}
verificacaoSlides()