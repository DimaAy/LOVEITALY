define(function (require) {
    var Backbone = require("backbone");
    
    var $ = require('jquery');
    var Product = Backbone.Model.extend({
       
        url: function () {
            var url = 'http://loveitaly.altervista.org/api/products/';
            console.log(this.id);
            url += this.id;
            url += '&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H';
            return url;
        }
      });
return Product;
});