define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Product = require("models/Product");
   
    var ProductDetailsView = Utils.Page.extend({
        constructorName: "ProductDetailsView",
        model:Product,
        
         events: {
            "tap #increaseQuantity":"increaseQuantity",
            "tap #decreaseQuantity":"decreaseQuantity",
            "tap #addtocart":"addtocart"
        },
       
        initialize: function (productID) {
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
            
            // load the precompiled template
            this.template = Utils.templates.productdetails;
            this.model=new Product({id:productID});
            this.model.fetch();
            this.model.on('sync', this.render, this);
            
            
        },
        id: "productdetails",
        className: "i-g page",
        
        render: function () {
            $(this.el).html(this.template(
               this.model.toJSON()
            ));
            //      this.model.toJSON()
            return this;
        },
        
        increaseQuantity: function(event) {
            console.log(" increaseQuantity/"+ $(event.currentTarget).data("productid"));
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 1 : value;
            value++;
            document.getElementById('number').value = value;
            console.log(value);
         
        },
        
        decreaseQuantity: function(event) {
            console.log("decreaseQuantity/"+ $(event.currentTarget).data("productid"));
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 1 : value;
            if (value>1){
                value--;}
            document.getElementById('number').value = value;
            console.log(value);
         
        },
        addtocart: function(event) {
            var id=$(event.currentTarget).data("productid");
            var quantity=document.getElementById('number').value;
            //var value = parseInt(document.getElementById('number').value, 10);
 
            document.getElementById('number').value = 1;
            console.log(id);
            console.log(quantity);
            Backbone.history.navigate("addtocart/"+id+"/"+quantity, {
                trigger: true
         });
        }
   
         
        });
        
       
 
    return ProductDetailsView;

});