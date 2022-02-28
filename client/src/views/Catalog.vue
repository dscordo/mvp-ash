<template>
<div class="Catalog">
  <h2>Catalog</h2>
   <div class="row">
     <template v-for="p in proddata">
        <template v-if="p.status === 'available'">
       <div class="col-4" :key="p.prodid">
        <div class="card">
          <img :src="p.image" :alt="name" class="card-img-top, rounded">
           <div class="card-body">
      <h4 class="card-title" style="color: pink">{{ p.name }}</h4>
      
       <div class="card-subtitle mb-2 text-muted">{{ p.type }}</div>
        <div class="card-text" style="color: grey">{{ p.description }}</div>
        <div class="card-text" style="color: grey">{{ p.price }}€</div>
        
        </div>
       </div>
        </div>
        </template>
     </template>
       </div>
   
  
</div>
</template>

<script>
 /*
 if "status === 'available'" - display name/type/description
 note: if your dummy data is using an image from the local folder, you will need to add the path to img src like in PreviousWork.
*/
import Api from '../helpers/Api';

export default {
name: "catalog",
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
  }
}
</script>

<style>

</style>