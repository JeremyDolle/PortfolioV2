function scrollFooter(scrollY, heightFooter)
{
    if(scrollY >= heightFooter)
    {
        $('#more').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('#more').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}
