define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Product = require("models/Product");
   
    var ProductDetailsView = Utils.Page.extend({
        constructorName: "ProductDetailsView",
        model:Product,
       
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
        }
         
        });
   
 
    return ProductDetailsView;

});