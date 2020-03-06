if(window.location.hostname.startsWith("bitbucket.")) {
	$(".pull-request-activity-content").hide()
	chrome.storage.sync.get(['chrono', 'shrink_lbl'], function(settings) {

		if(settings.chrono) {
			$('head').append(
				$('<link>')
					.attr("rel","stylesheet")
					.attr("type","text/css")
					.attr("href", chrome.extension.getURL('css/chronological.css'))
			);
		}

		if(settings.shrink_lbl) {
			$('head').append(
				$('<link>')
					.attr("rel","stylesheet")
					.attr("type","text/css")
					.attr("href", chrome.extension.getURL('css/shrink_lbl.css'))
			);
		}

		setTimeout(function() {
			$(".pull-request-activity-content").show()
		}, 100)

	});
}