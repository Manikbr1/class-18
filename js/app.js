$(document).ready(function (){
        $('#hideBtn').click(function() {
            $('#know').hide();
        })
    
        $('#showBtn').click(function() {
            $('#know').show();
        })
        
        $('#toggleBtn').click(function() {
            $('#know').toggle('slow');
        })
        
    
        $('#fadeOut').click(function() {
            $('#output').fadeOut(4000);
        })
        $('#fadeIn').click(function() {
            $('#output').fadeIn(4000);
        })
    
        $('#fadeToggle').click(function() {
            $('#output').fadeToggle(3000);
        })
    
        $('#fadeTo').click(function() {
            $('#output').fadeTo(1000, .2);
        })
    
    
        $('#animate').click(function() {
            $('#output').animate({
                width: '600px'
            },5000);
        })
        $('#animateOf').click(function() {
            $('#output').stop();
        })
        
    })
