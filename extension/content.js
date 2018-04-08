var new_only = 1

function f1() {
	if (new_only == 1) {
		divs = document.getElementsByClassName("clearfix _5va3");


		for (var i = 0; i < divs.length; i++) {
			var div = divs[i];
			var isNews = 0;
			if (div == null) {
				continue
			}
			var val = div.textContent;
//			var span_test = div.getElementsByClassName("fwb fcg").item(0);
//			if (span_test != null) {
//				var alink = span_test.children.item(0);
//				var href = $(alink).attr('href');
//				isNews = $.get( href, function( data, isNews ) {
//					console.log(data);
//					if (data.includes('Media/News Company')) {
//						return 1;
//					}
//					else {
//						return 0;
//					}
//				});
//			}
//			else {
//				div.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
//			}
			if (/*isNews == 0*/!val.includes('CNN International') && !val.includes('Mediapart') && !val.includes('Le Monde') && !val.includes('Le Figaro') && !val.includes('BBC News')) {
				div.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
			}
		}
	}
}


window.setInterval(f1, 1000);
