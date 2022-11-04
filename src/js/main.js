import $ from 'jquery'
import { Toast } from 'bootstrap'
import { API_KEY_VALUE, API_KEY_NAME, AUTH_NAME, AUTH_PASS, API_URL } from '../../environment'

export const main = {
    veil: $('#veil'),

    initToasts: (toasts) => $('.toast').each((c, e) => toasts[e.id] = new Toast(e, { delay: 4000 })),

    validateInput: (input) => input.checkValidity() ? $(input).removeClass('not-valid') : $(input).addClass('not-valid'),

    validateForm: function(inputs, failCallback, successCallback) {
        let valid = true
        inputs.each((c, input) => {
            !input.checkValidity() && (valid = false)
            main.validateInput(input)
        })

        valid ? successCallback() : failCallback()
    },

    getForm: (inputs) => {
        let form = {}
        inputs.each((c, input) => form[input.name] = input.value)
        return form
    },

    emptyForm: (inputs) => {
        inputs.val('')
        inputs.prop('checked', false)
    },

    loadingButton: function(button) {
        button.prop('disabled', !button.prop('disabled'))
        button.children().eq(0).toggleClass('d-none')
        button.children().eq(1).toggleClass('d-none')
    },

    checkPointOfView: (element) => window.innerHeight + window.scrollY - 50 > element.offsetTop,

    makePost: async (endpoint, data) => {
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": 'Basic ' + btoa(`${AUTH_NAME}:${AUTH_PASS}`)
            },
            
            body: JSON.stringify(data)
        }

        options.headers[API_KEY_NAME] = API_KEY_VALUE

        return fetch(`${API_URL}/${endpoint}`, options)
    },

    handleResponse: async response => response.status === 200 && (await response.json()).data.response 
}