const Bull = require('bull');

const myFirstQueue = new Bull('my-first-queue');

const job = myFirstQueue.add({
    foo: 'bar'
});