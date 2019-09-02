<template>

    <div @click="$emit('taskStateChanged', value)" class="task" :class="this.value.isDone ? 'done' : 'todo'">
        <p>{{ this.value.description }}</p>
        <span :class="this.value.isDone ? 'delete-done' : 'delete-todo'" 
            @click.stop="removeTask" id="deleteTask">x</span>
    </div>
  
</template>

<script>
import bus from '@/bus'
export default {
    props: { value: Object },
    methods: {
        removeTask() {
            bus.removeTask(this.value)
        }
    }
}
</script>

<style>

    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

     .todo {
        border-left: 12px solid darkred;
        background-color: red;
    }

    .done {
        border-left: 12px solid darkgreen;
        background-color: green;
        text-decoration: line-through;
        color: #DDD;
    }

    #deleteTask {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 20px;
        width: 20px;
        font-size: 0.9rem;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        font-weight: 500;
    }

    .delete-todo {
        background-color: darkred;
    }

    .delete-done {
        background-color: darkgreen;
    }

</style>