<template> 
<div class="previous">
  <h2>Previous work</h2>
    <div class="row">
    <div class="col-md-3" v-for="p in proddata" :key="p.prodid">
      {{ p.name }}, {{ p.type }}, {{ p.description }}
    </div>
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
  }
  
}

</script>

<style>

</style>