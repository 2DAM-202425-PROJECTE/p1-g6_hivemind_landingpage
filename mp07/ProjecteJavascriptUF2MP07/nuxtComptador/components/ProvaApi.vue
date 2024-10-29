<template>
    <h1>Prova Api</h1>
    <div>
        <h2>Posts</h2>
        <div v-for="post in posts" :key="post.id">
            <h3>ID: {{ post.id }} - {{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>
<script setup>
   // import { axios } from 'axios';
    import { onMounted,ref } from 'vue';

    const posts = ref([])

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

    onMounted(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                posts.value = data
                console.log(posts.value)
            })
            .catch(error => console.log('Error:', error))
    })

</script>