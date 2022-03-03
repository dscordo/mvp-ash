<template>
    <div class="AdminView">
        <h2>Admin View</h2>
        <Table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="o in orderdata" :key="o.formid">
                    <td>{{o.formid}}</td>
                    <td>{{o.client_name}}</td>
                    <td>{{o.client_email}}</td>
                    <td>{{o.type}}</td>
                    <td>{{o.description}}</td>
                </tr>
            
            </tbody>

        </Table>

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
</style>