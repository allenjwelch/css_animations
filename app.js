const textSpans = $('span');
const windowHeight = $(window).height();
let scrollUp;

// console.log(textSpans);
// console.log($(textSpans[0]).position());
// console.log(windowHeight);

$(window).on('scroll', function() {
	this.oldScroll > this.scrollY ? scrollUp = true : scrollUp = false;
	this.oldScroll = this.scrollY;
	let windowTop = $(window).scrollTop();
	let windowMid = windowTop + (windowHeight / 2);

	// console.log('scrolling...');
	// console.log('scrollUp: ' + scrollUp)
	// console.log(windowMid);
	// console.log(windowTop);

	checkActive(windowTop, windowMid, scrollUp);
})

function checkActive(windowTop, windowMid, scrollUp) {
	for (i = 0; i < textSpans.length; i++) {
		if (windowMid >= $(textSpans[i]).position().top && !scrollUp) {
			$(textSpans[i]).addClass("active");
		} else if (windowMid <= $(textSpans[i]).position().top && scrollUp) {
			$(textSpans[i]).addClass("active");
		} else if (windowTop > $(textSpans[i]).position().top || windowTop + windowHeight < $(textSpans[i]).position().top) {
			$(textSpans[i]).removeClass("active");
		}
	}
}
