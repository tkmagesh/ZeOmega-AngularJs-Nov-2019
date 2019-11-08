(function(){
    function addSync(x,y){
        console.log('   [@Service] processing ', x, ' and ',y);
        var result = x + y;
        console.log('   [@Service] returning the result');
        return result;
    }

    function addSyncClient(x,y){
        console.log('[@Client] triggering the add service');
        var result = addSync(x,y);
        console.log('[@Client] result = ', result);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x, y, callback) {
        console.log('   [@Service] processing ', x, ' and ', y);
        setTimeout(function(){
            var result = x + y;
            console.log('   [@Service] returning the result');
            callback(result);
        }, 5000);
    }

    function addAsyncClient(x, y) {
        console.log('[@Client] triggering the add service');
        addAsync(x, y, function(result){
            console.log('[@Client] result = ', result);
        });
    }

    window['addAsyncClient'] = addAsyncClient;

})();