(function () {
    "use strict";

    var clientFactory = {
        getHttpClient: function() {
            return require('./http_client.js')
        }
    };

    module.exports = clientFactory;
})();