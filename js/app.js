if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg)=>console.log('service worker registered',reg))
    .catch((err)=>console.log('service worker not registered',err))
}

document.addEventListener("DOMContentLoaded", function () {
    // nav menu
    const menus = document.querySelectorAll(".side-menu");
    M.Sidenav.init(menus, { edge: "left" });
  });
  