//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let message ;

lightBulbStatus === "On" ? message = "Light bulb is On. 💡"
: lightBulbStatus === "Off" ? message = "Light bulb is Off. "
: lightBulbStatus === "Broken" ? message = "Light bulb is Broken. ⛓️‍💥"
: message = `Please choose the correct input (On/Off/Broken)`

console.log(message)