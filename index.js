const AwaitAsyncForEach = require('await-async-foreach');
const _ = require('lodash');


const Delay = async (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

(async () => {
  const data = [1, 2, 3, 4];
  let i = 0;
  await AwaitAsyncForEach(data, async (v, k) => {
    await Delay(1000);
    i += 1;
    console.log(v);
  });
  console.log('done', i);
})();
