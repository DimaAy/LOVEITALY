define(function (require) {

    var Backbone = require("backbone");
    var Category = require("models/Category"); 
    var Categories = Backbone.Collection.extend({
      
      
        model: Category,
        url : 'http://loveitaly.altervista.org/api/categories/?display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H&filter[id_parent]=2&filter[active]=1',
        parse: function (data) {
            return data.categories;
        }
    });
    return Categories;
});