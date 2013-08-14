var master = new Object();

function init() {

	// quit if this function has already been called
	if (arguments.callee.done)
		return;

	// flag this function so we don't do the same thing twice
	arguments.callee.done = true;

	// kill the timer
	if (_timer)
		clearInterval(_timer);

    $("a[href^='item']").each(function() {
        var url = window.location.origin + "/" + encodeURIComponent($(this).attr('href'));
        var fbscript = " | <a rel='nofollow' href='http://www.facebook.com/sharer/sharer.php?s=100&u=" + url + "' onclick=\"(function(e){u='" + url + "';t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;})(event)\" target='_blank'>fb</a>";
        var parent = $(this).parent();
        if(parent.hasClass("subtext")) {
            parent.append(fbscript);
        } else {
            parent.parent().next().find(".subtext").append(fbscript);
        }
    });


};

/* for Mozilla/Opera9 */
if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", init, false);
}

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) {// sniff
	var _timer = setInterval(function() {
		if (/loaded|complete/.test(document.readyState)) {
			init();
			// call the onload handler
		}
	}, 10);
}

/* for other browsers */
window.onload = init;

