define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Customer = require("models/Customer");
   
    var MyProfileView = Utils.Page.extend({
        constructorName: "MyProfileViewView",
        model:Customer,
        
       
        initialize: function () {
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
            
            // load the precompiled template
            this.template = Utils.templates.myprofile;
            var email=window.localStorage.getItem("emailsession");
            var user=JSON.parse(window.localStorage.getItem(email));
            console.log("USER"+user.password);
            this.model=new Customer({firstname:user.firstName,lastname:user.lastName,email:user.email});
            console.log(this.model);
            this.render;
            
        },
        id: "myprofile",
        className: "i-g page",
        
        render: function () {
            $(this.el).html(this.template({
               Customer:this.model.toJSON()}
            ));
            return this;
        }
        
   
         
        });
        
       
 
    return MyProfileView;

});