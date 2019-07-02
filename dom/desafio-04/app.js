new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		custom1: 'c1',
		custom2: 'c2',
		classeExemplo: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ?
					'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {

		}
	}
})
