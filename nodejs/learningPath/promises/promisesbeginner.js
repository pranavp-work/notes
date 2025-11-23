const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('ok that worked!');
    } else {
        reject('oh no something went wrong!');
    }
});

const promsie2 = new Promise((res, rej) => {
    res('hey!');
})

const promise3 = new Promise((res, rej) => {
    // throw Error;
    res('sure!')
})

const promise4 = new Promise((res, rej) => {
    res('ok ok!')
})

Promise.all([promise, promsie2, promise3, promise4]).then(res => console.log(res)).catch(err => console.error(err));

promise4.then(res => console.log(res));