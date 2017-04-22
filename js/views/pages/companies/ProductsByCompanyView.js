define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var ProductsByCompany = require("collections/ProductsByCompany");

    var ProductsByCompanyView = Utils.Page.extend({
        constructorName: "ProductsByCompanyView",
        collection: ProductsByCompany,
       
       events: {
            "tap #productdetails":"productdetails"
        },
      
        initialize: function (companyID) {
           
           
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
            
            // load the precompiled template
            this.template = Utils.templates.productlist;
            console.log(companyID);
            this.collection = new ProductsByCompany(companyID);
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
            Backbone.history.navigate("productdetails/"+ $(event.currentTarget).data("productid"), {
                trigger: true
         });
        }
                
        });
   

    return ProductsByCompanyView;

});


