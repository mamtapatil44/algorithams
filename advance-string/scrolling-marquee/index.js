// 10. Circular Scrolling Marquee
// Implement a text marquee that repeats itself infinitely when scrolling.
// 🔹 Hint: Combine .repeat() and CSS animations


function scrollingMarquee(marqueTxt,count){
    return marqueTxt.repeat(count)
}
const repetedText = scrollingMarquee("testing test" ,10);
document.getElementById('marqueeText').textContent = repetedText;