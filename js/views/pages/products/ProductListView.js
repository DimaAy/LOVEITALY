define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Products = require("collections/Products");

    var ProductListView = Utils.Page.extend({
        constructorName: "ProductListView",
        collection: Products,
       
        events: {
            "tap #productdetails":"productdetails"
        },
        
        initialize: function () {
           
            
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
            
            // load the precompiled template
            this.template = Utils.templates.productlist;
            //console.log(this.template);
            this.collection = new Products(); 
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
            
        },
        id: "productlist",
        className: "i-g page",
        
        
        
        
        
        render: function () {
            
            $(this.el).html(this.template({
                Product: this.collection.toJSON()
            }));
            //      this.model.toJSON()
            return this;
        },
      
      
        productdetails: function(event) {
            Backbone.history.navigate("productdetails/"+ $(event.currentTarget).data("productid"), {
                trigger: true
         });
        }
                
        });
   

    return ProductListView;

});