$(document).ready(function () {
    /* Якорь */
    $("a[href='#about']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });

    $('.can-acc-item-button').on('click', function () {
        if (!$(this).next().hasClass('cii-active')) {
            $('.can-acc-item-button').next().removeClass('cii-active').slideUp(500);
            $(this).next().addClass('cii-active').slideDown(500);
        } else {
            $(this).next().removeClass('cii-active').slideUp(500);
        }
    });
    /*Конец документа*/
});