define(function (require) {
    var $ = require('jquery');
    var Backbone = require("backbone");
    var Product = require("models/Product"); 
    var ProductsByCategory = Backbone.Collection.extend({
        categoryID: undefined,
        model:Product,
         initialize: function (category) {
            this.categoryID = category; 
        },
        
        url: function () {
            var url = 'http://loveitaly.altervista.org/api/products/&display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H&';
            url += '&filter[id_category_default]=';
            url += this.categoryID;
           
            return url;
        },
       
        
        parse: function (data) {
            return data.products;
        }
    });
    return ProductsByCategory;
});