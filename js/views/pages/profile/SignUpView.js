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
            var firstName=document.getElementById('firstname').value;
            var lastName=document.getElementById('lastname').value;
            var email=document.getElementById('email').value;
            var password=document.getElementById('password').value;

           console.log($("#firstname").val());
           console.log(lastName);
           console.log(email);
           console.log(password);
           data={
               //id: $("#idCostumer").val(),
               firstname: $("#firstname").val(),
               lastname: $("#lastname").val(),
               password: $("#password").val(),
               email: $("#email").val()
           };
           if (this.validate(data))
           {
             Backbone.history.navigate("update/"+firstName+"/"+lastName+"/"+email+"/"+password, {
                trigger: true
            });
           }


    },
    validate: function (data) {
            var validity = 0;
            console.log("Validat");
            if (data.firstname.lenght > this.validationparameters.firstname.length.maximum || data.firstname === "" || data.firstname === null) {
               // $('#firstnameError').attr('class', 'mostra');
                $('#firstnameError').text("First name is required, max 32 characters");
                validity++;
                console.log("Validat 1");
            }else{
                $('#firstnameError').attr('class', 'nascosto');
            }
            if (data.lastname.lenght > this.validationparameters.lastname.length.maximum || data.lastname === "" || data.lastname === null) {
                $('#lastnameError').attr('class', 'mostra');
                $('#lastnameError').text("Last name is required, max 32 characters");
                validity++;
            }else{
                $('#lastnameError').attr('class', 'nascosto');
            }
            if (data.password.lenght > this.validationparameters.password.length.maximum || data.password === "" || data.password === null) {
                $('#passwordError').attr('class', 'mostra');
                $('#passwordError').text("Pawssord required");
                validity++;
            }else{
                $('#passwordError').attr('class', 'nascosto');
            }
            if (!this.isEmail(data.email)) {
                $('#emailError').attr('class', 'mostra');
                $('#emailError').text("Enter a valid email address");
                validity++;
            }else{
                $('#emailError').attr('class', 'nascosto');
            }
           /* if (data.password2 !== data.password) {
                $('#password2Error').attr('class', 'mostra');
                $('#password2Error').text("Password Differenti");
                validity++;
            }else{
                $('#password2Error').attr('class', 'nascosto');
            }*/
            console.log(validity);
            if (validity === 0) {
                return true;
            } else {
                return false;
            }
        },
        validationparameters: {
            firstname: {
                length: {
                    maximum: 32,
                    tooLong: 'Massimo 32 caratteri'
                }
            },
            lastname: {
                length: {
                    maximum: 32,
                    tooLong: 'Massimo 32 caratteri'
                }
            },
            password: {
                length: {
                    maximum: 32,
                    tooLong: 'Massimo 32 caratteri'
                }
            },
            email: {
                length: {
                    maximum: 128,
                    tooLong: 'Massimo 128 caratteri'
                }
            }
        },
        isEmail: function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }

  });

  return SignUpView;

});
