let preloader = {
    init() {
        const loader = document.getElementById('loader');
        const windowLoad = new Promise( function (resolve) {
            window.onload = function() {
                console.log('Page load fulfilled');
                resolve();
            }
        });
        windowLoad.then(function() {
            loader.classList.add('loader--hide');
        });
    }
}

module.exports = preloader;