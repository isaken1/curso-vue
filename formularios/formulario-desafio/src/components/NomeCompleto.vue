<template>
    <div>
        <rotulo nome="Nome">
            <input type="text" @change="onChangeNome"
                placeholder="Primeiro nome">
        </rotulo>
        <rotulo nome="Sobrenome">
            <input type="text" @change="onChangeSobrenome"
                placeholder="Sobrenome">
        </rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    components: { Rotulo },
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

<style>

</style>