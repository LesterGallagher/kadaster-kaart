
var launchBtn = document.querySelector('#lauch-app');

if (launchBtn) {
    launchBtn.addEventListener('click', function() {
        document.querySelectorAll('[data-src]').forEach(function (elem) {
            elem.setAttribute('src', elem.getAttribute('data-src'));
        });
        document.querySelector('.draggable').classList.add('open');
    });
}


var headerImg = document.querySelector('.block-hero-2 .column.media img');

if (headerImg) {
    document.addEventListener('scroll', onSroll);
    document.addEventListener('orientationchange', onSroll);
    
    function onSroll(e) {
        headerImg.style.transform = 'translateY(' + (window.scrollY * - 0.5) + 'px)';
    }
}

document.querySelectorAll('.text-rotate').forEach(function(element) {
    var items = element.getAttribute('data-items').split(',');
    var j = 0;
    var k = 0;
    var wrap = element.querySelector('.wrap');
    setInterval(function () {
        if (k < items[j].length) {
            wrap.textContent += items[j][k];
        }
        k++;
        if (k > items[j].length + 10) {
            wrap.textContent = '';
            k = 0;
            j++;
            j %= items.length;
        }
    }, 200);
});
