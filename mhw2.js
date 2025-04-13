const leggi_button = document.querySelector("#button_leggi");
leggi_button.addEventListener("click", leggi);
const about = document.querySelector('.Testo_about_hidden');


const menu_donna = document.querySelector('#donna');
menu_donna.addEventListener("mouseover", hover);
const menu_hover = document.querySelector('.Menu_hover');
menu_hover.addEventListener("mouseover", hover);

function hover(){
menu_hover.style.display = "flex";  
}


menu_donna.addEventListener("mouseleave", hover_out);
menu_hover.addEventListener("mouseleave", hover_out);

function hover_out(){
menu_hover.style.display = "none";  
}

function leggi(){
    about.classList.replace('Testo_about_hidden', 'Testo_about_visible');
    console.log("about");
    const leggi_button = document.querySelector("#button_leggi");
    leggi_button.textContent="Mostra meno";
    leggi_button.removeEventListener("click", leggi);
    leggi_button.addEventListener("click", leggi_meno);
}


function leggi_meno(){
    about.classList.replace('Testo_about_visible', 'Testo_about_hidden');
    console.log("about");
    const leggi_button = document.querySelector("#button_leggi");
    leggi_button.textContent="Leggi di più";
    leggi_button.removeEventListener("click", leggi_meno);
    leggi_button.addEventListener("click", leggi);
}



const images = [
    'immagini saldi/Costume mare standard fit.jpeg', 'immagini saldi/Polo arancione logo.jpeg', 'immagini saldi/Sneaker semplici con logo.jpeg',
    'immagini saldi/Camicia primaverile donna.jpeg', 'immagini saldi/Borsa con logo.jpeg', 'immagini saldi/Espadrillas in pelle con plateau.png',
    'immagini saldi/T-shirt bambino con logo.jpeg', 'immagini saldi/Abito primaverile bambina.jpeg', 'immagini saldi/Cappello con visiera bambino.jpeg'
  ];

  const prices = [
    '19.99€', '29.99€', '49.99€',
    '39.99€', '59.99€', '59.99€',
    '19.99€', '29.99€', '9.99€'
  ];

  const names = [
    'Costume mare standard fit', 'Polo arancione logo', 'Sneaker semplici con logo',
    'Camicia primaverile donna', 'Borsa con logo', 'Espadrillas in pelle con plateau',
    'T-shirt bambino con logo', 'Abito primaverile bambina', 'Cappello con visiera bambino'
  ];
  
  const leftButton = document.getElementById('left_button');
  const rightButton = document.getElementById('right_button');
  
  leftButton.addEventListener('click', changeImages_saldi_left);
  rightButton.addEventListener('click', changeImages_saldi_right);

  let SetNum = 0;

  const DocImgs=['saldi1', 'saldi2', 'saldi3'];
  
  
  function changeImages_saldi_right() { 
    
    SetNum = (SetNum + 1) % 3;
    const currentIndex = SetNum * 3;
  

    for(let i = 0; i < 3; i++) {
      const Element= document.getElementById(DocImgs[i]);
      const imgElement = Element.querySelector('img'); 
      Element.setAttribute('data-nome', names[i+currentIndex]);
      Element.setAttribute('data-prezzo', prices[i+currentIndex]);
      const testo = Element.querySelector('.Saldi_testo');
      testo.textContent = Element.getAttribute('data-nome');
      const prezzo = Element.querySelector('.Saldi_price');
      prezzo.textContent = Element.getAttribute('data-prezzo');
      imgElement.src = images[i+currentIndex];

    }
  
   
   
  }




  function changeImages_saldi_left() {

    SetNum = (SetNum + 2) % 3;

    const currentIndex = SetNum * 3;
  

   
    

    for(let i = 0; i < 3; i++) {
      const Element= document.getElementById(DocImgs[i]);
      const imgElement = Element.querySelector('img'); 
      Element.setAttribute('data-nome', names[i+currentIndex]);
      Element.setAttribute('data-prezzo', prices[i+currentIndex]);
      const testo = Element.querySelector('.Saldi_testo');
      testo.textContent = Element.getAttribute('data-nome');
      const prezzo = Element.querySelector('.Saldi_price');
      prezzo.textContent = Element.getAttribute('data-prezzo');
      imgElement.src = images[i+currentIndex];
      }

  }


  function CreateModal(event){
  const modal = document.getElementById('modal');
  const Modimage = document.createElement('img');
  Modimage.src = event.currentTarget.src;
  modal.appendChild(Modimage);
  modal.classList.remove('hidden');
  modal.style.top=window.scrollY + "px";
  document.body.classList.add('noscroll');
  }


  function CloseModal(){
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    document.body.classList.remove('noscroll');
    modal.innerHTML = '';
  }

  
  const imgSaldi1= document.getElementById('saldi1').querySelector('img');
  imgSaldi1.addEventListener('click', CreateModal);
  const imgSaldi2= document.getElementById('saldi2').querySelector('img');
  imgSaldi2.addEventListener('click', CreateModal);
  const imgSaldi3= document.getElementById('saldi3').querySelector('img');
  imgSaldi3.addEventListener('click', CreateModal);

  const close = document.getElementById('modal');
  close.addEventListener('click', CloseModal);
  