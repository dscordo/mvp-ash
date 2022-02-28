<template>
   <div class="App">
     <div class="container">
     <h1>Ariadna Scordo Handmade</h1>
     
        <Navbar />

        <main class="container">
            <router-view></router-view>
        </main>
        </div>
        
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';


export default {
name: "app",
components: {
  Navbar
},

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

h1, h2 {
  font-family: 'Sacramento', cursive;
}


body {
  background-color: pink;
  color: white;
  font-family:  Georgia, serif;
}

 
</style>
