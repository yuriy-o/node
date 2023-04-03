const cowsay = require('cowsay');
const os = require('os');

const platform = os.platform();

console.log(platform);

// console.log(cowsay.say({ text: 'Hello' }));

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: 'Oo',
    T: 'U ',
  })
);
// console.log(
//   cowsay.say({
//     text: 'hello',
//     cow: '', // Template for a cow, get inspiration from `./cows`
//     e: '(O-O)', // Select the appearance of the cow's eyes, equivalent to cowsay -e
//     tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to cowsay -T
//     wrap: false, // If it is specified, the given message will not be word-wrapped. equivalent to cowsay -n
//     wrapLength: 40, // Specifies roughly where the message should be wrapped. equivalent to cowsay -W
//     mode: 'b', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
//   })
// );
