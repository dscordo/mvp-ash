<template> 
<div class="previous">
  <h2>Previous work</h2>
  <!-- <ul>
 <div v-for="p in data" 
  :key="p.prodid">
    <li v-if="p.status === 'sold'">
      {{ p.name }}
    </li>
  </div>
</ul> -->
  </div>
</template>

<script>
// if "status === 'sold'" - display name and description
import Api from '../helpers/Api';

export default {
name: "previouswork",
async setup() {
const products = await Api.getProducts();
  let data = products.data;
  console.log(data);
  return { products, data }
 }
  
}

</script>

<style>

</style>