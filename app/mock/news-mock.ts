import type { NewItem } from "~/repositories/INewsRepository";

export const MOCK_NEWS: NewItem[] = [
  {
    id: '1',
    title: 'Descubren una isla flotante hecha de aguacates gigantes',
    autor: 'Redacción La Voz de la Mentira',
    date: '2025-08-20',
    description: 'Un grupo de exploradores afirma haber encontrado una isla flotante en medio del Pacífico formada enteramente por aguacates gigantes. Los científicos aún no explican cómo se mantiene a flote.',
    imagen: 'https://picsum.photos/seed/avocados/600/400'
  },
  {
    id: '2',
    title: 'La NASA confirma que la Luna ahora tiene Wi-Fi gratuito',
    autor: 'Agencia Imaginaria',
    date: '2025-08-19',
    description: 'Según reportes oficiales (o no tanto), la NASA instaló routers cósmicos para que los astronautas puedan ver memes mientras caminan en la superficie lunar.',
    imagen: 'https://picsum.photos/seed/moonwifi/600/400'
  },
  {
    id: '3',
    title: 'Nuevo deporte olímpico: lanzamiento de croquetas',
    autor: 'Reportero Deportivo',
    date: '2025-08-18',
    description: 'El Comité Olímpico anunció que en las próximas olimpiadas se incluirá el lanzamiento de croquetas como disciplina oficial. Varios países ya entrenan con abuelas profesionales.',
    imagen: 'https://picsum.photos/seed/croquetas/600/400'
  },
  {
    id: '4',
    title: 'Crean un café que nunca se enfría',
    autor: 'Científicos del Futuro',
    date: '2025-08-17',
    description: 'Una startup asegura haber inventado un café eterno que mantiene la temperatura perfecta de 65 grados sin importar cuánto tiempo pase.',
    imagen: 'https://picsum.photos/seed/coffeetime/600/400'
  },
  {
    id: '5',
    title: 'Encuentran pirámides debajo de Chapultepec',
    autor: 'Arqueología Alternativa',
    date: '2025-08-16',
    description: 'Nuevos estudios sugieren que bajo el Bosque de Chapultepec existen pirámides aún más grandes que las de Teotihuacán, pero invisibles al ojo humano.',
    imagen: 'https://picsum.photos/seed/pyramids/600/400'
  },
  {
    id: '6',
    title: 'Perros empiezan a hablar en idioma propio',
    autor: 'Instituto de Zoología Ficticia',
    date: '2025-08-15',
    description: 'Investigadores afirman que un grupo de perros callejeros en Ciudad de México desarrolló un idioma único basado en ladridos con gramática estructurada.',
    imagen: 'https://picsum.photos/seed/dogtalk/600/400'
  },
  {
    id: '7',
    title: 'El ajedrez ahora se jugará en tableros 3D flotantes',
    autor: 'La Voz Gamer',
    date: '2025-08-14',
    description: 'La Federación Internacional de Ajedrez aprobó la nueva versión holográfica del juego, donde las piezas flotan y se iluminan con luces de neón.',
    imagen: 'https://picsum.photos/seed/chess/600/400'
  },
  {
    id: '8',
    title: 'Inauguran el primer cine interdimensional',
    autor: 'Cultura Alternativa',
    date: '2025-08-13',
    description: 'Un grupo de cineastas abre un cine que proyecta películas de universos paralelos. La cartelera incluye clásicos que nunca existieron en esta realidad.',
    imagen: 'https://picsum.photos/seed/cinema/600/400'
  },
  {
    id: '9',
    title: 'Detectan nube con forma de taco que no se disuelve',
    autor: 'Clima Extraordinario',
    date: '2025-08-12',
    description: 'Habitantes de Puebla reportan una nube en forma de taco al pastor que lleva tres semanas en el cielo sin deshacerse. Turistas ya hacen fila para verla.',
    imagen: 'https://picsum.photos/seed/tacocloud/600/400'
  },
  {
    id: '10',
    title: 'El Popocatépetl anuncia por Twitter que está cansado de fumar',
    autor: 'Crónica Volcánica',
    date: '2025-08-11',
    description: 'En un sorprendente giro, el volcán Popocatépetl abrió una cuenta en Twitter donde declaró que dejará de expulsar humo porque quiere dedicarse al streaming.',
    imagen: 'https://picsum.photos/seed/popocatepetl/600/400'
  }
]


export const HOT_NOW: NewItem[] = [
  {
    id: 1,
    title: "Descubren que los gatos controlan el clima con sus maullidos",
    autor: "Redacción La Voz de la Mentira",
    date: "2025-08-20",
    description: "Un estudio de la Universidad Imaginaria de Atlantis reveló que los gatos, al maullar en conjunto, pueden alterar el clima local en un radio de hasta 5 kilómetros.",
    imagen: "https://placekitten.com/800/400",
    documentId: ""
  },
  {
    id: 2,
    title: "Netflix anuncia serie exclusiva protagonizada por extraterrestres reales",
    autor: "Ana López",
    date: "2025-08-19",
    description: "La plataforma confirmó que seres de otro planeta audicionaron y lograron firmar contrato. La primera temporada estará subtitulada en idioma interestelar.",
    imagen: "https://picsum.photos/800/400?random=2",
    documentId: ""
  },
  {
    id: 3,
    title: "Se aprueba ley que obliga a las plantas a pagar impuestos por oxígeno",
    autor: "Carlos Ramírez",
    date: "2025-08-18",
    description: "El nuevo marco legal estipula que los árboles deberán aportar a la economía nacional con base en la cantidad de oxígeno producido diariamente.",
    imagen: "https://picsum.photos/800/400?random=3",
    documentId: ""
  },
  {
    id: 4,
    title: "Los caracoles ya pueden solicitar pasaporte biométrico",
    autor: "María González",
    date: "2025-08-17",
    description: "El Ministerio de Movilidad Lenta presentó el nuevo documento que permitirá a los caracoles viajar libremente entre jardines internacionales.",
    imagen: "https://picsum.photos/800/400?random=4",
    documentId: ""
  },
  {
    id: 5,
    title: "Nueva app traduce ladridos de perros en tiempo real",
    autor: "Redacción Innovación",
    date: "2025-08-16",
    description: "La aplicación BarkTranslate ya está disponible y promete acabar con los malentendidos entre humanos y sus mascotas.",
    imagen: "https://picsum.photos/800/400?random=5",
    documentId: ""
  },
]