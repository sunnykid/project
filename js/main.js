// ScrollMagic 사용
// 그 외 scrollreveal

const spyEls = document.querySelectorAll('section.scroll-spy');

const controller = new ScrollMagic.Controller();

spyEls.forEach(function (spyEl) {

  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 //화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl , 'show') //요소가 화면에 보이면 show 클래스 추가
  .addTo(controller);  // 컨트롤러에 장면을 할당(필수!)
});
// Swiper 사용
const swiper = new Swiper('.swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드
  loop: false, // 반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  autoplay: { //자동 재생 여부
    delay: 5000 //5초마다 슬라이드 바뀜
  },

  // 페이지네이션 옵션
  pagination: {
    el: '.swiper-pagination',
    clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 모달창 띄우기
const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('.project .btn-modal');
const closeBtn = document.querySelector('#modal .btn-close');

modalBtn.addEventListener('click' , function () {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  
});

const imageModal = document.querySelector('#imageModal');
const imageModalBtnList = document.querySelectorAll('.project .btn-modal-image');
const imageCloseBtn = document.querySelector('#imageModal .btn-close');
const imageEl = document.querySelector('#imageModal img');

imageModalBtnList.forEach(function (imageModalBtn) {
  imageModalBtn.addEventListener('click', function () {
    imageEl.src = imageModalBtn.dataset.imageSrc;
    imageModal.style.display = 'flex';
  });
});
imageCloseBtn.addEventListener('click', function () {
  imageModal.style.display = 'none';
});

// 모달 바깥 영역 클릭 시 닫기
modal.addEventListener('click',function (e) {
  console.log(e.target); // 현재 이벤트가 발생한 대상(사용자가 실제 클릭한 가장 안쪽 요소)
  console.log(e.currentTarget); //이벤트가 리스너가 붙은 요소 그 자체를 클릭한 경우만 실행

  if(e.target === e.currentTarget) { //이벤트 리스너가 붙은 요소 그 자체를 클릭한 경우만 실행
    modal.style.display = 'none';
  }
});

imageModal.addEventListener('click',function (e) {
  if(e.target === e.currentTarget) { //이벤트 리스너가 붙은 요소 그 자체를 클릭한 경우만 실행
    imageModal.style.display = 'none';
  }
});
// ESC 키로 닫기
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    imageModal.style.display = 'none';
    modal.style.display = 'none';
  }
});

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 각체를 활용
console.log(new Date().getFullYear());
const spanYaer = document.querySelector('.this-year');
spanYaer.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
const toTopEl = document.querySelector('#toTop');
// Quiz : visual 섹션 애니메이션 넣고/빼기
const visualSpanEls = document.querySelectorAll('.animate-flash')
// 페이지에 스크롤 이벤트 감지를 추가!
// 브라우저는 문서 전체의 스크롤을 window 기준으로 처리
window.addEventListener('scroll' , function () {
  // Y축 스크롤 감지
  if (window.scrollY >= 500) {
    toTopEl.style.transform = 'translateX(0px)';
    toTopEl.style.opacity = '1';
    // visual 섹션 애니메이션 클래스 빼기
    visualSpanEls.forEach(function (visualSpanEl) {
      visualSpanEl.classList.remove('animate-flash');
    });
  } else {
    toTopEl.style.transform = 'translateX(100px)';
    toTopEl.style.opacity = '0';
    // visual 섹션 애니메이션 클래스 넣기

      visualSpanEls.forEach(function (visualSpanEl) {
      visualSpanEl.classList.add('animate-flash');
      });
  }
});

const hamburgerBtn = document.querySelector('.btn-hamburger');
const navEl = document.querySelector('header nav')

hamburgerBtn.addEventListener('click' , function () {
  if (navEl.classList.contains('active')) {
    navEl.classList.remove('active');
  } else {
    navEl.classList.add('active');
  }
});

const listEls = document.querySelectorAll('header nav ul li a');

listEls.forEach(function (listEl) {
  listEl.addEventListener('click' , function () {
    navEl.classList.remove('active');
  });
});
