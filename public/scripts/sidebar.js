$(document).on('click', '.sidebar-item', function () {
    $('.sidebar-item').each(function() {
        $(this).removeClass("active");
    });
    $(this).toggleClass( "active" );
});

function checkSite(){
    $('.sidebar-item').each(function() {
        $(this).removeClass("active");
    });
    var sidebar = $( '.sidebar-list' ).first();
    $('.sidebar-item').each(function(){
        if($(this).attr('href')==window.location.pathname)
            $(this).toggleClass( "active" );
    });
}