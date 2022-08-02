$(function () {

	$("#toggle-btn").click(function () {
		$("#main-header nav").toggleClass("on");
	});

	// 모달창
	//열기
	$('#main-section2 .youtube').click(function () {
		$('.modal').addClass('on')
	});

	//닫기
	$('.box .btn-close').click(function () {
		$('.modal').removeClass('on')
	});

}); // $


// 이미지 및 콘텐츠 로딩 채크
window.onload = function() {
	// AOS 초기화
	AOS.init();
}