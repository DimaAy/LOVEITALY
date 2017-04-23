define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Cart = require("collections/Cart");
    var ProductCart=require("models/ProductCart");

    var CartView = Utils.Page.extend({
        constructorName: "ProductsByCompanyView",
        collection: undefined,
        model: ProductCart,
       
        initialize: function () {
           
           
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
            
            // load the precompiled template
           // this.template = Utils.templates.productlist;
            if (!this.collection)
            {
                this.collection = new Cart();
            }            
        },
        id: "productsbycategory",
        className: "i-g page",
        
        
        
        render: function () {
            //console.log(this.collection);
            this.template = Utils.templates.cart;
            $(this.el).html(this.template({
                Cart: this.collection.toJSON()
            }));
            //      this.model.toJSON()
            return this;
        },
        
        addProduct :function(id,quantity){
            console.log ("ciao from add");
            console.log(this.collection.get(id));
            if (!this.collection.get(id)){
            this.model=new ProductCart({id:id});
            }
            this.model.edit(quantity);
            //console.log(this.model instanceof Backbone.Model);
            this.collection.add(this.model);
            console.log(this.collection);
        }
        
        
        });
   

    return CartView;

});


