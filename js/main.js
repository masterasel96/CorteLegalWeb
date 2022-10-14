const main = {
    buttons: {
        menu: $('#menuHamburguer'),
        makeQuery: $('#makeQueryBtn')
    },
    elements: {
        veil: $('#veil'),
        navbar: $('#mainNavbar')
    },

    init: function() {
        main.initScrollEvent()
        main.initMenuButton()
        main.initMakeQueryButton()
    },

    initScrollEvent: function() {
        main.controlNavbar()
        $(document).scroll(_ => main.controlNavbar())
    },

    initMakeQueryButton: function() {
        main.buttons.makeQuery.click(_ => window.location.href = '../pages/contact.html')
    },
    
    initMenuButton: function() {
        main.buttons.menu.click(_ => {
            main.elements.veil.height(window.offsetTop).resize()
            main.elements.veil.toggle()
            $('body').toggleClass('veil')
        })
    },

    controlNavbar: function() {
        window.scrollY > 0 && main.elements.navbar.addClass('sticky-active')
        window.scrollY == 0 && main.elements.navbar.removeClass('sticky-active')
    },

    initToasts: (toasts) => $('.toast').each((c, e) => toasts[e.id] = new bootstrap.Toast(e, { delay: 4000 })),

    validateInput: (input) => input.checkValidity() ? $(input).removeClass('not-valid') : $(input).addClass('not-valid'),

    validateContactForm: function(inputs, failCallback, successCallback) {
        let valid = true
        inputs.each((c, input) => {
            !input.checkValidity() && (valid = false)
            main.validateInput(input)
        })

        !valid && failCallback()

        valid && successCallback()
    },

    emptyForm: (inputs) => inputs.val(''),

    loadingButton: function(button) {
        button.prop('disabled', !button.prop('disabled'));
        button.children().eq(0).toggleClass('d-none')
        button.children().eq(1).toggleClass('d-none')
    }
}

$(document).ready(_ => main.init())