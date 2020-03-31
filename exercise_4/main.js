function colorUpdate()
{
    let p = document.getElementById("parrafo")
    //BORDER WIDTH
    var width_border = document.getElementById("border-width").value
    p.style.borderWidth = width_border+"px"

    //BORDER COLORS
    var r1 = document.getElementById("red-border").value
    var g1 = document.getElementById("green-border").value
    var b1 = document.getElementById("blue-border").value

    var r1_int = parseInt(r1);
    var g1_int = parseInt(g1);
    var b1_int = parseInt(b1);
    p.style.borderColor =  "rgb(" + r1_int+ "," + g1_int + "," + b1_int + ")";
   
    //BACKGROUND
    var r2 = document.getElementById("red-back").value;
    var g2 = document.getElementById("green-back").value;
    var b2 = document.getElementById("blue-back").value;

    var r2_int = parseInt(r2);
    var g2_int = parseInt(g2);
    var b2_int = parseInt(b2);
    p.style.backgroundColor =  "rgb(" + r2_int + "," + g2_int + "," + b2_int + ")";

    
}