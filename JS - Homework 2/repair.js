// Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
let bos = document.querySelector('#task')
if(bos.innerHTML == " "){
    bos.innerHTML = ""
}

// Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan
//  bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.

// kapatma tuşunun yapılması
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//Geçerli liste öğesini gizlemek için bir kapat düğmesine tıklayın
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//Bir liste öğesine tıklandığında "işaretli" bir sembol ekleyin
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//"Ekle" düğmesine tıkladığınızda yeni bir liste öğesi oluşturun
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("task").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      $("#liveToast2").toast("show");
    } else {
      document.getElementById("list").appendChild(li);
      $("#liveToast").toast("show");
    }
    document.getElementById("task").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
// Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir.
//  Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.

// Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. 
// Öncelikli amacını sağlıyor olması lazım.
