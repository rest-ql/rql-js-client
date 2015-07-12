(function () {
    "use strict";

    var RQL = {
        getClientFactory: function() {
            return require('./client/factory.js');
        }
    };

    module.exports = RQL;
})();