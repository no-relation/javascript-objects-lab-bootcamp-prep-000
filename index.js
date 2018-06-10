var recipes = new Object();

function updateObjectWithKeyAndValue(object,key,value) {
 return Object.assign({}, object, { [key]})
}

/* object[key] = value;
  return object;*/