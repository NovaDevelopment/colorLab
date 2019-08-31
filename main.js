colorPicker.on("color:change", function() {
    document.getElementById("selectedColor").style.background = colorPicker.color.hexString;
    document.getElementById("HEXColor").value = colorPicker.color.hexString;
    document.getElementById("RGBColorVal").value = colorPicker.color.rgbString;
    document.getElementById("HSLColorVal").value = colorPicker.color.hslString;
    document.getElementById("HSVColorVal").value = "hsv(" + colorPicker.color.hsv.h.toString() + ", " + colorPicker.color.hsv.s.toString() + ", " + colorPicker.color.hsv.v.toString() + ")";
})
document.getElementById("HEXColor").addEventListener("change", function() {
    colorPicker.color.hexString = document.getElementById("HEXColor").value;
})
document.getElementById("RGBColorVal").addEventListener("change", function() {
    colorPicker.color.rgbString = document.getElementById("RGBColorVal").value;
})
document.getElementById("HSLColorVal").addEventListener("change", function() {
    colorPicker.color.hslString = document.getElementById("HSLColorVal").value;
})