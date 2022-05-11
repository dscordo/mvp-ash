<template>
  <main class="form-signin">
  <form @submit.prevent="register">
   
    <h1 class="h3 mb-3 fw-normal">Register</h1>
    <div class="form-floating">
      <input v-model="data.name" class="form-control" placeholder="name">
      
    </div>
    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" placeholder="email">
      
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" placeholder="password">
      
    </div>

    <button class="w-100 btn btn-lg btn-outline-light" type="submit">Submit</button>
    
  </form>
</main>
</template>

<script>

export default {
name: "Register",
data() {
  return {
    username: '',
    email: '',
    password: ''
  };
},

methods: {
register() {

}
}
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

label {
  color: black;
}

.btn {
    background-color: palevioletred;
}

</style>