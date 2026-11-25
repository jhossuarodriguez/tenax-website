import type { MachineSheet } from '@/types';

/**
 * Fichas técnicas de la maquinaria, copiadas de las capturas que envió Tenax (Canva, págs. 32–37), con la clave del
 * archivo de su foto en src/assets/equipos/.
 * - Se omiten las filas "Por confirmar" / "Pendiente de confirmar": se añaden cuando Tenax tenga el dato.
 * - PENDIENTE: varias capturas venían cortadas; faltan filas o "Aplicaciones en obra" donde se indica.
 */
export const machineSheets: Record<string, MachineSheet> = {
  excavadora_doosan_dx225: {
    category: 'Excavación y movimiento de tierras',
    facts: { brand: 'Doosan', year: '2017 y 2021' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Fabricante', 'Doosan'],
          ['Modelo registrado', 'DX225'],
          ['Tipo', 'Excavadora hidráulica sobre orugas'],
          ['Años del inventario', '2017 y 2021'],
          ['Peso operativo de referencia', '21,500 kg'],
          ['Potencia neta de referencia', '110 kW (148 HP)'],
          ['Capacidad del cucharón de referencia', '0.92 m³'],
          ['Profundidad máxima de excavación', '6.62 m'],
          ['Alcance máximo de excavación', '9.90 m'],
          ['Ancho de referencia', '2.99 m'],
        ],
      },
    ],
    applications: [],
  },

  // PENDIENTE: la captura se corta después de "Ancho total".
  excavadora_sany_sy330h: {
    category: 'Excavación y movimiento de tierras',
    facts: { brand: 'Sany', year: '2025' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'Sany'],
          ['Modelo', 'SY330H'],
          ['Año', '2025'],
          ['Tipo', 'Excavadora hidráulica sobre orugas'],
          ['Peso operativo', '31,500 kg'],
          ['Motor', 'Isuzu 6HK1'],
          ['Potencia', '212 kW (284 HP)'],
          ['Capacidad del cucharón estándar', '1.65 m³'],
          ['Profundidad máxima de excavación', '6.82 m'],
          ['Alcance máximo de excavación', '10.87 m'],
          ['Altura máxima de descarga', '7.36 m'],
          ['Fuerza de excavación del cucharón', '204 kN'],
          ['Capacidad de combustible', '530 litros'],
          ['Ancho total', '3.19 m'],
        ],
      },
    ],
    applications: [],
  },

  // Ficha corregida por Tenax: modelo 120G (no indica el año).
  motoniveladora_caterpillar_120g: {
    category: 'Movimiento de tierra y nivelación',
    facts: { brand: 'Caterpillar' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'Caterpillar'],
          ['Modelo', '120G'],
          ['Motor', 'Caterpillar 3304'],
          ['Combustible', 'Diésel'],
          ['Número de cilindros', '4'],
          ['Cilindrada', '7.0 L'],
          ['Potencia bruta', '137 HP'],
          ['Potencia neta', '125 HP (93 kW)'],
          ['Peso operativo de referencia', '13,189 kg'],
          ['Ancho de cuchilla', '3.66 m (12 pies)'],
          ['Transmisión', 'Powershift'],
          ['Marchas', '6 adelante y 6 atrás'],
          ['Velocidad máxima de avance', '40.9 km/h'],
          ['Capacidad de combustible', '227 L'],
          ['Longitud total', '7.93 m'],
          ['Ancho total', '2.41 m'],
          ['Altura total', '3.33 m'],
          ['Radio de giro', '6.70 m'],
          ['Configuración', 'Chasis articulado de seis ruedas'],
        ],
      },
    ],
    applications: [
      'Nivelación y conformación de terrenos.',
      'Construcción y mantenimiento de caminos.',
      'Preparación de plataformas industriales.',
      'Extendido de materiales de base y subbase.',
      'Perfilado de taludes y cunetas.',
      'Terminación de superficies previo a la pavimentación.',
    ],
  },

  // PENDIENTE: la captura se corta después de "Combustible".
  rodillo_compactador_cat_553: {
    category: 'Nivelación y compactación',
    facts: { brand: 'Caterpillar', year: '2002' },
    tables: [
      {
        title: 'Identificación del equipo',
        rows: [
          ['Fabricante', 'Caterpillar'],
          ['Modelo registrado', 'CAT 553'],
          ['Año', '2002'],
          ['Tipo', 'Rodillo compactador autopropulsado'],
          ['Sistema de compactación', 'Vibratorio'],
        ],
      },
      {
        title: 'Especificaciones técnicas de referencia',
        rows: [
          ['Modelo de referencia', 'CS-553'],
          ['Peso operativo', '10,782 kg'],
          ['Potencia del motor', '115 kW (155 HP)'],
          ['Ancho del tambor', '2.13 m'],
          ['Tipo de tambor', 'Liso'],
          ['Fuerza centrífuga', '178 kN aprox.'],
          ['Velocidad máxima', '10.5 km/h'],
          ['Combustible', 'Diésel'],
        ],
      },
    ],
    applications: [],
  },

  // Ficha corregida por Tenax: modelo de referencia CS-563E, de tambor liso.
  rodillo_compactador_cat_563: {
    category: 'Nivelación y compactación',
    facts: { brand: 'Caterpillar', year: '2006' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'Caterpillar'],
          ['Modelo de referencia', 'CS-563E'],
          ['Año', '2006'],
          ['Tipo de equipo', 'Rodillo vibratorio monocilíndrico'],
          ['Tipo de tambor', 'Acero liso'],
          ['Motor', 'Caterpillar 3056E'],
          ['Combustible', 'Diésel'],
          ['Número de cilindros', '6'],
          ['Potencia bruta', '150 HP'],
          ['Potencia neta', '143 HP'],
          ['Peso operativo de referencia', '11,120 kg'],
          ['Ancho del tambor', '2.134 m'],
          ['Diámetro del tambor', '1.524 m'],
          ['Frecuencia de vibración', '31.9 Hz'],
          ['Fuerza centrífuga máxima', '266 kN'],
          ['Fuerza centrífuga mínima', '133 kN'],
          ['Transmisión', 'Hidrostática'],
          ['Velocidad máxima', '11.4 km/h'],
          ['Capacidad de combustible', '330 L'],
        ],
      },
    ],
    applications: [
      'Compactación de suelos granulares.',
      'Compactación de bases y subbases.',
      'Construcción de carreteras y caminos.',
      'Conformación de plataformas industriales.',
      'Compactación de rellenos estructurales.',
      'Preparación de superficies para pavimentación.',
    ],
  },

  // Ficha corregida por Tenax (no indica el año).
  minicargador_frontal_bobcat_t140: {
    category: 'Movimiento de tierra y minicargadores',
    facts: { brand: 'Bobcat' },
    intro:
      'Equipo compacto sobre orugas de goma, diseñado para trabajos de excavación superficial, nivelación, carga y manejo de materiales en terrenos de difícil acceso.',
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'Bobcat'],
          ['Modelo', 'T140'],
          ['Tipo de equipo', 'Minicargador compacto sobre orugas'],
          ['Motor', 'Kubota diésel'],
          ['Número de cilindros', '4'],
          ['Potencia del motor', '46–49 HP'],
          ['Peso operativo', '2,914–3,021 kg'],
          ['Capacidad nominal de carga', '635 kg'],
          ['Sistema de tracción', 'Orugas de goma'],
          ['Transmisión', 'Hidrostática'],
          ['Velocidad máxima', '11.7 km/h'],
          ['Caudal hidráulico auxiliar', '64 L/min'],
          ['Capacidad del tanque de combustible', '58.3 L'],
          ['Longitud con cucharón', '3.15 m'],
          ['Ancho total', '1.40 m'],
          ['Altura total', '1.97 m'],
          ['Altura al pasador del cucharón', '2.78 m'],
          ['Radio de giro', '1.96 m'],
          ['Sistema de acople', 'Bob-Tach'],
        ],
        footnote: 'Especificaciones verificadas en la documentación del fabricante.',
      },
    ],
    applications: [
      'Movimiento y distribución de materiales.',
      'Nivelación y acondicionamiento de terrenos.',
      'Excavaciones superficiales.',
      'Limpieza y retiro de escombros.',
      'Rellenos y conformación de superficies.',
      'Trabajos sobre terrenos blandos e irregulares.',
      'Operaciones en espacios reducidos.',
    ],
  },

  camion_volteo_forland: {
    category: 'Transporte y acarreo de materiales',
    facts: { brand: 'Forland', year: '2023' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'Forland'],
          ['Año', '2023'],
          ['Tipo de equipo', 'Camión de volteo'],
          ['Sistema de descarga', 'Basculante de accionamiento hidráulico'],
        ],
      },
      {
        title: 'Especificaciones técnicas de referencia',
        note: 'Correspondientes al modelo Forland H7 4×2, comercializado en República Dominicana en 2023.',
        rows: [
          ['Modelo de referencia', 'H7'],
          ['Motor', 'Turbo diésel intercooler'],
          ['Cilindrada', '2.78 litros'],
          ['Número de cilindros', '4'],
          ['Potencia', '155 HP'],
          ['Transmisión', 'Mecánica de 5 velocidades'],
          ['Tracción', '4×2'],
          ['Capacidad de carga', '4,000 kg'],
          ['Volumen de volteo', '3 m³'],
          ['Peso bruto vehicular', '6,000 kg'],
          ['Neumáticos', '7.50 R16'],
        ],
      },
    ],
    applications: [
      'Transporte de materiales de relleno.',
      'Retiro de material inservible y escombros.',
      'Acarreo de agregados.',
      'Transporte de material producto de excavaciones.',
      'Abastecimiento de materiales en obra.',
    ],
  },

  manipulador_telescopico_vr642: {
    category: 'Manipulación y elevación de cargas',
    facts: { brand: 'Ingersoll Rand', year: '2001' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'Ingersoll Rand'],
          ['Modelo', 'VR642'],
          ['Año registrado', '2001'],
          ['Tipo', 'Manipulador telescópico todoterreno'],
          ['Sistema de elevación', 'Brazo telescópico hidráulico'],
          ['Combustible', 'Diésel'],
        ],
      },
      {
        title: 'Especificaciones técnicas de referencia',
        rows: [
          ['Capacidad máxima de carga', '3,039 kg'],
          ['Altura máxima de elevación', '12.80 m'],
          ['Alcance horizontal máximo', '8.00 m'],
          ['Capacidad a máxima altura', '2,722 kg'],
          ['Capacidad a máximo alcance', '454 kg'],
          ['Peso operativo', '8,892 kg'],
          ['Transmisión', 'Powershift de 3 velocidades'],
          ['Longitud sin horquillas', '6.17 m'],
          ['Ancho total', '2.59 m'],
          ['Altura total', '2.41 m'],
          ['Radio de giro exterior', '3.63 m'],
          ['Capacidad de combustible', '132 litros'],
        ],
      },
    ],
    applications: [
      'Elevación y traslado de materiales.',
      'Carga y descarga de camiones.',
      'Abastecimiento de materiales en altura.',
      'Apoyo al montaje de estructuras metálicas.',
      'Manipulación de cargas paletizadas.',
      'Distribución de materiales en naves industriales.',
    ],
  },

  manipulador_telescopico_10051: {
    category: 'Manipulación y elevación de cargas',
    facts: { year: '2001' },
    tables: [
      {
        title: 'Identificación del equipo',
        rows: [
          ['Modelo registrado', '10051'],
          ['Año', '2001'],
          ['Tipo', 'Manipulador telescópico todoterreno'],
          ['Sistema de elevación', 'Brazo telescópico hidráulico'],
          ['Combustible', 'Diésel'],
        ],
      },
    ],
    applications: [],
  },

  // PENDIENTE: la captura se corta después de "Refrigeración".
  compresor_ingersoll_rand_185_cfm: {
    category: 'Equipos auxiliares',
    facts: { brand: 'Ingersoll Rand', year: '2003' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Fabricante', 'Ingersoll Rand'],
          ['Año', '2003'],
          ['Tipo', 'Compresor de aire portátil'],
          ['Caudal nominal', '185 CFM'],
          ['Caudal equivalente', '5.24 m³/min'],
          ['Presión de trabajo de referencia', '100 PSI (6.9 bar)'],
          ['Sistema de compresión', 'Tornillo rotativo'],
          ['Combustible', 'Diésel'],
          ['Configuración', 'Remolcable sobre ruedas'],
          ['Refrigeración', 'Por aire, según versión'],
        ],
      },
    ],
    applications: [
      'Accionamiento de herramientas neumáticas.',
      'Demolición mediante martillos neumáticos.',
      'Perforación de hormigón y roca.',
      'Limpieza de superficies mediante aire comprimido.',
      'Abastecimiento de aire para trabajos especializados.',
    ],
  },

  hormigonera_autocargable_jgm_4_5: {
    category: 'Producción y colocación de hormigón',
    facts: { brand: 'JGM', year: '2023' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'JGM'],
          ['Modelo registrado', '4.5'],
          ['Año', '2023'],
          ['Tipo', 'Hormigonera autocargable'],
          ['Sistema de carga', 'Pala de accionamiento hidráulico'],
          ['Sistema de mezclado', 'Tambor rotativo'],
          ['Sistema de descarga', 'Canaleta de descarga'],
          ['Función', 'Carga, mezclado, transporte y descarga de hormigón'],
        ],
      },
      {
        title: 'Especificaciones técnicas de referencia',
        headers: ['Característica', 'Especificación referencial'],
        rows: [
          ['Capacidad nominal', '4.5 m³'],
          ['Motor', 'Turbo diésel'],
          ['Potencia', '85–95 kW (114–127 HP)'],
          ['Tracción', '4×4'],
          ['Capacidad de la pala', '650–680 litros'],
          ['Velocidad de rotación del tambor', '13–20 RPM'],
          ['Velocidad de desplazamiento', '25–35 km/h'],
          ['Peso operativo', '7,500–9,200 kg'],
          ['Capacidad del tanque de agua', '860–920 litros'],
        ],
        footnote: 'Estos valores corresponden a hormigoneras autocargables similares, no a una ficha oficial JGM.',
      },
    ],
    applications: [
      'Producción de hormigón directamente en obra.',
      'Vaciado de cimentaciones y zapatas.',
      'Construcción de pavimentos y losas.',
      'Ejecución de cunetas y drenajes.',
      'Hormigonado en zonas de difícil acceso.',
      'Construcción de muros y elementos estructurales.',
    ],
  },

  camion_hormigonera_international_7_m3: {
    category: 'Producción y colocación de hormigón',
    facts: { brand: 'International' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'International'],
          ['Tipo', 'Camión hormigonera (Mixer)'],
          ['Capacidad nominal de hormigón', '7 m³'],
          ['Capacidad equivalente', '7,000 litros'],
          ['Combustible', 'Diésel'],
          ['Sistema de mezclado', 'Tambor rotativo'],
          ['Accionamiento del tambor', 'Hidráulico'],
          ['Sistema de descarga', 'Canaletas orientables'],
          ['Sistema de mezclado interno', 'Aspas helicoidales'],
          ['Sistema de lavado', 'Depósito de agua'],
        ],
      },
    ],
    applications: [
      'Transporte de hormigón premezclado.',
      'Vaciado de cimentaciones y elementos estructurales.',
      'Construcción de pavimentos industriales.',
      'Hormigonado de losas, vigas y columnas.',
      'Abastecimiento de bombas de hormigón.',
      'Ejecución de obras civiles y de infraestructura.',
    ],
  },

  bomba_de_arrastre_putzmeister: {
    category: 'Producción y colocación de hormigón',
    facts: { brand: 'Putzmeister', year: '2005' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Fabricante', 'Putzmeister'],
          ['Año registrado', '2005'],
          ['Tipo', 'Bomba de hormigón remolcable'],
          ['Sistema de bombeo', 'Pistones de accionamiento hidráulico'],
          ['Sistema de alimentación', 'Tolva receptora de hormigón'],
          ['Sistema de transporte', 'Chasis remolcable sobre ruedas'],
          ['Sistema de descarga', 'Tuberías y mangueras de conducción'],
        ],
      },
    ],
    applications: [
      'Bombeo horizontal y vertical de hormigón.',
      'Vaciado de cimentaciones y zapatas.',
      'Hormigonado de losas, vigas y columnas.',
      'Construcción de muros de hormigón armado.',
      'Colocación de hormigón en zonas de difícil acceso.',
    ],
  },

  bomba_de_arrastre_transcrete_alpha: {
    category: 'Producción y colocación de hormigón',
    facts: { brand: 'Transcrete', year: '2008' },
    intro: 'La serie Alpha comprende cinco modelos de bombas compactas de hormigón con sistema de válvula tipo S (S-tube).',
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Fabricante', 'Transcrete'],
          ['Serie', 'Alpha'],
          ['Año', '2008'],
          ['Tipo', 'Bomba de hormigón remolcable'],
          ['Sistema de bombeo', 'Pistones hidráulicos'],
          ['Sistema de válvula', 'S-tube'],
          ['Capacidad de bombeo', '6–25 m³/h'],
          ['Presión máxima', '100–300 bar'],
          ['Tamaño máximo de agregado', '10–20 mm'],
          ['Capacidad de la tolva', '200–300 litros'],
          ['Potencia del motor', '36–62 kW'],
          ['Diámetro de salida', '75–100 mm'],
        ],
      },
      {
        title: 'Especificaciones según modelo',
        headers: ['Modelo', 'Rendimiento máximo', 'Presión máxima', 'Agregado máximo'],
        rows: [
          ['P10', '6 m³/h', '300 bar', '10 mm'],
          ['P20', '14 m³/h', '150 bar', '16 mm'],
          ['P25', '18 m³/h', '100 bar', '20 mm'],
          ['P35', '25 m³/h', '100 bar', '20 mm'],
          ['P35HP', '25 m³/h', '120 bar', '20 mm'],
        ],
        footnote: 'Datos de la tabla técnica oficial del fabricante.',
      },
    ],
    applications: [
      'Bombeo horizontal y vertical de hormigón.',
      'Vaciado de cimentaciones.',
      'Hormigonado de muros, losas y columnas.',
      'Colocación de hormigón en espacios de acceso limitado.',
      'Ejecución de obras civiles e industriales.',
    ],
  },

  // PENDIENTE: la captura se corta después de "Altura de transporte".
  torre_de_iluminacion_generac_2010: {
    category: 'Equipos auxiliares e iluminación',
    facts: { brand: 'Generac', year: '2010' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Fabricante', 'Generac'],
          ['Año', '2010'],
          ['Tipo de equipo', 'Torre de iluminación móvil'],
          ['Configuración', 'Remolcable sobre ruedas'],
          ['Sistema de iluminación', 'Reflectores orientables'],
          ['Sistema de elevación', 'Mástil telescópico'],
          ['Sistema de estabilización', 'Soportes niveladores'],
        ],
      },
      {
        title: 'Especificaciones técnicas de referencia',
        note: 'Tomando como referencia el modelo Generac Magnum MLT3060, comercializado en 2010.',
        rows: [
          ['Motor', 'Diésel Kubota o Mitsubishi'],
          ['Potencia del motor', '10.5–11.7 HP'],
          ['Potencia del generador en reserva', '6 kW'],
          ['Tipo de iluminación', 'Halogenuros metálicos'],
          ['Reflectores', '4 × 1,000 W'],
          ['Potencia total de iluminación', '4,000 W'],
          ['Flujo luminoso', '440,000 lúmenes'],
          ['Altura máxima del mástil', '9.14 m'],
          ['Rotación del mástil', '360°'],
          ['Capacidad de combustible', '114 litros'],
          ['Autonomía aproximada', '60 horas'],
          ['Voltaje de salida', '120/240 V'],
          ['Frecuencia', '60 Hz'],
          ['Longitud de transporte', '4.32 m'],
          ['Ancho de transporte', '1.25 m'],
          ['Altura de transporte', '1.73 m'],
        ],
      },
    ],
    applications: [],
  },

  planta_electrica_olympia_40_kva_2010: {
    category: 'Generación eléctrica y equipos auxiliares',
    facts: { brand: 'Olympian', year: '2010' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'Olympian'],
          ['Año', '2010'],
          ['Tipo de equipo', 'Grupo electrógeno'],
          ['Potencia aparente', '40 kVA'],
          ['Potencia activa de referencia', '32 kW'],
          ['Factor de potencia de referencia', '0.8'],
          ['Combustible', 'Diésel'],
          ['Sistema de refrigeración', 'Líquido, según modelo'],
          ['Frecuencia de referencia', '60 Hz'],
          ['Velocidad del motor de referencia', '1,800 RPM'],
          ['Configuración eléctrica de referencia', 'Trifásica'],
          ['Sistema de arranque', 'Eléctrico'],
          ['Sistema de control', 'Panel de monitoreo y protección'],
          ['Configuración exterior', 'Cabina de protección acústica, según versión'],
        ],
      },
    ],
    applications: [
      'Suministro eléctrico temporal en proyectos de construcción.',
      'Alimentación de herramientas y equipos eléctricos.',
      'Abastecimiento de oficinas y campamentos de obra.',
      'Alimentación de sistemas de iluminación.',
      'Respaldo eléctrico ante interrupciones del suministro.',
      'Operaciones en zonas sin acceso a la red eléctrica.',
    ],
  },

  planta_electrica_olympian_125_kva: {
    category: 'Generación eléctrica y equipos auxiliares',
    facts: { brand: 'Olympian', year: '2020' },
    tables: [
      {
        title: 'Ficha técnica',
        rows: [
          ['Marca', 'Olympian'],
          ['Año', '2020'],
          ['Tipo de equipo', 'Grupo electrógeno'],
          ['Potencia aparente', '125 kVA'],
          ['Potencia activa de referencia', '100 kW'],
          ['Factor de potencia de referencia', '0.8'],
          ['Combustible', 'Diésel'],
          ['Configuración eléctrica de referencia', 'Trifásica'],
          ['Frecuencia de referencia', '60 Hz'],
          ['Velocidad del motor de referencia', '1,800 RPM'],
          ['Sistema de refrigeración', 'Líquido, según modelo'],
          ['Sistema de arranque', 'Eléctrico'],
          ['Sistema de control', 'Panel de monitoreo y protección'],
          ['Configuración exterior', 'Cabina insonorizada, según versión'],
        ],
      },
    ],
    applications: [
      'Suministro eléctrico para instalaciones temporales.',
      'Alimentación de maquinaria y equipos eléctricos industriales.',
      'Operación de equipos de soldadura.',
      'Abastecimiento de plantas de producción de hormigón.',
      'Alimentación de sistemas de iluminación.',
      'Respaldo energético durante la ejecución de proyectos.',
    ],
  },
};
