//progression 1.

var Prograd1="PREETHI";
console.log("The driver's name is "+Prograd1);
var Prograd2="reethu";
console.log("The navigator's name is "+Prograd2);

//progrssion 2.

 //PROGRESSION- 2.2.

 function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var v = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      v = v+ 1;
    }
  
  }
  return v;
}
console.log(vowel_count("preethi"));
if(vowel_count("preethi")==0)
  console.log("no vowels");
 
 //PROGRESSION - 2.3.
 
 var str = "ThIs Is A Test On HOW tO counT UppeR CaSE";
 console.log(str.replace(/[^A-Z]/g, "").length);
 var a=str.replace(/[^a-z]/g, "").length;
 console.log(a);
 var lowercase=(str.length)-a;
 console.log(lowercase);
 if(a)
 {
     console.log("THIS IS UPPER CASE");
 }
 else if(lowercase)
 {
     console.log("THIS IS LOWER CASE");
 }
 