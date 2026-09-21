      const integrantes = [ 
        {
          id:1,
          nombre:"Agustin Malugani",
          descripcion:"Desarrollo web y producto digital.",
          url_imagen:"https://www.shutterstock.com/image-illustration/cute-3d-render-blue-little-260nw-2769495901.jpg"
        },
      {
          id:2,
          nombre:"Yael Ruiz",
          descripcion:"Atención al cliente y ventas",
          url_imagen:"https://www.shutterstock.com/image-illustration/cute-3d-render-orange-bot-260nw-2755023657.jpg"
        },
      {
          id:3,
          nombre:"Natalia Laverense",
          descripcion:"Producción e impresión 3D",
          url_imagen:"https://www.shutterstock.com/image-illustration/cute-3d-render-pink-monster-260nw-2745423743.jpg"
        },
      {
          id:4,
          nombre:"Pablo Abila",
          descripcion:"Diseño 3D y modelado de piezas",
          url_imagen:"https://www.shutterstock.com/image-illustration/cute-3d-render-little-red-260nw-2718392783.jpg"
        },
      {
          id:5,
          nombre:"Elias Roldan",
          descripcion:"Fotografía y comunicación visua",
          url_imagen:"https://www.shutterstock.com/image-illustration/cute-3d-render-green-horn-260nw-2785792745.jpg"
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