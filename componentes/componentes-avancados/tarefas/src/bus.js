import Vue from 'vue'

export default new Vue({
    methods: {
        addTask(task) {
            this.$emit('taskAdded', task)
        },
        onTaskAdded(callback) {
            this.$on('taskAdded', callback)
        },
        removeTask(task) {
            this.$emit('taskRemoved', task)
        },
        onTaskRemoved(callback) {
            this.$on('taskRemoved', callback)
        }
    }
})