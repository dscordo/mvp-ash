<template>
<div class="Catalog">
  <h2>Catalog</h2>
   <ul>
  <template v-for="p in data">
    <li v-if="p.status === 'available'">
      {{ p.name }}
    </li>
  </template>
</ul>
</div>
</template>

<script>

import Api from '../helpers/Api';

export default {
name: "catalog",
async setup() {
  const products = await Api.getProducts();
  console.log(products.data);
  let data = products.data;
  return { products, data }
}
  
}
</script>

<style>

</style>