define(function(require) {

  var Backbone = require("backbone");
  var MyModel = require("models/MyModel");
  var Utils = require("utils");

  var SignUpView = Utils.Page.extend({

    constructorName: "SignUpView",

    model: MyModel,

    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.signup;
      this.render();
      // here we can register to inTheDOM or removing events
      // this.listenTo(this, "inTheDOM", function() {
      //   $('#content').on("swipe", function(data){
      //     console.log(data);
      //   });
      // });
      // this.listenTo(this, "removing", functionName);

      // by convention, all the inner views of a view must be stored in this.subViews
    },

    id: "signup",
    className: "i-g page",

    events: {
      "tap #update": "update"
    },

    render: function() {
      $(this.el).html(this.template());
      return this;
    },
    
    update: function(event) {
            var firstName=document.getElementById('firstname').value;;
            var lastName=document.getElementById('lastname').value;
            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;
           
           console.log(firstName);
           console.log(lastName);
           console.log(email);
           console.log(password);
           
           Backbone.history.navigate("update/"+firstName+"/"+lastName+"/"+email+"/"+password, {
                trigger: true
         });
    }
    
  });

  return SignUpView;

});