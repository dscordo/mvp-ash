const BASE_URL = 'http://localhost:5000';

class Api {
    // Public
   

    static async getProducts() {
        return Api._myFetch( `${BASE_URL}/products` );
    }
    static async getProductById(id) {
        return Api._myFetch( `${BASE_URL}/products/${id}` );
    }
      /**
     * Private!
     **/

       static async _myFetch(url, method = 'GET', body = null) {
        let options = { method };

        if (body) {
            options.headers = { 'Content-Type': 'application/json' },
            options.body = JSON.stringify(body)
        }

        let response;
        try {
            response = await fetch(url, options);
            if (response.ok) {
                response.data = await response.json();
            } else {
                response.error = `${response.status}: ${response.statusText}`;
            }
        } catch (err) {
            response = {
                ok: false,
                error: err.message
            };
        }

        return response;
    }


}

// function makeWhereFromFilters(q) {
//     let filters = [];

//     if (q.status) {
//         filters.push(`status = '${q.status}'`);
//     }
//     if (q.type) {
//         filters.push(`type <= ${q.type}`);
//     }

//     // Return all filters joined by AND
//     return filters.join(' AND ');
// }

export default Api;