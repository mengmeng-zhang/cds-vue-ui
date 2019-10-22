import Vue from 'vue'
import Icon from './package/icon'
import Dialog from './package/dialog';
import Tooltip from './package/tooltip';
// import Http from './src/http/http'

const components = [
    Icon,
    Dialog,
    Tooltip
]

const install = function(Vue){
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

install(Vue)

export default {
    version: '1.0.0',
    Icon,
    Dialog,
    Tooltip,
    // Http
}
