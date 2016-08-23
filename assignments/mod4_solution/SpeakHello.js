// JavaScript Document

(function(window){
	var helloSpeaker = {};
	helloSpeaker.speak = name;
	var speakWord = "Hello";
	helloSpeaker.speak = function(name){
	console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);

