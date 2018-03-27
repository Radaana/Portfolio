let blur =  {
    init() {
        let wrapper = document.querySelector('.contact-me');
        let form = document.querySelector('.contact-me__bg');
        let imgWidth = document.querySelector('.speaking__bg').offsetWidth;
        let imgHeight = document.querySelector('.speaking__bg').offsetHeight;
        let posLeft = -wrapper.offsetLeft;
        let posTop = -wrapper.offsetTop;

        let blurCSS = form.style;
        blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + -imgHeight + 'px';
        // blurCSS.backgroundPosition = (posLeft) + 'px' + ' ' + (posTop+800) + 'px';
        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + '-100px';
        blurCSS.backgroundPosition = (posLeft ) + 'px' + ' ' + 'bottom';
        console.log(imgHeight);
    }
    
}

module.exports = blur;