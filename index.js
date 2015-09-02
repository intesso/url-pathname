module.exports = function urlPathname(src) {

  var rules = [
    [new RegExp('^' + location.origin), ''],
    [new RegExp('^' + location.host), '']
  ];

  rules.forEach(function(rule) {
    src = src.replace(rule[0], rule[1]);
  });

  return src;

};
