define(function (require) {

    var Backbone = require("backbone");
    var ProductCart = require("models/ProductCart"); 
    var Cart = Backbone.Collection.extend({
        model: ProductCart,
        initialize: function (id,quantity,name) {
            this.addProduct(id,quantity,name); 
        },
         
        //url : 'http://loveitaly.altervista.org/api/products/?display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H',
        addProduct: function(id,quantity,name){
            console.log("Ciaooooooo");
            
        },
        parse: function (data) {
            console.log(data);
            return data.products;
        }
    });
    return Cart;
});