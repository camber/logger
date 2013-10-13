((typeof module !== "undefined" && function(m) { module.exports = m(); }) ||
 (function(m) { window.Logger = m(); })
)(function() {

  "use strict";

  // Palette courtesy of http://flatuicolors.com/
  // Shuffled for contrast.
  Logger.colors = [
    "#3498DB", // peter-river
    "#1ABC9C", // turquoise
    "#2C3E50", // midnight-blue
    "#C0392B", // pomegranate
    "#2ECC71", // emerland
    "#D35400", // pumpkin
    "#27AE60", // nephritis
    "#2980B9", // belize-hole
    "#F1C40F", // sun-flower
    "#9B59B6", // amethyst
    "#8E44AD", // wisteria
    "#E67E22", // carrot
    "#34495E", // wet-asphalt
    "#F39C12", // orange
    "#16A085", // green-sea
    "#E74C3C", // alizarin
  ];

  Logger.color = function() {
    var index = this.assigned++ % this.colors.length;
    return this.colors[index];
  };

  // Counter for assigning colors
  Logger.assigned = 0;

  function Logger(name, color) {
    this.name = name;
    this.color = color || Logger.color();
  }

  Logger.prototype.css = function() {
    return "color: " + this.color + "; font-weight: bold;";
  };

  Logger.prototype.formattedArgs = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift("%c[" + this.name + "]", this.css());
    return args;
  };

  Logger.prototype.log = function() {
    var args = this.formattedArgs.apply(this, arguments);
    console.log.apply(console, args);
    return this;
  };

  return Logger;
});

