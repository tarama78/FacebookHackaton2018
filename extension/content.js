var new_only = 1

function f1() {
	if (new_only == 1) {
		//	console.log('ok');
		divs = document.getElementsByClassName("clearfix _5va3");


		for (var i = 0; i < divs.length; i++) {
			var div = divs[i];
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
			console.log( "Data Loaded: " + data );
			});
			}
			}
			else
			{
			 div.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
			}
			if (!val.includes('NowThis') && !val.includes('Seeker')) {
				//console.log(val);
				div.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
			}
		}
	}
}

//function ft_checkbox() {
//	console.log('serge check box');
//	var checkBox = document.getElementById("myCheck");
	// Get the output text
//	var text = document.getElementById("text");
//
	// If the checkbox is checked, display the output text
//	if (checkBox.checked == true){
//		new_only = 1
//	}
//	else {
//		new_only = 0
//	}
//}

//function sayHiTo(name) {
//  return function() {
//    alert("Hi, " + name + "!");
//  }
//}
//
// Here, invoking the function is correct: it will return a function
//document.getElementById("checkBox").addEventListener('click', sayHiTo("Bob"));



window.setInterval(f1, 1000);
