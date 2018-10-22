
    //Переменные
backlogo = document.getElementsByClassName('background__img-logo');
backyoutube = document.getElementsByClassName('background__img-youtube');
backweb = document.getElementsByClassName('background__img-web');
rightF = document.getElementsByClassName('background__figure-right');
about = document.getElementsByClassName('about');
imgText = document.getElementsByClassName('img-text');
works = document.getElementsByClassName('works');
menuOverflow = document.getElementsByClassName('menu-overflow');
nclick = document.getElementsByClassName('nclick');
content = document.getElementsByClassName('content');
thisPage = document.getElementsByClassName('thisPage')[0];

contentLogo = document.getElementsByClassName('content__logo')[0];
contentYoutube = document.getElementsByClassName('content__youtube')[0];
contentWeb = document.getElementsByClassName('content__web')[0];

logoItem = document.getElementsByClassName("l-img");
itemText = document.getElementsByClassName("item-text")

control = 1;
clk = 0;
clkLOGO = 0;
//----------
    contentLogo.hidden = true;
    contentYoutube.hidden = true;
    contentWeb.hidden = true;
//----------

function mouseOn(i){
    if (i == 0) backlogo[0].style.opacity = "1";
    if (i == 1) backyoutube[0].style.opacity = "1";
    if (i == 2) backweb[0].style.opacity = "1";
}
function mouseOff(i){
    if (control == 1){
        if (i == 0) backlogo[0].style.opacity = "0";
        if (i == 1) backyoutube[0].style.opacity = "0";
        if (i == 2) backweb[0].style.opacity = "0";
    }
}
function mouseClick(i){
    control = 0;
    clk += 1;
    if (clk % 2 != 0){

        thisPage.style.opacity = "0";
        rightF[0].style.right = "-800px";
        about[0].style.right = "-700px";
        // about[0].style.opacity  = "0";

        rightF[0].style.transition = "1s";

        if( i == 0 ) {  
            nclick[1].style.opacity = '0.3'; 
            nclick[2].style.opacity = '0.3'; 
            imgText[0].style.opacity = "0"; 
            nclick[1].style.pointerEvents = "none";
            nclick[2].style.pointerEvents = "none";

            contentLogo.hidden = false;
        }
        if( i == 1 ) { 
            nclick[0].style.opacity = '0.3'; 
            nclick[2].style.opacity = '0.3'; 
            imgText[1].style.opacity = "0";
            nclick[0].style.pointerEvents = "none";
            nclick[2].style.pointerEvents = "none";

            contentYoutube.hidden = false;
        }
        if( i == 2 ) { 
            nclick[0].style.opacity = '0.3'; 
            nclick[1].style.opacity = '0.3'; 
            imgText[2].style.opacity = "0";
            nclick[1].style.pointerEvents = "none";
            nclick[0].style.pointerEvents = "none";

            contentWeb.hidden = false;
        }

        timeoutID = setTimeout(() => {
            content[0].style.top = "0";
        }, 200);

        clearTimeout(timeoutContent);
    }
    if (clk % 2 == 0){
        thisPage.style.opacity = "1";
        rightF[0].style.right = "0";
        about[0].style.right = "var(--margins)";

        rightF[0].style.transition = "0.5s";

        for (k = 0; k<=2; k++){
            nclick[k].style.opacity = "1";
            imgText[k].style.opacity = "1";
            nclick[k].style.pointerEvents = "auto";
        }

        content[0].style.top = "-100%";

        timeoutContent = setTimeout(() => {
            contentLogo.hidden = true;
            contentYoutube.hidden = true;
            contentWeb.hidden = true;
        }, 400);


        control = 1;

        clearTimeout(timeoutID);
    }
}
function clickItems(e){
    clkLOGO += 1;
    test = (Math.floor(contentLogo.childNodes.length/2));
    // test = contentLogo.childNodes.length;
    if (clkLOGO % 2 != 0){
        for (i = 0; i < test; i++){
            logoItem[i].style.opacity = "0";
        };
        setTimeout(() => {
            for (i = 0; i < test; i++){
                logoItem[i].hidden = true;
            };
        }, 300);
        setTimeout(() => {
            logoItem[e].hidden = false;
            logoItem[e].style.opacity = "1";
            logoItem[e].style.width = "95%";
            itemText[e].style.display = "block";
        }, 300);
        setTimeout(() => {
            itemText[e].style.opacity = "1";
        }, 600);
        clearTimeout(timerLogo);
    }
    if (clkLOGO % 2 == 0){
        logoItem[e].style.opacity = "0";
        itemText[e].style.opacity = "0";
        setTimeout(() => {
            logoItem[e].style.width = "46%";
            itemText[e].style.display = "none";
            for (i = 0; i < test; i++){
                logoItem[i].hidden = true;
                logoItem[i].hidden = false;
            }
        }, 250);
        timerLogo = setTimeout(() => {
            for (i = 0; i < test; i++){
                logoItem[i].style.opacity = "1";
            }
        }, 550);
    }
}
function phoneExit(){

    for (k = 0; k<=2; k++){
        nclick[k].style.opacity = "1";
        imgText[k].style.opacity = "1";
        nclick[k].style.pointerEvents = "auto";
    }

    content[0].style.top = "-100%";

    setTimeout(() => {
        contentLogo.hidden = true;
        contentYoutube.hidden = true;
        contentWeb.hidden = true;
    }, 400);

    clk = 0;
}