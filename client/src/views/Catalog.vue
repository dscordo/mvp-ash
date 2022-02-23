<template>
<div class="Catalog">
  <h2>Catalog</h2>
   <ul v-for="p in data"
  :key="p.prodid">
    <li v-if="p.status === 'available'">
      {{ p.name }}
    </li>
  
</ul>
</div>
</template>

<script>
// if "status === 'available'" - display name/type/description
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