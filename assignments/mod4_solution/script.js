// JavaScript Document
// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************


(function () {

var names = ["Yaakov", "John", "Brian", "Jen", "Jason", "Paul", "Frank", "Jesse", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === "j") {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();