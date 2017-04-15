define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var StructureView = require("views/StructureView");
  var MyView = require("views/pages/MyView");
  var ProductListView = require("views/pages/products/ProductListView");
  var CategoryListView=require("views/pages/categories/CategoryListView");
  var MapView = require("views/pages/MapView");
  var ProductDetailsView = require("views/pages/products/ProductDetailsView");
  var ProductsByCategoryView=require("views/pages/categories/ProductsByCategoryView");;
  var AppRouter = Backbone.Router.extend({

    constructorName: "AppRouter",

    routes: {
      // the default is the structure view
      "": "showStructure",
      "myview": "myView",
      "map": "map",
      "productlist":"productListView",
      "categorylist":"categoryListView",
      "productdetails/:id":"productDetailsView",
      "productsbycategory/:id":"productsByCategoryView"
    },

    firstView: "myview",

    initialize: function(options) {
      this.currentView = undefined;
    },

    myView: function() {
      // highlight the nav1 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav1");
      // create a model with an arbitrary attribute for testing the template engine
      var model = new MyModel({
        key1: "Categories",
        key2:"Products",
        key3:"My Profile",
        key4:"My Cart"
      });
      // create the view
      var page = new MyView({
        model: model
      });
      // show the view
      this.changePage(page);
    },

    map: function() {
      // highlight the nav2 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav2");
      // create the view and show it
      var page = new MapView();
      this.changePage(page);
    },

    // load the structure view
    showStructure: function() {
      if (!this.structureView) {
        this.structureView = new StructureView();
        // put the el element of the structure view into the DOM
        document.body.appendChild(this.structureView.render().el);
        this.structureView.trigger("inTheDOM");
      }
      // go to first view
      this.navigate(this.firstView, {trigger: true});
    },

    productListView: function() {
      // highlight the nav1 tab bar element as the current one
    //  this.structureView.setActiveTabBarElement("nav1");
      // create a model with an arbitrary attribute for testing the template engine
     
      // create the view
      var page = new ProductListView();
      // show the view
      this.changePage(page);

    },
    
     categoryListView: function() {
      // highlight the nav1 tab bar element as the current one
    //  this.structureView.setActiveTabBarElement("nav1");
      // create a model with an arbitrary attribute for testing the template engine
     
      // create the view
      var page = new CategoryListView();
      // show the view
      this.changePage(page);
    },
    productDetailsView: function(id) {
      // highlight the nav1 tab bar element as the current one
    //  this.structureView.setActiveTabBarElement("nav1");
      // create a model with an arbitrary attribute for testing the template engine
      
      // create the view
      var page = new ProductDetailsView(id);
      
      // show the view
      this.changePage(page);
    },
    
    productsByCategoryView:function(id) {
      // highlight the nav1 tab bar element as the current one
    //  this.structureView.setActiveTabBarElement("nav1");
      // create a model with an arbitrary attribute for testing the template engine
      
      // create the view
      var page = new ProductsByCategoryView(id);
      
      // show the view
      this.changePage(page);
    }

  });

  return AppRouter;

});