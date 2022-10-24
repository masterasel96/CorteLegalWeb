import $ from 'jquery'
import component from '../components/footer.html'
import '../styles/footer.css'

export const footer = {
    content: $('#footer'),

    init: function() {
        footer.content.html(component)
    }
}