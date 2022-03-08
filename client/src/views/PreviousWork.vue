<template> 
<div class="previous">
  <h2>- Previous work -</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
      <template v-for="p in proddata">
        <template v-if="p.status === 'sold'">
          <div class="col" :key="p.prodid">
            <div class="card h-100">
             <img :src="'http://localhost:5000/images/' + p.image" :alt="p.name" class="card-img-top, rounded">
              <div class="card-body">
      <h4 class="card-title" style="color: pink">{{ p.name }}</h4>
      
       <div class="card-subtitle mb-2 text-muted">{{ p.type }}</div>
        <div class="card-text" style="color: grey">{{ p.description }}</div>
        </div>
        </div>
       </div>
        </template>
      </template>
       </div>
  
  </div>
</template>

<script>
// if "status === 'sold'" - display name and description
import Api from '../helpers/Api';



export default {
name: "previouswork",
 
 data() {
    return {
      proddata: []
    };
  },
  async mounted() {
    let response = await Api.getProducts();
    if (response.ok) {
      this.proddata = response.data;
    } else {
      console.log('Error in Api.getProducts():', response.error);
    }
  },

  
}

</script>

<style>

</style>