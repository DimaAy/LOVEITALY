define(function (require) {
    var Backbone = require("backbone");
    var quantity=parseInt(0);
    var ProductCart = Backbone.Model.extend({
         
        initialize: function (id) {
            console.log("ciao from model");
            this.id=id;
            this.quantity=0;     
        },
        edit:function (quantity2) {
            console.log("ciao from edit");
            quantity+=parseInt(quantity2);
            this.quantity=quantity;
        }
      });
return ProductCart;
});