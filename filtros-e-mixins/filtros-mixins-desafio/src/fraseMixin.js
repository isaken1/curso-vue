export default {
    computed: {
		fraseComVirgulas() {
			return this.frase.replace(/ /g, ',')
		},
		fraseComTamanhos() {
			return this.frase.split(' ').map(palavra => `${palavra} (${palavra.length})`).join(' ')
		}
	}
}