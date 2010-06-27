/**
 * jquery.template-tags.js
 * @author Zenobius Jiricek
 * @version 1.0
 * 
 * stores html elements as template tags for re-use later in the document
 * 
 * 
 */

(function($) {

  $.fn.templateTags = function(options) {
		debug("Looking for templates in : " + nodeName(this) );
		
		// PLUGIN OPTIONS
		var opts = $.extend({}, $.fn.templateTags.defaults, options);
		debug("using options : " + $.dump(opts))
		var templates = $(opts.templatesClassName)
		var tags = $(opts.tagsClassName)
		debug("templates : " + templates.size() + " tags : " + tags.size())
		templates.hide()
		
		// apply to elements selected with css selectors
		tags.each(function(index,item) {
			tag = $(item);
			tagName = tag.attr("rel")
			template = $(opts.templatesClassName + " *[alt="+tagName+"]").html()

			debug("found tag : " + nodeName(tag) + " > " + tagName )
			if (template){
				tag.replaceWith($(template))
				debug("replaced "+tagName+" with "+ template)
			}else{
				debug("couldn't find template for "+tagName)
			}
			// each element might have a $(this).data() object which can
			// override the PLUGIN OPTIONS passed to the plugin
			var o = $.meta ? $.extend({}, opts, tag.data()) : opts;

			
		});

		function getTag(tagname){
				
		}
		function nodeName(node){
			return node.get(0).nodeName
		}
	};

	//
	// private function for debugging
	//
	function debug(msg) {
		if (window.console && window.console.log)
		window.console.log(msg);
	};

	//
	// define and expose our PUBLIC FUNCTIONs
	//
	$.fn.templateTags.getTag = function(tagName) {
		return $(this).getTag(tag)
	};

	//
	// plugin defaults
	//
	$.fn.templateTags.defaults = {
		templatesClassName	: ".templateTags-templates",
		tagsClassName				: ".templateTags-tag"  
	};

	//
	// end of closure
	//
})(jQuery);
