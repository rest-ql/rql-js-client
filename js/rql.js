define(function () {
    var RQL = {};

    RQL.request = (function() {
        return {
            send: function () {
                var req = new XMLHttpRequest();
                req.open('POST', "http://local.vm/api", true);
                //req.open("POST","ajax_test.asp",true);
                //req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                req.setRequestHeader("Content-type","application/json");

                req.onload = function (e) {
                    console.log(e);
                    if (req.readyState === 4) {
                        var headers = req.getAllResponseHeaders().toLowerCase();
                        //console.log(headers, req.responseText, req.status );
                        //console.log(JSON.parse(req.responseText));
                        console.log(req.responseText);
                    }
                };

                req.onerror = function (e) {
                    console.error(req.statusText);
                };

                req.send('{"a": "safasdf"}');
                //req.send(null);
                //req.send("fname=Henry&lname=Ford");
            }
        };
    }) ();

    return RQL;
});