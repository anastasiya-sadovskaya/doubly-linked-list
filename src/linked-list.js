const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var node = new Node(data);
        if (!this._head){
            this._head = node;
        }else{
            this._tail.next = node;
            node.prev = this._tail;
        }

        this._tail = node;
        this.length += 1;

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {
         return this.length === 0;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {
         var node = this._head;
        for (var i = 0; i < this.length; i++){
            if (data === node.data){
                return i;
            } 
            node = node.next;
        }
        
        return null;
    }
}

module.exports = LinkedList;
