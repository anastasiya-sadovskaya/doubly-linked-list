const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {}

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

    indexOf(data) {}
}

module.exports = LinkedList;
