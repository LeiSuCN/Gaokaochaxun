(function($){

	top.window.zlzw = top.window.zlzw || {};

	var zlzw = top.window.zlzw;

	// url
	zlzw.url = {};
	// url: root
	zlzw.url.root = 'http://localhost';
	// url: 高考专业
	zlzw.url.gkzy = zlzw.url.root + '/productSelect.action';
	// url: 职业路径
	zlzw.url.zylj = zlzw.url.root + '/allHangYe.action';

	zlzw.getData = function(id, callbackForSucc, callbackForFail){

		var url = zlzw.url[id];

		if( !url ){
			error('非法的数据请求ID[' + id + ']');
			return;
		}

		$.ajax({
			url: url,
            type: "POST",
            dataType: "json",
            cache:true,
            crossDomain : true,
            success : function(data) {
            	callbackForSucc( data );
            },
            
            error : function(result) {
            	callbackForFail( result );
            }
		})		
	}

	zlzw.getValueSafely = function(item, name, value){
		if( !item[name] ){
			if( value == null || value == undefined ){
				item[name] = {};
			} else{
				item[name] = value;
			}
			
		}

		return item[name];
	}

})(jQuery);