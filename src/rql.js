(function () {
    "use strict";
    var clientFactory = require('./client/factory.js');

    console.log(clientFactory);

    var RQL = {
        getClientFactory: clientFactory
    };

    module.exports = RQL;
})();