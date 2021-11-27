$(document).ready(function () {
    $(function () {
        var isIE = false || !!document.documentMode;

        if (isIE) {
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "css/ie.min.css";
            head.appendChild(link);
        }
    });
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