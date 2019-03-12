function randomPalette(){
    var r=Math.floor((Math.random() * 255) + 1);
    var g=Math.floor((Math.random() * 255) + 1);
    var b=Math.floor((Math.random() * 255) + 1);

    var hsl = rgbToHsl(r, g, b);
    var rgbPaleta = [];
    for (i = 0; i < 5; i++) {
       var tono = (360/5) * i;
       var rgb = hslToRgb(((tono*100)/360)/100, hsl[1], hsl[2]);
       rgbPaleta[i] = rgb;
       $('#color'+(i+1)).css("background-color","rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")");
    }
    generateRules(rgbPaleta);
}


function generateRules(rgbPaleta){
  var css=".website-background{color: #"+fullColorHex((rgbPaleta[0][0]), (rgbPaleta[0][1]),(rgbPaleta[0][2]))+";}\n\n"+
  ".element-text{ color: #"+fullColorHex((rgbPaleta[1][0]), (rgbPaleta[1][1]),(rgbPaleta[1][2]))+";}\n\n"+
  ".element-border{ border-color: #"+fullColorHex((rgbPaleta[2][0]), (rgbPaleta[2][1]),(rgbPaleta[2][2]))+";}\n\n"+
  ".element-background{ background-color: #"+fullColorHex((rgbPaleta[3][0]), (rgbPaleta[3][1]),(rgbPaleta[3][2]))+";}\n\n"+
  ".header{ color: #"+fullColorHex((rgbPaleta[4][0]), (rgbPaleta[4][1]),(rgbPaleta[4][2]))+";}\n\n";
  $('#css-rules').text(css);
}
