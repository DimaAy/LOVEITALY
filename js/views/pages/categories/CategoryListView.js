define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Categories = require("collections/Categories");

    var CategoryListView = Utils.Page.extend({
        constructorName: "CategoryListView",
        collection: Categories,
       
        events: {
            "tap #productsbycategory": "productsbycategory"
        },
      
        initialize: function () {
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
          
            // load the precompiled template
            this.template = Utils.templates.categorylist;
            this.collection = new Categories(); 
            this.collection.fetch();
            this.collection.on('add', this.render, this);
            
        },
        id: "categorylist",
        className: "i-g page",
        
        render: function () {
            $(this.el).html(this.template({
                Category: this.collection.toJSON()
            }));
            //      this.model.toJSON()
            return this;
        },
       
        productsbycategory: function (ev) {
            console.log('event.target');
            console.log( $(ev.currentTarget).data('categoryid'));
            Backbone.history.navigate("productsbycategory/" + $(ev.currentTarget).data('categoryid'), {
                trigger: true
            });
        }
                
        });
   

    return CategoryListView;

});