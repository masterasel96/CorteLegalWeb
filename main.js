const elements = {
    buttons: {
        primary: $('.btn-primary')
    },
    
    initButtons: function() {
        
    },

    initScrollEvent: function() {
        $('.arrow').each((c, arrow) => {
            !$(arrow).hasClass('active') 
            && window.innerHeight + window.scrollY - 50 > arrow.offsetTop 
            && $(arrow).addClass('active')
        });
        $(document).scroll(_ => {
            $('.arrow').each((c, arrow) => {
                !$(arrow).hasClass('active') 
                && window.innerHeight + window.scrollY > arrow.offsetTop 
                && $(arrow).addClass('active')
            });
        })
        
    }
}

$(document).ready(() => elements.initScrollEvent());