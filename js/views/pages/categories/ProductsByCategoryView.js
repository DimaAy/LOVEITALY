define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var ProductsByCategory = require("collections/ProductsByCategory");

    var ProductsByCategoryView = Utils.Page.extend({
        constructorName: "ProductsByCategoryView",
        collection: ProductsByCategory,
       
       events: {
            "tap #productdetails":"productdetails"
        },
      
        initialize: function (categoryID) {
           
           
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
            
            // load the precompiled template
            this.template = Utils.templates.productlist;
            console.log(categoryID);
            this.collection = new ProductsByCategory(categoryID);
            //this.collection.setCategory(categoryID);
            this.collection.fetch();
            console.log(this.collection);
            this.collection.on('sync', this.render, this);
            
            
        },
        id: "productsbycategory",
        className: "i-g page",
        
        
        
        render: function () {
            //console.log(this.collection);
            $(this.el).html(this.template({
                Product: this.collection.toJSON()
            }));
            //      this.model.toJSON()
            return this;
        },
      
        
        productdetails: function(event) {
            console.log($(event.currentTarget));
            Backbone.history.navigate("productdetails/"+ $(event.currentTarget).data('productid'), {
                trigger: true
         });
        }
                
        });
   

    return ProductsByCategoryView;

});


