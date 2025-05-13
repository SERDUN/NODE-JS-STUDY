// Homework 3
// All the constants contain copy-paste code — that is, each time we write new Promise with a setTimeout() inside it.
// We need to create a function that takes a time argument. Then, using setTimeout(), resolve the promise.

// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('First promise resolved after 1 second');
//    }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('Second promise resolved after 2 seconds');
//    }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('Third promise resolved after 3 seconds');
//    }, 3000);
// });


// Implements the task's technical requirements.

const delay = (time) => new Promise((resolve) => {
    setTimeout(() => resolve(`Promise resolved after ${time / 1000} seconds`), time);
});


// delay(3000).then((result) => console.log(result));
// delay(2000).then((result) => console.log(result));
// delay(1000).then((result) => console.log(result));

(async () => {
    console.log(await delay(3000));
    console.log(await delay(2000));
    console.log(await delay(1000));
    console.log('All promises resolved');
})();
