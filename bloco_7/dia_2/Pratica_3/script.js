var obj = {
  foo: 'bar',
  baz: 42
};
var pam = Object.entries(obj)[0][1];
//[ 'foo', 'bar' ]

console.log(pam);
//'bar'