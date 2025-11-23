const promisify = ( item, delay ) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(item)
        }, delay);
    })
}

const a = () => promisify('a', 5000);
const b = () => promisify('b', 7000);
const c = () => promisify('c', 80);

async function parallel () {
    const promises = [a(), b(), c()];
    const [promise1, promise2, promise3] = await Promise.all(promises);
    return `parallel is done; promise1: ${promise1}, promise2: ${promise2}, promise3: ${promise3}`;
}

async function race () {
    const promises = [ a(), b(), c() ];
    const promiseRaced = await Promise.race(promises);
    return `race result: ${promiseRaced}`;
}

async function sequence () {
    const promise1 = await a();
    const promise2 = await b();
    const promise3 = await c();

    return `sequence is done; promise1: ${promise1}, promise2: ${promise2}, promise3: ${promise3}}`;
}

parallel().then(console.log);
sequence().then(console.log);
race().then(console.log);