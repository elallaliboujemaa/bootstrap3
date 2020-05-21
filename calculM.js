document.write("script src='calculM.js'></script>")
//function calc-moy()
var
 moy=prompt("donner la moyenne")

if (moy>=0 && moy<10)
{
    alert("mention : ajourné");
}
else if(moy>=10 && moy<12)
{
    alert("mention : passable")
}
else if(moy>=12 && moy<14)
{
    alert("mention : bien");
}
else if(moy>=14 && moy<16)
{
    alert("mention : tres bien")
}
else if(moy>=16 && moy<20)
{
    alert("mention : super");
}
else{
    alert("valeur de la moyene est un correcte")
}



