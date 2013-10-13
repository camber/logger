camber-logger
=============

[![Build Status](https://travis-ci.org/camber/logger.png?branch=master)](https://travis-ci.org/camber/logger)


## Usage

```javascript
  var logger1 = new Logger('Cache');
  var logger2 = new Logger('LocalStorage');
  var logger3 = new Logger('Router', '#f0f'); // custom color

  logger1.log("fancy log message");
  logger2.log("another fancy log message");
  logger3.log("#f0f up in your console");
```
[![logger](http://f.cl.ly/items/243y1c2a3J2R0d0d1O1L/Screen%20Shot%202013-10-13%20at%2012.09.43%20AM.png)](http://f.cl.ly/items/243y1c2a3J2R0d0d1O1L/Screen%20Shot%202013-10-13%20at%2012.09.43%20AM.png)


## Todo

- Terminal compatibility
- Safety for browsers that don't support console formatting
- Support for .log(), .warn(), .error(), .debug(), and .todo()
- Documentation


## License

MIT

