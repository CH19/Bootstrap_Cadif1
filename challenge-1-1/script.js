'use strict'
let estrucutra = ``;
const Lista = {
    Nombre: ['Friends','Groups', 'MarketPlace', 'Watch', 'Remembers', 'Saved', 'Pages', 'Events', 'Works', 'See More'],
    Logo: ['<ion-icon name="people-outline"></ion-icon>','<ion-icon name="person-circle-outline"></ion-icon>','<ion-icon name="storefront-outline"></ion-icon>', '<ion-icon name="play-circle-outline"></ion-icon>','<ion-icon name="time-outline"></ion-icon>','<ion-icon name="bookmark-outline"></ion-icon>','<ion-icon name="flag-outline"></ion-icon>','                                       <ion-icon name="calendar-outline"></ion-icon>','<ion-icon name="bag-handle-outline"></ion-icon>','                                       <ion-icon name="chevron-down-circle-outline"></ion-icon>' ],
    id: []
}
 console.log(Lista.Logo[0] + ',' + Lista.Nombre[0]);
console.log(estrucutra)
const menusito = document.querySelector('#Menusito');
Lista.Nombre.forEach((Name, index) =>{
    let idTemporal = (Math.random() * 100).toString(36).slice(3)
    Lista.id.push(idTemporal)
    let structure = `</li>
    <div id="${Lista.id[index]}" class="d-flex flex-row accordion">
                  <div class="accordion-item">
                    <div class="accordion-header">
                      <button class="accordion-button text-dark d-flex align-items-center justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#${Lista.id[index]}" aria-expanded="false" aria-controls="${Lista.id[index]}">                                         
                      <figure class="mx-4 text-primary">${Lista.Logo[index]}</figure>
                       ${Name}</button>
                    </div>
                    <div id="${Lista.id[index]}" class="accordion-collapse collapse" style="width: 300px" data-bs-parent="#${Lista.id[index]}">
                     <div class="accordion-body">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     </div>
                   </div>
                   </div>
    </div>
  <li>
`
estrucutra += structure;
})
console.log(estrucutra)
$('#Menusito').append(estrucutra);

