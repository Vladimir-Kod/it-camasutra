var slider1 = {
    imagesUrls: [],
    curentImageIndex: 0,

    showPrevBtn: document.getElementById('show-prev-btn'),
    showNextBtn: document.getElementById('show-next-btn'),
    slideImage: document.getElementById('slide-image'),

    start: function () {
        var that = this; // здесь нужно создать переменную и ухватится за this
        // subscribe to events
        this.showPrevBtn.addEventListener('click', function (event){
            that.onShowPrevBtnClick(event);// потому что если здесь написать this.onShowPrevBtnClick(), то фунция ухватится за кнопку
        })                                 // а не за объект slider1 в этом месте this будет кнопка
        
        this.showNextBtn.addEventListener('click', function (event){
            that.onShowNextBtnClick(event)
        })

        // create images array
        this.imagesUrls.push('https://phoneky.co.uk/thumbs/wallpapers/p2ls/signs/40/2e247f7512818920.jpg');
        this.imagesUrls.push('https://portscaner.ru/Files/Wallpaper/Medium/5fc4ec047cd64.jpg');
        this.imagesUrls.push('https://quartet-communications.com/wp-content/uploads/2015/10/5831394265_a6b1c82666_b.jpg');
        this.imagesUrls.push('https://look.com.ua/pic/201710/640x480/look.com.ua-249321.jpg');
        this.imagesUrls.push('https://sun9-15.userapi.com/c636822/u274722657/video/y_877bee84.jpg');
        this.imagesUrls.push('https://ironhackvietnam.edu.vn/wp-content/uploads/2021/01/viet-code-don-gian.jpg');
        this.imagesUrls.push('https://wallbox.ru/resize/800x480/wallpapers/main/201448/f51b9f776ed3af5.jpg');
        this.imagesUrls.push('https://coddoni.ir/wp-content/uploads/2020/10/ba8muy2k2cks-472x267.jpg');

        this.slideImage.src = this.imagesUrls[this.curentImageIndex];
        this.showPrevBtn.disabled = true; // при старте страницы сразу задизейбливается кнопка перелистывания на уменьшение 
    },

    // functions defenitions
    onShowPrevBtnClick: function (event) {
        if (this.curentImageIndex === 0) {
            this.showPrevBtn.disabled = true; // здесь кнопка на уменьшение становится не активной если листать некуда
        } else {
            this.showNextBtn.disabled = false; // здесь кнопка раздизейбливается, как только хотя бы раз нажимается кнопка на уменьшение
            this.curentImageIndex--;
            this.slideImage.src = this.imagesUrls[this.curentImageIndex];
        }
    },

    onShowNextBtnClick: function (event) {
        if (this.curentImageIndex === this.imagesUrls.length - 1) {
            this.showNextBtn.disabled = true; // здесь кнопка на увиличение задизейбливается, т.к. листать больше некуда
        } else {
            this.showPrevBtn.disabled = false; // здесь кнопка раздизейбливается хотябы при одном нажатии кнопки на увиличение
            this.curentImageIndex++;
            this.slideImage.src = this.imagesUrls[this.curentImageIndex];
        }
    },

}