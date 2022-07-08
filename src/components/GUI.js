import $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'


var element

export function Resizable() {
    //create box in bottom-left
    var resizer = document.createElement('div');
    resizer.style.id = 'resizerifier';
    resizer.style.width = '15px';
    resizer.style.height = '5px';
    resizer.style.background = 'black';
    resizer.style.left = 0;
    resizer.style.bottom = 0;
    resizer.style.cursor = 'se-resize';

    //Append Child to Element
    $(".DropItemsContainer").children("div").append(resizer)
    resizer.addEventListener('mousedown', initResize, false);
}

function initResize(e) {
    //$(".DropItemsContainer").children("div").draggable('disable')
    window.addEventListener('mousemove', Resize, false)
    window.addEventListener('mouseup', stopResize, false)
    window.addEventListener('mouseleave', stopResize, false);
}

function Resize(e) {
    try {
        element.style.width = (e.clientX - element.offsetLeft) + 'px';
        element.style.height = (e.clientY - element.offsetTop) + 'px';
    } catch (ex) {
         
    }

}

function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}

