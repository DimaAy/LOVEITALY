define(function (require) {

    var Backbone = require("backbone");
    var Utils = require("utils");
    var Cart = require("collections/Cart");
    var ProductCart=require("models/ProductCart");

    var CartView = Utils.Page.extend({
        constructorName: "CartView",
        collection: undefined,
        //model: ProductCart,
        events: {
            "tap #increaseByone":"increaseByone",
            "tap #decreaseByone":"decreaseByone",
            "click #checkout":"checkout"
        },
        initialize: function (Cart) {
            $('a#back-button').css('display', 'block');
            $('a#toggle-button').css('display', 'none');
            console.log("Ciao from intilize function");
            window.localStorage.removeItem("check");
            //console.log(this.template);
            this.template = Utils.templates.cart;
            this.collection = Cart;
            this.render();
            
            //this.collection.fetch();
            //this.collection.on('sync', this.render, this);
        },
        id: "cart",
        className: "i-g page",
        
        
        
        render: function () {
            //console.log(this.collection);
            // load the precompiled template
            //this.template = Utils.templates.cart;
            this.template = Utils.templates.cart;
            $(this.el).html(this.template({
                Cart: this.collection.toJSON()
            }));
            //      this.model.toJSON()
            return this;
        },
        
        increaseByone: function(event) {
            //console.log(" increaseQuantity/"+ $(event.currentTarget).data("productid"));
            var id=$(event.currentTarget).data("productid");
            var value = parseInt(document.getElementById('cartnumber'+id).value, 10);
            value = isNaN(value) ? 1 : value;
            value++;
            console.log(id);
            this.collection.get(id).edit(1);
            document.getElementById('cartnumber'+id).value = value;
            console.log(this.collection);
        },
        
        decreaseByone: function(event) {
            //console.log("decreaseQuantity/"+ $(event.currentTarget).data("productid"));
            var id=$(event.currentTarget).data("productid");
            var value = parseInt(document.getElementById('cartnumber'+id).value, 10);
            value = isNaN(value) ? 1 : value;
            this.collection.get(id).edit(-1);
            if (value>0){
                value--;
                document.getElementById('cartnumber'+id).value = value;
            }
            if (value===0){
                console.log("ciao from remove");
                this.collection.remove(this.collection.get(id));
                this.render();
            }
            
            console.log(this.collection);
         
        },
        
        addProduct :function(id,quantity){
            console.log ("ciao from add");
            console.log(this.collection.get(id));
            if (!this.collection.get(id)){
                this.model=new ProductCart({id:id});
            }
            this.model.edit(quantity);
            //console.log(this.model instanceof Backbone.Model);
            this.collection.add(this.model);
            console.log(this.collection);
        },
        
        checkout:function(){
            if (!window.localStorage.getItem("session"))
            {
                window.localStorage.setItem("check", "true"),
                Backbone.history.navigate("signin", {
            trigger: true
            });
            }
            else{
                Backbone.history.navigate("checkout", {
            trigger: true
            });
            }
        }
        
        
        });
   

    return CartView;

});


