define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Companies = require("collections/Companies");

    var CompanyListView = Utils.Page.extend({
        constructorName: "CompanyListView",
        collection: Companies,
       
        events: {
            "tap #productsbycompany": "productsbycompany"
        },
      
        initialize: function () {
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
          
            // load the precompiled template
            this.template = Utils.templates.companylist;
            this.collection = new Companies(); 
            this.collection.fetch();
            console.log(this.collection);
            this.collection.on('sync', this.render, this);
            
        },
        id: "comapnylist",
        className: "i-g page",
        
        
        
        
        /*events: {
            "tap #goToMap": "goToMap",
            "tap #goToProductDetail": "goToProductDetail"
        },*/
        render: function () {
            //console.log(this.collection);
            $(this.el).html(this.template({
                Company: this.collection.toJSON()
            }));
            //      this.model.toJSON()
            return this;
        },
        
        
       /* goToMap: function (e) {
            Backbone.history.navigate("map", {
                trigger: true
            });
        },*/
        productsbycompany: function (ev) {
            Backbone.history.navigate("productsbycompany/" + $(ev.currentTarget).data('companyid'), {
                trigger: true
            });
        }
                
        });
   

    return  CompanyListView;

});