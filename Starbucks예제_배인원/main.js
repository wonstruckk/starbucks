// 통합검색 숨기고 보이기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    //logic
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 스크롤시 숨기는 기능 // _.throttle(함수, 밀리세컨드단위시간추가)
badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기   
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
           opacity: 1,
           display: 'block'
        });
    }
}, 300));


// FADE IN 나타내기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay:  (index + 1) * .7, //INDEX라함은 fade-in을가진클래스 0번부터 세는것을 말함,
        opacity: 1
    });
});

// SLIDE 동작시키기
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어
    },

    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');
    } else {
        //보이기
        promotionEl.classList.remove('hide');
    }
});