/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
*/

import {AllFieldCollectable} from "../src/AllFieldCollectable";
import {ArrayList} from "../src/ArrayList";
import {Collections} from "../src/Collections";
import {LinkedList} from "../src/LinkedList";
import {PriorityQueue} from "../src/PriorityQueue";
import {Queue} from "../src/Queue";
import {TestBoolean, TestString} from 'jasts';

describe("Test Queue functionality", function() {

  it("Test empty queues", function() {
    const al:ArrayList<string> = new ArrayList<string> (new AllFieldCollectable());
    const ll:LinkedList<string> = new LinkedList<string> (new AllFieldCollectable());

    testEmptyQueue(al, "ArrayList");
    testEmptyQueue(ll, "LinkedList");
    testEmptyQueue(new PriorityQueue<string> (Collections.getStringComparator()), "PriorityQueue");
  });

  it("Test adding items to queues", function() {
    const al:ArrayList<string> = new ArrayList<string> (new AllFieldCollectable());
    const ll:LinkedList<string> = new LinkedList<string> (new AllFieldCollectable());

    testAddToQueue(al, "ArrayList");
    testAddToQueue(ll, "LinkedList");
    testAddToQueue(new PriorityQueue<string> (Collections.getStringComparator()), "PriorityQueue");
  });

  it("Test offering items to queues", function() {
    const al:ArrayList<string> = new ArrayList<string> (new AllFieldCollectable());
    const ll:LinkedList<string> = new LinkedList<string> (new AllFieldCollectable());

    testOfferToQueue(al, "ArrayList");
    testOfferToQueue(ll, "LinkedList");
    testOfferToQueue(new PriorityQueue<string> (Collections.getStringComparator()), "PriorityQueue");
  });

  it("Test polling items from queues", function() {
    const al:ArrayList<string> = new ArrayList<string> (new AllFieldCollectable());
    const ll:LinkedList<string> = new LinkedList<string> (new AllFieldCollectable());

    testPollFromQueue(al, "ArrayList");
    testPollFromQueue(ll, "LinkedList");
    testPollFromQueue(new PriorityQueue<string> (Collections.getStringComparator()), "PriorityQueue");
  });

  it("Test removing items from queues", function() {
    const al:ArrayList<string> = new ArrayList<string> (new AllFieldCollectable());
    const ll:LinkedList<string> = new LinkedList<string> (new AllFieldCollectable());

    testRemoveFromQueue(al, "ArrayList");
    testRemoveFromQueue(ll, "LinkedList");
    testRemoveFromQueue(new PriorityQueue<string> (Collections.getStringComparator()), "PriorityQueue");
  });

});

function testEmptyQueue (queue:Queue<string>, prefix:string) : void {
  TestString.null (prefix + " peek returns null for empty queue", queue.peek());
  TestString.null (prefix + " poll returns null for empty queue", queue.poll());
  TestString.undefined (prefix + " removeQueue returns undefined for empty queue", queue.removeQueue());
  TestString.undefined (prefix + " element returns undefined for empty queue", queue.element());
  TestString.null (prefix + " second peek returns null for empty queue", queue.peek());
  TestString.null (prefix + " second poll returns null for empty queue", queue.poll());
  TestString.undefined (prefix + " second removeQueue returns undefined for empty queue", queue.removeQueue());
  TestString.undefined (prefix + " second element returns undefined for empty queue", queue.element());
}

function testAddToQueue (queue:Queue<string>, prefix:string) : void {
  TestBoolean.true (prefix + " add should return true", queue.add ("first"));
  TestString.equals (prefix + " peek returns first for queue containing only first", queue.peek(), "first");
  TestString.equals (prefix + " element returns first for queue containing only first", queue.element(), "first");
  TestString.equals (prefix + " second peek returns first for queue containing only first", queue.peek(), "first");
  TestString.equals (prefix + " second element returns first for queue containing only first", queue.element(), "first");
}

function testOfferToQueue (queue:Queue<string>, prefix:string) : void {
  TestBoolean.true (prefix + " offer should return true", queue.offer ("first"));
  TestString.equals (prefix + " peek returns first for queue containing only first", queue.peek(), "first");
  TestString.equals (prefix + " element returns first for queue containing only first", queue.element(), "first");
  TestString.equals (prefix + " second peek returns first for queue containing only first", queue.peek(), "first");
  TestString.equals (prefix + " second element returns first for queue containing only first", queue.element(), "first");
}

function testPollFromQueue (queue:Queue<string>, prefix:string) : void {
  queue.add ("first");
  TestString.equals (prefix + " poll returns first for queue containing only first", queue.poll(), "first");
  testEmptyQueue (queue, prefix);
}

function testRemoveFromQueue (queue:Queue<string>, prefix:string) : void {
  queue.add ("first");
  TestString.equals (prefix + " poll returns first for queue containing only first", queue.removeQueue(), "first");
  testEmptyQueue (queue, prefix);
}
