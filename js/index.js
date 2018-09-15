

function showSubnav() {
	$(this).addClass('open');
	$('.m-sub-menu').addClass('left1');
	$('.all_wrap,.m_header').addClass('left1');
}
function hideSubnav() {
	$('.m-sub-menu').removeClass('left1');
	$('.all_wrap,.m_header').removeClass('left1');
}

$('.navh').on("click", function () {
	var _this = $(this);
	var that = $('.navh').parent('li');
	if (_this.hasClass('open')) {
		_this.removeClass('open');
		_this.next('dl').stop(true, true).slideUp();
	} else {
		that.find('.navh').removeClass('open');
		_this.addClass('open');
		that.find('dl').stop(true, true).slideUp();
		_this.next('dl').stop(true, true).slideDown();
	}
})