<template>
  <div class="hero d-flex align-items-center" id="home">
          <div class="container">
              <div class="row">
                  <div class="col-lg-7 mx-auto text-center">
                      <h1 class="display-4 text-white">Ariadna Scordo Handmade</h1>
                      <p class="text-white my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quia
                          sequi eius. Quas, totam aliquid. Repudiandae reiciendis vel excepturi ipsa voluptate dicta!</p>
                      <router-link class="btn me-2 btn-primary" to="/catalog">Catalog</router-link>
                      <router-link class="btn btn-outline-light" to="/customorder">Custom Order</router-link>
                  </div>
              </div>
          </div>
  </div><!-- //HERO -->
</template>

<script>
export default {

}
</script>

<style scoped>

.hero {
    background-image: url('http://localhost:5000/images/assorted.jpeg');
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(43, 2, 38, 0.55);
    z-index: -1;
}

.hero::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(43, 2, 38, 0.55);
    z-index: -1;
}
</style>