let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

if (minute >= 45) {
    console.log(hour, minute - 45);
} else if (minute < 45) {
    if (hour === 0) {
        console.log(23, minute + 15);
    } else {
        console.log(hour - 1, minute + 15);
    }
}
