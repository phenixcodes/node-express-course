// const getData = () => {
//     return new Promise((resolve,reject) => {
//         reject('bad data')
//     })
// }

// const start = async () => {
//     try {
//         const result = await getData()
//         console.log(result)
//     }
//     catch (err) {
//         console.log(`${err} my guy`)
//     }
// }

// start()

// const numbers = 1 + 2

// const addNumbers = () => {
//     return new Promise((resolve,reject) => {
//         if(numbers == 2){
//             resolve(console.log('correct'))
//         }else{
//             reject(console.log('bad data'))
//         }
//     })
// }

// addNumbers()
// .then(() => {console.log('have a great day')})
// .catch((error) => {console.log('something went wrong')})

const numbers = 1 + 3;
const addNumbers = () => {
    return new Promise((resolve, reject) => {
        if (numbers === 2) {
            resolve({
                data: 'correct'
            });
        } else if (numbers === 3) {
            resolve({
                data: 'correct + 1'
            });
        } else {
            reject({
                message: 'no good'
            });
        }
    });
};

// addNumbers()
//  .then(result => console.log(result.data))
//  .catch(error => console.error(error.message));
// (async () => {
//  try {
//      const result = await addNumbers();
//      console.log(result.data);
//  } catch (err) {
//      console.error(err.message);
//  }
// })();

const asyncFunction = async () => {
    try {
        const result = await addNumbers();
        console.log(result.data);
    } catch (err) {
        console.error(err.message);
    }
};
asyncFunction();