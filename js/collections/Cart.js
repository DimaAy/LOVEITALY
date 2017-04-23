define(function (require) {

    var Backbone = require("backbone");
    //var ProductCart = require("models/ProductCart"); 
    var Cart = Backbone.Collection.extend({
      
        initialize: function (id,quantity) {
            this.addProduct(id,quantity); 
        },
       // model: ProductCart,
        //url : 'http://loveitaly.altervista.org/api/products/?display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H',
        addProduct: function(id,quantity){
            console.log("Ciaooooooo");
            
        },
        parse: function (data) {
            console.log(data);
            return data.products;
        }
    });
    return Cart;
});