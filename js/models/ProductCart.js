define(function (require) {
    var Backbone = require("backbone");
    var quantity=parseInt(0);
   // var Product=require("models/Product");
    var ProductCart = Backbone.Model.extend({
        //model:Product,
         // quantity,
        initialize: function () {
            console.log("ciao from model");
            this.quantity=parseInt(0);
            quantity=0; 
           
        },
        edit:function (quantity2) {
            quantity+=parseFloat(quantity2);
            this.quantity=quantity;
            this.set({quantity:this.quantity});
        }
      });
return ProductCart;
});