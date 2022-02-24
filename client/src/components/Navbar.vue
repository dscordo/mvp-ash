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


li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  font-family: 'Sacramento', cursive;
  font-size: 150%;
  text-decoration: none;
}


li a:hover {
  background-color: palevioletred;
}
</style>