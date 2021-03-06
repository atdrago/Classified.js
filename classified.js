var classified = (function () {
    var browser = navigator.appName;
    var version = navigator.appVersion;
    var ua = navigator.userAgent;
    var html = document.getElementsByTagName("html")[0];
    var theClass = "";

    html.setAttribute("class", "");

    if ((/Windows/i).test(ua)) {
        theClass += " windows";
    } else if ((/Macintosh/i).test(ua)) {
        theClass += " mac";
    } else if ((/Linux/i).test(ua)) {
        theClass += " linux";
    }

    if (browser === "Microsoft Internet Explorer") {
        var parsedName = (/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(version);
        var ieVersion = parseFloat(parsedName[1]);

        theClass += " js ie";

        switch (ieVersion) {
            case 9:
                theClass += " ie9 lt-ie10";
                break;
            case 8:
                theClass += " ie8 lt-ie9 lt-ie10";
                break;
            case 7:
                theClass += " ie7 lt-ie8 lt-ie9 lt-ie10";
                break;
            case 6:
                theClass += " ie6 lt-ie7 lt-ie8 lt-ie9 lt-ie10";
                break;
            case 5.5:
                theClass += " ie5_5 lt-ie6 lt-ie7 lt-ie8 lt-ie9 lt-ie10";
                break;
            case 5:
                theClass += " ie5 lt-ie5_5 lt-ie6 lt-ie7 lt-ie8 lt-ie9 lt-ie10";
                break;
            default:
                theClass += " lt-ie5 lt-ie5_5 lt-ie6 lt-ie7 lt-ie8 lt-ie9 lt-ie10";
                break;
        }
        html.className += theClass;
    } else if ((/Firefox/i).test(ua)) {
        theClass += " js ff";
        var ffVersion = parseInt((/[0-9]+/).exec((/Firefox\/[0-9]+\./i).exec(ua)));
        switch (ffVersion) {
            case 3:
                theClass += " ff3 lt-ff4 lt-ff5";
                break;
			case 5:
				theClass += " ff5 lt-ff6";
            case 4:
                theClass += " ff4 lt-ff5 lt-ff6";
                break;
            case 2:
                theClass += " ff2 lt-ff3 lt-ff4 lt-ff5";
                break;
            case 1:
                theClass += " ff1 lt-ff2 lt-ff3 lt-ff4 lt-ff5";
                break;
            default:
                break;
        }
        html.className += theClass;
    } else if ((/AppleWebKit/i).test(ua)) {
    	theClass += " js webkit";
        if ((/Mobile/i).test(ua)) {
            if ((/iPhone/i).test(ua)) {
                if ((/iPod/i).test(ua)) {
                    theClass += " ios ipod";
                } else {
                    theClass += " ios iphone";
                }
            } else if ((/Android/i).test(ua)) {
                theClass += " android";
            } else if ((/iPad/i).test(ua)) {
                theClass += " ios ipad";
            }
        } else if ((/Android/i).test(ua)) {
            theClass += " android-tablet";
        }

        if ((/Chrome/i).test(ua)) {
            theClass += " chrome";
        } else if ((/Safari/i).test(ua)) {
            theClass += " safari";
        }
        html.className += theClass;
    } else if ((/Opera/i).test(ua)) {
        theClass += " js opera";
        html.className += theClass;
    }
} ());