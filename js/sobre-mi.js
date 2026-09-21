      const integrantes = [ 
        {
          id:1,
          nombre:"Agustin Malugani",
          descripcion:"salkdjasdjasdl",
          url_imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDC8-I9qN4JKJ5BBSvGUN11nzWggCpRzwlZTEEtHnQA&s=10"
        },
      {
          id:2,
          nombre:"Yael Ruiz",
          descripcion:"salkdjasdjasdl",
          url_imagen:""
        },
      {
          id:3,
          nombre:"Natalia Laverense",
          descripcion:"salkdjasdjasdl",
          url_imagen:""
        },
      {
          id:4,
          nombre:"Pablo Abila",
          descripcion:"salkdjasdjasdl",
          url_imagen:""
        },
      {
          id:5,
          nombre:"Elias Roldan",
          descripcion:"salkdjasdjasdl",
          url_imagen:""
        }]


        const divPersonal = document.getElementById("personal")

        /*
        <button class="abrirModal">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDC8-I9qN4JKJ5BBSvGUN11nzWggCpRzwlZTEEtHnQA&s=10"
            alt="persona1"/>
        </button>
        */
        integrantes.forEach(integrante => {
          const boton = document.createElement("button");
          boton.classList.add("abrirModal");

          const img = document.createElement("img");
          img.src= integrante.url_imagen
          img.alt = integrante.nombre

          boton.appendChild(img) 

          divPersonal.appendChild(boton);



        });

     




const modal = document.querySelector("#miModal");
      const botonesAbrir = document.querySelectorAll(".abrirModal");

      
      botonesAbrir.forEach((boton, index) => {
        // agregar evento al botón
        
        boton.addEventListener("click", () => {

          modal.innerHTML=""

          const integrante = integrantes[index];
          const imgModal = document.createElement("img")
          const nombreModal = document.createElement("h3");
          const descripcionModal = document.createElement("p");
          const botonCerrarModal = document.createElement("button")

          imgModal.src= integrante.url_imagen;
          imgModal.alt= integrante.nombre
          nombreModal.textContent = integrante.nombre;
          descripcionModal.textContent = integrante.descripcion;
          botonCerrarModal.textContent = "Cerrar";
          botonCerrarModal.id = "cerrarModal";


        botonCerrarModal.addEventListener("click", () => {
          modal.close();
        });
        

          modal.appendChild(imgModal);
          modal.appendChild(nombreModal);
          modal.appendChild(descripcionModal);
        
          modal.appendChild(botonCerrarModal);

          modal.showModal();
        });

      });