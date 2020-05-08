const searchs = document.querySelector(".searchs");
const dat = document.querySelector(".details");

var plates = ["DL712CN6","DL7CN7180"];
var owner = ["Leena","Sanjay"];
var n;
function renderHTML(doc){
  // TODO: do something with the data 

  db.collection("search_history").add({
    name: "Tokyo",
    country: "Japan"
});
 
  // To create elements (such as list or span) 
  
  var plano = document.createElement('span');

 
  // To set attributes to elements 
  // list.setAttribute('data-id', doc.id);
  // name.textContent = doc.data().owner;
  // plano.textContent = doc.data().plate;
  // To append element to the list 
  plano.textContent = doc.data().plate;
  // list.appendChild(plano);
 
  // To append the the list to querySelector
  document.getElementsByClassName(".numPlate").appendChild(plano);
 }
function ser(){
  n=0;
  var num = document.getElementById("plateNo").value;
  if(num == ""){
    var ent = document.getElementById("plateNo");
    ent.classList.add("invalid");
    document.getElementById("err").setAttribute("data-error", "Wrong");
  }
  else{
    for(i=0;i<2;i++){
        var ans = num.localeCompare(plates[i]); 
        if(ans==0){
          db.collection("details").where('plate', '==', num).get()
            .then(snapshot => {
               if (snapshot.empty) {
                 console.log('No matching documents.');
               return;
                }  
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
          renderHTML(doc);
          });
        })
           .catch(err => {
           console.log('Error getting documents', err);
        });
           n=1;
           window.open("/pages/detail.html","_self");
           break;
        }}
        if(n==0) {
          var element = document.getElementById("plateNo");
          element.classList.add("invalid");
          document.getElementById("err").setAttribute("data-error", "Invalid Entry");
        }
  }}
  
const showEvents = (event, id) => {
  const output = `<div class="row">
                     <div class="col s6 offset-s3 l6 offset-l3">
                   <div class="head card-panel">
                     <div class="header center-align"><h5>${event.plate}</h5></div>
                   </div></div></div></div></div>
                   <div class="details container">
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">person</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Owner</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.owner}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">info</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Registering Authority</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.register}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">event</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Registration Date</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.rdate}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">info</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Vehicle Age</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.age}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">build</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Maker/Model</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.model}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">local_hospital</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Fitness Upto</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.fitness}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">info</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Insurance Upto</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.insure}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">assessment</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Fuel Norms</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.fnorm}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">local_gas_station</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Fuel Type</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.ftype}</h5></span>
                   </div></div></div>
                   <div class="detail card-panel row">
                     <div class="col s12">
                       <div class="detail-icon">
                         <i class="small material-icons">directions_car</i>
                       </div>
                     <div class="detail-content">
                     <span class="detail-title"><h5>Vehicle Class</h5></span>
                     <div class="divider"></div>
                     <span class="truncate"><h5>${event.cls}</h5></span>
                   </div></div></div>
                   `;
     dat.innerHTML +=output;
};

var ids = db.collection("search_history").get();

//render search data
const renderHistory = (data, ids) => {
  const html = `<div class="card search white row" data-id="${ids}">
            <div class="card-icon">
              <i class="medium material-icons">directions_car</i>
            </div>
              <div class="search-details">
                <div class="search-title center truncate"><h4>${data.plate}</h4></div>
                <div class="divider"></div>
                <div class="search-history">
                  <ul>
                    <li><h6 class="truncate"><b>Owner &emsp; :</b> ${data.owner}</h6></li>
                    <li><h6 class="truncate"><b>Vehicle &nbsp;&ensp; :</b> ${data.vehicle}</h6></li>
                    <li><h6 class="truncate"><b>Location&ensp;:</b> ${data.register}</h6></li>
                  </ul>
                </div>
              </div>
              <div class="search-delete">
                <i class="material-icons dead" data-id="${ids}">delete_outline</i>
              </div>
            </div>
  `;
  searchs.innerHTML += html;
};

const removeSearch = (id) => {
  const searchd = document.querySelector(`.search[data-id=${id}]`);
  searchd.remove();
};