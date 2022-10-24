import $ from 'jquery'
import page from 'page'

import { home } from './home'
import { contact } from './contact'
import { team } from './team'
import { navbar } from './navbar'

import homeComponent from '../components/home.html'
import contactComponent from '../components/contact.html'
import teamComponent from '../components/team.html'

export const router = {
    content: $('#content'),

    init: () => {
        page('/', _ => router.route(homeComponent, home))
        page('/contact', _ => router.route(contactComponent, contact))
        page('/team', _ => router.route(teamComponent, team))
        page('*', _ => page.redirect('/'))
        page()
    },

    route: (component, { init, navName, title }) => {
        router.content.html(component)
        init()
        navbar.setNav(navName)
        router.setTitle(title)
    },

    setTitle: (title) => document.title = `CorteLegal | ${title}`
}