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
import TaskCard from './Task'
import bus from '@/bus'

export default {
    components: { TaskCard },
    props: { 
        tasks: Array,
        stateChangedCallback: Function
    },
}
</script>

<style>

    #no-tasks {
        font-size: 1.5rem;
        color: #AAA;
    }

    .task-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

</style>