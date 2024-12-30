const areas_servicios = {
    "areas_de_trabajo": [
      {
        "area": "Telecomunicaciones",
        "servicios": [
          "Montaje y puesta en marcha de sitios Wireless",
          "Clean Up y Desmantelamiento 2G",
          "Site survey TSS",
          "Obras Civiles Menores",
          "Redes de Fibra Óptica (GPON)"
        ],
        "titulo": "Servicios en Telecomunicaciones",
        "text2": "Descripción breve de los servicios ofrecidos en el área de Telecomunicaciones.",
        "text3": "Más detalles sobre los proyectos y capacidades en telecomunicaciones."
      },
      {
        "area": "Seguridad Industrial",
        "servicios": [
          "Sistemas Contra Incendio",
          "Sistemas de Control de Acceso",
          "Sistemas de CCTV"
        ],
        "titulo": "Servicios en Seguridad Industrial",
        "text2": "Descripción breve de los servicios ofrecidos en el área de Seguridad Industrial.",
        "text3": "Más detalles sobre los proyectos de seguridad industrial."
      },
      {
        "area": "Minería",
        "servicios": [
          "Redes de Datos y Fibra Óptica",
          "Seguridad Industrial",
          "Sistemas de Energía Fotovoltaica"
        ],
        "titulo": "Servicios en Minería",
        "text2": "Descripción breve de los servicios ofrecidos en el área de Minería.",
        "text3": "Más detalles sobre los proyectos en la minería."
      },
      {
        "area": "Area 4",
        "servicios": [
          "Servicio 1",
          "Servicio 2",
          "Servicio 3"
        ],
        "titulo": "Servicios en el Área 4",
        "text2": "Descripción breve de los servicios ofrecidos en el Área 4.",
        "text3": "Más detalles sobre los proyectos de esta área."
      }
    ]
  };

// Esperamos que el contenedor ya esté cargado en el DOM
document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.querySelector('.services-list');
  
    if (!servicesContainer) {
      console.error('Services container not found!');
      return;
    }
  
    // Iterar sobre las áreas y agregar solo los nombres de las áreas
    areas_servicios.areas_de_trabajo.forEach(area => {
      // Crear un enlace para cada área de trabajo
      const areaItem = document.createElement('a');
      areaItem.href = "#";
      areaItem.innerHTML = `<i class="bi bi-arrow-right-circle"></i><span>${area.area}</span>`; // Mostrar solo el nombre del área
      servicesContainer.appendChild(areaItem);
    });


    
  });



  