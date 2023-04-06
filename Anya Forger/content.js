let Anya =[

    "https://images4.alphacoders.com/118/thumbbig-1187146.webp",
    "https://images5.alphacoders.com/124/thumbbig-1240551.webp",
    "https://images3.alphacoders.com/119/thumbbig-1197606.webp",
    "https://images4.alphacoders.com/119/thumbbig-1197605.webp",
    "https://images8.alphacoders.com/124/thumbbig-1244496.webp",
    "https://images2.alphacoders.com/124/thumbbig-1244257.webp",
    "https://images5.alphacoders.com/129/thumbbig-1290746.webp",
    "https://images6.alphacoders.com/126/thumbbig-1262201.webp",
];

const imgs =document.getElementsByTagName("img");
for(let i=0; i<imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * Anya.length)
    imgs[i].src =Anya[randomImgImg];
    
}