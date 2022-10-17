import { main } from './main.js'

export const contact = {
    buttons: {
        makeContactRequest: null
    },
    elements: {
        contactFormInputs: null
    },
    toasts: { },

    init: function() {
        contact.initElements()
        contact.initContactRequestButton()
        contact.initContactRequestInputs()
        main.initToasts(contact.toasts)
    },

    initElements: function() {
        contact.buttons.makeContactRequest = $('#makeContactRequestBtn')
        contact.elements.contactFormInputs = $('#contactForm input, #contactForm textarea')
    },

    initContactRequestButton: function() {
        contact.buttons.makeContactRequest.click(_ => main.validateForm(
            contact.elements.contactFormInputs, 
            contact.showFailValidation, 
            contact.sendContactRequest
        ))
    },

    initContactRequestInputs: function() {
        contact.elements.contactFormInputs.change(({ target }) => main.validateInput(target))
    },

    sendContactRequest: async function () {
        main.loadingButton(contact.buttons.makeContactRequest)
        // TODO: SEND EMAIL VIA API NODE
        await new Promise(r => setTimeout(r, 2000));
        main.loadingButton(contact.buttons.makeContactRequest)
        contact.toasts.successRequestToast.show()
        main.emptyForm(contact.elements.contactFormInputs)
    },

    showFailValidation: _ => contact.toasts.failValidationFormToast.show()
}