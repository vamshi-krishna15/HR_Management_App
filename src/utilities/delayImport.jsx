


const delayImport =(importFunction, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(importFunction());
    }, delay);
  });
}
export default delayImport;
