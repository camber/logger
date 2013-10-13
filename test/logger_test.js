require('should');

var Logger = require('../');

describe("Logger#color", function() {
  var colors = Logger.colors;

  before(function() {
    Logger.assigned = 0;
    Logger.colors = ["#f0f", "#0f0", "#00f"];
  });

  after(function() {
    Logger.colors = colors;
  });

  it("stores the color if one is provided", function() {
    (new Logger('Router', '#f0f')).color.should.eql('#f0f');
  })

  it("assigns a color if one isn't provided", function() {
    (new Logger).color.should.eql('#f0f');
    (new Logger).color.should.eql('#0f0');
    (new Logger).color.should.eql('#00f');

    // More instances than known colors.
    // Should loop around and start over.
    (new Logger).color.should.eql('#f0f');
    (new Logger).color.should.eql('#0f0');
    (new Logger).color.should.eql('#00f');
  })
})

describe("Logger#css", function() {
  it("returns css for formatting the label", function() {
    var logger = new Logger('Router', '#f0f');
    logger.css().should.eql("color: #f0f; font-weight: bold;");
  })
})

describe("Logger#formattedArgs", function() {
  it("returns formatted arguments for the log when the agent supports it", function() {
    var logger = new Logger('Router', '#f0f');
    logger.formattedArgs("a string", ['an array'], {an: 'object'}).should.eql(
      ["%c[Router]", "color: #f0f; font-weight: bold;", "a string", ['an array'], {an: 'object'}]
    )
  })
})

