<template>

    <div @click="$emit('taskStateChanged', value)" class="task" :class="this.value.isDone ? 'done' : 'todo'">
        <p>{{ this.value.description }}</p>
        <span id="deleteTask">x</span>
    </div>
  
</template>

<script>
import bus from '@/bus'
export default {
    props: { value: Object }
}
</script>

<style>

    .task {
        margin: 20px;
        position: relative;
        box-sizing: border-box;
        width: 300px;
        height: 100px;
        padding: 10px;
        border-radius: 8px;
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;
        justify-content: center;
        align-items: center;
    }

     .todo {
        border-left: 10px solid darkred;
        background-color: red;
    }

    .done {
        border-left: 10px solid darkgreen;
        background-color: green;
        text-decoration: line-through;
    }

    #deleteTask {
        position: absolute;
        top: 5px;
        right: 5px;
        height: 10px;
        width: 10px;
        font-size: 0.8rem;
        border-radius: 10px;
        background-color: darkred;
        display: flex;
        justify-content: center;
    }

</style>