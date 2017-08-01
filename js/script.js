
function onDots(n){
	n -= 1;
	var dots = document.getElementsByClassName("dots");
	var cn = "white";

	if( dots[n].className.search(""+cn) != -1){
		return;
	}

	var we = document.getElementsByClassName(cn)[0];
	we.className = we.className.replace(cn,"");
	dots[n].className += " "+cn; 
	var e = document.getElementById("bImage");
	e.src="img/building_"+(n+1)+".png";
	e.alt=e.src;

}