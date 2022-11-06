import * as spanish from '../languajes/spanish'
import * as english from '../languajes/english'
import * as french from '../languajes/french'

import Mustache from 'mustache'
import Cookies from 'js-cookie'

export const languajes = {
    es_ES: 'es_ES',
    en_EN: 'en_EN',
    fr_FR: 'fr_FR',

    render: (component, name) => Mustache.render(component, languajes.getTexts(name)),

    getTexts: (name) => {
        const languaje = languajes.getLanguaje()

        switch (languaje) {
            case languajes.es_ES:
                return spanish[name]
            case languajes.en_EN:
                return english[name]
            case languajes.fr_FR:
                return french[name]
            default:
                return spanish[name]
        }
    },

    getLanguaje: () => Cookies.get('languaje') ?? languajes.es_ES
}