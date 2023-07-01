const now = new Date(); // data curenta
console.log(now.getHours(), now.getUTCHours());
console.log(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  now.getHours(),
  now.getMinutes(),
  now.getSeconds()
);

const realTime = now.getTime(); // epoc time
console.log(realTime);

const val1 = 1688230005736 - 30 * 60 * 1000;
const date1 = new Date(val1);
console.log(date1);

const date2 = new Date("1990-03-05 12:35");
const options = { dateStyle: "long", timeStyle: "long" /*weekday: "long"*/ };
console.log(date2.toLocaleString("ro-RO", options), date2.getTimezoneOffset());
