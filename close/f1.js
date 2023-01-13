var check = (function () {
    var callbacks = [], timeLimit = 50, open = false;
    setInterval(loop, 1);
    return {
        addListener: function (fn) {
            callbacks.push(fn);
        },
        cancleListenr: function (fn) {
            callbacks = callbacks.filter(function (v) {
                return v !== fn;
            });
        }
    }
    function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function (fn) {
                    fn.call(null);
                });
            }
            open = true;
			window.stop();
        } else {
            open = false;
        }
    }
})();
 
check.addListener(function () {
	window.location.reload();
});

//禁用F12
window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    if (event.keyCode == 123) {
    event.preventDefault(); 
    window.event.returnValue = false;
    }
}
