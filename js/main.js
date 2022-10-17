export const main = {
    veil: $('#veil'),

    initToasts: (toasts) => $('.toast').each((c, e) => toasts[e.id] = new bootstrap.Toast(e, { delay: 4000 })),

    validateInput: (input) => input.checkValidity() ? $(input).removeClass('not-valid') : $(input).addClass('not-valid'),

    validateForm: function(inputs, failCallback, successCallback) {
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