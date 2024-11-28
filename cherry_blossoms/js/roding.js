
let opacity = 0;
const interval = 20; // 50ms 간격으로 변경
const step = 0.01; // 0.01씩 증가
const $bgElement = $('.bg');

function changeBackground() {
  if (opacity <= 1) {
    $bgElement.css('background', `rgba(255, 255, 255, ${opacity})`);
    opacity += step;
  } else {
    clearInterval(timer);
  }
}
const timer = setInterval(changeBackground, interval);



const $textContainer = $('#txt');
const texts = $textContainer.find('p').map(function () {
  return $(this).text();
}).get();
$textContainer.empty();
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 80;
const startDelay = 1000;

function typeText() {
  if (textIndex < texts.length) {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      if ($textContainer.children().length <= textIndex) {
        const $newParagraph = $('<p></p>');
        $textContainer.append($newParagraph);
      }
      $textContainer.children().eq(textIndex).append(currentText.charAt(charIndex));
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      charIndex = 0;
      textIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }
}

setTimeout(typeText, startDelay); // 처음 타이핑 효과 시작을 지연
