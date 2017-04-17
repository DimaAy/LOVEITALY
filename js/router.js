define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var StructureView = require("views/StructureView");
  var MyView = require("views/pages/MyView");
  var ProductListView = require("views/pages/products/ProductListView");
  var CategoryListView=require("views/pages/categories/CategoryListView");
  var CompanyListView=require('views/pages/companies/CompanyListView');
  var MapView = require("views/pages/MapView");
  var ProductDetailsView = require("views/pages/products/ProductDetailsView");
  var ProductsByCategoryView=require("views/pages/categories/ProductsByCategoryView");
  var ProductsByCompanyView=require('views/pages/companies/ProductsByCompanyView');
  var AppRouter = Backbone.Router.extend({

    constructorName: "AppRouter",

    routes: {
      // the default is the structure view
      "": "showStructure",
      "myview": "myView",
      "map": "map",
      "productlist":"productListView",
      "categorylist":"categoryListView",
      "companylist":"companyListView",
      "productdetails/:id":"productDetailsView",
      "productsbycategory/:id":"productsByCategoryView",
      "productsbycompany/:id":"productsByCompanyView"
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
        key3:"Companies",
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
     // create the view
      var page = new ProductListView();
      // show the view
      console.log("ciao productlist");
      console.log(page);
      this.changePage(page);

    },
    
     categoryListView: function() {
      // create the view
      var page = new CategoryListView();
      // show the view
      this.changePage(page);
    },
    
    companyListView:function() {
      // create the view
      var page = new CompanyListView();
      // show the view
      this.changePage(page);
    },
    productDetailsView: function(id) {
      // create the view
      var page = new ProductDetailsView(id);
      console.log("ciao productDetails");
      console.log(page);
      // show the view
      this.changePage(page);
    },
    
    productsByCategoryView:function(id) {
      // create the view
      var page = new ProductsByCategoryView(id);
      
      // show the view
      
      console.log("ciao productby");
      console.log(page);
      this.changePage(page);
    },
    
    productsByCompanyView:function(id) {
      // create the view
      var page = new ProductsByCompanyView(id);
      
      // show the view
      
      console.log("ciao productby");
      console.log(page);
      this.changePage(page);
    }

  });

  return AppRouter;

});