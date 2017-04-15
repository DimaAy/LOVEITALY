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
            console.log(this);
            this.model=new Product({id:productID});
            this.model.fetch();
            console.log(this.model);
            this.model.on('sync', this.render, this);
            
        },
        id: "productdetails",
        className: "i-g page",
        
        
        
        
        /*events: {
            "tap #goToMap": "goToMap",
            "tap #goToProductDetail": "goToProductDetail"
        },*/
        render: function () {
            $(this.el).html(this.template({
                ProductDetalis: this.model.toJSON()
            }));
            //      this.model.toJSON()
            return this;
        }
       /* goToMap: function (e) {
            Backbone.history.navigate("map", {
                trigger: true
            });
        },*/
       /* goToProductDetail: function (ev) {
            Backbone.history.navigate("gotoproductdetail/" + $(ev.currentTarget).data('id'), {
                trigger: true
            });
        }*/
                
        });
   
 
    return ProductDetailsView;

});