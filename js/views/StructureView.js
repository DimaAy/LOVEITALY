define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Utils = require("utils");

  var StructureView = Backbone.View.extend({

    constructorName: "StructureView",

    id: "main",

    events: {
      "tap #nav1": "myView",
      "tap #nav2": "map",
      "tap #productlist": "productlist",
      "tap #categorylist": "categorylist",
      "tap #companylist": "companylist",
      "tap #cart":"cart",
      "tap #signup":"signup"
    },

    initialize: function(options) {
      // load the precompiled template
      console.log("I AM HERE");
      
      
     
      this.template = Utils.templates.structure;
      //this.on("inTheDOM", this.rendered);
      // bind the back event to the goBack function
      //document.getElementById("back").addEventListener("back", this.goBack(), false);
    },

    render: function() {
      // load the template
      this.el.innerHTML = this.template({});
      // cache a reference to the content element
      this.contentElement = this.$el.find('#content')[0];
      return this;
    },

    // rendered: function(e) {
    // },

    // generic go-back function
    goBack: function() {
      //window.history.back();
    },

    setActiveTabBarElement: function(elementId) {
      // here we assume that at any time at least one tab bar element is active
      document.getElementsByClassName("active")[0].classList.remove("active");
      document.getElementById(elementId).classList.add("active");
    },

    map: function(event) {
      Backbone.history.navigate("map", {
        trigger: true
      });
    },

    myView: function(event) {
      Backbone.history.navigate("myview", {
        trigger: true
      });
    },
    
     productlist: function(event) {
      Backbone.history.navigate("productlist", {
        trigger: true
      });
    },


    categorylist: function(event) {
      Backbone.history.navigate("categorylist", {
        trigger: true
      });
    },
    
    companylist: function(event) {
      Backbone.history.navigate("companylist", {
        trigger: true
      });
    },
    
    cart: function(event) {
      Backbone.history.navigate("cart", {
        trigger: true
      });
    },
    
    signup:function(event) {
      Backbone.history.navigate("signup", {
        trigger: true
      });
    }
  });

  return StructureView;

});