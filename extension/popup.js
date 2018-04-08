var new_only = 1

document.addEventListener('DOMContentLoaded', function() {
	const bar = document.getElementById("checkBox")
	bar.addEventListener('click', function() {
		if (bar.checked == true){
//			window.open('https://www.codexworld.com', '_blank');
			chrome.storage.sync.set({state: 'on'});
		}
		else {
//			window.open('https://www.wikipedia.org', '_blank');
			chrome.storage.sync.set({state: 'off'});
		}
	});
});
