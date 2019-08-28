import Vue from 'vue'

export default new Vue({
    methods: {
        userChange(user) {
            this.$emit('userChanged', user)
        },
        onUserClicked(callback) {
            this.$on('userChanged', callback)
        }
    }
})