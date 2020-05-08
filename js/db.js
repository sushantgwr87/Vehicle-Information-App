//offline database
db.enablePersistence()
  .catch(err => {
      if(err.code == 'failed-precondition'){
          console.log('persistence failed');
      } else if(err.code == 'unimplemented'){
          console.log('persistence is not available');
      }
  });


//real time listener
db.collection('search_history').onSnapshot((snapshot) => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        //console.log(change, change.doc.data(), change.doc.id);
        if(change.type==='added'){
            //add document to web app
            renderHistory(change.doc.data(), change.doc.id);
        }
        if(change.type==='remove'){
            //remove document from web app
            removeSearch(change.doc.id);
        }
    });
});

db.collection('details').onSnapshot(snapshot => {
   // Handle the latest event
   const newestEvent = snapshot.docChanges()[0].doc.data()
   const id = snapshot.docChanges()[0].doc.id
   
   snapshot.docChanges().forEach(event => {
       ser();
   });
})

const searchcontainer = document.querySelector('.searchs');
 searchcontainer.addEventListener('click', evt => {
     console.log(evt);
    if(evt.target.textContent === 'delete_outline'){
        const id = evt.target.getAttribute('data-id');
        db.collection('search_history').doc(id).delete();
    }
});

const form = document.querySelector(".add-data");
 form.addEventListener('submit', evt => {
    evt.preventDefault();

    const newd ={
        plate : form.number.value.toUpperCase(),
        owner : form.own.value.toUpperCase(),
        register : form.register.value.toUpperCase(),
        rdate : form.rdate.value.toUpperCase(),
        age : form.age.value.toUpperCase(),
        model : form.maker.value.toUpperCase(),
        fitness : form.fit.value.toUpperCase(),
        insure : form.ins.value.toUpperCase(),
        fnorm : form.norm.value.toUpperCase(),
        ftype : form.ftype.value.toUpperCase(),
        cls : form.stand.value.toUpperCase()
    };

    db.collection('details').add(newd)
      .catch(err => console.log(err));

    form.number.value = '';  
    form.own.value = '';
    form.register.value = '';
    form.rdate.value = '';
    form.age.value = '';
    form.maker.value = '';
    form.fit.value = '';
    form.ins.value = '';
    form.norm.value = '';
    form.ftype.value = '';
    form.stand.value = '';
});