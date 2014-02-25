(function (factory) {

	if( typeof exports==='objects' )
	{
		factory( require('jquery') );
	}
	else
	{
		factory( jQuery );
	}
}( function($){

	var
	restrictors = {
		numeric : function(e) {
			var input;
			if (e.metaKey || e.ctrlKey) {
				return true;
			}
			if (e.which === 32) {
				return false;
			}
			if (e.which === 0) {
				return true;
			}
			if (e.which < 33) {
				return true;
			}
			input = String.fromCharCode(e.which);
			return !!/[\d\s]/.test(input);
		}
	};


	$.fn.restrict = function(option){
		var args, method;
		args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
		method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];

		this.on('keypress', restrictors[method] );
		return this;
	};

}));
