const spanYaer = document.querySelector('.this-year');
spanYaer.textContent = new Date().getFullYear();


const AboutItems = document.querySelectorAll('.AboutItem');

window.document.addEventListener('scroll' , function () {
  if (window.scrollY >= 300 && window.scrollY <= 900) {
    AboutItems.forEach(function (AboutItem, index) {
      AboutItem.style.transform = 'translateY(0px)';
      AboutItem.style.opacity = '1';
      AboutItem.style.transitionDelay = `${(index+1)*0.1}s`
    });
  } else if (window.scrollY >= 900) {
    AboutItems.forEach(function (AboutItem) {
      AboutItem.style.transform = 'translateY(200px)';
      AboutItem.style.opacity = '0';
    });
  } else {
    AboutItems.forEach(function (AboutItem) {
      AboutItem.style.transform = 'translateY(200px)';
      AboutItem.style.opacity = '0';
    });
  }
});

const toTopEl = document.querySelector('#toTop');
const toDownEl = document.querySelector('#toDown');

window.document.addEventListener('scroll' , function () {
  if(window.scrollY >= 300) {
    toTopEl.style.opacity = '1';
    toTopEl.style.transform = 'translateX(0px)'
  } else {
    toTopEl.style.opacity = '0';
    toTopEl.style.transform = 'translateX(100px)'
  }

  if (window.scrollY >= 1800) {
    toDownEl.style.opacity = '0';
    toDownEl.style.transform = 'translateX(100px)'
  } else {
    toDownEl.style.opacity = '1';
    toDownEl.style.transform = 'translateX(0px)'
  }
});

toDownEl.addEventListener('click' , function () {
  window.scrollTo({
    top: document.body.scrollHeight
  });
})

const btnHtmlEl = document.querySelector('.skillLevel.HTML');

btnHtmlEl.addEventListener('click' , function () {
  const skillFillHtml = document.querySelector('.skill-fill.Html');
  const percentElHtml = document.querySelector('.percent.Html');
  const textHtml = percentElHtml.textContent
  skillFillHtml.style.width = textHtml;
  percentElHtml.style.display = 'inline';
});

const btnCssEl = document.querySelector('.skillLevel.CSS');

btnCssEl.addEventListener('click' , function () {
  const skillFillCss = document.querySelector('.skill-fill.Css');
  const percentElCss = document.querySelector('.percent.Css');
  const textCss = percentElCss.textContent;
  skillFillCss.style.width = textCss;
  percentElCss.style.display = 'inline';
});



const btnElJavaScript = document.querySelector('.skillLevel.JavaScript');

btnElJavaScript.addEventListener('click' , function () {
  const skillFillJavaScript = document.querySelector('.skill-fill.JavaScript');
  const percentElJavaScript = document.querySelector('.percent.JavaScript');
  const textJavaScript = percentElJavaScript.textContent;
  skillFillJavaScript.style.width = textJavaScript;
  percentElJavaScript.style.display = 'inline';
});

const btnElJava = document.querySelector('.skillLevel.Java');

btnElJava.addEventListener('click' , function () {
  const skillFillJava = document.querySelector('.skill-fill.Java');
  const percentElJava = document.querySelector('.percent.Java');
  const textJava = percentElJava.textContent;
  skillFillJava.style.width = textJava;
  percentElJava.style.display = 'inline';
});

const btnElC = document.querySelector('.skillLevel.C');

btnElC.addEventListener('click' , function () {
  const skillFillC = document.querySelector('.skill-fill.C');
  const percentElC = document.querySelector('.percent.C');
  const textC = percentElC.textContent;
  skillFillC.style.width = textC;
  percentElC.style.display = 'inline';
});