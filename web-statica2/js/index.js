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

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido completamente cargado.');
    let content = "";    
    
    areas_servicios.areas_de_trabajo.forEach(area => { 
        // Abrimos la estructura de HTML para la sección de servicios
        content += `
            <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-briefcase"></i>
                <h4><a href="servicios.html" class="stretched-link">${area.area}</a></h4>
                <p>${area.text2}</p>
            </div>
        `;
    });

    // Finalmente, insertamos el contenido generado en el div correspondiente
    document.getElementById("nosotros-container").innerHTML += content;
});



{
/* <div class="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
<h3>Ingeniería en Montajes Tecnológicos</h3>
<p>
IMT SPA es una empresa que proporciona soluciones de ingeniería innovadoras en el sector de las telecomunicaciones y seguridad industrial, con más de 20 años de experiencia en el diseño y ejecución de proyectos tanto nacionales como internacionales.            </p>
<a href="about.html" class="about-btn align-self-center align-self-xl-start"><span>Leer más</span> <i class="bi bi-chevron-right"></i></a>
</div>

<div class="col-xl-7" data-aos="fade-up" data-aos-delay="200">
    <div class="row gy-4">

    <div class="col-md-6 icon-box position-relative">
    <i class="bi bi-briefcase"></i>
    <h4><a href="servicios.html" class="stretched-link">Telecomunicaciones</a></h4>
    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
</div><!-- Icon-Box -->

<div class="col-md-6 icon-box position-relative">
<i class="bi bi-gem"></i>
<h4><a href="servicios.html" class="stretched-link">Seguridad Industrial</a></h4>
<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
</div><!-- Icon-Box -->

<div class="col-md-6 icon-box position-relative">
<i class="bi bi-broadcast"></i>
<h4><a href="servicios.html" class="stretched-link">Minería</a></h4>
<p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
</div><!-- Icon-Box -->

<div class="col-md-6 icon-box position-relative">
<i class="bi bi-easel"></i>
<h4><a href="servicios.html" class="stretched-link">Beatae veritatis</a></h4>
<p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
</div> */}

// });
