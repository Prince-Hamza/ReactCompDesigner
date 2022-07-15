

export const getXYpos = (elm) => {
    var x = elm.offsetLeft;
    var y = elm.offsetTop;
    elm = elm.offsetParent
    while (elm != null) {
        x = parseInt(x) + parseInt(elm.offsetLeft)
        y = parseInt(y) + parseInt(elm.offsetTop)
        elm = elm.offsetParent;
    }
    return { 'xp': x, 'yp': y }
}

export const getCoords = (e) => {
    var xy_pos = getXYpos(e.target)
    var x = e.pageX - xy_pos['xp']
    var y = e.pageY - xy_pos['yp']
    return { 'xp': x, 'yp': y }
}
