<template>
    <div class="nome-completo">
        <input type="text" @change="onChangeNome"
            placeholder="Primeiro nome">
        <input type="text" @change="onChangeSobrenome"
            placeholder="Sobrenome">
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        onChangeNome(event) {
            this.value.nome = event.target.value
            this.$emit('input', this.value)
        },
        onChangeSobrenome(event) {
            this.value.sobrenome = event.target.value
            this.$emit('input', this.value)
        }
    }
}
</script>

<style scoped>

    input, textarea, select {
        flex: 1;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 5px 10px;
        margin-right: 15px;
        align-self: stretch;
    }


    input:focus {
        border: 1px solid #BBB;
    }

    .nome-completo {
        display: flex;

        margin: 15px 0px;
        font-size: 1.4rem;
    }

</style>