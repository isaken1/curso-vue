import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
import Usuario from './components/usuarios/Usuario'
import UsuarioLista from './components/usuarios/UsuarioLista'
import UsuarioDetalhe from './components/usuarios/UsuarioDetalhe'
import UsuarioEditar from './components/usuarios/UsuarioEditar'

import Menu from './components/templates/Menu'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        //component: Inicio,
        name: 'inicio',
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    }]
})
