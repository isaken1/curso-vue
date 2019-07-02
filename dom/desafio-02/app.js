new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar(event){
            alert('Está alertado!')
        },
        armazenarValor(event){
            this.valor = event.target.value
        }
    }
})