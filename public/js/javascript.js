var showTF = true;
window.onload = function(){
    show();
};

function show() {
    if (!showTF) {
        showTF = true;
        document.getElementById('form').style.display = "block";
    } else {
        showTF = false;
        document.getElementById('form').style.display = "none";
    }
}


function noValidImg(image) {
    image.src = "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg";
}