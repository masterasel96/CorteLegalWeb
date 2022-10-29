import $ from 'jquery'
import { main } from './main'
import '../styles/home.css'

export const home = {
    elements: {
        arrows: []
    },

    navName: 'home',
    title: 'Inicio', 

    init: function() {
        home.initElements()
        home.initScrollEvent()
    },

    initElements: function() {
        home.elements.arrows = $('.arrow')
    },

    initScrollEvent: function() {
        home.controlArrowsAnimation()
        $(document).on('scroll', _ => home.controlArrowsAnimation())
    },

    controlArrowsAnimation: function() {
        home.elements.arrows.each((c, arrow) => {
            !$(arrow).hasClass('active') 
            && main.checkPointOfView(arrow)
            && $(arrow).addClass('active')
        });
    }
}