import $ from 'jquery'
import { languajes } from './languajes' 
import component from '../templates/footer.html'
import '../styles/footer.css'

export const footer = {
    content: $('#footer'),

    init: function() {
        const content = languajes.render(component, 'footer')
        footer.content.html(content)
    }
}