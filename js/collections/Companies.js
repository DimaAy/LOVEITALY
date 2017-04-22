define(function (require) {

    var Backbone = require("backbone");
    var Company = require("models/Company"); 
    var Companies = Backbone.Collection.extend({
      
       
        model: Company,
        url : 'http://loveitaly.altervista.org/api/manufacturers?display=full&io_format=JSON&ws_key=IYI6M35MLB8UVW38Y99RY3YPQWRX5X8H',
   
        parse: function (data) {
            return data.manufacturers;
        }
    });
    return Companies;
});