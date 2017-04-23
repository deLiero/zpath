# zpath
create path from string

## samples
```js
var zpath = require("zpath");

// return src\scripts\**\*.js
zpath.make("src scripts ** *.js");

// create paths with root=src and root=build
var src = zpath.create("src");
var build = zpath.create("build");

// return src\scripts\**\*.js
src.make("scripts ** *.ts");

// return src\views\**\*.pug
src.make("views ** *.pug");

// return build
build.make();

// return build\js
build.make("js");
```