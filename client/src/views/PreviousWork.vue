<template> <div class="previouswork">
  <h2>Previous work</h2>
  <ul>
  <template v-for="p in data" :key="p">
    <li v-if="p.status === 'sold'">
      {{ p.name }}
    </li>
  </template>
</ul>
  </div>
</template>

<script>
// if "status === 'sold'" - display name/type/description
import Api from '../helpers/Api';

export default {
name: "previouswork",
async setup() {
  const products = await Api.getProducts();
  let data = products.data;
  return { products, data }
}
  
}

</script>

<style>

</style>