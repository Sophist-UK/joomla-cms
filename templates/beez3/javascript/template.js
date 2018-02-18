/**
 * @package     Joomla.Site
 * @subpackage  Templates.beez3
 * @copyright   Copyright (C) 2005 - 2018 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @since       3.2
 */

if (typeof(Joomla) === 'undefined') {
	var Joomla = {};
}


!(function($) {
	Joomla.TemplateJs = function(root)
	{
		var $root = $(root || document);

		$root.find('*[rel=tooltip]').tooltip();

		// Turn radios into btn-group
		$root.find('.radio.btn-group label').addClass('btn');

		$root.find(".btn-group label:not(.active)").click(function()
		{
			var label = $(this);
			var input = $('#' + label.attr('for'));

			if (!input.prop('checked')) {
				label.closest('.btn-group').find("label").removeClass('active btn-success btn-danger btn-primary');
				if (input.val() === '') {
					label.addClass('active btn-primary');
				} else if (input.val() == 0) {
					label.addClass('active btn-danger');
				} else {
					label.addClass('active btn-success');
				}
				input.prop('checked', true);
				input.trigger('change');
			}
		});

		$root.find(".btn-group input[checked=checked]").each(function()
		{
			if ($(this).val() == '') {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-primary');
			} else if ($(this).val() == 0) {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-danger');
			} else {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-success');
			}
		});
	}
})(jQuery);

!(function($)
{
	$(document).ready(function()
	{
		Joomla.TemplateJs(document);
	}

	$(document).on('subform-row-add', function(event, row) {
		Joomla.TemplateJs(row);
	});
})(jQuery);
