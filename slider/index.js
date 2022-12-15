// find elements
var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-image');

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

// create images array
var imagesUrls = [];
imagesUrls.push('https://phoneky.co.uk/thumbs/wallpapers/p2ls/signs/40/2e247f7512818920.jpg');
imagesUrls.push('https://portscaner.ru/Files/Wallpaper/Medium/5fc4ec047cd64.jpg'); 
imagesUrls.push('https://quartet-communications.com/wp-content/uploads/2015/10/5831394265_a6b1c82666_b.jpg');
imagesUrls.push('https://look.com.ua/pic/201710/640x480/look.com.ua-249321.jpg');
imagesUrls.push('https://sun9-15.userapi.com/c636822/u274722657/video/y_877bee84.jpg');
imagesUrls.push('https://ironhackvietnam.edu.vn/wp-content/uploads/2021/01/viet-code-don-gian.jpg');
imagesUrls.push('https://wallbox.ru/resize/800x480/wallpapers/main/201448/f51b9f776ed3af5.jpg');
imagesUrls.push('https://coddoni.ir/wp-content/uploads/2020/10/ba8muy2k2cks-472x267.jpg');

var curentImageIndex = 0;

slideImage.src = imagesUrls[curentImageIndex];
showPrevBtn.disabled = true; // при старте страницы сразу задизейбливается кнопка перелистывания на уменьшение 


// functions defenitions
function onShowPrevBtnClick() { 
    if (curentImageIndex === 0){
        showPrevBtn.disabled = true; // здесь кнопка на уменьшение становится не активной если листать некуда
    } else {
        showNextBtn.disabled = false; // здесь кнопка раздизейбливается, как только хотя бы раз нажимается кнопка на уменьшение
        curentImageIndex--;
        slideImage.src = imagesUrls[curentImageIndex];
    }
};

function onShowNextBtnClick() {
    if (curentImageIndex === imagesUrls.length - 1) {
        showNextBtn.disabled = true; // здесь кнопка на увиличение задизейбливается, т.к. листать больше некуда
    } else {
        showPrevBtn.disabled = false; // здесь кнопка раздизейбливается хотябы при одном нажатии кнопки на увиличение
        curentImageIndex++;
        slideImage.src = imagesUrls[curentImageIndex];
    }
};
