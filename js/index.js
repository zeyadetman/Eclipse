/*console.log(document.getElementsByClassName('moon')[0]);
x = -300;

a = 1;
c = 0;
f = 0;

function render() {
    x += 500;
    $('.moon').css({
        'transform': `translate(${x}%,-50%`,
        '-webkit-transform': `translate(${x}%,-50%`,
        '-ms-transform:': `translate(${x}%,-50%`
    });
    $('.sky').css({
        'background-color': `translate(${f++}%,-50%`
    });
    console.log(x);
}
while (c < 200) {
    if (c % 2 == 0) {
        window.setTimeout(render, 1000 * a);
        a += 10;
    } else if (c % 2 == 1) {
        window.setTimeout(function() {
            x -= 500;
            $('.moon').css({
                'transform': `translate(${x}%,-50%`,
                '-webkit-transform': `translate(${x}%,-50%`,
                '-ms-transform:': `translate(${x}%,-50%`
            });
            console.log(x);
        }, 1000 * a);
        a += 10;
    }
    c++;
} */
