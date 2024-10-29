<template>
    <div>
        <h1>Comptador: {{ comptador }}</h1>
        <Boto @click="incrementar">Incrementar</Boto>
        <Boto @click="decrementar">Decrementar</Boto>
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    import Boto from './Boto.vue';

    const comptador = ref(0);

    const incrementar = () => {
        comptador.value++;
    }

    const decrementar = () => {
        comptador.value--;
    }

</script>
