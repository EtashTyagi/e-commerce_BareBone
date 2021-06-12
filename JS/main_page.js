let urls = ["https://phillipbrande.files.wordpress.com/2013/10/random-pic-14.jpg",
"https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"];
let curImIndex=0;
let imageNavIndex=[];
const spaceIndex=3;
const dotSize=2;
const selectedColor="#121212";
const nonSelectedColor="rgba(0, 0, 0, 0.33)"

function fetchPromoLinks() {
    // Fetch from a data source
    document.getElementById("promotional_image").src=urls[0];
}

function buildImageNavIndex() {
    let temp = (((urls.length-1)*spaceIndex+dotSize)/2);
    let offset = "calc(50% - min(" + temp +"vw, "+temp+"vh))";
    let left = 0;
    for (let i = 0; i < urls.length; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.left = "calc(min("+left+"vw, "+left+"vh) + "+offset+")";
        imageNavIndex.push(dot);
        document.getElementById("image-displayer-navindex").appendChild(dot);
        left+=spaceIndex;
    }
    for (let i = 0; i < imageNavIndex.length; i++) {
        imageNavIndex[i].addEventListener("click", ()=>{
            if (curImIndex !== i) {
                imageNavIndex[curImIndex].style.background=nonSelectedColor;
                curImIndex=i;
                imageNavIndex[curImIndex].style.background=selectedColor;
                document.getElementById("promotional_image").style.opacity="0%";
                setTimeout(()=>{
                    document.getElementById("promotional_image").src=urls[curImIndex];
                    document.getElementById("promotional_image").style.opacity="100%";
                }, 150)


            }
        })
    }
    imageNavIndex[0].style.background=selectedColor;
}
function mainImageRight() {
    document.getElementById("promotional_image").style.opacity="0%";
    imageNavIndex[curImIndex].style.background=nonSelectedColor;
    curImIndex = (curImIndex===urls.length-1) ?  0: curImIndex+1;
    imageNavIndex[curImIndex].style.background=selectedColor;
    setTimeout(()=>{
        document.getElementById("promotional_image").src=urls[curImIndex];
        document.getElementById("promotional_image").style.opacity="100%";
    }, 150);
}
function mainImageLeft() {
    document.getElementById("promotional_image").style.opacity="0%";
    imageNavIndex[curImIndex].style.background=nonSelectedColor;
    curImIndex = (curImIndex===0) ?  urls.length-1: curImIndex-1;
    imageNavIndex[curImIndex].style.background=selectedColor;
    setTimeout(()=>{
        document.getElementById("promotional_image").src=urls[curImIndex];
        document.getElementById("promotional_image").style.opacity="100%";
    }, 150);
}