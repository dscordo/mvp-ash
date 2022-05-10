<template>
  <div class="container">
    <h2>- Custom Order -</h2>
    <h5>Why not gift your loved ones something unique?</h5>
    <div class="row">
      <div class="col-lg">
        <img src="http://localhost:5000/images/assorted.jpeg" class="img-fluid" alt="two bracelets and three necklaces on display">
      </div>
      <div class="col-lg">
        <form @submit.prevent="handleSubmit">
              <div class="form-group mb-4">
                <label for="client-name">Name</label>
                <input type="text" v-model="order.client_name" class="form-control" id="client-name" placeholder="Your full name">
              </div>
              <div class="form-group mb-4">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="order.client_email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group mb-4">
                <label for="select-type">Select the type of item you would like to order</label>
                <select class="form-select" v-model="order.type" id="type">
                  <option value="">choose...</option>
                  <option>necklace</option>
                  <option>bracelet</option>
                  <option>mask holder</option>
                  <option>glasses holder</option>
                  <option>bag/phone holder</option>
                </select>
              </div>
              <div class="form-group mb-4">
                <label for="description">Description</label>
                <textarea v-model="order.description" class="form-control" id="description" rows="4" placeholder="Describe the item you would like to order. Remember to include preferred color scheme, materials, who it's for.."></textarea>
              </div>
          <button type="submit" class="btn btn-lg btn-outline-light">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../helpers/Api';

class Order {
  constructor(client_name, client_email, type, description) {
    this.client_name = client_name;
    this.client_email = client_email;
    this.type = type;
    this.description = description;
  }
}

export default {
  name: "customorder",

  data() {
        return {
            order: new Order()
        }
  },

  methods: {
    async handleSubmit() {
      let response = await Api.addOrder(this.order);
        if (response.ok) {
            this.order = response.data;
        } else {
            console.log('Error in Api.addOrder():', response.error);
        }
      
      this.order = new Order();

    }
  }
        
}
</script>

<style>

h5 {
  display: flex;
  font-family: 'Sacramento', cursive;
  justify-content: center;
  align-items: center;
  padding:10px;
  font-size: 26px;
}

.btn {
    background-color: palevioletred;
}

</style>