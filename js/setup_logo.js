function getStyle(id, styleProperty) {
	var element = document.getElementById(id);
	if (element.currentStyle)
		var style = element.currentStyle[styleProperty];
	else if (window.getComputedStyle)
		var style = document.defaultView.getComputedStyle(element, null).getPropertyValue(styleProperty);
	return style;
}

function setup_logo() {
	//if(getStyle("logo", "z-index") < 0) {
		// Only do this if the css loaded properly
		var logo = document.getElementById('logo');
		logo.style.position = "fixed"; // do this later to avoid rendering bug on iOS
		var navigation = document.getElementById('navigation');
		navigation.style.marginTop = (logo.height - 1) + "px";
	//}
}

window.onresize = setup_logo;
document.body.onload = setup_logo;