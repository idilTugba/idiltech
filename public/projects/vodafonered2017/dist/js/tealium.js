function createLinkTrackingCookie(value) {
    document.cookie = "linkTrackingVal =" + value;
}
function getCookie(c_name) {
    var c_start, c_end = 0;
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return document.cookie.substring(c_start, c_end);
        }
    }
    return "";
}
String.prototype.turkishToLower = function(){
    var string = this;
    var letters = { "İ": "i", "I": "i", "Ş": "s", "Ğ": "g", "Ü": "u", "Ö": "o", "Ç": "c", "ı": "i", "ş": "s", "ğ": "g", "ü": "u", "ö": "o", "ç": "c" };
    string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function(letter){ return letters[letter]; })
    return string.toLowerCase();
}

function tealiumInit(){
	//utag_data.link_tracking = getCookie('linkTrackingVal');

	$('.tealium').each(function(){
		method = $(this).attr('method');
		title  = $(this).attr('title');
		tracking = $(this).attr('tracking');

		if(method == 'link'){
			$(this).click(function(e){
				var linkTrackingVal = $(this).text().replace(/\s/g, '');
					linkTrackingVal = utag_data.page_name + ':' + linkTrackingVal;
					linkTrackingVal = linkTrackingVal.turkishToLower();
					
			    utag_data.link_tracking = linkTrackingVal;
			    createLinkTrackingCookie(linkTrackingVal);
			});
			//utag.link( {page_name: utag_data.channel + ':' + title, channel : utag_data.channel, link_tracking: tracking} );
		}

		if(method == 'ajax'){
			$(this).click(function(){
				method = $(this).attr('method');
				title  = $(this).attr('title');
				tracking = $(this).attr('tracking');

				utag.view( {page_name: utag_data.channel + ':' + title, channel : utag_data.channel, page_type : utag_data.page_type} );
			});
		}

		if(method == 'view'){
			$(this).click(function(){
				method = $(this).attr('method');
				title  = $(this).attr('title');
				tracking = $(this).attr('tracking');
		
				utag.view( {page_name: utag_data.channel + ':' + title, channel : utag_data.channel, page_type : utag_data.page_type} );
			});
		}
	});
}