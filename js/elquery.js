(function( $ ) {	
  $.fn.equery = function(exp) { 
  	var helpers = {};
  	var self = {};
  	self.C_NumProperties = ["margin-top","width","height","margin-left"];
	self.C_Operators = {
		max: function(value,limit){
			return (value < limit)
		},
		min: function(value,limit){
			return (value > limit)
		},
		is: function(value,limit){
			return (value == limit)
		}
	}
  	helpers.add = function(obj,expression){
		var pieces = expression.split(" ");
		if(pieces.length == 3){
			var operator = pieces[0]
			var cssp = pieces[1]
			var limit = parseInt(pieces[2]);

			if(operator in self.C_Operators){
				if($.inArray(cssp, self.C_NumProperties) != -1){
					var value = parseInt(obj.css(pieces[1]));
					if(self.C_Operators[operator](value,limit)){
						obj.addClass(operator+"_"+cssp+"_"+limit)
					} else {
						obj.removeClass(operator+"_"+cssp+"_"+limit)
						console.log("Falha")
					}
				} else {
					console.log("Erro, propriedade css não encontrada");
				}
			} else {
				console.log("Erro, comparador não encontrado");
			}
		}		
	}
    this.each(function() {
    	helpers.add($(this),exp);
    });
    var objs = this;
    $(window).bind('resize',function(){
    	objs.each(function() {
    		helpers.add($(this),exp);
    	});
    });

  };
})( jQuery );
$("p").equery("min width")

