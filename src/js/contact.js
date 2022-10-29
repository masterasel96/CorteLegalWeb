import $ from 'jquery'
import { main } from './main'
import '../styles/contact.css'

export const contact = {
    buttons: {
        makeContactRequest: null
    },
    elements: {
        contactFormInputs: null
    },
    toasts: { },
    endpoints: {
        sendEmail: 'mail'
    },

    navName: 'contact',
    title: 'Contacto',

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
        const form = main.getForm(contact.elements.contactFormInputs)
        const response = await main.makePost(contact.endpoints.sendEmail, form)
        const success = main.handleResponse(response)
        main.loadingButton(contact.buttons.makeContactRequest)

        success ? contact.toasts.successRequestToast.show() : 
            contact.toasts.failValidationFormToast.show()

        main.emptyForm(contact.elements.contactFormInputs)
    }, 

    showFailValidation: _ => contact.toasts.failValidationFormToast.show()
}