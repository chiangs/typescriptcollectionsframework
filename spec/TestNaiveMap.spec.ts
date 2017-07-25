/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
*/

import {BasicMapEntry} from "../src/BasicMapEntry";
import {Collectable} from "../src/Collectable";
import {CollectionUtils} from "../src/CollectionUtils";
import {Comparator} from "../src/Comparator";
import {NaiveMap} from "../src/NaiveMap";

describe("Test NaiveMap functionality", function() {

  // PetStoreProduct will be used in testing
  class PetStoreProduct {
    private productName:string;
    private price:number;

    public constructor (iName:string, iPrice:number) {
      this.productName = iName;
      this.price = iPrice;
    }

    public getProductName ():string {
      return this.productName;
    }

    public getPrice():number {
      return this.price;
    }
  };

  let product1:PetStoreProduct = new PetStoreProduct("ChewToy", 14.99);
  let product2:PetStoreProduct = new PetStoreProduct("Catnip", 4.99);
  let product3:PetStoreProduct = new PetStoreProduct("Goldfish", 9.99);

  let alphabeticalSortPetStoreProduct:Comparator<PetStoreProduct> = {
    compare(o1:PetStoreProduct, o2:PetStoreProduct) : number {
      if (o1 === o2)
        return 0;
      if (o1 === null)
        return -1;
      if (o1 === undefined)
        return -1;
      if (o2 === null)
        return 1;
      if (o2 === undefined)
        return 1;
      if (o1.getProductName() === o2.getProductName())
        return 0;
      if (o1.getProductName() === null)
        return -1;
      if (o1.getProductName() === undefined)
        return -1;
      if (o2.getProductName() === null)
        return 1;
      if (o2.getProductName() === undefined)
        return 1;

      if (o1.getProductName() < o2.getProductName())
        return -1;

      return 1;
    }
  }

  let priceSortPetStoreProduct:Comparator<PetStoreProduct> = {
    compare(o1:PetStoreProduct, o2:PetStoreProduct) : number {
      if (o1 === o2)
        return 0;
      if (o1 === null)
        return -1;
      if (o1 === undefined)
        return -1;
      if (o2 === null)
        return 1;
      if (o2 === undefined)
        return 1;
      if (o1.getPrice() === o2.getPrice())
        return 0;
      if (o1.getPrice() === null)
        return -1;
      if (o1.getPrice() === undefined)
        return -1;
      if (o2.getPrice() === null)
        return 1;
      if (o2.getPrice() === undefined)
        return 1;

      if (o1.getPrice() < o2.getPrice())
        return -1;

      return 1;
    }
  }

  // Wanted to show a class in the value object but anything would work fine
  class ValueClass {
    blah1:number;
    blah2:string;

    constructor (blah1 = 100) {
    }
  }

  it("Test Creation state", function() {
    let naiveMap1:NaiveMap<PetStoreProduct,ValueClass> = new NaiveMap<PetStoreProduct,ValueClass> (alphabeticalSortPetStoreProduct);
    expect (naiveMap1.size ()).toEqual(0);
    expect (naiveMap1.firstKey()).toEqual(null);
    expect (naiveMap1.firstEntry()).toEqual(null);
    expect (naiveMap1.lastKey()).toEqual(null);
    expect (naiveMap1.lastEntry()).toEqual(null);

    let naiveMap2:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    expect (naiveMap2.size ()).toEqual(0);
    expect (naiveMap2.firstKey()).toEqual(null);
    expect (naiveMap2.firstEntry()).toEqual(null);
    expect (naiveMap2.lastKey()).toEqual(null);
    expect (naiveMap2.lastEntry()).toEqual(null);
  });

  it("Test Adding one item", function() {
    let petStoreMap1:NaiveMap<PetStoreProduct,ValueClass> = new NaiveMap<PetStoreProduct,ValueClass> (alphabeticalSortPetStoreProduct);
    expect (petStoreMap1.put (product1, new ValueClass())).toEqual(null);
    expect (petStoreMap1.size ()).toEqual(1);
    expect (petStoreMap1.firstKey()).toEqual(product1);
    expect (petStoreMap1.firstEntry()).toEqual(new BasicMapEntry<PetStoreProduct,ValueClass>(product1, new ValueClass()));
    expect (petStoreMap1.lastKey()).toEqual(product1);
    expect (petStoreMap1.lastEntry()).toEqual(new BasicMapEntry<PetStoreProduct,ValueClass>(product1, new ValueClass()));
  });

  it("Test Adding one native item", function() {
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    expect (basicTypesMap1.put ("ChewToy", 14.99)).toEqual(null);
    expect (basicTypesMap1.size ()).toEqual(1);
    expect (basicTypesMap1.firstKey()).toEqual("ChewToy");
    expect (basicTypesMap1.firstEntry()).toEqual(new BasicMapEntry<string,number>("ChewToy", 14.99));
    expect (basicTypesMap1.lastKey()).toEqual("ChewToy");
    expect (basicTypesMap1.lastEntry()).toEqual(new BasicMapEntry<string,number>("ChewToy", 14.99));
  });

  it("Test Adding two items", function() {
    let petStoreMap1:NaiveMap<PetStoreProduct,ValueClass> = new NaiveMap<PetStoreProduct,ValueClass> (alphabeticalSortPetStoreProduct);
    expect (petStoreMap1.put (product1, new ValueClass())).toEqual(null);
    expect (petStoreMap1.size ()).toEqual(1);
    expect (petStoreMap1.firstKey()).toEqual(product1);
    expect (petStoreMap1.firstEntry()).toEqual(new BasicMapEntry<PetStoreProduct,ValueClass>(product1, new ValueClass()));
    expect (petStoreMap1.lastKey()).toEqual(product1);
    expect (petStoreMap1.lastEntry()).toEqual(new BasicMapEntry<PetStoreProduct,ValueClass>(product1, new ValueClass()));

    expect (petStoreMap1.put (product2, new ValueClass(10))).toEqual(null);
    expect (petStoreMap1.size ()).toEqual(2);
    expect (petStoreMap1.firstKey()).toEqual(product2);
    expect (petStoreMap1.firstEntry()).toEqual(new BasicMapEntry<PetStoreProduct,ValueClass>(product2, new ValueClass(10)));
    expect (petStoreMap1.lastKey()).toEqual(product1);
    expect (petStoreMap1.lastEntry()).toEqual(new BasicMapEntry<PetStoreProduct,ValueClass>(product1, new ValueClass()));
  });

  it("Test Adding two native items", function() {
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    expect (basicTypesMap1.put ("ChewToy", 14.99)).toEqual(null);
    expect (basicTypesMap1.size ()).toEqual(1);
    expect (basicTypesMap1.firstKey()).toEqual("ChewToy");
    expect (basicTypesMap1.firstEntry()).toEqual(new BasicMapEntry<string,number>("ChewToy", 14.99));
    expect (basicTypesMap1.lastKey()).toEqual("ChewToy");
    expect (basicTypesMap1.lastEntry()).toEqual(new BasicMapEntry<string,number>("ChewToy", 14.99));

    expect (basicTypesMap1.put ("Catnip", 4.99)).toEqual(null);
    expect (basicTypesMap1.size ()).toEqual(2);
    expect (basicTypesMap1.firstKey()).toEqual("Catnip");
    expect (basicTypesMap1.firstEntry()).toEqual(new BasicMapEntry<string,number>("Catnip", 4.99));
    expect (basicTypesMap1.lastKey()).toEqual("ChewToy");
    expect (basicTypesMap1.lastEntry()).toEqual(new BasicMapEntry<string,number>("ChewToy", 14.99));
  });

  it("Test ContainsKey where the item is contained", function() {
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    expect (basicTypesMap1.put ("ChewToy", 14.99)).toEqual(null);
    expect (basicTypesMap1.put ("Catnip", 4.99)).toEqual(null);
    expect (basicTypesMap1.containsKey ("Catnip")).toEqual (true);
  });

  it("Test ContainsKey where the item is not contained", function() {
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    expect (basicTypesMap1.put ("ChewToy", 14.99)).toEqual(null);
    expect (basicTypesMap1.put ("Catnip", 4.99)).toEqual(null);
    expect (basicTypesMap1.containsKey ("Bananas")).toEqual (false);  // I guess we have no bananas today
  });

  it("Test ContainsKey where the item is contained", function() {
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    expect (basicTypesMap1.put ("ChewToy", 14.99)).toEqual(null);
    expect (basicTypesMap1.put ("Catnip", 4.99)).toEqual(null);
    expect (basicTypesMap1.containsKey ("Catnip")).toEqual (true);
  });

  it("Test ContainsKey where the item is not contained", function() {
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    expect (basicTypesMap1.put ("ChewToy", 14.99)).toEqual(null);
    expect (basicTypesMap1.put ("Catnip", 4.99)).toEqual(null);
    expect (basicTypesMap1.containsKey ("Bananas")).toEqual (false);  // I guess we have no bananas today
  });

  it("Test Adding three native items", function() {
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    basicTypesMap1.printMap();

    expect (basicTypesMap1.put ("ChewToy", 14.99)).toEqual(null);
    expect (basicTypesMap1.size ()).toEqual(1);
    expect (basicTypesMap1.firstKey()).toEqual("ChewToy");
    expect (basicTypesMap1.firstEntry()).toEqual(new BasicMapEntry<string,number>("ChewToy", 14.99));
    expect (basicTypesMap1.lastKey()).toEqual("ChewToy");
    expect (basicTypesMap1.lastEntry()).toEqual(new BasicMapEntry<string,number>("ChewToy", 14.99));

    expect (basicTypesMap1.put ("Catnip", 4.99)).toEqual(null);
    expect (basicTypesMap1.size ()).toEqual(2);
    expect (basicTypesMap1.firstKey()).toEqual("Catnip");
    expect (basicTypesMap1.firstEntry()).toEqual(new BasicMapEntry<string,number>("Catnip", 4.99));
    expect (basicTypesMap1.lastKey()).toEqual("ChewToy");
    expect (basicTypesMap1.lastEntry()).toEqual(new BasicMapEntry<string,number>("ChewToy", 14.99));

    expect (basicTypesMap1.put ("Leash", 1.99)).toEqual(null);
    expect (basicTypesMap1.size ()).toEqual(3);
    expect (basicTypesMap1.firstKey()).toEqual("Catnip");
    expect (basicTypesMap1.firstEntry()).toEqual(new BasicMapEntry<string,number>("Catnip", 4.99));
    expect (basicTypesMap1.lastKey()).toEqual("Leash");
    expect (basicTypesMap1.lastEntry()).toEqual(new BasicMapEntry<string,number>("Leash", 1.99));
  });

  it("Test Adding some items", function() {
    let petStoreMap1:NaiveMap<PetStoreProduct,ValueClass> = new NaiveMap<PetStoreProduct,ValueClass> (alphabeticalSortPetStoreProduct);
    let petStoreMap2:NaiveMap<PetStoreProduct,ValueClass> = new NaiveMap<PetStoreProduct,ValueClass> (priceSortPetStoreProduct);
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    let basicTypesMap2:NaiveMap<number,string> = new NaiveMap<number,string>(CollectionUtils.getNumberComparator());

    expect (petStoreMap1.put (product1, new ValueClass())).toEqual(null);
    expect (petStoreMap1.put (product2, new ValueClass(10))).toEqual(null);
    expect (petStoreMap1.put (product3, new ValueClass())).toEqual(null);
    expect (petStoreMap1.size ()).toEqual(3);

    expect (petStoreMap2.put (product1, new ValueClass())).toEqual(null);
    expect (petStoreMap2.put (product2, new ValueClass())).toEqual(null);
    expect (petStoreMap2.size ()).toEqual(2);

    expect (basicTypesMap1.put ("ChewToy", 14.99)).toEqual(null);
    expect (basicTypesMap1.put ("Catnip", 4.99)).toEqual(null);
    expect (basicTypesMap1.put ("Goldfish", 9.99)).toEqual(null);
    expect (basicTypesMap1.put ("AAAAA", 0.99)).toEqual(null);
    expect (basicTypesMap1.size ()).toEqual(4);

    let oldPrice:number = basicTypesMap1.put ("ChewToy", 9.99);
    expect (oldPrice).toEqual (14.99);
    expect (basicTypesMap1.size ()).toEqual(4);
    expect (basicTypesMap1.get ("Catnip")).toEqual (4.99);
    expect (basicTypesMap1.put ("Catnip", 5.99)).toEqual (4.99);
    expect (basicTypesMap1.size ()).toEqual(4);
    expect (basicTypesMap1.get ("Catnip")).toEqual (5.99);

    expect (basicTypesMap2.put (14.99, "ChewToy")).toEqual(null);
    expect (basicTypesMap2.put (4.99, "Catnip")).toEqual(null);
    expect (basicTypesMap2.put (9.99, "Goldfish")).toEqual(null);
    expect (basicTypesMap2.put (0.99, "AAAAA")).toEqual(null);
    expect (basicTypesMap2.put (0.99, "BBBBB")).toEqual("AAAAA");
    expect (basicTypesMap2.size ()).toEqual(4);
  });




});