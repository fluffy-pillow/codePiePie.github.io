function toggleMenu() {
    $( "#open_menu_button" ).click(function() {
        $("#header_nav_wrapper").show();
        $("body").css({"overflow-y": "hidden"});
    });

    $( "#close_menu_button" ).click(function() {
        $("#header_nav_wrapper").hide();
        $("body").css({"overflow-y": "auto"});
    })
}

function rangeProgress() {


    if (/WebKit/.test(navigator.userAgent)) {
        $('.dep_summ_range').css(
            'background', '-webkit-linear-gradient(left, #000000 0%, #c4c4c4 100%)'
        );
    }

    $('.dep_summ_range').on('mouseenter', function () {
        let max_summ = parseInt($(this).attr("max"));

        $(this).on('input', function () {
            let summ = this.value;

            if (/WebKit/.test(navigator.userAgent)) {
                let percent = (100 / max_summ) * summ;

                let gradient = (percent > 50) ?
                    '-webkit-linear-gradient(left, #000000 ' + percent + '%, #c4c4c4 ' + (100 - percent) + '%)' :
                    '-webkit-linear-gradient(right, #c4c4c4 ' + (100 - percent) + '%, #000000 ' + percent + '%)';

                $(this).css(
                    'background', gradient
                );
            }
            $(this).parent().parent().find(".min_dep_summ").html(numberWithSpaces(summ + " р"));
        });
    });

}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


function initForm() {
    $('.dep_summ_range').val(100);
}


$(function() {
    toggleMenu();
    rangeProgress();
    initForm();
});