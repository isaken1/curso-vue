<template>
	<div id="app">
		<h1>Tarefas</h1>
		<Progress :progress="progress" />
		<TaskAdder />
		<TaskDisplay :tasks="this.tasks" :stateChangedCallback="changeTaskState" />
	</div>
</template>

<script>
import Progress from './components/Progress'
import TaskAdder from './components/AddTask'
import TaskDisplay from './components/TaskDisplay'
import bus from './bus'

export default {
	components: { Progress, TaskAdder, TaskDisplay },
	data() {
		return {
			tasks: []
		}
	}, 
	computed: {
		progress() {
			let completedTasks = this.tasks.filter((task) => task.isDone == 'false').length
			return (completedTasks / this.tasks.length)
		}
	},
	methods: {
		addTask(newTask) {
			if (this.tasks.filter(task => newTask.description === task.description).length == 0) {
				this.tasks.push(newTask)
			}
		},
		removeTask(index) {
			this.tasks.splice(i, 1)
		},
		changeTaskState(index) {
			this.tasks[index].isDone = !this.tasks[index].isDone
		}
	}, 
	created() {
		bus.onTaskAdded(this.addTask)
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
