define(["q"], function (Q) {
    "use strict";

    var ClientInterface = {
        getClient: function() {
            return new HttpClient();
        }
    };

    function HttpClient () {
        function send () {
            var req = new XMLHttpRequest();
            var deferred = Q.defer();

            req.open('POST', "http://local.vm/api", true);
            //req.open("POST","ajax_test.asp",true);
            //req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            req.setRequestHeader("Content-type","application/json");

            req.onload = function (e) {
                if (req.readyState === 4) {
                    //var headers = req.getAllResponseHeaders().toLowerCase();
                    //console.log(headers, req.responseText, req.status );
                    //console.log(JSON.parse(req.responseText));
                    //console.log(req.responseText);
                    deferred.resolve(req.responseText);
                } else {
                    deferred.reject(req.status)
                }
            };

            req.onerror = function (e) {
                console.error(req.statusText);
            };

            req.send('{"a": "safasdf"}');
            //req.send(null);
            //req.send("fname=Henry&lname=Ford");

            return deferred.promise;
        };

        this.get = function () {
            return send();
        };

        this.delete = function () {
            return send();
        };

        this.post = function () {
            return send();
        };

        this.put = function () {
            return send();
        };
    };

    return ClientInterface;
});