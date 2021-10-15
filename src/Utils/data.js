
const servicios = [
    {
        "id":0,
        "titulo":"Instalaciones",
        "texto":"Las mejores soluciones en instalaciones y mantenimiento.",
        "imgSource":"images/logo-pintura.png"
    },
    {
        "id":1,
        "titulo":"Electrificacion",
        "texto":"Revisión y reparación de instalaciones domésticas e industriales.",
        "imgSource":"images/logo-electrificacion.png"
    },
    {
        "id":2,
        "titulo":"Construccion",
        "texto":"Te ayudamos a construir y remodelar la casa que siempre soñaste.",
        "imgSource":"images/logo-construccion.png"
    },
    {
        "id":3,
        "titulo":"Pintura",
        "texto":"Brindamos la mejor asesoría para esa remodelación que tanto soñaste    ",
        "imgSource":"images/logo-pintura.png"
    },
]

const redes = [
    {
        id:0,
        imgSource:"images/logo-facebook.png",
        titulo:"Facebook",
    },
    {
        id:1,
        imgSource:"images/logo-linkedin.png",
        titulo:"Linkedin",
    },
    {
        id:2,
        imgSource:"images/logo-whatsapp.png",
        titulo:"Whatsapp",
    }
]

const imagenFondo = {
    inicio:{
        fondo: "../images/fondo-inicio.jpg",
        descripcion: "",
    },
    nosotros:{
        fondo: "../images/fondo-nosotros.jpg",
        descripcion: "",
    },
    trabajadores:{
        fondo: "../images/fondo-trabajadores.jpg",
        descripcion: "",
    },
    clientes:{
        fondo: "../images/fondo-clientes.jpg",
        descripcion: "",
    },
    lugares:{
        fondo: "../images/fondo-lugares.jpg",
        descripcion: "",
    }
}

const trabajos = [
    {
        id:0,
        titulo:"Mantenimiento preventivo de bombas",
        contenido: "Mantenimiento preventivo y correctivo bombas salsom 2HP / tablero presión constante  3B/2V - 220v - 3f - 60hz",
        imgSource: "../images/1.1.jpg",
        fecha: "Junio-Julio 2021",
        cliente: "Tuberías Pavco",
        lugar: "Santa Anita",
        tipo: "Mantenimiento",
        imagenes:[
            {   id:0,  imgSource:"../images/1.1.jpg",   titulo:"un titulo trabajo 1",},
            {   id:1,  imgSource:"../images/1.5.jpg",   titulo:"un titulo trabajo 1",},
            {   id:2,  imgSource:"../images/1.2.jpg",   titulo:"un titulo trabajo 1",},
            {   id:3,  imgSource:"../images/1.3.jpg",   titulo:"un titulo trabajo 1",},
            {   id:4,  imgSource:"../images/1.4.jpg",   titulo:"un titulo trabajo 1",},
        ],
        logos:[
            {   id:0,  imgLogo:"../images/1.1.jpg",   titulo:"un titulo trabajo 1",},
            {   id:1,  imgLogo:"../images/1.5.jpg",   titulo:"un titulo trabajo 1",},
            {   id:2,  imgLogo:"../images/1.2.jpg",   titulo:"un titulo trabajo 1",},
            {   id:3,  imgLogo:"../images/1.3.jpg",   titulo:"un titulo trabajo 1",},
            {   id:4,  imgLogo:"../images/1.4.jpg",   titulo:"un titulo trabajo 1",},
        ]    
    },
    {
        id:1,
        titulo:"Enchapados de mayólica",
        contenido: "Trabajos en enchapados mayólicas área de  cocina, departamento villa el Salvador.",
        imgSource: "../images/2.1.jpg",
        fecha: "Enero 2021",
        cliente: "",
        lugar: "Villa El Salvador",
        tipo: "Enchapados",
        imagenes:[
            {   id:0,  imgSource:"../images/2.1.jpg",   titulo:"un titulo trbajao 2",},
            {   id:1,  imgSource:"../images/2.5.jpg",   titulo:"un titulo trbajao 2",},
            {   id:2,  imgSource:"../images/2.4.jpg",   titulo:"un titulo trbajao 2",},
        ],
        logos:[
            {   id:0,  imgLogo:"../images/2.1.jpg",   titulo:"un titulo trbajao 2",},
            {   id:1,  imgLogo:"../images/2.5.jpg",   titulo:"un titulo trbajao 2",},
            {   id:2,  imgLogo:"../images/2.4.jpg",   titulo:"un titulo trbajao 2",},
        ]
    },
    {
        id:2,
        titulo:"Mantenimiento preventivo de bombas",
        contenido: "Mantenimiento preventivo y correctivo bombas salsom 2HP / tablero presión constante  3B/2V - 220v - 3f - 60hz",
        imgSource: "../images/1.4.jpg",
        fecha: "Junio-Julio 2021",
        cliente: "Tuberías Pavco",
        lugar: "Santa Anita",
        tipo: "Electrificación",
        imagenes:[
            {   id:0,  imgSource:"../images/3.1.jpg",   titulo:"titul o3",},
            {   id:1,  imgSource:"../images/3.4.jpg",   titulo:"titul o3",},
            {   id:2,  imgSource:"../images/3.2.jpg",   titulo:"titul o3",},
            {   id:3,  imgSource:"../images/3.3.jpg",   titulo:"titul o3",},
        ],
        logos:[
            {   id:0,  imgLogo:"../images/3.1.jpg",   titulo:"titul o3",},
            {   id:1,  imgLogo:"../images/3.4.jpg",   titulo:"titul o3",},
            {   id:2,  imgLogo:"../images/3.2.jpg",   titulo:"titul o3",},
            {   id:3,  imgLogo:"../images/3.3.jpg",   titulo:"titul o3",},
        ]
    }
]

const navImagenes = [
    {
        id:1,
        imgSource:"../images/1.4.jpg",
        descripcion:"Mantenimiento de bombas",
    },
    {
        id:1,
        imgSource:"../images/2.4.jpg",
        descripcion:"Enchapado de mayólicas",
    },
]

const slides = [
    {
        id: "1",
        src: "../images/slide-1.jpg",
        altText: "Slide 1",
        caption: "Slide 1",
    },
    {
        id: "2",
        src: "../images/slide-2.jpg",
        altText: "Slide 2",
        caption: "Slide 2",
    },
    {
        id: "3",
        src: "../images/slide-3.jpg",
        altText: "Slide 3",
        caption: "Slide 3",
    },
]

const fondosTareas = [
    {
        id:1,
        imgSource:"../images/tareas-instalacion-1.jpg",
    },
    {
        id:2,
        imgSource:"../images/tareas-instalacion-2.jpg",
    },
    {
        id:3,
        imgSource:"../images/tareas-instalacion-3.jpg",
    },
    {
        id:4,
        imgSource:"../images/tareas-instalacion-4.jpg",
    },
]

const indicadores = [
    {
        "id":0,
        "titulo":"Trayectoria",
        "texto":"Nos respaldan alrededor de 10 marcas, conscientes de nuestro desempeño",
        "imgSource":"images/logo-electrificacion.png"
    },
    {
        "id":1,
        "titulo":"Equipo",
        "texto":"Somos un equipo muy buen capacitado, puestos a la orden de nuestros clientes",
        "imgSource":"images/logo-construccion.png"
    },
    {
        "id":2,
        "titulo":"Soluciones Integrales",
        "texto":"Tenemos la experiencia y el conocimiento para brindar soluciones integrales e innovadoras.",
        "imgSource":"images/logo-pintura.png"
    },
]

const valores = [
    {
        "id":0,
        "titulo":"Liderazgo",
        "texto":"Capacidad de orientar el esfuerzo de los grupos humanos en una dirección deseada, promoviendo una visión compartida, estructurándolos, dirigiéndolos, generando oportunidades de crecimiento, inspirando valores de acción y anticipando escenarios de desarrollo.",
        "imgSource":"images/valores-liderazgo.jpg",
        "imgLogo":"images/valores-logo-liderazgo.png"
    },
    {
        "id":1,
        "titulo":"Eficiencia",
        "texto":"Disposición de modificar las formas existentes de hacer las cosas asumiendo con responsabilidad el riesgo de llevarlas a la práctica,buscando optener ventajas competitivas, la eficiencia de nuestros procesos y el éxito de nuestros resultados. ",
        "imgSource":"images/valores-eficiencia.jpg",
        "imgLogo":"images/valores-logo-eficiencia.png"
    },
    {
        "id":2,
        "titulo":"Trabajo En Equipo",
        "texto":"Colaborar, cooperar y conjugar esfuerzos con un grupo de personas, a fin de alcanzar objetivos comunes enriqueciendo la experiencia propia con la de otros miembros del grupo, y produciendo un resultado mayor que la suma de los esfuerzos individuales.",
        "imgSource":"images/valores-trabajo-en-equipo.jpg",
        "imgLogo":"images/valores-logo-trabajo-en-equipo.png"
    },
    {
        "id":3,
        "titulo":"Innovación",
        "texto":"Disposición de modificar las formas existentes de hacer las cosas asumiendo con responsabilidad el riesgo de llevarlas a la práctica,buscando optener ventajas competitivas, la eficiencia de nuestros procesos y el éxito de nuestros resultados. ",
        "imgSource":"images/valores-innovacion.jpg",
        "imgLogo":"images/valores-logo-innovacion.png"
    },
]

const mensajes = {
    footerEmpresa:"2021. AJC Construcción y Electrificación. Todos los derechos reservados",
    footerDoneBy:"Created with ♥ by saht",
    ubicacion:"Av. Mar del Este, SJL",
    telefono1:"995 157 244",
    telefono2:"993 246 172",
    email:"ajc.construccion.electrificacion@gmail.com",
    historia:"Somos un grupo empresarial comprometido con nuestros clientes en cada proyecto a realizar, considerando un óptimo alcance, tiempo y presupuesto, garantizando el cumplimiento exitoso de los proyectos que asumimos. Iniciamos nuestras actividades empresariales hace un año, cuando la nueva normalidad rondaba nuestro país. Nuestro fundador, Alex Correa Huanacchiri, junto a un pequeño grupo de amigos constructores con cierta experiencia en el sector, ejecutaron proyectos de electrificación y mantenimiento para las mejores empresas del país. Con pasión, eficiencia y profesionalismo, diversificamos nuestras operaciones, desarrollando relaciones sólidas y duraderas con nuestros clientes.",
    nuestrosTrabajos:"Nos encontramos comprometidos con nuestros clientes en cada proyecto, considerando un óptimo alcance, tiempo y presupuesto",
    mision:"Comprometernos con nuestros clientes en cada proyecto, considerando un óptimo alcance, tiempo y presupuesto, garantizando el cumplimiento exitoso de los proyectos que asumimos.",
    vision:"Ser un grupo empresarial de alcance internacional, que ofrecezca servicios diversificados de ingeniería, electrificación y construcción, basado en la ética e innovación de nuestros profesionales y la seriedad en el cumplimiento de nuestros compromisos.",
    clientes: "Ejecutamos proyectos para clientes de primer nivel de sectores diversos, generando, a partir de nuestra seriedad, compromiso y cumplimiento, relaciones confiables y de larga duración.",
    formularioTexto:"¿Tienes proyectos en mente y no los concretas porque no conoces expertos de verdad?",
    formularioAviso:"Comunícate y cotiza tus proyectos con nosotros",
}

const galeria = [
    {
        id:0, imgSource:"/images/galeria/instalacion-tablero.jpg", titulo:"Instalación de tablero de luces de emergencia"
    },
    {
        id:1, imgSource:"/images/galeria/sistema-prevencion-constante.jpg", titulo:"Sistema prevención constante de 4 bombas"
    },
    {
        id:2, imgSource:"/images/galeria/mantenimiento-bomba-jockey.jpg", titulo:"Mantenimiento de tablero contra incendio + bomba jockey"
    },
    {
        id:3, imgSource:"/images/galeria/instalacion-pozo-tierra.jpg", titulo:"Mantenimiento e instalación de pozo a tierra"
    },
    {
        id:4, imgSource:"/images/galeria/mantenimiento-preventivo-correctivo.jpg", titulo:"Mantenimiento preventivo  de cuartos de bombeo"
    },
    {
        id:5, imgSource:"/images/galeria/tareas-instalacion-3.jpg", titulo:"Instalación de sistemas eléctricos"
    },
     {
         id:6, imgSource:"/images/galeria/variadores-velocidad.jpg", titulo:"Mantenimiento de variadores de velocidad marca ABB"
    },
     {
         id:7, imgSource:"/images/galeria/tareas-instalacion-1.jpg", titulo:"Mantenimiento de tableros de distribución de luces de emergencia"
     },
    {
        id:8, imgSource:"/images/galeria/instalacion-bombas-salsom.jpg", titulo:"Instalacion y conexión de bombas salsom multitapicas"
    },
]

const dashboardItems = [
    {
        id:0, imgSource:"/images/logo-formulario.png", tituloId:"formularios" ,titulo:"Revisar formularios"
    },
    {
        id:1, imgSource:"/images/logo-contacto.png", tituloId:"contacto" ,titulo:"Actualizar información de contacto"
    }
]

export {dashboardItems, galeria,servicios,redes, imagenFondo, trabajos, navImagenes, slides, fondosTareas, indicadores, valores,mensajes};