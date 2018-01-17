		
function valid()
{
  

  var password1=document.getElementById("pwd").value;
  var password2=document.getElementById("pass").value;

  if(document.getElementById("email").value=="")
    alert("Please Enter the email id");
    else if(document.getElementById("email").value.search(/^[A-Za-z0-9]+[@][A-Za-z]+[.][A-Za-z]{2,3}$/)) 
      alert("Please enter valid email id");
     
	  
	else if(password1==password2)
  {
    alert("Succesfully Signed Up!");
    window.location="menu.html";
  }
  else if(password1!=password2)
  {
    alert("Passwords don't match!");
    window.location="signup.html";
  }

  else { document.location.href='menu.html'; }
}

  

function pass()
  {  if(document.getElementById("txt").value=="")
     alert("Please Enter the email id");
    else if(document.getElementById("txt").value.search(/^[A-Za-z0-9]+[@][A-Za-z]+[.][A-Za-z]{2,3}$/)) 
      alert("Please enter vaild email id"); 
    else if(document.getElementById("password").value=="") 
      alert("Please Enter a password.");
     else if(document.getElementById("password").value.length<7 || document.getElementById("password").value.length >=10) 
      alert("password should be of length between 7 to 10 only");
     else { document.location.href='main.html'; } 
  } 