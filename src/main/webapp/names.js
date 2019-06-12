
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne","hanne","Sanne"];
var all = boys.concat(girls); //ny array for alle navnene.
var sorted = false;

   //'DOMContentLoaded' sikrer at indholdet bliver loaded.
  document.addEventListener('DOMContentLoaded', function () {
    
      girlList(girls);
      boyList(boys);
      allList(all); 
      
      document.getElementById("addboy").onclick = addBoy;
      document.getElementById("addgirl").onclick = addGirl;
      document.getElementById("removeboy").onclick = remove;
      document.getElementById("removegirl").onclick = remove;
      document.getElementById("reverse").onclick = reverseAll;
      document.getElementById("sort").onclick = sortAll;
 
 });
 
 //viser pigenavne
 function girlList(girls){
     var list = girls.map(name=>"<li>"+name+"</li>");
      var listAsStr ="<ul>" + list.join("")+ "<ul>";
      document.getElementById("girls").innerHTML = listAsStr;
 }
 //viser drengenavne
 function boyList(boys){
     var list2 = boys.map(name=>"<li>"+name+"</li>");
      var listAsStr2 = "<ul>"+ list2.join("")+ "<ul>";
      document.getElementById("boys").innerHTML = listAsStr2;    
 }
 //viser alle navnene
 function allList(all){
     var allList = all.map(name=>"<li>"+name+"</li>");
      var allListStr = "<ul>"+ allList.join("")+ "<ul>";
     document.getElementById("all").innerHTML = allListStr; 
 }
 
function addBoy(event){
    event.preventDefault();
    var inputNode = document.getElementById("newboy");
    var text = inputNode.value;
    
    boys.push(text);
    boyList(boys);
    
    all.push(text);
    allList(all);   
}
function addGirl(event){
    event.preventDefault();
    var inputNode = document.getElementById("newgirl");
    var text = inputNode.value;
    
    girls.push(text);
    girlList(girls);
     
    all.push(text);
    allList(all);          
}
//fjerner et pigenavn eller drengenavn alt efter om det er valgt remove first eller remove last.
function remove(event){
    event.preventDefault();
    var gender = event.target.id; //for at få id fra knapperne remove boy/remove girl
    
    if(gender === "removeboy" && document.getElementById("first").checked){
        boys.shift();
        boyList(boys);  
        var all = boys.concat(girls);
        allList(all);
    }else if(gender === "removeboy" && document.getElementById("last").checked){
        boys.pop();
        boyList(boys);  
        var all = boys.concat(girls);
        allList(all);
    }
    if(gender ==="removegirl" && document.getElementById("first").checked){
        girls.shift();
        girlList(girls); 
        var all = boys.concat(girls);
        allList(all);
    }else if(gender ==="removegirl" && document.getElementById("last").checked){
        girls.pop();
        girlList(girls); 
        var all = boys.concat(girls);
        allList(all);
    }    
} 

function reverseAll(){
    all.reverse();
    allList(all);
}

function sortAll(){
    
    if(sorted === false){
    sorted = true;
    all.sort(
    function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;   
    }); } else
{
    sorted = false;
    all.sort(
    function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;  
});
all.reverse();
}
    allList(all);
}
