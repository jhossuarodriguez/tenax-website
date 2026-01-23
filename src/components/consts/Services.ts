export interface Service {
  id: string
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  icon: string
  imagen: string
  caracteristicas: string[]
  proceso: {
    paso: string
    descripcion: string
  }[]
  beneficios: string[]
  equipos?: string[]
  proyectosRelacionados?: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'excavacion',
    titulo: 'Excavación',
    icon: 'grua',
    imagen: '/projects/Pavimentos-1.webp',
    descripcionCorta:
      'Excavaciones especializadas para proyectos de construcción de cualquier envergadura.',
    descripcionLarga:
      'Ofrecemos servicios de excavación profesional con maquinaria de última generación para todo tipo de proyectos de construcción. Nuestro equipo cuenta con amplia experiencia en excavaciones para cimentaciones, zanjas, cortes de terreno y remoción de materiales, garantizando precisión, seguridad y eficiencia en cada trabajo.',
    caracteristicas: [
      'Excavación para cimentaciones profundas y superficiales',
      'Zanjas para instalaciones sanitarias y eléctricas',
      'Cortes de terreno y taludes',
      'Remoción de escombros y materiales',
      'Excavación en roca con martillo hidráulico',
      'Control topográfico de niveles',
    ],
    proceso: [
      {
        paso: 'Evaluación del terreno',
        descripcion:
          'Análisis geotécnico y topográfico del área a excavar para determinar la mejor estrategia.',
      },
      {
        paso: 'Planificación',
        descripcion:
          'Diseño del plan de excavación considerando seguridad, accesos y manejo de materiales.',
      },
      {
        paso: 'Ejecución',
        descripcion:
          'Excavación controlada con maquinaria especializada y supervisión constante.',
      },
      {
        paso: 'Control de calidad',
        descripcion:
          'Verificación de niveles, compactación y cumplimiento de especificaciones técnicas.',
      },
    ],
    beneficios: [
      'Maquinaria moderna y bien mantenida',
      'Personal certificado y experimentado',
      'Cumplimiento de normas de seguridad',
      'Tiempos de ejecución optimizados',
      'Manejo responsable de residuos',
    ],
    equipos: [
      'Excavadoras hidráulicas',
      'Retroexcavadoras',
      'Mini excavadoras',
      'Martillos hidráulicos',
      'Camiones volquete',
    ],
    proyectosRelacionados: ['Pavimentos-1', 'Naves-1'],
  },
  {
    id: 'estructura-metalica',
    titulo: 'Estructura Metálica',
    icon: 'hammer',
    imagen: '/projects/Naves-2.webp',
    descripcionCorta:
      'Montaje y fabricación de estructuras metálicas para edificaciones y obras civiles.',
    descripcionLarga:
      'Diseñamos, fabricamos e instalamos estructuras metálicas de alta calidad para proyectos industriales, comerciales y residenciales. Utilizamos acero estructural certificado y técnicas de soldadura avanzadas para garantizar la durabilidad y resistencia de cada estructura, cumpliendo con los más altos estándares internacionales.',
    caracteristicas: [
      'Naves industriales y comerciales',
      'Estructuras para techos y cubiertas',
      'Escaleras metálicas y barandas',
      'Plataformas y mezanines',
      'Puentes peatonales y vehiculares',
      'Torres y estructuras especiales',
    ],
    proceso: [
      {
        paso: 'Diseño estructural',
        descripcion:
          'Elaboración de planos y cálculos estructurales según normativas vigentes.',
      },
      {
        paso: 'Fabricación',
        descripcion:
          'Corte, soldadura y ensamblaje en taller con control de calidad.',
      },
      {
        paso: 'Tratamiento superficial',
        descripcion:
          'Aplicación de pintura anticorrosiva y acabados según especificaciones.',
      },
      {
        paso: 'Montaje en sitio',
        descripcion:
          'Instalación con equipos de izaje y personal especializado en altura.',
      },
    ],
    beneficios: [
      'Rapidez de construcción vs. métodos tradicionales',
      'Mayor luz entre apoyos',
      'Flexibilidad en diseños arquitectónicos',
      'Resistencia sísmica superior',
      'Menor peso de la estructura',
      'Facilidad de ampliación futura',
    ],
    equipos: [
      'Grúas telescópicas',
      'Equipos de soldadura MIG/TIG',
      'Plataformas elevadoras',
      'Herramientas de torque calibradas',
    ],
    proyectosRelacionados: ['Naves-2', 'Naves-3', 'Naves-4'],
  },
  {
    id: 'movimiento-tierra',
    titulo: 'Movimiento de Tierra',
    icon: 'dumpDumper',
    imagen: '/projects/Pavimentos-2.webp',
    descripcionCorta:
      'Nivelación de terrenos, compactación y preparación de superficies para cimentaciones.',
    descripcionLarga:
      'Realizamos trabajos de movimiento de tierra con equipos de alto rendimiento para preparar terrenos destinados a construcciones, vías y desarrollos urbanísticos. Nuestros servicios incluyen corte, relleno, nivelación y compactación de suelos, asegurando las condiciones óptimas para cualquier tipo de obra civil.',
    caracteristicas: [
      'Nivelación y explanación de terrenos',
      'Compactación de suelos con control de densidad',
      'Relleno con material seleccionado',
      'Terraplenado y conformación de taludes',
      'Preparación de explanadas industriales',
      'Acondicionamiento de accesos temporales',
    ],
    proceso: [
      {
        paso: 'Estudio geotécnico',
        descripcion:
          'Análisis de la composición del suelo y determinación de parámetros de compactación.',
      },
      {
        paso: 'Replanteo topográfico',
        descripcion:
          'Definición de cotas y niveles según proyecto de ingeniería.',
      },
      {
        paso: 'Corte y relleno',
        descripcion:
          'Movimiento de volúmenes de tierra según balance de masas calculado.',
      },
      {
        paso: 'Compactación',
        descripcion:
          'Densificación del suelo en capas con control mediante ensayos de densidad.',
      },
    ],
    beneficios: [
      'Optimización de volúmenes de corte y relleno',
      'Control riguroso de compactación',
      'Cumplimiento de especificaciones técnicas',
      'Reducción de costos de transporte de material',
      'Estabilidad garantizada del terreno',
    ],
    equipos: [
      'Tractores de oruga (bulldozers)',
      'Motoniveladoras',
      'Compactadores vibratorios',
      'Camiones articulados',
      'Rodillos pata de cabra',
    ],
    proyectosRelacionados: ['Pavimentos-2', 'Paneles-1'],
  },
  {
    id: 'hormigon-armado',
    titulo: 'Estructura de Hormigón Armado',
    icon: 'measure',
    imagen: '/projects/Pavimentos-3.webp',
    descripcionCorta:
      'Construcción de estructuras de hormigón armado para edificaciones y obras civiles.',
    descripcionLarga:
      'Ejecutamos obras de hormigón armado con los más altos estándares de calidad, desde cimentaciones hasta estructuras completas. Nuestro equipo domina las técnicas de encofrado, armado y vaciado de concreto, garantizando estructuras seguras, duraderas y que cumplen con todas las normativas de construcción vigentes.',
    caracteristicas: [
      'Cimentaciones: zapatas, losas y pilotes',
      'Columnas y vigas estructurales',
      'Losas macizas y nervadas',
      'Muros de contención y sótanos',
      'Escaleras y rampas de concreto',
      'Tanques y cisternas',
    ],
    proceso: [
      {
        paso: 'Preparación de armadura',
        descripcion:
          'Corte, doblado y amarre del acero de refuerzo según planos estructurales.',
      },
      {
        paso: 'Encofrado',
        descripcion:
          'Instalación de formaletas metálicas o de madera con precisión dimensional.',
      },
      {
        paso: 'Vaciado de concreto',
        descripcion:
          'Colocación del hormigón con vibrado adecuado para eliminar vacíos.',
      },
      {
        paso: 'Curado',
        descripcion:
          'Proceso de hidratación controlada para alcanzar la resistencia de diseño.',
      },
    ],
    beneficios: [
      'Alta resistencia y durabilidad',
      'Excelente comportamiento sísmico',
      'Resistencia al fuego',
      'Bajo mantenimiento',
      'Versatilidad en formas y diseños',
      'Vida útil superior a 50 años',
    ],
    equipos: [
      'Mezcladoras de concreto',
      'Bombas de hormigón',
      'Vibradores de inmersión',
      'Encofrados modulares',
      'Equipos de corte y doblado de acero',
    ],
    proyectosRelacionados: ['Pavimentos-3', 'Pavimentos-4', 'Naves-1'],
  },
] as const
