// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var everything = document.body;
  var outputArray = [];
  var recursiveCheck = function(nodeList) {
     if (nodeList.classList !== undefined && nodeList.classList.contains(className)) {
      outputArray.push(nodeList)
    }
    if (nodeList.hasChildNodes()) {
      for (var i = 0; i < nodeList.childNodes.length; i++) {
        recursiveCheck(nodeList.childNodes[i]);
      }
    }
  }
  recursiveCheck(everything);
  return outputArray;
};
