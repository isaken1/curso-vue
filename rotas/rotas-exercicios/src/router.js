import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
// import Usuario from './components/usuarios/Usuario'
// import UsuarioLista from './components/usuarios/UsuarioLista'
// import UsuarioDetalhe from './components/usuarios/UsuarioDetalhe'
// import UsuarioEditar from './components/usuarios/UsuarioEditar'

import Menu from './components/templates/Menu'

Vue.use(Router)

const Usuario = () => import('./components/usuarios/Usuario')
const UsuarioEditar = () => import('./components/usuarios/UsuarioEditar')
const UsuarioLista = () => import('./components/usuarios/UsuarioLista')
const UsuarioDetalhe = () => import('./components/usuarios/UsuarioDetalhe')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
        path: '/',
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
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    console.log('Antes das rotas -> UsuarioDetalhe')
                    next()
                } },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    },
    {
        path: '/redirecionar', 
        redirect: '/usuario'
    }, 
    {
        path: '*', 
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('Antes das rotas -> global')
    next()
})

export default router