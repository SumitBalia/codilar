$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$('#footer-logo').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});