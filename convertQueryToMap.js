// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  let result = {};
  query.split('&').forEach(component => {
    component = component.split('=').map(decodeURIComponent);;
    setDescendantProp(result, component[0], component[1])
  })
  return result;
}

function setDescendantProp(obj, desc, val) {
  let temp = obj;
  var arr = desc.split('.');
  while (arr.length) {
    temp[arr[0]] = arr.length !== 1 ? temp[arr[0]] || {} : val;
    temp = temp[arr.shift()];
  }
}

convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue');
// convertQueryToMap('a=a%26b%3Dc%3F');