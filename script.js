const textarea = document.querySelector("textarea")
const toplamKarakter = document.querySelector(".toplam")
const kalanKarakter = document.querySelector(".kalan")


textarea.addEventListener("keyup",()=>{

toplamKarakter.innerHTML=`Toplam Karakter: <span style="color: blue;">${textarea.value.length}</span>`
kalanKarakter.innerHTML=`Kalan Karakter Sayısı: <span style="color: red;">${50-textarea.value.length}</span>`



})