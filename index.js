// code your solution here
function saturdayFun(item){
    if (item){
      return (`This Saturday, I want to ${item}!`)  
    }
    else {
        return (`This Saturday, I want to roller-skate!`)
    }
}
const mondayWork = function(item){
    if (item){
      return (`This Monday, I will ${item}.`);  
    }
    else {
        return (`This Monday, I will go to the office.`);
    }
}
mondayWork();
/*
function outer(greeting, msg = "It's a fine day to learn") {
  // 2
  const innerFunction = function (name, lang = "Python") {
    // 3
    return `${greeting}, ${name}! ${msg} ${lang}`; // 4
  };
  return innerFunction("student", "JavaScript"); // 5
}

outer("Hello");

let result = wrapAdjective("||")
let emphatic = result("a dedicated programmer")

*/
function wrapAdjective(special = "*" ) {
    // 2
    const result = function (msg ) {
      // 3
      return `You are ${special}${msg}${special}!`; // 4
    };
    return result; // 5
  }
  

wrapAdjective("%")("a dedicated programmer");
wrapAdjective("||")("a dedicated programmer");