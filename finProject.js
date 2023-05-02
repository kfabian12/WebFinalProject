var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'rgb(112, 192, 230)';

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 700) {
        // green
        body.style.backgroundColor = 'rgb(112, 192, 230)';
    } else if (scroll >= 700 && scroll < 1400) {
        // yellow
        body.style.backgroundColor = 'rgb(80, 107, 199)';
    } else if (scroll >= 1400 && scroll < 2100) {
        // yellow
        body.style.backgroundColor = 'rgb(120, 56, 199)';
    } else {
        // purple
        body.style.backgroundColor = 'rgb(176, 134, 227)';
    }
}
