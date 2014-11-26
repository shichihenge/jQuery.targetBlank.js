/*
jQuery.targetBlank.js
author: Keisuke Nagashima
Version: 1.0
*/

$.fn.targetBlank = function(options){
	
	options = $.extend({
		outLinkOnly  : true, // 内部リンクに付加されたtarget="_blank"を取り除くかどうか
		noTabDomain  : "", // タブ開閉させないドメイン
	}, options);

	return this.each(function(){

		if (options.outLinkOnly == true) {
			$("a").removeAttr("target");
		} else {}

		$("a").each(function(){

			var thisElement = $(this);
			var address = thisElement.attr("href");
			var index = address.indexOf("http://");
			var noTabCheck = address.indexOf(options.noTabDomain);
			var domainCheck = address.indexOf(location.hostname);

			if (index != -1 && noTabCheck == -1 && domainCheck == -1) {
				$(thisElement).attr("target", "_blank");
			} else {}

	  });

	});
};