<template>
  <div class="customorder">
    <p>Why not gift your loved ones something unique?</p>
    <p>Check out previous works for ideas.</p>
    <form>
      <div class="form-group">
    <label for="client-name">Name</label>
    <input type="text" class="form-control" id="client-name" placeholder="Your full name">
  </div>
      <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
   <div class="form-group">
    <label for="select-type">Select the type of item you would like to order</label>
    <select class="form-control" id="type">
      <option>necklace</option>
      <option>bracelet</option>
      <option>mask holder</option>
      <option>glasses holder</option>
      <option>bag/phone holder</option>
    </select>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <input type="text" class="form-control" id="description" placeholder="Describe the item you would like to order. Remember to include preferred color scheme, materials, who it's for..">
  </div>
  
  <button type="submit" class="btn btn-primary btn-outline-light" style="background-color: palevioletred">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
name: "customorder"
}
</script>

<style>

</style>