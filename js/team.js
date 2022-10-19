import { main } from "./main.js"

export const team = {
    elements: null,

    init: function() {
        team.initElements()
        team.initScrollEvent()
    },

    initElements: function() {
        team.elements = $('.team-title, .team-text, .team-list-item')
    },

    initScrollEvent: function() {
        team.controlAnimations()
        $(document).scroll(_ => team.controlAnimations())
    },

    controlAnimations: function() {
        team.elements.each((c, element) => {
            !$(element).hasClass('active') 
            && main.checkPointOfView(element)
            && $(element).addClass('active')
        });
    }
}