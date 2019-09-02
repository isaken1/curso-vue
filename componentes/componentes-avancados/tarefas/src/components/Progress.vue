<template>
    <div class="progress-bar">
        <div class="progress" :style="{width: this.progress + '%'}"></div>
        <span class="progress-value">{{ this.progress }}%</span>
    </div>
</template>

<script>
export default {
    props: { progress: { type: Number, default: 0 } }
}
</script>

<style scoped>
    .progress-bar {
        position: relative;
        width: 80%;
        height: 30px;
        border: 1px solid #AAA;
        color: #FFF;
        border-radius: 8px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .progress-bar .progress {
        position: absolute;
        height: 100%;
        background-color: green;
        border-radius: 8px;
        align-self: flex-start;
    }

    .progress-bar .progress-value {
        font-size: 1.5rem;
        z-index: 1;
    }
</style>