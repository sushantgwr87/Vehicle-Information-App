var firebaseConfig = {
    apiKey: "AIzaSyAdDxR_7cfyXJSnTTILz75v2XXK79qOq5Y",
    authDomain: "vehicle-information-system.firebaseapp.com",
    databaseURL: "https://vehicle-information-system.firebaseio.com",
    projectId: "vehicle-information-system",
    storageBucket: "vehicle-information-system.appspot.com",
    messagingSenderId: "55400531277",
    appId: "1:55400531277:web:6d40a14af6807a6c402304",
    measurementId: "G-0F7NF291XF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
 // firebase.analytics();

 

//db.collection('details').onSnapshot((snapshot) => {
//    //console.log(snapshot.docChanges());
//    snapshot.docChanges().forEach(change => {
//        //console.log(change, change.doc.data(), change.doc.id);
//        if(change.type==='added'){
//            //add document to web app
//            renderDat(change.doc.data(), change.doc.id);
//        }
//        if(change.type==='remove'){
//            //remove document from web app
//        }
//    });
//});

//db.collection('details').onSnapshot(snapshot => {
//    // Handle the latest event
//    const newestEvent = snapshot.docChanges()[0].doc.data()
//    const id = snapshot.docChanges()[0].doc.id
//    
//    snapshot.docChanges().forEach(event => {
//        showEvents(event.doc.data(), event.doc.id)
//    });
//})

//const serc ={
    //    plate : form.number.value.toUpperCase(),
    //    owner : form.own.value.toUpperCase(),
    //    register : form.register.value.toUpperCase(),
    //    model : form.maker.value.toUpperCase(),
    //};
    //db.collection('search_history').add(serc)
    //  .catch(err => console.log(err));