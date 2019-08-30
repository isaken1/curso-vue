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
        border: 2px solid #AAA;
        border-radius: 25px;
        text-align: center;
        overflow: hidden;
    }

    .progress-bar .progress {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        height: 100%;
        background-color: green;
        border-radius: 25px;
    }

    .progress-bar .progress-value {
        display: inline-block;
        position: relative;
        text-align: center;
        height: 100%;
        font-size: 1.5rem;
    }
</style>