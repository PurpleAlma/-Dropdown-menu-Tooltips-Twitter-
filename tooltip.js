const tooltip=`<div class="toolbar">
<div class="tooltip-item"><img src="tooltips/like.png"></div>
<div class="tooltip-item"><img src="tooltips/dislike.png"></div>
<div class="tooltip-item"><img src="tooltips/comment.png"></div>
<div class="tooltip-item"><img src="tooltips/star.png"></div>
</div>`

const toolBar=document.createElement("div");
toolBar.classList.add('toolbar')
toolBar.innerHTML=tooltip

const toolBar_triangle=document.createElement("div");
toolBar_triangle.classList.add('toolbar_triangle')

const articleElement = document.getElementsByClassName("article")[0];

function removeToolBar() {
    if (document.body.contains(toolBar)) {
    //   toolBar.style.top = null;
    //   toolBar.style.left = null;
    //   toolBar_triangle.style.top = null;
    //   toolBar_triangle.style.left = null;
      document.body.removeChild(toolBar);
      document.body.removeChild(toolBar_triangle);
    }
}

let selectionQueued = false;


function displayToolBar(){
    const selection=document.getSelection()
    const anchorNode=selection.anchorNode;
    const focusNode=document.focusNode;

    document.body.appendChild(toolBar);
    document.body.appendChild(toolBar_triangle);

    const toolBarWidth=toolBar.offsetWidth;
    const toolBarHeight=toolBar.offsetHeight;
    const triangleWidth=toolBar_triangle.offsetWidth
    const triangleHeight=toolBar_triangle.offsetHeight

    const rangeRects = selection.getRangeAt(0).getClientRects();
    const parentElement = selection.anchorNode.parentElement;

    const y = rangeRects[0].y;
    const x = rangeRects.length > 1 ?
      parentElement.offsetLeft + parentElement.offsetWidth/2 :
      rangeRects[0].x + rangeRects[0].width/2;
  
    toolBar.style.top = `${y - toolBarHeight - triangleHeight/2}px`;
    toolBar.style.left = `${x - toolBarWidth/2}px`;
  
    toolBar_triangle.style.top = `${y - triangleHeight/2}px`;
    toolBar_triangle.style.left = `${x - triangleWidth/2}px`;
}

document.onmouseup = () => {
    if (selectionQueued) {
      displayToolBar();
    } else {
      removeToolBar();
    }
    selectionQueued = false;
}

document.addEventListener("selectionchange", function(event) {
    const selection = document.getSelection();
    if (selection.type !== "Range") {
      selectionQueued = false;
      return;
    }
  
    if (selection.anchorNode != selection.focusNode) {
      // Cross-paragraph selection
      selectionQueued = false;
      return;
    }
    
    selectionQueued = true;
  });
