<template>
    <div class="wrapper">
        <input v-model="taskDescription" class="task-name" type="text" 
            placeholder="Adicionar atividade" @keydown.enter="addTask">
        <button @click="addTask" class="task-add">+</button>
    </div>
</template>

<script>
import bus from '@/bus'

export default {
    data() {
        return {
            taskDescription: ''
        }
    },
    methods: {
        addTask(task) {
            bus.addTask({ description: this.taskDescription, isDone: false })
        }
    }
}
</script>

<style>
    .wrapper {
        margin: 50px;
        display: block;
        padding: 2px;
    }

    .wrapper .task-name {
        outline: none;
        font-size: 1.5rem;
        border: 1px solid #FFF;
        padding: 10px 15px 10px 15px;
        color: #FFF;
        width: 1000px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
    }

    .wrapper .task-add {
        outline: none;
        font-size: 1.5rem;
        border: 1px solid #FFF;
        padding: 10px 15px 10px 15px;
        color: #FFF;
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

</style>