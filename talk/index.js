var hello = function(name) {
console.log("Some guy named "+ name);
};

var filename = "index.js";
var intro = function() {
 console.log("I am from " + filename);
}

//first part is exported name, 2nd is internal (right here)
module.exports = {
hello : hello,
intro1 : intro,
Tfn : filename  // and we can export vars as well (prolly shouldn't though)
};
