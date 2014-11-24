/*
jQuery.targetBlank.js
author: Keisuke Nagashima
Version: 1.0
*/

$.fn.targetBlank = function(options){
	options = $.extend({
		outLinkOnly  : "true", // 内部リンクに付加されたtarget="_blank"を取り除くかどうか
	}, options);

	return this.each(function(){

		if (options.outLinkOnly == "true") {
			$("a").removeAttr("target");
		} else {}

		$("a").each(function(){

			var thisElement = $(this);
			var address = thisElement.attr("href");
			var index = address.indexOf("http://");
			var thisDomain = location.hostname;
			var domainCheck = address.indexOf(thisDomain);

			if (index != -1) {
				if (domainCheck == -1) {
					$(thisElement).attr("target", "_blank");
				} else {}
			} else {}
	  });

	});
};