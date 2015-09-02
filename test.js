var test = require('tape');
var urlPathname = require('./index');

test('should contain no domain', function(t){
  var pathname = urlPathname(location.origin + '/projects/downloads/Markdown_1.0.1.zip');
  t.equal(pathname, '/projects/downloads/Markdown_1.0.1.zip');

  t.end();
});

test('should contain no port', function(t){
  var pathname = urlPathname(location.hostname + ':' + location.port + '/files/favicon.ico');
  t.equal(pathname, '/files/favicon.ico');
  t.end();
});


test('should contain domain in query', function(t){
  var pathname = urlPathname(location.origin  + '/search/index/?' + location.origin);
  t.equal(pathname, '/search/index/?' + location.origin);
  t.end();
});
