app.filter("trusted", ($sce) => {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    }
})