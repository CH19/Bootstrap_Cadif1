'use strict'
let estrucutra = ``;
const Lista = {
    Nombre: ['Friends','Groups', 'MarketPlace', 'Watch', 'remembers', 'Saved', 'pages', 'events', 'Works', 'See More'],
    Logo: ['<ion-icon name="people-outline"></ion-icon>','<ion-icon name="person-circle-outline"></ion-icon>','<ion-icon name="storefront-outline"></ion-icon>', '<ion-icon name="play-circle-outline"></ion-icon>','<ion-icon name="time-outline"></ion-icon>','<ion-icon name="bookmark-outline"></ion-icon>','<ion-icon name="flag-outline"></ion-icon>','                                       <ion-icon name="calendar-outline"></ion-icon>','<ion-icon name="bag-handle-outline"></ion-icon>','                                       <ion-icon name="chevron-down-circle-outline"></ion-icon>' ],
    id: []
};
const histories = document.querySelectorAll('.historie');
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
//LLamado de la función para crear los elementos html con las notificaciones
generarLeftBarNotification(Lista.Nombre[0], Lista.Logo[0], '2');
generarLeftBarNotification(Lista.Nombre[4], Lista.Logo[4], '9');
generarLeftBarNotification(Lista.Nombre[6], Lista.Logo[6], '7');
generarLeftBarNotification(Lista.Nombre[7], Lista.Logo[7], '4');

histories.forEach(historie =>{
    let idTemporal = (Math.random() * 100).toString(36).slice(3);
    historie.setAttribute('data-bs-toggle',"modal");
    historie.setAttribute('data-bs-target',`#${idTemporal}`);
    historie.setAttribute('type', 'button');
    historie.classList.add('btn')

    let estrucutraModal = `
    <div class="modal fade" style="z-index: 1000;" id="${idTemporal}" tabindex="-1" aria-labelledby="${idTemporal}Label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="${idTemporal}Label">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <h1>HOLAHOLAHOLA</h1>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `
    
    console.log(window.getComputedStyle(historie).getPropertyValue('background-image'));
$(historie).append(estrucutraModal)
})