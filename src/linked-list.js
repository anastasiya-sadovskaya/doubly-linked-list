const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    append(data) {}

    head() {
        return this._head.data;
    }

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
