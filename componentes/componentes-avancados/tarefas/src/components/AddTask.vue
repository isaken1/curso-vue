<template>
    <div class="wrapper">
        <input v-model="taskDescription" class="form-element" type="text" 
            placeholder="Adicionar atividade" @keydown.enter="addTask">
        <button @click="addTask" class="form-element">+</button>
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
        addTask() {
            bus.addTask({ description: this.taskDescription, isDone: false })
            this.taskDescription = ''
        }
    }
}
</script>

<style>
    .wrapper {
        margin: 35px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    input.form-element {
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element{
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

</style>