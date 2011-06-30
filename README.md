# Classified.js

__Classify__ your user 
## Purpose

Classified.js adds classes to the `<html>` element based on the user's environment. Those classes can
then be used by CSS or JavaScript to customize the user's experience. See __Usage__ and __Class Reference__ below.
## Usage

1. 	Add the script to your `<head>`. This library has no dependencies, and so may be included anywhere before the
	CSS and JavaScript that depends on it.
		
		<script type="text/javascript" src="classified.js"></script>
		
2.	Modify CSS rules for specific user environments by prepending the appropriate Classified 
	class name. The following CSS changes the `margin-bottom` style for the `.container` class from `20px` to `10px` when 
	viewed in Internet Explorer 7:
		
		.container 		{margin-bottom: 20px;}
		.ie7 .container {margin-bottom: 10px;}
		
	Always declare all modified styles after the original style.

3.	Conditionally run JavaScript code for specific user environments. The following code adds 
	`touchend` events to all buttons if the user is using an iOS or Android device. (For simplicity,
	this example assumes jQuery is in use):
	
		<script type="text/javascript">
			if ($("html").hasClass("ios") || $("html").hasClass("android")) {
				$("input[type=button]").live("touchend", function () {
					$("#userInput").val("You touched " + $(this).val() + "!");
				}
			}
		</script>
		<form>
			<input type="text" id="userInput" />
			<input type="button" value="my heart" />
			<input type="button" value="my soul" />
			<input type="button" value="the last button" />
		</form>
		
## Class Reference
	
### Desktop Operating Systems
*	__mac__ Denotes a user running Mac OS X
*	__windows__ Denotes a user running Windows
*	__linux__ Denotes a user running some distribution of Linux

### Mobile Operating Systems
*	__ios__ Denotes a user running some version of iOS. 
	_Note: Devices given the `ios` class will also, by their nature, have the `mac` class, 
	but not the opposite. In other words, `mac` denotes a user running either Mac OS X or iOS, whereas
	`ios` denotes only users running iOS._
*	__android__ Denotes a user running some version of Android.

### iOS Disambiguation
*	__ipod__ Denotes an iPod Touch.
*	__iphone__ Denotes an iPhone.
*	__ipad__ Denotes an iPad.

### Android Disambiguation (sort of)
*	__android-tablet__ Denotes an Android tablet.

### Web Browsers

#### Internet Explorer
*	__ie__ Denotes a user running some version of Internet Explorer
*	__ie5_5, ie6, ..., ie9__ Denotes a specific version of Internet Explorer
*	__lt-ie5, lt-ie5_5, ..., lt-ie10__ Denotes all versions of Internet Explorer BEFORE a certain version.
	For example, `lt-ie8` denotes all versions of Internet Explorer before Internet Explorer 8.
	
#### Firefox
*	__ff__ Denotes a user running some version of Firefox
*	__ff1, ..., ff5__ Denotes a specific version of Firefox
*	__lt-ff2, ..., lt-ff6__ Denotes all versions of Firefox BEFORE certain version, as explained above.

#### Chrome
*	__chrome__ Denotes a user running Chrome

#### Safari
*	__safari__ Denotes a user running Safari

#### Browsers Using WebKit
*	__webkit__ Denotes any of the several browsers that use the WebKit web browser engine. 

#### Opera
*	__opera__ Denotes a user running some version of Opera.
	
## Credit

I created Classified.js because I found it a useful feature of [HeadJS](http://headjs.com/ "HeadJS"),
but had no use for the extra JavaScript optimization that [HeadJS](http://headjs.com/ "HeadJS") promised,
and found that [HeadJS](http://headjs.com/ "HeadJS"), at the time, caused frequent errors in Internet Explorer 6 
which made sites nearly unusable. 

I created Classified.js because I wanted the simplicity of customizing an experience from classes on the `<html>` 
element without the dynamic JavaScript loading bloat and errors of [HeadJS](http://headjs.com/ "HeadJS").