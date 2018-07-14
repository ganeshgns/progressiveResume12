function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
};
xhr.send();
}
loadJson("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var childTwo=document.querySelector(".child2");
console.log(childTwo);

function career(careerInfo) {
  var heading=document.createElement("h2");
  heading.textContent="Career Objective ";
  childTwo.appendChild(heading);
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerInfo.info;
  childTwo.appendChild(careerP);


}
function education(edu){

  var heading1=document.createElement("h2");
  heading1.textContent="Education Qualifications";
  childTwo.appendChild(heading1);
  var hr=document.createElement("hr");
  heading1.appendChild(hr);
var table=document.createElement("table");

childTwo.appendChild(table);
table.border="1";
var tr1="<tr><th>Degree</th><th>Instiute</th><th>Percentage</th></tr>";

var tr2="";
for(var i=0;i<edu.length;i++){
  tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].instiute+"</td><td>"+edu[i].data+"</td></tr>";
}
table.innerHTML=tr1+tr2;
}
function skills(skil){
  var heading2=document.createElement("h2");
  heading2.textContent="Technical Skills";
  childTwo.appendChild(heading2);
  var hr=document.createElement("hr");
  heading2.appendChild(hr);

for(var i=0;i<skil.length;i++){
  var titleH=document.createElement("h3");
  titleH.textContent=skil[i].title;
  childTwo.appendChild(titleH);
  var ul=document.createElement("ul");
  childTwo.appendChild(ul);
  for(var j=0;j<skil[i].info.length;j++){
    var li=document.createElement("li");
    li.textContent=skil[i].info[j];
    ul.appendChild(li);
  }
}
}
