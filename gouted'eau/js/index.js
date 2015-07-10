$(document).ready(function() {
    $(".button-floating").click(function() {
        var $wrapper = $("#wrapper");

        if (!$wrapper.hasClass("button-floating-clicked"))
        {
            $wrapper.attr("class", "center");
            $wrapper.toggleClass("button-floating-clicked-out");
        }

        $wrapper.toggleClass("button-floating-clicked");

        $(".button-sub").click(function() {
            var color = $(this).data("color");

            $wrapper.attr("class", "center button-floating-clicked button-floating-clicked-out");
            $wrapper.addClass("button-sub-" + color + "-clicked");
        });
    });
});