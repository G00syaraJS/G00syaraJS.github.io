function block1_show(){
  setCookie("block1_style", "show");
  document.getElementById('block1').style.display='block'; 
  document.getElementById('b1_1').style.display='none'; 
  document.getElementById('b2_1').style.display='block';
}
function block1_hide(){
  setCookie("block1_style", "hide");
  document.getElementById('block1').style.display='none'; 
  document.getElementById('b2_1').style.display='none'; 
  document.getElementById('b1_1').style.display='block';
}
function block2_show(){
  setCookie("block2_style", "show");
  document.getElementById('block2').style.display='block'; 
  document.getElementById('b1_2').style.display='none'; 
  document.getElementById('b2_2').style.display='block';
}
function block2_hide(){
  setCookie("block2_style", "hide");
  document.getElementById('block2').style.display='none'; 
  document.getElementById('b2_2').style.display='none'; 
  document.getElementById('b1_2').style.display='block';
}
function block3_show(){
  setCookie("block3_style", "show");
  document.getElementById('block3').style.display='block'; 
  document.getElementById('b1_3').style.display='none'; 
  document.getElementById('b2_3').style.display='block';
}
function block3_hide(){
  setCookie("block3_style", "hide");
  document.getElementById('block3').style.display='none'; 
  document.getElementById('b2_3').style.display='none'; 
  document.getElementById('b1_3').style.display='block';
}
function block4_show(){
  setCookie("block4_style", "show");
  document.getElementById('block4').style.display='block'; 
  document.getElementById('b1_4').style.display='none'; 
  document.getElementById('b2_4').style.display='block';
}
function block4_hide(){
  setCookie("block4_style", "hide");
  document.getElementById('block4').style.display='none'; 
  document.getElementById('b2_4').style.display='none'; 
  document.getElementById('b1_4').style.display='block';
}

/////////////////////////////

/////////////////////////////

/////////////////////////
function getCookie(cookie_name)
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
  {
    console.log(results[2])
    return ( unescape ( results[2] ) );
  }
  else
    return null;
}

function setCookie( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape (value);
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if (path)
        cookie_string += "; path=" + escape ( path );
 
  if (domain)
        cookie_string += "; domain=" + escape ( domain );
  
  if (secure)
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}

function deleteCookie(name)
{
  setCookie(name, "", {
    'max-age:': -1
  })
}

function Buttons(){
  
  if(getCookie("block1_style") == "hide") { block1_hide(); }
  if(getCookie("block2_style") == "hide") { block2_hide(); }
  if(getCookie("block3_style") == "hide") { block3_hide(); }
  if(getCookie("block4_style") == "hide") { block4_hide(); }
}