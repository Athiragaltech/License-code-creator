function btn()
{
    var a="";
    const input=document.getElementById("name").value;
    const date=document.getElementById("dob").value;
    const date2=date.replace(/-/g, "")
    for(i=0;i<input.length;i++)
    {
        const asciicode=input.charCodeAt(i);
        a+=asciicode;
        var asciicode1=parseInt(asciicode);
        var b=asciicode1+22092022;
        var c=date2+25092002;
    }
    
    document.getElementById("result").innerHTML=b+c
        

}