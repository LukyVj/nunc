/*
 * Get the average color of an image by painting it to a canvas element
 * and sampling (some of) the pixel color values.
 *
 * A jQuery-wrapped, easier to re-use version of this StackOverflow answer:
 * http://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript
 *
 *
 * FROM https://github.com/fblee/jquery.average-color
 */
 (function ($) {

    $.fn.averageColor = function () {
        var blockSize = 5, // only sample every 5 pixels
            defaultRGB = {r: 0, g: 0, b: 0}, // for non-supporting environments
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data, width, height,
            i = -4,
            length,
            rgb = {r: 0, g: 0, b: 0},
            count = 0;

            if (!context) {
              console.log('default')
              return defaultRGB;
              
          }

          console.log(this);

          console.log(this[0]);

          console.log(this[0].naturalHeight);
          console.log(this[0].naturalWidth);

          h = canvas.height = this[0].naturalHeight || this[0].offsetHeight || this[0].height;
          w = canvas.width = this[0].naturalWidth || this[0].offsetWidth || this[0].width;

          console.log(h);
          console.log(w);

          context.drawImage(this[0], 0, 0);

          console.log(canvas);
          console.log(context)

          try {
            data = context.getImageData(0, 0, w, h);
        } catch (e) {
            // // security error, the image was served from a different domain
            // console.log(e);
            // console.log('CORS')
            return defaultRGB;
            
        }

        length = data.data.length;

        while ((i += blockSize * 4) < length) {
            count += 1;
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];
        }
        
        // ~~ used to floor values
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);

        return rgb;
    };

    $.fn.averageColorAsString = function () {
        var rgb = this.averageColor();
        return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
    };

}(window.jQuery || window.Zepto));

setTimeout(function(){
    var imgColor = $('img.color-bg').averageColorAsString();
    $('body').css('background-color', imgColor );
    console.log('colored' + imgColor)
}, 50)