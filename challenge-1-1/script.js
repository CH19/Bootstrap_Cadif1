'use strict'
let estrucutra = ``;
const Lista = {
    Nombre: ['Friends','Groups', 'MarketPlace', 'Watch', 'remembers', 'Saved', 'pages', 'events', 'Works', 'See More'],
    Logo: ['<ion-icon name="people-outline"></ion-icon>','<ion-icon name="person-circle-outline"></ion-icon>','<ion-icon name="storefront-outline"></ion-icon>', '<ion-icon name="play-circle-outline"></ion-icon>','<ion-icon name="time-outline"></ion-icon>','<ion-icon name="bookmark-outline"></ion-icon>','<ion-icon name="flag-outline"></ion-icon>','                                       <ion-icon name="calendar-outline"></ion-icon>','<ion-icon name="bag-handle-outline"></ion-icon>','                                       <ion-icon name="chevron-down-circle-outline"></ion-icon>' ],
    id: []
}
//  console.log(Lista.Logo[0] + ',' + Lista.Nombre[0]);
// console.log(estrucutra)
// const menusito = document.querySelector('#Menusito');
// Lista.Nombre.forEach((Name, index) =>{
//     let idTemporal = (Math.random() * 100).toString(36).slice(3)
//     Lista.id.push(idTemporal)
//     let structure = `</li>
//     <div id="${Lista.id[index]}" class="d-flex flex-row accordion">
//                   <div class="accordion-item">
//                     <div class="accordion-header">
//                       <button class="accordion-button text-dark d-flex align-items-center justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#${Lista.id[index]}" aria-expanded="false" aria-controls="${Lista.id[index]}">                                         
//                       <figure class="mx-4 text-primary">${Lista.Logo[index]}</figure>
//                        ${Name}</button>
//                     </div>
//                     <div id="${Lista.id[index]}" class="accordion-collapse collapse" style="width: 300px" data-bs-parent="#${Lista.id[index]}">
//                      <div class="accordion-body">
//                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                      </div>
//                    </div>
//                    </div>
//     </div>
//   <li>
// `
// estrucutra += structure;
// })
// console.log(estrucutra)
// $('#Menusito').append(estrucutra);

function generarLeftBarNotification(Casilla, icono, notificaciones){
    // Esta funcion no es tan reusable es para hacer imitiacion del despliegue de notificaciones con un accordion segun indica la maqueta 
    estrucutra = `
    <div id="${Casilla}" class="d-flex flex-row accordion">
    <div class="accordion-item">
      <div class="accordion-header">
        <button class="accordion-button text-dark d-flex align-items-center justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#${Casilla}" aria-expanded="false" aria-controls="${Casilla}">                                         
        <figure class="mx-4 text-primary">${icono}</figure>
        <span class="fw-bold">${Casilla}</span><br>
         <br><p class="text-primary fw-medium"style="font-size: 12px;">&#11824;${notificaciones} notificacion</p></span>
         </button>
      </div>
      <div id="${Casilla}" class="accordion-collapse collapse" style="width: 300px" data-bs-parent="#${Casilla}">
       <div class="accordion-body">
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
       </div>
     </div>
     </div>
</div>
<li>    `
return $(`#${Casilla}`).append(estrucutra);
}
generarLeftBarNotification(Lista.Nombre[0], Lista.Logo[0], '2');
generarLeftBarNotification(Lista.Nombre[4], Lista.Logo[4], '9');
generarLeftBarNotification(Lista.Nombre[6], Lista.Logo[6], '7');
generarLeftBarNotification(Lista.Nombre[7], Lista.Logo[7], '4');