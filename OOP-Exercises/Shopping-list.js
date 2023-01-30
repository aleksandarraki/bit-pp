"use strict";

(function () {
    console.log("HI!");


    function Product(id, name, price, expirationdate) {
        console.log(id);
        if (!(id.toString().length === 5)) {
            throw new Error("Input must have 5 numbers")
        }

        this.id = id;
        this.name = name;
        this.price = price;
        this.expirationdate = expirationdate;

        this.getInfo = function () {
            return (this.name[0] + this.name[this.name.length - 1]).toUpperCase() + this.id + ", " + this.name + ", " + this.price.toFixed(2);
        }
    }

    function ShoppingBag() {
        this.list = [];

        this.addProduct = function (product) {
            if (!(product instanceof Product)) {
                throw new Error("Invalid product input");
            };
            var today = new Date();
            if (product.expirationdate > today) {
                this.list.push(product);
            }
        }

        this.averagePrice = function () {
            var totalPrice = 0;
            for (var i = 0; i < this.list.length; i++) {
                totalPrice += this.list[i].price;
            }
            var avgPrice = totalPrice / this.list.length;
            return avgPrice.toFixed(3);
        }


    }

    var bread = new Product(12345, "bread", 51.999, "03/15/2023");
    console.log(bread.getInfo());
    var banana = new Product(65432, "banana", 179.99, "02/05/2023");
    console.log(banana.getInfo());
    var milk = new Product(66621, "milk", 159.99, "07/23/2023")
    console.log(milk.getInfo());

    var bag1 = new ShoppingBag();
    console.log(bag1.addProduct(bread));









})();

