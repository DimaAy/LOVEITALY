define(function (require) {
    var $ = require('jquery');
    var Backbone = require("backbone");
    var Product = require("models/Product"); 
    var ProductsByCompany = Backbone.Collection.extend({
        companyID: undefined,
        model:Product,
         initialize: function (company) {
            this.companyID = company; 
        },
        
        url: function () {
            var url = 'http://loveitaly.altervista.org/api/products/&display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H&';
            url += '&filter[id_manufacturer]=';
            url += this.companyID;
            return url;
        },
       

        parse: function (data) {
            return data.products;
        }
    });
    return ProductsByCompany;
});