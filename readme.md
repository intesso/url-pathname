# url-pathname

returns the url pathname from a url string

# install
```bash
npm install --save url-pathname
```


# use
this function is only of use in the browser since it uses `window.location`.
 
 * you can use it with browserify:
 
 



```javascript
var urlPathname = require('url-pathname');

console.log(urlPathname('http://daringfireball.net/projects/downloads/Markdown_1.0.1.zip'));

// prints out -> /projects/downloads/Markdown_1.0.1.zip

```

 * or include the standalone like this: 
 
 ```html
 <!-- place this script inside your html -->
 <script src="url-pathname.js"></script>
 
 
 <!-- and use the global function `urlPathname()` -->
 
 <script>
    var path = urlPathname('myserver.com/hello/world')
    console.log(path) // prints out: '/hello/world', if you run it from your server `myserver.com`
 
 </script>
 
 ```


# test
```bash
npm test
```

# license
MIT
