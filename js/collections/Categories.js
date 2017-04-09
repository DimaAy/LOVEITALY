define(function (require) {

    var Backbone = require("backbone");
    var Category = require("models/Category"); 
    var Categories = Backbone.Collection.extend({
      
        //initial : 0,
        //final : 0,
        //category: undefined,
        model: Category,
        url : 'http://loveitaly.altervista.org/api/categories/?display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H',
       /* setLimit : function(limit){
          this.url += '&limit=' + encodeURIComponent(limit);
          final = limit;
        },
        setRange : function(initial, limit){
          this.url += '&limit=' +encodeURIComponent(initial) + ',' + encodeURIComponent(limit);
          this.initial = initial;
          this.final = limit;
        },
        setCategory : function(category){

          this.url += '&filter[id_category_default]=[' + category + ']';
          this.category = category;
        },
        setFarm : function(farm){
          this.url += '&filter[id_manufacturer]=[' + farm + ']';
        },
        getLimit :function(){
          return this.finale;
        },
        getInitial : function(){
          return this.initiale;
        },
        setPagination : function( iniziale , finale){
          this.url = 'http://loveitaly.altervista.org/api/products/?display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H';
          this.url += '&limit=' +encodeURIComponent(iniziale) + ',' + encodeURIComponent(finale);
          if(this.category === undefined){
            // console.log("category undefined");
          }else {
              this.setCategory(this.category);
          }
        },*/
        parse: function (data) {
            return data.categories;
        }
    });
    return Categories;
});