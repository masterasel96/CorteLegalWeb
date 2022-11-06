import $ from 'jquery'
import page from 'page'

import { languajes } from './languajes' 
import { main } from './main'
import component from '../components/navbar.html'
import '../styles/navbar.css'

export const navbar = {
    content: $('#navbar'),
    buttons: {
        menu: null,
        makeQuery: null
    },
    elements: {
        navbar: null,
        navs: null
    },

    init: function() {
        const content = languajes.render(component, 'navbar')
        navbar.content.html(content)
        navbar.initElements()
        navbar.initScrollEvent()
        navbar.initMenu()
        navbar.initRouters()
    },

    initElements: function() {
        navbar.buttons.menu = $('#menuHamburguer')
        navbar.buttons.makeQuery = $('#makeQueryBtn')
        navbar.elements.navbar = $('#navbar')
        navbar.elements.navs = $('.nav-link')
    },

    initScrollEvent: function() {
        navbar.controlNavbar()
        $(document).on('scroll', _ => navbar.controlNavbar())
    },

    initRouters: function() {
        navbar.buttons.makeQuery.click(_ => page.redirect('/contact'))
    },

    initMenu: function() {
        navbar.buttons.menu.click(_ => navbar.controlVeil())
        navbar.elements.navs.click((nav) => {
            !$(nav.target).hasClass('dropdown-toggle') &&
            navbar.buttons.menu.is(':visible') &&
            navbar.buttons.menu.trigger('click')
        }) 
        main.veil.on('click', _ => navbar.buttons.menu.trigger('click'))
    },

    controlNavbar: function() {
        window.scrollY > 0 && navbar.elements.navbar.addClass('sticky-active')
        window.scrollY == 0 && navbar.elements.navbar.removeClass('sticky-active')
    },

    controlVeil: function() {
        main.veil.height(window.offsetTop).trigger('resize')
        main.veil.toggle()
        $('body').toggleClass('veil')
    },

    setNav: (page) => {
        navbar.elements.navs && navbar.elements.navs.removeClass('active')
        $(`[data-nav=${page}]`) && $(`[data-nav=${page}]`).addClass('active')
    }
}