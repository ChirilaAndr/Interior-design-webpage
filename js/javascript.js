function openMenu (){
    
  var menu = document.getElementById("hamburger-icon").innerHTML;
  if (menu === '☰'){
      document.getElementById("hamburger-icon").innerHTML = 'X';
      document.getElementById("menu").style.display='block';
  }  
  else{
    document.getElementById("hamburger-icon").innerHTML = '☰';
    document.getElementById("menu").style.display='none';
  }
}


function expandPhoto(element) {
  document.getElementById("image").src = element.src;
  document.getElementById("modal").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function closePhoto(element) {
  element.style.display= 'none';
}