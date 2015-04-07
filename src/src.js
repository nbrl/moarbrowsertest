;(function (context) {
    function someFunc () {
        console.log('HELLO');
    }

    context.THING = {
        someFunc: someFunc
    };
})(this);
