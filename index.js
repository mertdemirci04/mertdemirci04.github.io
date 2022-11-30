let birinci = document.querySelector(".hakkimda")
let ikinci = document.querySelector(".iletişim");
let uçuncu = document.querySelector(".cv");
let merhaba = document.querySelector(".yazibaslik");
let yazi = document.querySelector(".yazilar");
let yazi1 = document.querySelector(".yazilar1");
let yazi2 = document.querySelector(".yazilar2");
let yazi3 = document.querySelector(".yazilar3");

let iletişim = ikinci.addEventListener("click",function(){

    merhaba.innerHTML = 'İletişim Bilgileri';
    yazi.innerHTML = 'TELEFON ===> 05538047890'
    yazi1.innerHTML = 'MAİL ===> demircimert@gmail.com'
    yazi2.innerHTML = 'INSTAGRAM ===> mertdemirci04'
    yazi3.innerHTML = 'TWITTER ===> @mertdemirci04'
    ikinci.style.color = "aqua"
    ikinci.style.borderBottom = '3px solid aqua'
    birinci.style.color = "black"
    birinci.style.border = "none"
    uçuncu.style.color = "black"
    uçuncu.style.borderBottom = "none"

})
let hakkimda = birinci.addEventListener("click",function(){

    merhaba.innerHTML = 'Merhaba';
    yazi.innerHTML = 'Benim adım Mert.18 Yaşındayım.Şuanda İstanbul Topkapı Üniversitesinde'
    yazi1.innerHTML = 'ingilizce Bilgisayar Mühendisliği okuyorum.Boş zamanlarımda genellikle'
    yazi2.innerHTML = 'yazılım öğrenmeye,kendimi geliştirmeye çalışıyorum.'
    yazi3.innerHTML = ''
    ikinci.style.color = "black"
    ikinci.style.borderBottom = 'none'
    birinci.style.color = "aqua"
    birinci.style.borderBottom = "3px solid aqua"
    uçuncu.style.color = "black"
    uçuncu.style.borderBottom = "none"

})  
let üç = uçuncu.addEventListener("click",function(){

    merhaba.innerHTML = 'CV BİLGİLERİ';
    yazi.innerHTML = 'Sabancı Anadolu Lisesinden 88 ortalama ile mezun oldum.'
    yazi1.innerHTML = 'Üniversite sınavından aldığım TYT 410 Ayt 389 puan ile Topkapı Üniversitesi'
    yazi2.innerHTML = 'İngilizce Bilgisayar Mühendisliğini kazandım.Kendim bireysel olarak Back-End'
    yazi3.innerHTML = 'dil olarak C , Front-End dil olarak HTML,CSS ve JavaScript öğrendim.'
    ikinci.style.color = "black"
    ikinci.style.borderBottom = 'none'
    birinci.style.color = "black"
    birinci.style.borderBottom = "none"
    uçuncu.style.color = "aqua"
    uçuncu.style.borderBottom = "3px solid aqua"


})  


