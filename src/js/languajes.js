import * as spanish from '../languajes/spanish'
import * as english from '../languajes/english'
import * as french from '../languajes/french'

import Mustache from 'mustache'

export const languajes = {
    es_ES: 'es_ES',
    en_EN: 'en_EN',
    fr_FR: 'fr_FR',

    render: (elementId, component) => {
        const content = document.getElementById(elementId)
        const texts = languajes.getTexts(component)

        content.innerHTML = Mustache.render(content.innerHTML, texts)
    },

    getTexts: (component) => {
        const languaje = languajes.getLanguaje()

        switch (languaje) {
            case languajes.es_ES:
                return spanish[component]
            case languajes.en_EN:
                return english[component]
            case languajes.fr_FR:
                return french[component]
            default:
                return spanish[component]
        }
    },

    getLanguaje: () => languajes.es_ES // TODO: Get languaje from cookie
}