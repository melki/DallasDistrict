$(document).ready(function()
{
    var afterLoad = function(anchorLink, index)
    {
        $('.section.active .slide-content *').css('visibility', 'visible');

        if(index === 1)
        {
            $('#slide-one .slide-content *').velocity('transition.slideUpBigIn', {stagger : 250});
        }

        if(index === 2)
        {
            $('#slide-two .slide-content *').velocity('transition.bounceLeftIn');
        }

        if(index === 3)
        {
            $('#slide-three .slide-content .chapter-title').velocity('transition.slideDownBigIn');
            $('#slide-three .slide-content .chapter-title-line').velocity('transition.expandIn');
        }

        if(index === 4)
        {
            $('#slide-four .slide-content .description-unit').velocity('transition.bounceLeftIn');
            $('#slide-four .slide-content #map').velocity('transition.flipXIn');
            go();
        }
    };

    var onLeave = function(index, nextIndex, direction)
    {
        if(direction === 'down')
        {
            $('.section.active').next().find('.slide-content *').css('visibility', 'hidden');
        }
        else
        {
            $('.section.active').prev().find('.slide-content *').css('visibility', 'hidden');
        }
    };

    var fullPageOptions = 
    {
        afterLoad,
        onLeave
    };

    $('#fullpage').fullpage(fullPageOptions);
});