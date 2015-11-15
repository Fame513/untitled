
/**
 * @name untitled
 */
 var half = Math.pow(2, 1/12);
var a = 440;
var b = a*half;
var h = a*Math.pow(half, 2);
var c = a*Math.pow(half, 3)/2;
var cis = a*Math.pow(half, 4)/2;
var d = a*Math.pow(half, 5)/2;
var dis = a*Math.pow(half, 6)/2;
var e = a*Math.pow(half, 7)/2;
var f = a*Math.pow(half, 8)/2;
var fis = a*Math.pow(half, 9)/2;
var g = a*Math.pow(half, 10)/2;
var gis = a*Math.pow(half, 11)/2;

var notes = [c, d, e, f, g, a, h, c*2];

var bass = [e/2, e/2, e/2, e/2,  g/2, g/2, g/2, g/2,  e/2, e/2, e/2, e/2,  g/2, g/2, g/2, g/2, 
            d/2, d/2, d/2, d/2,  g/2, g/2, g/2, g/2,  d/2, d/2, d/2, d/2,  g/2, g/2, g/2, g/2,
            d/2, d/2, d/2, d/2,  fis/2, fis/2, fis/2, fis/2,  d/2, d/2, d/2, d/2,  fis/2, fis/2, fis/2, fis/2,
            d/2, d/2, d/2, d/2,  fis/2, fis/2, fis/2, fis/2,  d/2, d/2, d/2, d/2,  fis/2, fis/2, fis/2, fis/2
           ];
var tenor= [e/1, e/1, h/2, h/2,  e/1, e/1, h/2, h/2,  e/1, e/1, h/2, h/2,  e/1, e/1, h/2, h/2, 
            d/1, d/1, h/2, h/2,  d/1, d/1, h/2, h/2,  d/1, d/1, h/2, h/2,  d/1, d/1, h/2, h/2,  
            d/1, d/1, h/2, h/2,  d/1, d/1, h/2, h/2,  d/1, d/1, h/2, h/2,  d/1, d/1, h/2, h/2,  
            d/1, d/1, a/2, a/2,  d/1, d/1, a/2, a/2,  d/1, d/1, a/2, a/2,  d/1, d/1, a/2, a/2  
           ];

var soprano  = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 
            0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
            0,0,g,fis, g,g,h,c*2, h,h,h,h, h,h,h,h, 0,0,fis,g, fis,fis,g,a, g,g,g,g, g,g,g,g,
            0,0,fis,e, fis,fis,h,c*2, h,h,h,h, h,h,h,h, 0,0,fis,e, fis,fis,fis,fis, fis,fis,fis,fis, fis,fis,fis,fis,
            0,0,g,fis, g,g,h,c*2, h,h,h,h, h,h,h,h, 0,0,fis,g, fis,fis,g,a, g,g,g,g, g,g,g,g,
            0,0,fis,e, fis,fis,h,c*2, h,h,h,h, h,h,h,h, 0,0,fis,e, fis,fis,fis,fis, fis,fis,fis,fis, fis,fis,fis,fis,
            e*2,e*2,e*2,e*2, e*2,e*2,h,h, h,h,h,h, h,h,h,h, d*2,d*2,d*2,d*2, d*2,d*2,h,h, h,h,h,h, h,h,h,h,
            fis*2,fis*2,fis*2,fis*2, fis*2,fis*2,h,h, h,h,h,h, h,h,h,h, fis*2,fis*2,fis*2,fis*2, fis*2,fis*2,a,a, a,a,a,a, a,a,a,a,
            g*2,g*2,g*2,g*2, g*2,g*2,e*2,e*2, e*2,e*2,e*2,e*2, e*2,e*2,e*2,e*2, g*2,g*2,g*2,g*2, g*2,g*2,d*2,d*2, d*2,d*2,d*2,d*2, d*2,d*2,d*2,d*2,
            fis*2,fis*2,fis*2,fis*2, fis*2,fis*2,d*2,d*2, d*2,d*2,d*2,d*2, d*2,d*2,d*2,d*2, fis*2,fis*2,fis*2,fis*2, fis*2,fis*2,d*2,d*2, d*2,d*2,d*2,d*2, d*2,d*2,d*2,d*2,
            h,e*2,h*2,h,e*2,h*2,h,e*2,h*2,h,e*2,h*2,h,e*2,c*2,e*2, h,d*2,h*2,h,d*2,h*2,h,d*2,h*2,h,d*2,h*2,h,d*2,a,d*2,
            fis,h,fis*2,fis,h,fis*2,fis,h,fis*2,fis,h,fis*2,fis,h,g,h, a,d*2,a*2,a,d*2,a*2,a,d*2,a*2,a,d*2,a*2,a,d*2,g,d*2,
            h,e*2,h*2,h,e*2,h*2,h,e*2,h*2,h,e*2,h*2,h,e*2,c*2,e*2, h,d*2,h*2,h,d*2,h*2,h,d*2,h*2,h,d*2,h*2,h,d*2,a,d*2,
            fis,h,fis*2,fis,h,fis*2,fis,h,fis*2,fis,h,fis*2,fis,h,g,h, a,d*2,a*2,a,d*2,a*2,a,d*2,a*2,a,d*2,a*2,a,d*2,g,d*2
           ];

var alt = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           h,h,h,h, h,h,g,g, g,g,g,g, g,g,g,g, h,h,h,h, h,h,g,g, g,g,g,g, g,g,g,g,
           h,h,h,h, h,h,fis,fis, fis,fis,fis,fis, fis,fis,fis,fis, a,a,a,a, a,a,fis,fis, fis,fis,fis,fis, fis,fis,fis,fis,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
           0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
          ]


export function dsp(t) {
  return play(soprano, sqar10)/2 +
         play(alt, sqar10)/3 +
         play(tenor, saw10)/5 +
         play(bass, saw10)/6; 
  
function play(notes, instrument){
    var tempo = 6*t;
    var note = Math.floor(tempo % notes.length);
    var chouse = notes[note];
    var atac_time = 0.1;
    var relise_time = 0.2;
    var attaca = (tempo%1 < atac_time) && (notes[note] != notes[note-1]) ? 1/atac_time * (tempo%1) : 1;
    var relise = (tempo%1 > 1-relise_time) && (notes[note] != notes[note+1]) ? 1/relise_time * (1-(tempo%1)) : 1;
    return instrument(chouse) * attaca * relise;
  }

  function sin(f, A){
    if (A == null) A=1;
    return A * Math.sin(2*Math.PI*f*t);
  }

  function harmonic(f1, count, n_fun, A_fun){
    if (count == null) count = 1;
    if (n_fun == null) {
      var n_fun = function(i){
        return i;
      }
    }
    if (A_fun == null){
      var A_fun = function(i) {
        return 1/i;
      }
    }
    var result = 0;
    for (var i = 1; i <= count; i++){
      result += sin(f1 * n_fun(i), A_fun(i));
    }
    return result;
  }
  

  function sqar10(f){
    var n_fun = function(i){
      return (i*2)-1;
    };
    var A_fun = function(i){
      return 1/((i*2)-1);
    };
    return harmonic(f, 10, n_fun, A_fun);
  }

  function saw10(f){
    return harmonic(f, 10);
  }
}
