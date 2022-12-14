// 스크롤시 숨기는 기능 // _.throttle(함수, 밀리세컨드단위시간추가)
badgeEl = document.querySelector('header .badges');
const toTopel = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        //배지 숨기기   
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 보이기
        gsap.to(toTopel, .2, {
            x: 0
        });
    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
           opacity: 1,
           display: 'block'
        });

        // 버튼 숨기기  
        gsap.to(toTopel, .2, {
            x: 100
        });
    }
}, 300));


toTopel.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


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


new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

// 공3개 상하 애니메이션
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5,2.5), {
        y: size,
        repeat: -1,
        yoyo:true,
        ease: Power1.easeInOut,
        delay: random(0,delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
        triggerHook : .8, //페이지 가장 위가 0, 가장아래가 1인데 그 사이를 훅으로 지정.      
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



