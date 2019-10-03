// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultArr = [];

	if ((obj === null) || (typeof obj === "number") || (typeof obj === "boolean")) {
		return '' + obj;
	}
	if (typeof obj === "string") {
		return '"' + obj + '"';
	} else if (Array.isArray(obj)) {
		for ( var i = 0; i < obj.length; ++i) {
			if ((typeof obj[i] === "undefined") || (obj[i] === null) || (typeof obj[i] === "function") || (Number.isNaN(obj[i]))) {
				return 'null';
			} else {
		    	resultArr.push(stringifyJSON(obj[i]));
			};
	    }

	    return '[' + resultArr + ']'

	 } else if (typeof obj === 'object') {
	 	for (var key in obj) {
	 		if (typeof obj[key] === "undefined" || typeof obj[key] === 'function' || typeof obj[key] === 'symbol') {
              return obj[key] = '{}';
	 	}   else {
	 		resultArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
	 	}
	 }
	 	return '{' + resultArr + '}'
   }
};
