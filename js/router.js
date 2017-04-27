define(function(require) {

  var $ = require("jquery");
  var Backbone = require("backbone");
  var Handlebars = require('handlebars');
  var MyModel = require("models/MyModel");
  var StructureView = require("views/StructureView");
  var MyView = require("views/pages/MyView");
  var MapView = require("views/pages/MapView");
  var ProductListView = require("views/pages/products/ProductListView");
  var CategoryListView=require("views/pages/categories/CategoryListView");
  var CompanyListView=require('views/pages/companies/CompanyListView');
  var ProductDetailsView = require("views/pages/products/ProductDetailsView");
  var ProductsByCategoryView=require("views/pages/categories/ProductsByCategoryView");
  var ProductsByCompanyView=require('views/pages/companies/ProductsByCompanyView');
  var CartView=require('views/pages/Cart/CartView');
  var ProductCart=require("models/ProductCart");
  var SignUpView=require("views/pages/profile/SignUpView");
  var SignInView=require("views/pages/profile/SignInView");
  var Cart=require('collections/Cart');
  Cart=new Cart();
  var Customer=require("models/Customer");
  Customer=new Customer();
  Backbone.emulateHTTP = true; // Use _method parameter rather than using DELETE and PUT methods
  Backbone.emulateJSON = true; // Send data to server via parameter rather than via request content

  var AppRouter = Backbone.Router.extend({
    model: ProductCart,
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
      "productsbycompany/:id":"productsByCompanyView",
      "addtocart/:id/:quantity":"addToCartView",
      "cart":"goToCart",
      "signup":"goToSignUpView",
      "signin":"goToSignInView",
      "update/:firstName/:lastName/:email/:password":"signUpContact"
    },

    firstView: "myview",

    initialize: function(options) {
      this.currentView = undefined;
       Handlebars.registerHelper('twodigit', function (variable, options) {
                if (typeof variable !== 'undefined') {
                    var temp = variable.toString();
                    return temp.substring(0, temp.indexOf(".") + 2);
                } else {

                    return variable;
                }
            });
    },

    myView: function() {
      // highlight the nav1 tab bar element as the current one
      this.structureView.setActiveTabBarElement("nav1");
      // create a model with an arbitrary attribute for testing the template engine
      var model = new MyModel({
        key: "testValue"
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
      console.log("PLEAAAASSSSEEE");
      
      // go to first view
      this.navigate(this.firstView, {trigger: true});
    },
    
    productListView: function() {
     // create the view
      var page = new ProductListView();
      // show the view
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
      console.log(page);
      // show the view
      this.changePage(page);
    },
    
    productsByCategoryView:function(id) {
      // create the view
      var page = new ProductsByCategoryView(id);
      
      // show the view
      this.changePage(page);
    },
    
    productsByCompanyView:function(id) {
      // create the view
      var page = new ProductsByCompanyView(id);
      
      // show the view
      
      console.log("ciao productby");
      console.log(page);
      this.changePage(page);
    },
    
    
    addToCartView :function(id,quantity) {
      //console.log("cioa router add to Cart");
      //console.log(this.cartView);
      /*if (!this.cartView) {
        console.log("cioa router IFFF");
        this.cartView = new CartView(); 
      }*/
     // Cart.addProduct(id,quantity);
      console.log ("ciao from add in the router");
      //console.log(this.collection.get(id));
      if (!Cart.get(id)){
           this.model=new ProductCart({id:id,quantity:quantity});
       }
       this.model.edit(quantity);
            //console.log(this.model instanceof Backbone.Model);
       Cart.add(this.model);
            //console.log(this.collection);
      console.log(Cart);
      //this.cartView.addProduct(id,quantity);
      //this.cartView.addProduct(id,quantity);
    },
    
    goToCart: function() {
      var page=new CartView(Cart);
      this.changePage(page);
      
    },
    
    goToSignUpView: function() {
      var page=new SignUpView();
      this.changePage(page);
      
    },
    
    goToSignInView: function(){
      var page=new SignInView();
      this.changePage(page);
      
    },
    
    signUpContact: function(firstName,lastName,email,password){
        
       var data={
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
       };
      
       Customer=data;
       console.log(Customer);
       window.localStorage.setItem(data.email, JSON.stringify(Customer));
       console.log(window.localStorage.getItem(data.email)); 
       
    }

  });

  return AppRouter;

});