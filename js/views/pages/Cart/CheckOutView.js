define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");

    var CheckOutView = Utils.Page.extend({
       
     
        initialize: function () {
           
            
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
            
            // load the precompiled template
            this.template = Utils.templates.checkout;

            
        },
        id: "checkout",
        className: "i-g page",
        
        
        
        
        
        render: function () {
            
            $(this.el).html(this.template({
            }));
            //      this.model.toJSON()
            return this;
        }
      
      
      
                
        });
   

    return CheckOutView;

});