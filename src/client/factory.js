(function () {
    "use strict";

    var clientFactory = {
        getHttpClient: function() {
            var clientInterface = require('./http_client.js');
            return clientInterface.getClient();
        }
    };

    module.exports = clientFactory;
})();