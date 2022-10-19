import { home } from './home.js'
import { contact } from './contact.js'
import { team } from './team.js'
import { navbar } from './navbar.js'

export const router = {
    content: $('#content'),

    init: () => {
        page('/', _ => router.route('home', 'Inicio', home))
        page('/contact', _ => router.route('contact', 'Contacto', contact))
        page('/team', _ => router.route('team', 'Equipo', team))
        page('*', _ => page.redirect('/'))
        page()
    },

    route: (component, title, { init }) => {
        router.content.load(`../components/${component}.html`, _ => init())
        navbar.setNav(component)
        router.setTitle(title)
    },

    setTitle: (title) => document.title = `CorteLegal | ${title}`
}