define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Products = require("collections/Products");

    var ProductListView = Utils.Page.extend({
        constructorName: "ProductListView",
        collection: Products,
       
      
        initialize: function () {
           
           
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
          
            // load the precompiled template
            this.template = Utils.templates.productlist;
            this.collection = new Products(); 
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
            
        },
        id: "productlist",
        className: "i-g page",
        
        
        
        
        events: {
            "tap #goToMap": "goToMap",
            "tap #goToProductDetail": "goToProductDetail"
        },
        render: function () {
            $(this.el).html(this.template({
                Product: this.collection.toJSON()
            }));
            //      this.model.toJSON()
            return this;
        },
        goToMap: function (e) {
            Backbone.history.navigate("map", {
                trigger: true
            });
        },
        goToProductDetail: function (ev) {
            Backbone.history.navigate("gotoproductdetail/" + $(ev.currentTarget).data('id'), {
                trigger: true
            });
        }
                
        });
   

    return ProductListView;

});