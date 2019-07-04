new Vue({
    el: '#app',
    data: {
        running: false,
        playerHp: 100,
        monsterHp: 100,
        logs: []
    }, 
    computed: {
        hasResult() {
            return this.playerHp == 0 || this.monsterHp == 0
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerHp = 100
            this.monsterHp = 100
            this.logs = []
        },
        attack(special) {
            this.causeDamage('playerHp', 7, 12, false, 'Jogador', 'Monstro', 'player')

            if (this.monsterHp > 0)
                this.causeDamage('monsterHp', 5, 10, special,'Monstro', 'Jogador', 'monster')
        },
        causeDamage(atr, min, max, special, source, target, style) {
            const sum = special ? 5 : 0
            const damage = this.rdn(min + sum, max + sum)
            this[atr] = Math.max(this[atr] - damage, 0)
            this.registerLog(`${source} atingiu o ${target} com ${damage} de dano.`, style)
        },
        rdn(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        healAndDamage() {
            this.heal(10,15)
            this.causeDamage('playerHp', 7, 12, false, 'Monstro', 'Jogador', 'monster')
        },
        heal(min, max) {
            const heal = this.rdn(min, max)
            this.playerHp = Math.min(this.playerHp + heal, 100)
            this.registerLog(`Jogador se curou com ${heal} de HP.`, 'player')
        },
        registerLog(text, style){
            this.logs.unshift({ text, style })
        }
    },
})