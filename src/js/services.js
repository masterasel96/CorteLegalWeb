import $ from 'jquery'
import { main } from "./main"
import '../styles/services.css'

export const services = {
    elements: null,

    name: 'services',
    title: 'Servicios',

    init: function() {
        services.initElements()
        services.initScrollEvent()
    },

    initElements: function() {
        services.elements = $('.services-text, .services-title, .services-list, .services-list-item')
    },

    initScrollEvent: function() {
        services.controlAnimations()
        $(document).on('scroll', _ => services.controlAnimations())
    },

    controlAnimations: function() {
        services.elements.each((c, element) => {
            !$(element).hasClass('active') 
            && main.checkPointOfView(element)
            && $(element).addClass('active')
        })
    }
}