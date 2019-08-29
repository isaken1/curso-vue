<template>
    <div class="wrapper">
        <input class="task-name" type="text" placeholder="Adicionar atividade">
        <button class="task-add">+</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .wrapper {
        margin: 50px;
        display: block;
        padding: 2px;
    }

    .wrapper .task-name {
        outline: none;
        font-size: 1.5rem;
        border: 1px solid #FFF;
        padding: 10px 15px 10px 15px;
        color: #FFF;
        width: 1000px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
    }

    .wrapper .task-add {
        outline: none;
        font-size: 1.5rem;
        border: 1px solid #FFF;
        padding: 10px 15px 10px 15px;
        color: #FFF;
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

</style>