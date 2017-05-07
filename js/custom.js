jQuery(document).ready(function () {

    jQuery('.bxslider').bxSlider();

    jQuery("#menu-icon").on("click", function () {
        jQuery(".nav-menu").slideToggle();
    });
});