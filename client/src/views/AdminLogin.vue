<template>
  <main class="form-signin">
  <form>
   
    <h1 class="h3 mb-3 fw-normal">Admin log in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" placeholder="email">
      
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" placeholder="password">
      
    </div>

    <button class="w-100 btn btn-lg btn-outline-light" type="submit">Sign in</button>
    
  </form>
</main>
</template>

<script>
export default {
name: "AdminLogin",
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn {
    background-color: palevioletred;
}

</style>