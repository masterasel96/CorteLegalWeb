const elements = {
    buttons: {
        menu: $('#menuHamburguer'),
        makeQuery: $('#makeQueryBtn'),
        makeContactRequest: $('#makeContactRequestBtn'),
    },
    elements: {
        arrows: $('.arrow'),
        veil: $('#veil'),
        navbar: $('#mainNavbar'),
        contactFormInputs: $('#contactForm input, #contactForm textarea')
    },
    toasts: {

    },

    init: function() {
        this.initScrollEvent()
        this.initMenuButton()
        this.initMakeQueryButton()
        this.initContactRequestButton()
        this.initContactRequestInputs()
        this.initToasts()
    },

    initMakeQueryButton: function() {
        this.buttons.makeQuery.click(_ => window.location.href = '../pages/contact.html')
    },
    
    initMenuButton: function() {
        this.buttons.menu.click(_ => {
            this.elements.veil.height(window.offsetTop).resize()
            this.elements.veil.toggle()
            $('body').toggleClass('veil')
        })
    },

    initContactRequestButton: function() {
        this.buttons.makeContactRequest.click(_ => this.validateContactForm() && this.sendContactRequest())
    },

    initContactRequestInputs: function() {
        this.elements.contactFormInputs.change(({ target }) => this.validateInput(target))
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
    },

    validateContactForm: function() {
        let valid = true
        this.elements.contactFormInputs.each((c, input) => {
            !input.checkValidity() && (valid = false)
            this.validateInput(input)
        })

        !valid && this.toasts.failValidationFormToast.show()

        return valid
    },

    validateInput: (input) => input.checkValidity() ? $(input).removeClass('not-valid') : $(input).addClass('not-valid'),

    sendContactRequest: async function () {
        this.loadingButton(this.buttons.makeContactRequest)
        // TODO: SEND EMAIL VIA API NODE
        await new Promise(r => setTimeout(r, 2000));
        this.loadingButton(this.buttons.makeContactRequest)
        this.toasts.successRequestToast.show()
        this.emptyForm()
    },

    loadingButton: function(button) {
        button.prop('disabled', !button.prop('disabled'));
        button.children().eq(0).toggleClass('d-none')
        button.children().eq(1).toggleClass('d-none')
    },
    
    initToasts: function() {
        this.toasts !== undefined && this.toasts !== null && 
            $('.toast').each((c, e) => this.toasts[e.id] = new bootstrap.Toast(e, { delay: 4000 }))
    },

    emptyForm: function() {
        this.elements.contactFormInputs.val('')
    }
}

$(document).ready(_ => elements.init())