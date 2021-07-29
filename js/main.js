// 1. 풀페이지 스크롤
$(function () {
    $("#fullpage").fullpage({
        fingersonly: true, //모바일에서 터치로 넘길 수 있는 것
        anchors: [
            "firstPage",
            "secondPage",
            "thirdPage",
            "fourthPage",
            "fifthPage",
            "sixthPage",
            "seventhPage",
        ],
        menu: ".rightNav",
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                //두번째 페이지 카운트
                $(".count").counterUp({ delay: 10, time: 550 });
            }
            if (index == 3) {
                //세번째 페이지 카운트
                $(".count2").counterUp({ delay: 10, time: 550 });
            }
        },
    });
});

//3. 이미지슬라이드
$(function () {
    $(".visual").slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2800,
        pauseOnHover: false,
        pauseOnFocus: false,
        customPaging: function (slider, i) {
            var tit = $(slider.$slides[i]).find(".dot").html(); // html .dot 에 써준 내용을 dots에 넣을것임
            return '<div class="pager-tit" class=' + i + ">" + tit + "</div>";
        },
    });
});

//4. 이미지슬라이드 _ 넓이 높이 스크립트
$(function () {
    var winW = $(window).width(),
        winH = $(window).height(),
        list = $(".visual .list");
    list.css({ width: winW + "px", height: winH + "px" });
});
