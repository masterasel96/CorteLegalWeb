import { main } from './main.js'

export const navbar = {
    content: $('#mainNavbar'),
    buttons: {
        menu: null,
        makeQuery: null
    },
    elements: {
        navbar: null,
        navs: null
    },

    init: async function() {
        navbar.content.load(
            `../components/navbar.html`,
            _ => {
                navbar.initElements()
                navbar.initScrollEvent()
                navbar.initMenuButton()
                navbar.initRouters()
            }
        )
    },

    initElements: function() {
        navbar.buttons.menu = $('#menuHamburguer')
        navbar.buttons.makeQuery = $('#makeQueryBtn')
        navbar.elements.navbar = $('#mainNavbar')
        navbar.elements.navs = $('.nav-link')
    },

    initScrollEvent: function() {
        navbar.controlNavbar()
        $(document).scroll(_ => navbar.controlNavbar())
    },

    initRouters: function() {
        navbar.buttons.makeQuery.click(_ => page.redirect('/contact'))
    },
    
    initMenuButton: function() {
        navbar.buttons.menu.click(_ => {
            main.veil.height(window.offsetTop).resize()
            main.veil.toggle()
            $('body').toggleClass('veil')
        })
    },

    controlNavbar: function() {
        window.scrollY > 0 && navbar.elements.navbar.addClass('sticky-active')
        window.scrollY == 0 && navbar.elements.navbar.removeClass('sticky-active')
    },

    setNav: (page) => {
        navbar.elements.navs && navbar.elements.navs.removeClass('active')
        $(`[data-nav=${page}]`) && $(`[data-nav=${page}]`).addClass('active')
    }
}