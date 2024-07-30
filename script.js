const colors_palette = '{"red" : {"mainColor" : "#aa0067","secondaryColor" : "#690040", "tertiaryColor" : "#6C102B", "fontColor" : "#ffff"},"pink" : {"mainColor" : "#D162AE","secondaryColor" : "#E9A6CF","tertiaryColor" : "#A64C84"}}';
const colors_palette_obj = JSON.parse(colors_palette);

//pageStyle
var mainColor = colors_palette_obj.red.mainColor;
var secondaryColor = colors_palette_obj.red.secondaryColor;
var tertiaryColor = colors_palette_obj.red.tertiaryColor;
var fontColor = colors_palette_obj.red.fontColor;

document.getElementsByTagName("body")[0].style = 'background-color : '.concat(mainColor.concat('; color : '.concat(fontColor)));
document.getElementsByTagName("header")[0].style = 'background-color : '.concat(secondaryColor);
document.getElementById("presentationText").style = 'background-color : '.concat(tertiaryColor);

document.getElementById("pinkIvy").addEventListener('mouseover', function(){
    mainColor = colors_palette_obj.pink.mainColor;
    secondaryColor = colors_palette_obj.pink.secondaryColor;
    tertiaryColor = colors_palette_obj.pink.tertiaryColor;
    fontColor = colors_palette_obj.pink.fontColor;
    document.getElementsByTagName("body")[0].style = 'background-color : '.concat(mainColor.concat('; color : '.concat(fontColor)));
    document.getElementsByTagName("header")[0].style = 'background-color : '.concat(secondaryColor);
    document.getElementById("presentationText").style = 'background-color : '.concat(tertiaryColor);
})