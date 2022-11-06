import $ from 'jquery'
import page from 'page'

import { languajes } from './languajes' 

import { home } from './home'
import { contact } from './contact'
import { team } from './team'
import { navbar } from './navbar'
import { footer } from './footer'

import homeTemplate from '../templates/home.html'
import contactTemplate from '../templates/contact.html'
import teamTemplate from '../templates/team.html'

export const router = {
    content: $('#content'),
    component: null,

    init: () => {
        page('/', _ => router.route(homeTemplate, home))
        page('/contact', _ => router.route(contactTemplate, contact))
        page('/team', _ => router.route(teamTemplate, team))
        page('*', _ => page.redirect('/'))
        page()
    },

    route: (template, { init, name, title }) => {
        const content = languajes.render(template, name)
        router.content.html(content)
        init()
        navbar.setNav(name)
        router.setTitle(title)
        router.setComponent(template, { init, name, title })
    },

    reload: ({ template, component } = router.component) => {
        router.route(template, component)
        navbar.init()
        footer.init()
    },

    setComponent: (template, { init, name, title }) =>
        router.component = { template, component: { init, name, title } },

    setTitle: (title) => document.title = `CorteLegal | ${title}`
}