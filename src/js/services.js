import $ from 'jquery'
import { main } from "./main"
import '../styles/services.css'

export const services = {
    elements: null,

    name: 'services',
    title: 'Servicios',

    init: function() {
        services.initElements()
    },

    initElements: function() {
        console.log('Init elements...')
    }
}