<template>
<div class="Catalog">
  <h2>Catalog</h2>
   <div class="row">
      <div class="col-md-3" v-for="p in proddata" :key="p.prodid">
      {{ p.name }}, {{ p.type }}, {{ p.description }}, {{ p.status }}
      </div>
   </div>
  
</div>
</template>

<script>
// if "status === 'available'" - display name/type/description
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