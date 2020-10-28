const getObjectProperty = (obj, path, defaultValue) => {
  let arr = path.split('.');
  let result = arr.reduce((prev, item, arr) => (prev !== undefined) ? prev[item] : false, obj );

  return result || defaultValue

}

const obj = {
  'pupa': {
    'lupa': {
      'beep': 'boop',
    },
    'foo': 'bar',
  },
};

console.log(getObjectProperty(obj, "pupa.lupa"))
console.log(getObjectProperty(obj, "pupa.lupa.beep"))
console.log(getObjectProperty(obj, "pupa.foo"))
console.log(getObjectProperty(obj, "pupa.ne.tuda"))
console.log(getObjectProperty(obj, "pupa.ne.tuda", true))
console.log(getObjectProperty(obj, "pupa.ne.tuda", "Default value"))