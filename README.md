# Colors

Classes for manipulating colors.

## Color

Most of the functionality for the `Color` class comes from the `ColorUtility` class.

```js
const color = new Color('#fba91a');

// Getters
  /** Return if color has opacity. */
  color.hasOpacity
  /** Get color in HSL format without alpha. */
  color.hsl
  /** Get color in HSLA format with any opacity. */
  color.hsla
  /** Get color in RGB format. */
  color.rgb
  /** Get color in RGBA format. */
  color.rgba
  /** Get color in HEX format without alpha. */
  color.hex
  /** Get color in HEX format with any opacity. */
  color.hexAlpha
  /** Get the red of the color. */
  color.red
  /** Get the green of the color. */
  color.green
  /** Get the blue of the color. */
  color.blue
  /** Get the hue of the color. */
  color.hue
  /** Get the saturation of the color. */
  color.saturation
  /** Get the lightness of the color. */
  color.lightness
  /** Get the opacity. */
  color.opacity
  /** Return the opacity in HEX representation. */
  color.opacityAsHex

// Setters
  /** Set the red value of the color [0,255]. */
  color.red = ...
  /** Set the green value of the color [0,255]. */
  color.green = ...
  /** Set the blue value of the color [0,255]. */
  color.blue = ...
  /** Set the hue [0,360]. */
  color.hue = ...
  /** Set the saturation [0,100]. */
  color.saturation = ...
  /** Set the lightness [0,100]. */
  color.lightness = ...
  /** Set the opacity [0,1]. */
  color.opacity = ...

// Methods
  color.set = "#448aff"
  color.set = "rgb(30,40,50,0.5)"
  color.set = "hsl(39,60,40,0.4)"

  /** Clone the color */
  const clone = color.clone()

```

## ColorUtility

All the utility functions to manipulate the colors.

### Top level methods and namespaces

```js
// RGB
ColorUtility.rgb.isValid;
ColorUtility.rgb.validateWithError;
ColorUtility.rgb.isRgba;
ColorUtility.rgb.decomposeNumeric;
ColorUtility.rgb.decompose;
ColorUtility.rgb.clean;
ColorUtility.rgb.compose;
ColorUtility.rgb.get.red;
ColorUtility.rgb.get.green;
ColorUtility.rgb.get.blue;
ColorUtility.rgb.get.opacity;
ColorUtility.rgb.set.red;
ColorUtility.rgb.set.green;
ColorUtility.rgb.set.blue;
ColorUtility.rgb.set.opacity;
ColorUtility.rgb.to.hex;
ColorUtility.rgb.to.hsl;

// HSL
ColorUtility.hsl.isValid;
ColorUtility.hsl.validateWithError;
ColorUtility.hsl.isHsla;
ColorUtility.hsl.decomposeNumeric;
ColorUtility.hsl.decompose;
ColorUtility.hsl.clean;
ColorUtility.hsl.compose;
ColorUtility.hsl.get.hue;
ColorUtility.hsl.get.saturation;
ColorUtility.hsl.get.lightness;
ColorUtility.hsl.get.opacity;
ColorUtility.hsl.set.hue;
ColorUtility.hsl.set.saturation;
ColorUtility.hsl.set.lightness;
ColorUtility.hsl.set.opacity;
ColorUtility.hsl.to.hex;
ColorUtility.hsl.to.rgb;
ColorUtility.hsl.to.hsl;
ColorUtility.hsl.to.hsla;

// HEX
ColorUtility.hex.isValid;
ColorUtility.hex.validateWithError;
ColorUtility.hex.containsAlphaDesignation;
ColorUtility.hex.decompose;
ColorUtility.hex.clean;
ColorUtility.hex.compose;
ColorUtility.hex.get.redAsString;
ColorUtility.hex.get.greenAsString;
ColorUtility.hex.get.blueAsString;
ColorUtility.hex.get.opacityAsString;
ColorUtility.hex.get.redAsNumber;
ColorUtility.hex.get.greenAsNumber;
ColorUtility.hex.get.blueAsNumber;
ColorUtility.hex.get.opacityAsNumber;
ColorUtility.hex.set.red;
ColorUtility.hex.set.green;
ColorUtility.hex.set.blue;
ColorUtility.hex.set.opacity;
ColorUtility.hex.to.rgb;
ColorUtility.hex.to.hsl;
ColorUtility.hex.to.number;

// CSS E.g. red, royalblue etc...
ColorUtility.css.isValid;
ColorUtility.css.validateWithError;
ColorUtility.css.to.hex;
ColorUtility.css.to.hsl;
ColorUtility.css.to.rgb;

// Detects color and delegates to above namespaces
ColorUtility.get.red;
ColorUtility.get.green;
ColorUtility.get.blue;
ColorUtility.get.opacity;
ColorUtility.get.hue;
ColorUtility.get.saturation;
ColorUtility.get.lightness;
ColorUtility.to.hex;
ColorUtility.to.hsl;
ColorUtility.to.rgb;

// Methods
/** Convert opacity to hex. */
fractionToHex;
/** Convert number to hex string. */
numberToHex;
```

## TonalPalette

Create a palette of tones from one key color using the stops recommended my material.io.

```js
const keyColor = new Color('#fba91a');
const palette = new TonalPalette(keyColor);

console.log(palette.keyColor);
console.log(palette.tones);
/* 
An object where the keys are the tones (E.g. 40) and the value is an instance of the Color Class.
*/
```

<div style="text-align:center">
	<div style="background-color:#000000;">0: #000000</div>
	<div style="background-color:#322001;">10: #322001</div>
	<div style="background-color:#644002;">20: #644002</div>
	<div style="background-color:#976002;">30: #976002</div>
	<div style="background-color:#c98003;">40: #c98003</div>
	<div style="background-color:#fba004;color:black;">50: #fba004</div>
	<div style="background-color:#fcb336;color:black;">60: #fcb336</div>
	<div style="background-color:#fdc668;color:black;">70: #fdc668</div>
	<div style="background-color:#fdd99b;color:black">80: #fdd99b</div>
	<div style="background-color:#feeccd;color:black;">85: #feeccd</div>
	<div style="background-color:#fff6e6;color:black;">90: #fff6e6</div>
	<div style="background-color:#fffdfa;color:black;">95: #fffdfa</div>
	<div style="background-color:#ffffff;color:black;">100: #ffffff</div>
</div>
