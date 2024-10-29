<template>
    <h1>Prova Api</h1>
    <div>
        <h2>Posts</h2>
        <div v-for="post in posts" :key="post.id">
            <h3>Id: {{ post.id }} - {{ post.title }}</h3>
            <p> {{ post.body }} </p>
        </div>
    </div>
    <div>
        <h2>Fotos</h2>
        <div v-for="foto in fotos" :key="foto.id">
            <h3>Id: {{ foto.id }} - {{ foto.title }}</h3>
            <img v-bind:src="foto.url">
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import axios from 'axios'

    //inicialitzem posts en array buida
    const posts = ref([])
    //api en funcio async/await en axios
//    onMounted( async () => {
//        try{
//            const resultat = await axios.get('https://jsonplaceholder.typicode.com/posts')
//            //mostrem dades per consola
//            console.log(resultat.data)
//            //guardem resultat del json a la variable
//            posts.value = resultat.data
//        } catch {
//            console.log('Error')
//        }
//    })

    //api en fetch
    onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                posts.value = data
                console.log(posts.value)
            })
            .catch(error => console.log('Error:', error))
    })

    //inicialitzem posts en array buida
    const fotos = ref([])

    onMounted( async () => {
        try {
            const resultat = await axios.get('https://jsonplaceholder.typicode.com/photos')
            console.log(resultat.data)
            fotos.value = resultat.data
        } catch (error) {
            console.log('Error')
        }
    })

</script>