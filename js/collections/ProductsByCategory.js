define(function (require) {
    var $ = require('jquery');
    var Backbone = require("backbone");
    //var ProductByCategory = require("models/ProductByCategory"); 
    var ProductsByCategory = Backbone.Collection.extend({
        categoryID: undefined,
         initialize: function (category) {
            this.categoryID = category; 
        },
        
        url: function () {
            //console.log(this.id);
            console.log("HIIIII");
            var url = 'http://loveitaly.altervista.org/api/products/&display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H&';
            //url += this.id;
            url += '&filter[id_category_default]=';
            url += this.categoryID;
            console.log(url);
            return url;
        },
       
        /*setLimit : function(limite){
          this.url += '&limit=' + encodeURIComponent(limite);
          finale = limite;
        },
        setRange : function(initiale, limite){
          this.url += '&limit=' +encodeURIComponent(initiale) + ',' + encodeURIComponent(limite);
          this.initiale = initiale;
          this.finale = limite;
        },*/
        /*
        setCategory : function(category){

          this.url += '&filter[id_category_default]=' + category;
          this.categoryID = category;
          console.log(this.categoryID);
        },
        */
       /* setFarm : function(farm){
          this.url += '&filter[id_manufacturer]=[' + farm + ']';
        },
        getLimit :function(){
          return this.finale;
        },
        getInitial : function(){
          return this.initiale;
        },*/
        /* setPagination : function( iniziale , finale){
          this.url = 'http://loveitaly.altervista.org/api/products/?display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H';
          this.url += '&limit=' +encodeURIComponent(iniziale) + ',' + encodeURIComponent(finale);
          if(this.category === undefined){
            // console.log("category undefined");
          }else {
              this.setCategory(this.category);
          }
        },*/
        parse: function (data) {
            return data.products;
        }
    });
    return ProductsByCategory;
});