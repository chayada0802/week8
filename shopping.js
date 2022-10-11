window.onload = pageLoad;

function pageLoad(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "cloth.json");
    xhr.onload = function() {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        showData(data);
    };
    xhr.onerror = function() { alert("ERROR!"); };
    xhr.send();
}

function showData(data){

     var showdiv = document.querySelectorAll("#layer div");
     var keys = Object.keys(data);
     for(var i =0; i< keys.length;i++){
        var text = document.createElement("p");
        var pic = document.createElement("img");
        pic.src = "pic/" + data[keys[i]].pic;
        text.innerHTML =  "Brand " + data[keys[i]].brandname +"<br>"+" Price : "+ data[keys[i]].price +" Baht";
        showdiv[i].appendChild(text);
        showdiv[i].appendChild(pic);
     }

}
