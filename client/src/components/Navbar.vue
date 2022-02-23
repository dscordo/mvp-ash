<template>
  <nav>
      <div class="navbar navbar-expand-md navbar-dark">


    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link home" to="/">Home</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/catalog">Catalog</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/previouswork">Previous Work</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
        </ul>
    </div>
     </div>
  </nav>
</template>

<script>
export default {
name: 'Navbar'
}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(252, 178, 190);
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  font-family: 'Sacramento', cursive;
  font-size: 120%;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: palevioletred;
}
</style>