<template>
    <div class="task-wrapper">
        <div v-for="task in tasks" :key="task">

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

</style>