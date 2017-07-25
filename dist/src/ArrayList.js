"use strict";
/**
 * @license
 * Copyright Larry Diamond 2017 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BasicIteratorResult_1 = require("./BasicIteratorResult");
var ArrayList = (function () {
    function ArrayList() {
        this.elements = null;
        this.sizeValue = 0;
    }
    /**
     * Appends the specified element to the end of this list
     * @param {T} t element to Append
     * @return {boolean} true if this collection changed as a result of the call
     */
    ArrayList.prototype.add = function (t) {
        if (this.elements === null) {
            this.elements = new Array();
        }
        this.elements.push(t);
        this.sizeValue = this.sizeValue + 1;
        return true;
    };
    /**
     * Inserts the specified element at the specified position in this list. Shifts the element currently at that position (if any) and any subsequent elements to the right (adds one to their indices).
     * @param {number} index index at which the specified element is to be inserted
     * @param {T} t element to be inserted
     */
    ArrayList.prototype.addElement = function (index, t) {
        if (this.elements === null) {
            this.elements = new Array();
        }
        this.elements.splice(index, 0, t);
        this.sizeValue = this.sizeValue + 1;
    };
    /**
     * Removes the element at the specified position in this list. Shifts any subsequent elements to the left (subtracts one from their indices).
     * @param {number} index the index of the element to be removed
     * @return {T} the element that was removed from the list, undefined if the element does not exist
     */
    ArrayList.prototype.remove = function (index) {
        if (this.elements === null) {
            return undefined;
        }
        var element = this.elements[index];
        this.elements.splice(index, 1);
        this.sizeValue = this.sizeValue - 1;
        return element;
    };
    /**
     * Removes all of the elements from this list. The list will be empty after this call returns.
     */
    ArrayList.prototype.clear = function () {
        this.elements = new Array();
        this.sizeValue = 0;
    };
    /**
     * Returns the element at the specified position in this list.
     * @param {number} index index of the element to return
     * @return {T} the element at the specified position in this list
     */
    ArrayList.prototype.get = function (index) {
        return this.elements[index];
    };
    /**
     * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     * @param {T} t element to search for
     * @return {number} the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element
     */
    ArrayList.prototype.indexOf = function (t) {
        if (this.elements === null)
            return -1;
        if (this.sizeValue <= 0)
            return -1;
        for (var loop = 0; loop < this.sizeValue; loop++) {
            var e = this.get(loop);
            if (e.equals(t))
                return loop;
        }
        return -1;
    };
    /**
     * Returns true if this list contains the specified element.
     * @param {T} t element whose presence in this list is to be tested
     * @return {boolean} true if this list contains the specified element
     */
    ArrayList.prototype.contains = function (t) {
        if (this.indexOf(t) === -1)
            return false;
        return true;
    };
    /**
     * Removes the first occurrence of the specified element from this list, if it is present. If the list does not contain the element, it is unchanged. More formally, removes the element with the lowest index i such that (o==null ? get(i)==null : o.equals(get(i))) (if such an element exists). Returns true if this list contained the specified element (or equivalently, if this list changed as a result of the call).
     * @param {T} t element to be removed from this list, if present
     * @return {T} true if this list contained the specified element
     */
    ArrayList.prototype.removeElement = function (t) {
        if (this.elements === null) {
            return false;
        }
        var offset = this.indexOf(t);
        if (offset === -1)
            return false;
        this.remove(offset);
        return true;
    };
    /**
     * Returns true if this list contains no elements.
     * @return {boolean} true if this list contains no elements
     */
    ArrayList.prototype.isEmpty = function () {
        if (this.sizeValue === 0)
            return true;
        return false;
    };
    /**
     * Replaces the element at the specified position in this list with the specified element.
     * @param {number} index index of the element to replace
     * @param {T} element element to be stored at the specified position
     * @return {number} the element previously at the specified position
     */
    ArrayList.prototype.set = function (index, element) {
        var tmp = this.elements[index];
        this.elements[index] = element;
        return tmp;
    };
    /**
     * Returns the number of elements in this list.
     * @return {number} the number of elements in this list
     */
    ArrayList.prototype.size = function () {
        return this.sizeValue;
    };
    /**
     * Returns a Java style iterator
     * @return {JIterator<T>} the Java style iterator
     */
    ArrayList.prototype.iterator = function () {
        return new ArrayListJIterator(this);
    };
    /**
     * Returns a TypeScript style iterator
     * @return {Iterator<T>} the TypeScript style iterator
     */
    ArrayList.prototype[Symbol.iterator] = function () {
        return new ArrayListIterator(this);
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
/* Java style iterator */
var ArrayListJIterator = (function () {
    function ArrayListJIterator(iArrayList) {
        this.offset = 0;
        this.arraylist = iArrayList;
    }
    ArrayListJIterator.prototype.hasNext = function () {
        if (this.offset < this.arraylist.size())
            return true;
        return false;
    };
    ArrayListJIterator.prototype.next = function () {
        return this.arraylist.get(this.offset++);
    };
    return ArrayListJIterator;
}());
exports.ArrayListJIterator = ArrayListJIterator;
/* TypeScript iterator */
var ArrayListIterator = (function () {
    function ArrayListIterator(iArrayList) {
        this.offset = 0;
        this.arraylist = iArrayList;
    }
    ArrayListIterator.prototype.next = function (value) {
        if (this.offset < this.arraylist.size()) {
            return new BasicIteratorResult_1.BasicIteratorResult(false, this.arraylist.get(this.offset++));
        }
        else {
            return new BasicIteratorResult_1.BasicIteratorResult(true, null);
        }
    };
    return ArrayListIterator;
}());
exports.ArrayListIterator = ArrayListIterator;