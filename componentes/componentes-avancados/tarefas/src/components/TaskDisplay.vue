<template>
    <div class="task-wrapper">
        <p id="no-tasks" v-if="tasks.length == 0">Não há atividades</p>
        <div class="task" :class="task.feita ? 'finalizada' : 'por-fazer'" 
                v-else v-for="task in tasks" :key="task.description">

            <p>{{ task.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: []
        }
    }
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

    .task-wrapper .task {
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

    .por-fazer {
        border-left: 10px solid darkred;
        background-color: red;
    }

    .finalizada {
        border-left: 10px solid darkgreen;
        background-color: green;
        text-decoration: line-through;
    }

</style>