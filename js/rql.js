define(function () {
    var RQL = {};

    RQL.subns = (function() {
        var internalState = "Message";

        var privateMethod = function() {
            return internalState;
        };

        var publicMethod = function() {
            return privateMethod() + " stuff";
        };

        return {
            someProperty: 'prop value',
            publicMethod: publicMethod
        };
    }) ();

    return RQL;
});