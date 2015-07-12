define(["./http_client.js"], function (HttpClient) {
    "use strict";

    var clientFactory = {
        getHttpClient: function() {
            return (new HttpClient()).getClient();
        }
    };

    return clientFactory;
});