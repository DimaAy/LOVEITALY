define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Categories = require("collections/Categories");

    var CategoryListView = Utils.Page.extend({
        constructorName: "CategoryListView",
        collection: Categories,
       
      
        initialize: function () {
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
          
            // load the precompiled template
            this.template = Utils.templates.categorylist;
            this.collection = new Categories(); 
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
            
        },
        id: "categorylist",
        className: "i-g page",
        
        
        
        
        /*events: {
            "tap #goToMap": "goToMap",
            "tap #goToProductDetail": "goToProductDetail"
        },*/
        render: function () {
            console.log(this.collection);
            $(this.el).html(this.template({
                Category: this.collection.toJSON()
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
   

    return CategoryListView;

});