var new_only = 1

function f1() {
	if (new_only == 1) {
		//	console.log('ok');
		divs = document.getElementsByClassName("clearfix _5va3");


		for (var i = 0; i < divs.length; i++) {
			var div = divs[i];
			var isNews = 0;
			if (div == null) {
				continue
			}
			var val = div.textContent;
			var span_test = div.getElementsByClassName("fwb fcg").item(0);
			if (span_test != null) {
				var alink = span_test.children.item(0);
				//console.log(alink);
				var href = $(alink).attr('href');
				console.log(href);
				$.get( href, function( data ) {
					//var news = data.getElementsByClassName("_1c03").item(0);
					//console.log( "IS NEWS : " + news);
  				//console.log( "Data Loaded: " + data );
					if (data.includes('Media/News Company')) {
						isNews = 1;
					}
				});
			}
			else
			{
				div.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
			}
			if (isNews == 0) {
				//console.log(val);
				div.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
			}
		}
	}
}

window.setInterval(f1, 1000);
