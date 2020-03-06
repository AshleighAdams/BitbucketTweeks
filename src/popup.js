$(document).ready(function() {

	chrome.storage.sync.get(['chrono', 'shrink_lbl'], function(settings) {
		
		$("#chrono").prop('checked', settings.chrono == true)
		$("#chrono").click(function() {
			chrome.storage.sync.set({'chrono': this.checked})
		})
		

		$("#shrink_lbl").prop('checked', settings.shrink_lbl == true)
		$("#shrink_lbl").click(function() {
			chrome.storage.sync.set({'shrink_lbl': this.checked})
		})

	})

})