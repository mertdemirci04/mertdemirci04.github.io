/*SEÇİM İŞLEMLERİ*/

const puan1 = document.querySelector(".puan1");
const puan2 = document.querySelector(".puan2");
const tas = document.querySelector(".tasm");
const kagit = document.querySelector(".kagitm");
const makas = document.querySelector(".makasm");
const secimsorum = document.querySelector(".seçimsorum");
const bilgisayarsorum = document.querySelector(".bilgisayarsorum");
const kazanan = document.querySelector(".kazanan");

/*SEÇİM İŞLEMLERİ*/

let oyuncu=0;
let bilgisayar=0;

function bilgisayarseçim(){

    const seçim=["kagit","makas","tas"]
    const rastgelesayi=Math.floor(Math.random()*3);
    bilgisayarsorum.setAttribute("src",`res/${seçim[rastgelesayi]}.png`);
    return seçim[rastgelesayi];
    

}
function eventlistener(){
    tas.addEventListener("click",function(){
    secimsorum.setAttribute("src",`res/tas.png`);
    let bil_seçim=bilgisayarseçim();
    sonuc("tas",bil_seçim);
    


    });
    makas.addEventListener("click",function(){
        secimsorum.setAttribute("src",`res/makas.png`);
        let bil_seçim=bilgisayarseçim();
        sonuc("makas",bil_seçim);
        
    
    
        });
        kagit.addEventListener("click",function(){
            secimsorum.setAttribute("src",`res/kagit.png`);
            let bil_seçim=bilgisayarseçim();
            sonuc("kagit",bil_seçim);
            
        
        
            });

}

eventlistener();

function sonuc(oyuncu,bilgisayars){
    switch(oyuncu+bilgisayars){
    
        case "tasmakas" : kazan();
        break;
        case "makaskagit" : kazan();
        break;
        case "kagittas" : kazan();
        break;
        case "taskagit" : kaybet();
        break;
        case "makastas" : kaybet();
        break;
        case "kagitmakas" : kaybet();
        break;
        case "tastas" : berabere();
        break;
        case "makasmakas" : berabere();
        break;
        case "kagitkagit" : berabere();
        break;

    }


}

function kazan(){

    oyuncu=oyuncu+1;
    kazanan.innerHTML="Tebrikler Kazandınız.";
    puan1.innerHTML=oyuncu.toString();

};
function kaybet(){

    bilgisayar=bilgisayar+1;
    kazanan.innerHTML="Kaybettiniz Bilgisayar Kazandı.";
    puan2.innerHTML=bilgisayar.toString();

};
function berabere(){

    kazanan.innerHTML="Tüh Berabere!";
    

};



