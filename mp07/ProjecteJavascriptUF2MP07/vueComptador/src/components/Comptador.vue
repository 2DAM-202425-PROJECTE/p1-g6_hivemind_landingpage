<template>
    <div>
        <h1>Comptador: {{ comptador }}</h1>
        <Boto @click="incrementar">Incrementar</Boto>
        <Boto @click="decrementar">Decrementar</Boto>
    </div>
</template>

<script setup>
    //importem ref per a que sigui reactiu
    import { ref } from 'vue'; 
    //Importem component Boto
    import Boto from './Boto.vue';

    //inicialitzem a zero el comptador en ref
    const comptador = ref(0)

    //funcio per incrementar el comptador
    const incrementar = () => {
        //sumem 1 valor
        comptador.value++;
    };

     //funcio per decrementar el comptador
    const decrementar = () => {
        //restem 1 valor
        comptador.value--;
    };   
</script>