const elements = {
    buttons: {
        menu: $('#menuHamburguer'),
        query: $('#makeQueryBtn')
    },
    elements: {
        arrows: $('.arrow'),
        veil: $('#veil'),
        navbar: $('#mainNavbar')
    },

    init: function() {
        this.initButtons()
        this.initScrollEvent()
        this.initQueryButton()
    },

    initQueryButton: function() {
        this.buttons.query.click(_ => window.location.href = '../pages/contact.html')
    },
    
    initButtons: function() {
        this.buttons.menu.click(_ => {
            this.elements.veil.height(window.offsetTop).resize()
            this.elements.veil.toggle()
            $('body').toggleClass('veil')
        })
    },

    initScrollEvent: function() {
        this.controlArrowsAnimation()
        this.controlNavbar()
        $(document).scroll(_ => {
            this.controlArrowsAnimation()
            this.controlNavbar()
        })
    },

    controlArrowsAnimation: function() {
        this.elements.arrows.each((c, arrow) => {
            !$(arrow).hasClass('active') 
            && window.innerHeight + window.scrollY - 50 > arrow.offsetTop 
            && $(arrow).addClass('active')
        });
    },

    controlNavbar: function() {
        window.scrollY > 0 && this.elements.navbar.addClass('sticky-active')
        window.scrollY == 0 && this.elements.navbar.removeClass('sticky-active')
    }
}

$(document).ready(_ => elements.init())