<template>
   <div class="App">
     <div class="container">
     
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

h1 {
  display: flex;
  font-family: 'Sacramento', cursive;
  justify-content: center;
  align-items: center;
}


body {
  background-color: pink;
  color: white;
  font-family:  Georgia, serif;
  margin: 0;
}

h2 {
  display: flex;
  font-family: 'Sacramento', cursive;
  justify-content: center;
  align-items: center;
  padding:10px;
}

 
</style>
