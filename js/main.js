(function() {
    console.log('hello jonathan')
    document.addEventListener("DOMContentLoaded", function(){
		Typed.new(".services-list", {
			strings: ["First sentence.", "Second sentence."],
			typeSpeed: 0,
            loop: true
		});
	});
})();
