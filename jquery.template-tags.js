/**
 * jquery.template-tags.js
 * @author Zenobius Jiricek
 * @version 1.0
 * stores html elements as template tags for re-use later in the document
 */

(function($) {
	$.fn.templateTags = function(options) {

		// PLUGIN OPTIONS
		var opts = $.extend({}, $.fn.templateTags.defaults, options),
			templates = $(opts.templatesClassName)
			tags = $(opts.tagsClassName);

		templates.hide();

		// apply to elements selected with css selectors
		tags.each( function (index,item) {
			tag = $(item);
			tagName = tag.attr('rel');
			template = $(opts.templatesClassName + ' *[alt="+tagName+"]').html();

			if (template){
				tag.replaceWith($(template));
			}

			// each element might have a $(this).data() object which can
			// override the PLUGIN OPTIONS passed to the plugin
			var o = $.meta ? $.extend({}, opts, tag.data()) : opts;

		});

		function nodeName(node){
			return node.get(0).nodeName
		}
	};

	//
	// plugin defaults
	//
	$.fn.templateTags.defaults = {
		templatesClassName: '.templateTags-templates',
		tagsClassName: '.templateTags-tag'
	};

})(jQuery);
