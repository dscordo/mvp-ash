<template>
  <nav>
      <div class="navbar navbar-expand-md navbar-dark">

    <span class="navbar-brand">Ariadna Scordo Handmade</span>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

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

</style>