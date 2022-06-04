$(document).ready(() => {
// this event handler will be triggered when a user mouses over the .menu element class that 
// shows all nav-menu items.

$('.menu').on('mouseenter', () => {
    $('.nav-menu').show();

})

// hiding the nav-menu when a user moves the mouse away from the nav-menu element

$('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
})

// adding the .btn-hover class to .btn elements when a user mouses 
// over a .btn element which will turn from white to green
$('.btn').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('btn-hover')
}).on('mouseleave', event => { // when a user moves away from the button, it will turn back to white
    $(event.currentTarget).removeClass('btn-hover')
})

// Limit a User's Post to 140 Characters
// declare a variable called post and set it
// equal to $(event.currentTarget).val(). 
$('.postText').on('keyup', (event) => {
    $('.postText').focus()
    const post = $(event.currentTarget).val();
    const remaining = 140 - post.length;
    $('.characters').html(remaining)
    if (remaining <= 0) {
        $('.wordcount').addClass('red')
    } else {
        $('.wordcount').removeClass('red')
    }   
})

});  // end of ready method