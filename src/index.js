const desktopWidth = 1680;

const img = document.getElementById("img");

const calculateImgResponsive = (w) =>{
  if(window.innerWidth >= desktopWidth){
    img.setAttribute("src","./images/image-product-desktop.jpg");
    return
  };
  
  img.setAttribute("src","./images/image-product-mobile.jpg");
};

calculateImgResponsive();

addEventListener("resize",calculateImgResponsive);