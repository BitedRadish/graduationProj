// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper.innerHTML =  `<p class="ml3"><span class="letter" style="opacity: 1;">취</span><span class="letter" style="opacity: 1;">약</span> <span class="letter" style="opacity: 1;">계</span><span class="letter" style="opacity: 1;">층</span><span class="letter" style="opacity: 1;">이</span> <span class="letter" style="opacity: 1;">집</span> <span class="letter" style="opacity: 1;">근</span><span class="letter" style="opacity: 1;">처</span><span class="letter" style="opacity: 1;">에</span><span class="letter" style="opacity: 1;">서</span> <span class="letter hl" style="opacity: 1;">쉽</span><span class="letter hl" style="opacity: 1;">고</span> <span class="letter hl" style="opacity: 1;">빠</span><span class="letter hl" style="opacity: 1;">르</span><span class="letter hl" style="opacity: 1;">게</span> <br>
						
<span class="letter" style="opacity: 1;">자</span><span class="letter" style="opacity: 1;">신</span><span class="letter" style="opacity: 1;">이</span> <span class="letter" style="opacity: 1;">해</span><span class="letter" style="opacity: 1;">당</span><span class="letter" style="opacity: 1;">하</span><span class="letter" style="opacity: 1;">는</span> <span class="letter hl" style="opacity: 1;">복</span><span class="letter hl" style="opacity: 1;">지</span> <span class="letter hl" style="opacity: 1;">혜</span><span class="letter hl" style="opacity: 1;">택</span><span class="letter hl" style="opacity: 1;">을</span> <span class="letter hl" style="opacity: 1;">알</span><span class="letter hl" style="opacity: 1;">아</span><span class="letter hl" style="opacity: 1;">볼</span> <span class="letter hl" style="opacity: 1;">수</span> <span class="letter hl" style="opacity: 1;">있</span><span class="letter hl" style="opacity: 1;">다</span><span class="letter hl" style="opacity: 1;">면</span> <br>


<span class="letter" style="opacity: 1;">복</span><span class="letter" style="opacity: 1;">지</span> <span class="letter" style="opacity: 1;">사</span><span class="letter" style="opacity: 1;">각</span> <span class="letter" style="opacity: 1;">지</span><span class="letter" style="opacity: 1;">대</span><span class="letter" style="opacity: 1;">가</span> <span class="letter" style="opacity: 1;">줄</span><span class="letter" style="opacity: 1;">어</span><span class="letter" style="opacity: 1;">들</span><span class="letter" style="opacity: 1;">지</span> <span class="letter" style="opacity: 1;">않</span><span class="letter" style="opacity: 1;">을</span><span class="letter" style="opacity: 1;">까</span> <span class="letter" style="opacity: 1;">?</span>
</p>`
anime.timeline()
    .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 50 * (i+1)
})
