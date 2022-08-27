const elements = {
    buttons: {
        menu: $('#menuHamburguer')
    },
    elements: {
        arrows: $('.arrow'),
        veil: $('#veil')
    },

    init: function() {
        this.initButtons()
        this.initScrollEvent()
    },
    
    initButtons: function() {
        this.buttons.menu.click(_ => {
            this.elements.veil.toggle()
            $('body').toggleClass('veil')
        })
    },

    initScrollEvent: function() {
        this.controlArrowsAnimation()
        $(document).scroll(_ => this.controlArrowsAnimation())
    },

    controlArrowsAnimation: function() {
        this.elements.arrows.each((c, arrow) => {
            !$(arrow).hasClass('active') 
            && window.innerHeight + window.scrollY - 50 > arrow.offsetTop 
            && $(arrow).addClass('active')
        });
    }
}

$(document).ready(_ => elements.init())