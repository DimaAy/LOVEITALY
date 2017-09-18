define(function(require) {

  var Backbone = require("backbone");
  //var MyModel = require("models/MyModel");
  var Utils = require("utils");

  var SignInView = Utils.Page.extend({

    constructorName: "SignUpView",

    //model: MyModel,

    initialize: function() {
      // load the precompiled template
      this.template = Utils.templates.signin;
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

    id: "signin",
    className: "i-g page",

    events: {
      "tap #signup": "signup",
      "tap #check":"check"
    },

    render: function() {
      $(this.el).html(this.template());
      return this;
    },
    
    signup:function() {
      Backbone.history.navigate("signup", {
        trigger: true
      });
    },
    
    
    check:function() {
       $('#signinError').text("");
       var validity=0;
       email= $("#email").val();    
       password= $("#password").val();
       console.log(email);
       console.log(password);
       if (window.localStorage.getItem(email))
       {
           var user=JSON.parse(window.localStorage.getItem(email));
           console.log(user.password);
           if (user.password!==password) 
           {
               validity++;
           }
       }
       else{
           validity++;
       }
      if (validity===0){
      console.log("sign in");
      window.localStorage.setItem("session","True");
      window.localStorage.setItem("emailsession",email);
      console.log("CHECK EMAIL"+window.localStorage.getItem("emailsession"));
       Backbone.history.navigate("", {
                trigger: true
            });
      if (!window.localStorage.getItem("check"))
      {
      Backbone.history.navigate("myview", {
                trigger: true
            });
        }
      else {
          Backbone.history.navigate("cart", {
                trigger: true
            });
      }
      /*Backbone.history.navigate("signup", {
        trigger: true
      });*/
      }
      else{
          //$('#lastnameError').attr('class', 'mostra');
          $('#signinError').text("the user or password are not correct");
      }
    }
 
    
  });

  return SignInView;

});