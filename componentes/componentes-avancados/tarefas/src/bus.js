import Vue from 'vue'

export default new Vue({
    methods: {
        addTask(task) {
            this.$emit('taskAdded', task)
        },
        onTaskAdded(callback) {
            this.$on('taskAdded', callback)
        }
    }
})