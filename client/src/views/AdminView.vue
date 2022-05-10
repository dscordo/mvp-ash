<template>
    <div class="AdminView">
        <h1>- Admin View -</h1>
        <div class="accordion">
        <div class="accordion-item">
        
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Orders
            </button></h2>
             <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Created at</th>
                    <th>Order Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="o in orderdata" :key="o.formid">
                    <td>{{o.formid}}</td>
                    <td>{{o.client_name}}</td>
                    <td>{{o.client_email}}</td>
                    <td>{{o.type}}</td>
                    <td>{{o.description}}</td>
                    <td>{{ new Date(o.date_created).toLocaleString()}}</td>
                    <td>
                        <select class="form-select-sm">
                            <option value="">Update...</option>
                            <option value="Not started">Not started</option>
                            <option value="In progress">In progress</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </td>
                </tr>
            
            </tbody>

            </table>
            </div>
        </div>
            </div>
            <div class="accordion-item">
             <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Add product
            </button>
         </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            POST to products table
            </div>
            </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Edit products
      </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        PATCH products table
        </div>
        </div>
  </div>

      
        
        </div>
    </div>
    
</template>

<script>
import Api from '../helpers/Api';

export default {
    name:"adminview",

    data() {
        return {
            orderdata: []
        };
    },

    async mounted() {
        let response = await Api.getOrders();
        if (response.ok) {
            this.orderdata = response.data;
        } else {
            console.log('Error in Api.getOrders():', response.error);
        }
    },
    
}
</script>

<style scoped>

.accordion {
    color: black;
}

table {
    margin-top: 20px;
    border-collapse: collapse;
    border-spacing: 10;
    width: 100%;
    display: table;
    box-sizing: border-box;
    text-align: center;
    border-color: rgb(235, 12, 164);
    font-variant: normal;
}

table thead {
    background: #ffffff9c;
    color: rgb(237, 51, 147);
    text-align: center;
    margin-left: 20px;
    vertical-align: bottom;
    display: table-header-group;
    padding:20px;
    font-weight: bolder;
}

tr {
    display: table-row;
    vertical-align: middle;
    border: 1px solid #ffffff;
}

td {
    border-bottom: 1px solid #ffffff;
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: 0.3em 1em;
}

.form-select-sm {
    background-color: #e85ba4ba;
    color: #ffffff;
    border: solid 1px #ffffff;
}
</style>