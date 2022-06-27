let brandName =[
    {Brand:"Puma",Image:"1.jpg",Price:"1000 rs."},
    {Brand:"Nike",Image:"2.jpg",Price:"12000 rs."},
    {Brand:"Nike",Image:"3.jpg",Price:"1500 rs."},
    {Brand:"Puma",Image:"4.jpg",Price:"1100 rs."},
    {Brand:"Mochi",Image:"5.jpg",Price:"2000 rs."},
    {Brand:"Mochi",Image:"6.jpg",Price:"5000 rs."},
    {Brand:"Puma",Image:"7.jpg",Price:"2500 rs."},
    {Brand:"Mochi",Image:"8.jpg",Price:"3000 rs."},
    {Brand:"Puma",Image:"9.jpg",Price:"11000 rs."},
    {Brand:"Mochi",Image:"10.jpg",Price:"6000 rs."},
    {Brand:"Nike",Image:"11.jpg",Price:"5000 rs."},
    {Brand:"Nike",Image:"12.jpg",Price:"1000 rs."},

]

var data1 = JSON.stringify(brandName);
var data2 = JSON.parse(data1);

var i =0;
document.write("<table border =1 cellspacing=0 align=center >")
    document.write("</br>")
    document.write("<tr>")
    for(i=0;i<=3;i++){
        
        document.write("<td>")
        document.write(data2[i].Brand)
        document.write("</br>")
        document.write("<img src=" + Images/data2[i].Image + " height=\"200px\" width=\"200px\">")
        document.write("</br>")
        document.write(data2[i].Price )
        document.write("</td>")
    }
    document.write("</tr>")
    document.write("</br>")
    document.write("<tr>")
    for(i=4;i<=7;i++){
        
        document.write("<td>")
        document.write(data2[i].Brand)
        document.write("</br>")
        document.write("<img src=" + Images/data2[i].Image + " height=\"200px\" width=\"200px\">")
        document.write("</br>")
        document.write(data2[i].Price )
        document.write("</td>")
    }
    document.write("</tr>")
    document.write("</br>")
    document.write("<tr>")
    for(i=8;i<=11;i++){
        
        document.write("<td>")
        document.write(data2[i].Brand)
        document.write("</br>")
        document.write("<img src=" + Images/data2[i].Image + " height=\"200px\" width=\"200px\">")
        document.write("</br>")
        document.write(data2[i].Price )
        document.write("</td>")
    }
    document.write("</tr>")


document.write("</table>" + "<br><br>")