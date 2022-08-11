// code your solution here
//first
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");

//second
const mondayWork = function (activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}
mondayWork();
mondayWork("work from home");

//third
function wrapAdjective(name) {
     return function (string) {
      return (`You are ${name}${string}${name}!`);
    };

}

wrapAdjective("*")("a hard worker");
wrapAdjective("||")("a dedicate programer");
