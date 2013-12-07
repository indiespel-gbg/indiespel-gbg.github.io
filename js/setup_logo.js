function getStyle(id, styleProperty) {
	var element = document.getElementById(id);
	if (element.currentStyle)
		var style = element.currentStyle[styleProperty];
	else if (window.getComputedStyle)
		var style = document.defaultView.getComputedStyle(element, null).getPropertyValue(styleProperty);
	return style;
}

function setup_logo() {
	// If css didn't load the position is static instead and this should not happen
	if(getStyle("logo", "position") == "fixed") {
		var logo = document.getElementById('logo');
		var navigation = document.getElementById('navigation');
		navigation.style.marginTop = (logo.height - 1) + "px";
	}
}

window.onresize = setup_logo;
document.body.onload = setup_logo;