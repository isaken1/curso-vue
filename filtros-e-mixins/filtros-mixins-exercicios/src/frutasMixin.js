export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maça', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
    created() {
        console.log('Create dentro de frutas!')
    }
}