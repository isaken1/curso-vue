<template>
    <div class="task-wrapper">
        <p id="no-tasks" v-if="tasks.length == 0">Não há atividades.</p>
        <template v-else>
            <TaskCard v-for="(task, index) in this.tasks" :key="task.description" :value="task"
                @taskStateChanged="stateChangedCallback(index)"/> 
        </template>
    </div>
</template>

<script>
import TaskCard from './Task.vue'

export default {
    components: { TaskCard },
    props: { 
        tasks: { type: Array, required: true },
        stateChangedCallback: Function
    },
}
</script>

<style>

    #no-tasks {
        font-size: 1.7rem;
        color: #AAA;
    }

    .task-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-wrapper .task {
        margin: 10px;
    }

</style>