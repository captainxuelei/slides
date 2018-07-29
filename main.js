let n
initialise()

setInterval(() => {
    makeLeave(getImage(n)).
        one('transitionend', (x) => {
            makeEnter($(x.currentTarget))
        })
    makeCurrent(getImage(n + 1))
    n += 1
}, 3000)


function getImage(n) {
    return $(`.images>img:nth-child(${y(n)})`)
}
function initialise() {
    n = 1
    getImage(n).addClass('current').siblings().addClass('enter')
}

function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}
function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}
function y(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}