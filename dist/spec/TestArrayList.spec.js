"use strict";
/**
 * @license
 * Copyright Larry Diamond 2017 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayList_1 = require("../src/ArrayList");
describe("Test ArrayList functionality", function () {
    // PetStoreProduct will be used in testing
    var PetStoreProduct = (function () {
        function PetStoreProduct(iName, iPrice) {
            this.productName = iName;
            this.price = iPrice;
        }
        PetStoreProduct.prototype.equals = function (t) {
            if (JSON.stringify(this) === JSON.stringify(t))
                return true;
            return false;
        };
        ;
        PetStoreProduct.prototype.getProductName = function () {
            return this.productName;
        };
        PetStoreProduct.prototype.getPrice = function () {
            return this.price;
        };
        return PetStoreProduct;
    }());
    ;
    var product1 = new PetStoreProduct("Catnip", 4.99);
    var product2 = new PetStoreProduct("ChewToy", 14.99);
    var product3 = new PetStoreProduct("Goldfish", 9.99);
    var productNotAvailable = new PetStoreProduct("Bananas", 0.00); // we have no bananas today
    it("Test Creation state", function () {
        var list = new ArrayList_1.ArrayList();
        expect(list.isEmpty()).toEqual(true);
        expect(list.size()).toEqual(0);
        var collection = list;
        expect(collection.isEmpty()).toEqual(true);
        expect(collection.size()).toEqual(0);
    });
    it("Test Adding some items", function () {
        var arraylist = new ArrayList_1.ArrayList();
        var list = arraylist;
        var collection = list;
        expect(arraylist.contains(product3)).toEqual(false);
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.contains(product2)).toEqual(true);
        expect(arraylist.contains(product3)).toEqual(false);
        expect(arraylist.isEmpty()).toEqual(false);
        expect(arraylist.size()).toEqual(2);
        expect(list.isEmpty()).toEqual(false);
        expect(list.size()).toEqual(2);
        expect(collection.isEmpty()).toEqual(false);
        expect(collection.size()).toEqual(2);
    });
    it("Test clearing the ArrayList", function () {
        var arraylist = new ArrayList_1.ArrayList();
        var list = arraylist;
        var collection = list;
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.isEmpty()).toEqual(false);
        expect(arraylist.size()).toEqual(2);
        expect(list.isEmpty()).toEqual(false);
        expect(list.size()).toEqual(2);
        expect(collection.isEmpty()).toEqual(false);
        expect(collection.size()).toEqual(2);
        arraylist.clear(); // returns void, nothing to expect :(
        expect(arraylist.isEmpty()).toEqual(true);
        expect(arraylist.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
        expect(list.size()).toEqual(0);
        expect(collection.isEmpty()).toEqual(true);
        expect(collection.size()).toEqual(0);
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.isEmpty()).toEqual(false);
        expect(arraylist.size()).toEqual(2);
        expect(list.isEmpty()).toEqual(false);
        expect(list.size()).toEqual(2);
        expect(collection.isEmpty()).toEqual(false);
        expect(collection.size()).toEqual(2);
        list.clear(); // returns void, nothing to expect :(
        expect(arraylist.isEmpty()).toEqual(true);
        expect(arraylist.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
        expect(list.size()).toEqual(0);
        expect(collection.isEmpty()).toEqual(true);
        expect(collection.size()).toEqual(0);
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.isEmpty()).toEqual(false);
        expect(arraylist.size()).toEqual(2);
        expect(list.isEmpty()).toEqual(false);
        expect(list.size()).toEqual(2);
        expect(collection.isEmpty()).toEqual(false);
        expect(collection.size()).toEqual(2);
        collection.clear();
        expect(arraylist.isEmpty()).toEqual(true);
        expect(arraylist.size()).toEqual(0);
        expect(list.isEmpty()).toEqual(true);
        expect(list.size()).toEqual(0);
        expect(collection.isEmpty()).toEqual(true);
        expect(collection.size()).toEqual(0);
    });
    it("Test get", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        var index0 = arraylist.get(0);
        var index1 = arraylist.get(1);
        expect(product1.equals(index0)).toEqual(true);
        expect(product1.equals(index1)).toEqual(false);
        expect(product2.equals(index0)).toEqual(false);
        expect(product2.equals(index1)).toEqual(true);
    });
    it("Test indexof", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.indexOf(product1)).toEqual(0);
        expect(arraylist.indexOf(product2)).toEqual(1);
        expect(arraylist.indexOf(product3)).toEqual(-1);
    });
    it("Test set", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        var oldElement = arraylist.set(1, product3);
        expect(oldElement).toEqual(product2);
        expect(arraylist.indexOf(product1)).toEqual(0);
        expect(arraylist.indexOf(product2)).toEqual(-1);
        expect(arraylist.indexOf(product3)).toEqual(1);
    });
    it("Test java iteration", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        var offset = 0;
        for (var iter = arraylist.iterator(); iter.hasNext();) {
            var psp = iter.next();
            if (offset === 0)
                expect(psp.getProductName()).toEqual(product1.getProductName());
            if (offset === 1)
                expect(psp.getProductName()).toEqual(product2.getProductName());
            if (offset > 1)
                fail();
            offset++;
        }
    });
    it("Test addElement at front of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        arraylist.addElement(0, product3);
        expect(arraylist.size()).toEqual(3);
        expect(arraylist.indexOf(product1)).toEqual(1);
        expect(arraylist.indexOf(product2)).toEqual(2);
        expect(arraylist.indexOf(product3)).toEqual(0);
    });
    it("Test addElement in middle of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        arraylist.addElement(1, product3);
        expect(arraylist.size()).toEqual(3);
        expect(arraylist.indexOf(product1)).toEqual(0);
        expect(arraylist.indexOf(product2)).toEqual(2);
        expect(arraylist.indexOf(product3)).toEqual(1);
    });
    it("Test addElement at end of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        arraylist.addElement(2, product3);
        expect(arraylist.size()).toEqual(3);
        expect(arraylist.indexOf(product1)).toEqual(0);
        expect(arraylist.indexOf(product2)).toEqual(1);
        expect(arraylist.indexOf(product3)).toEqual(2);
    });
    it("Test remove at front of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.add(product3)).toEqual(true);
        expect(arraylist.remove(0)).toEqual(product1);
        expect(arraylist.size()).toEqual(2);
        expect(arraylist.indexOf(product1)).toEqual(-1);
        expect(arraylist.indexOf(product2)).toEqual(0);
        expect(arraylist.indexOf(product3)).toEqual(1);
    });
    it("Test remove in middle of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.add(product3)).toEqual(true);
        expect(arraylist.remove(1)).toEqual(product2);
        expect(arraylist.size()).toEqual(2);
        expect(arraylist.indexOf(product1)).toEqual(0);
        expect(arraylist.indexOf(product2)).toEqual(-1);
        expect(arraylist.indexOf(product3)).toEqual(1);
    });
    it("Test remove at end of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.add(product3)).toEqual(true);
        expect(arraylist.remove(2)).toEqual(product3);
        expect(arraylist.size()).toEqual(2);
        expect(arraylist.indexOf(product1)).toEqual(0);
        expect(arraylist.indexOf(product2)).toEqual(1);
        expect(arraylist.indexOf(product3)).toEqual(-1);
    });
    it("Test removeElement at front of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.add(product3)).toEqual(true);
        expect(arraylist.removeElement(product1)).toEqual(true);
        expect(arraylist.size()).toEqual(2);
        expect(arraylist.indexOf(product1)).toEqual(-1);
        expect(arraylist.indexOf(product2)).toEqual(0);
        expect(arraylist.indexOf(product3)).toEqual(1);
    });
    it("Test removeElement in middle of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.add(product3)).toEqual(true);
        expect(arraylist.removeElement(product2)).toEqual(true);
        expect(arraylist.size()).toEqual(2);
        expect(arraylist.indexOf(product1)).toEqual(0);
        expect(arraylist.indexOf(product2)).toEqual(-1);
        expect(arraylist.indexOf(product3)).toEqual(1);
    });
    it("Test removeElement at end of list", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.add(product3)).toEqual(true);
        expect(arraylist.removeElement(product3)).toEqual(true);
        expect(arraylist.size()).toEqual(2);
        expect(arraylist.indexOf(product1)).toEqual(0);
        expect(arraylist.indexOf(product2)).toEqual(1);
        expect(arraylist.indexOf(product3)).toEqual(-1);
    });
    it("Test duplicates in array", function () {
        var arraylist = new ArrayList_1.ArrayList();
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.add(product2)).toEqual(true);
        expect(arraylist.add(product3)).toEqual(true);
        expect(arraylist.add(product1)).toEqual(true);
        expect(arraylist.size()).toEqual(4);
        expect(arraylist.removeElement(product1)).toEqual(true);
        expect(arraylist.size()).toEqual(3);
        expect(arraylist.indexOf(product1)).toEqual(2);
        expect(arraylist.indexOf(product2)).toEqual(0);
        expect(arraylist.indexOf(product3)).toEqual(1);
        arraylist.add(product3);
        expect(arraylist.size()).toEqual(4);
        expect(arraylist.indexOf(product3)).toEqual(1);
        expect(arraylist.removeElement(product3)).toEqual(true);
        expect(arraylist.size()).toEqual(3);
        expect(arraylist.indexOf(product1)).toEqual(1);
        expect(arraylist.indexOf(product2)).toEqual(0);
        expect(arraylist.indexOf(product3)).toEqual(2);
        expect(arraylist.removeElement(productNotAvailable)).toEqual(false);
    });
    /*
      it("Easy iteration", function () {
        let arraylist:ArrayList<PetStoreProduct> = new ArrayList<PetStoreProduct> ();
    
        arraylist.add (product1);
        arraylist.add (product2);
    
        let offset:number = 0;
    
        arraylist.for (thisElement => {
          if (offset === 0)
            expect (thisElement.productName).toEqual (product1.productName);
          if (offset === 1)
            expect (thisElement.productName).toEqual (product2.productName);
          if (offset > 1)
            fail();
    
            offset++;
        });
      });
    */
});