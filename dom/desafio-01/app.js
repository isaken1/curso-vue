new Vue({
    el: '#desafio',
    data: {
        nome: 'Isaac Kennedy',
        idade: 22,
        linkImagem: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/133845-games-review-the-witcher-3-wild-hunt-review-image1-07yik9ul5s.jpg'
    },
    methods: {
        rand: function() {
            return Math.random()
        }
    }
})