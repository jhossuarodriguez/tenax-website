import type { Service, ServicesPageContent } from '@/types';
import { obraThumb, type ObraPhotoId } from '@/data/obras';

interface TenaxService {
  id: string;
  titulo: string;
  /** Categoría corta del eyebrow y de la barra lateral. */
  categoria: string;
  imagen: ObraPhotoId;
  descripcionCorta: string;
  descripcionLarga: string;
  caracteristicas: string[];
  proceso: { paso: string; descripcion: string }[];
  beneficios: string[];
  equipos: string[];
  /** Fotos de obra del servicio (galería de miniaturas del detalle). */
  fotos: ObraPhotoId[];
}

/** Servicios de Tenax Construction: uno por cada grupo de fotos de obra de "FOTOS TENAX". */
const tenaxServices: TenaxService[] = [
  {
    id: 'movimiento-tierra',
    titulo: 'Movimiento de Tierra y Nivelación',
    categoria: 'Obras de tierra',
    imagen: 'movimiento-tierra-samana-1',
    descripcionCorta: 'Desbroce, corte, relleno, nivelación y compactación de terrenos para obras civiles, viales y turísticas.',
    descripcionLarga:
      'Preparamos el terreno para que la obra arranque sobre una base estable. Seguimos la secuencia del movimiento de tierras: desbroce de la capa vegetal, corte o excavación hasta la cota de proyecto, carga y transporte del material, y relleno extendido en capas que se humedecen y compactan una a una. La nivelación final deja el terreno en los niveles de diseño, retirando el sobrante o rellenando con material propio o de préstamo. Así trabajamos en Las Terrenas, Samaná, y en explanadas para pavimentos y naves.',
    caracteristicas: [
      'Desbroce y retiro de la capa vegetal',
      'Corte y excavación hasta la cota de proyecto',
      'Relleno con material propio o de préstamo',
      'Extendido, humectación y compactación por capas',
      'Nivelación y explanación de plataformas',
      'Conformación de caminos y accesos internos',
    ],
    proceso: [
      { paso: 'Replanteo topográfico', descripcion: 'Marcamos en el terreno las cotas y los niveles del proyecto.' },
      { paso: 'Desbroce y corte', descripcion: 'Retiramos la vegetación y excavamos el material sobrante hasta el nivel indicado.' },
      { paso: 'Carga y transporte', descripcion: 'Movemos el material a las zonas de relleno o fuera de la obra con camiones volteo.' },
      {
        paso: 'Relleno y compactación',
        descripcion: 'Extendemos el material en capas de espesor uniforme, lo humedecemos y lo compactamos hasta la densidad requerida.',
      },
    ],
    beneficios: [
      'Base estable para cimentaciones y pavimentos',
      'Control de cotas y pendientes de drenaje',
      'Balance de corte y relleno que reduce acarreos',
      'Menos asentamientos a futuro',
      'Maquinaria propia para cumplir plazos',
    ],
    equipos: ['Excavadoras hidráulicas', 'Camiones volteo', 'Rodillos compactadores', 'Retroexcavadoras'],
    fotos: [
      'movimiento-tierra-samana-1',
      'movimiento-tierra-samana-2',
      'movimiento-tierra-samana-3',
      'movimiento-tierra-samana-4',
      'movimiento-tierra-1',
      'movimiento-tierra-2',
      'movimiento-tierra-3',
      'movimiento-tierra-4',
      'movimiento-tierra-pavimento-1',
      'nivelacion-terreno-1',
      'nivelacion-terreno-2',
      'nivelacion-terreno-3',
    ],
  },
  {
    id: 'naves-industriales',
    titulo: 'Naves Industriales',
    categoria: 'Estructuras',
    imagen: 'nave-industrial-6',
    descripcionCorta: 'Naves de acero para fábricas, bodegas de importación y almacenes, desde la cimentación hasta la cubierta.',
    descripcionLarga:
      'Construimos naves industriales para fábricas, bodegas de importación (permanentes y temporales) y almacenes. Cada nave se apoya en zapatas y vigas de amarre de hormigón armado; sobre ellas montamos pórticos de acero unidos por correas y arriostramientos que llevan las cargas de viento y sismo hasta la cimentación. Cerramos con muros de bloques o paneles prefabricados de hormigón, cubierta de lámina metálica y piso de hormigón apto para montacargas. Tenemos naves en Baní y en Santo Domingo Oeste, entre otras.',
    caracteristicas: [
      'Naves para fábricas y producción',
      'Bodegas de importación y almacenes',
      'Bodegas temporales y cobertizos de carga',
      'Pórticos de acero a dos aguas',
      'Cerramientos de bloques o paneles prefabricados',
      'Pisos industriales de hormigón',
    ],
    proceso: [
      { paso: 'Preparación del terreno', descripcion: 'Desbroce, nivelación y compactación de la explanada donde irá la nave.' },
      { paso: 'Cimentación', descripcion: 'Zapatas y vigas de amarre de hormigón armado con las placas de anclaje de las columnas.' },
      { paso: 'Montaje de la estructura', descripcion: 'Izaje de pórticos, colocación de correas y arriostramientos.' },
      { paso: 'Cubierta, cerramientos y piso', descripcion: 'Lámina de techo, muros perimetrales y losa de piso de hormigón.' },
    ],
    beneficios: [
      'Grandes luces libres, sin columnas intermedias',
      'Montaje más rápido que una estructura tradicional',
      'Fácil de ampliar a futuro',
      'Estructura preparada para viento y sismo',
      'Espacio adaptable a producción o almacenaje',
    ],
    equipos: ['Camiones grúa', 'Plataformas elevadoras', 'Equipos de soldadura', 'Andamios', 'Camiones hormigonera'],
    fotos: [
      'nave-industrial-6',
      'nave-industrial-bani',
      'nave-industrial-1',
      'nave-industrial-4',
      'nave-industrial-5',
      'nave-industrial-7',
      'nave-industrial-3',
      'nave-fabrica-plasticos-1',
      'nave-fabrica-plasticos-2',
      'nave-bodega-importacion-2',
      'nave-bodega-temporal-1',
      'nave-bodega-temporal-2',
      'nave-bodega-temporal-3',
    ],
  },
  {
    id: 'puentes-alcantarillados',
    titulo: 'Puentes y Alcantarillados',
    categoria: 'Obras viales y drenaje',
    imagen: 'puente-alcantarillado-3',
    descripcionCorta: 'Puentes alcantarilla de tubos de hormigón con cabezales y aletas para cruzar cauces y pasos de agua.',
    descripcionLarga:
      'Construimos puentes alcantarilla para que caminos y accesos crucen arroyos, cañadas y pasos de agua de lluvia sin cortarse. La obra combina una batería de tubos de hormigón armado con cabezales y muros de ala en la entrada y la salida: los cabezales sostienen el relleno del camino y las aletas encauzan el agua y disipan su energía. Completamos con protección contra la socavación aguas arriba y aguas abajo, y con el relleno compactado y la rodadura sobre la estructura.',
    caracteristicas: [
      'Alcantarillas de tubos de hormigón armado',
      'Cabezales y muros de ala de hormigón',
      'Protección contra la socavación del cauce',
      'Relleno compactado sobre los tubos',
      'Rodadura de grava u hormigón',
      'Barandas y señalización del paso',
    ],
    proceso: [
      {
        paso: 'Estudio del cauce',
        descripcion: 'Estimamos el caudal y el nivel de crecida para definir el diámetro y el número de tubos.',
      },
      { paso: 'Excavación y base', descripcion: 'Desviamos el agua, excavamos y preparamos una base firme y nivelada.' },
      { paso: 'Tubos y cabezales', descripcion: 'Colocamos los tubos, armamos el acero y vaciamos cabezales y aletas.' },
      { paso: 'Relleno y rodadura', descripcion: 'Rellenamos por capas compactadas y terminamos la superficie del camino.' },
    ],
    beneficios: [
      'Paso seguro también en temporada de lluvias',
      'Protege el terraplén del camino',
      'Larga vida útil del hormigón armado',
      'Poco mantenimiento',
      'Soporta el paso de maquinaria y vehículos pesados',
    ],
    equipos: ['Excavadoras hidráulicas', 'Camiones grúa', 'Camiones hormigonera', 'Compactadores', 'Encofrados'],
    fotos: [
      'puente-alcantarillado-3',
      'puente-alcantarillado-1',
      'puente-alcantarillado-5',
      'puente-alcantarillado-8',
      'puente-alcantarillado-7',
      'puente-alcantarillado-4',
      'puente-alcantarillado-6',
      'puente-alcantarillado-2',
    ],
  },
  {
    id: 'pavimentos',
    titulo: 'Pavimentos y Adoquines',
    categoria: 'Obras viales y drenaje',
    imagen: 'pavimento-1',
    descripcionCorta: 'Pavimentos rígidos de hormigón para patios y accesos industriales, y adoquinado para parqueos.',
    descripcionLarga:
      'Construimos pavimentos rígidos de hormigón para patios de contenedores, parqueos, calles internas y accesos industriales, y adoquinados para estacionamientos. Por su rigidez, la losa de hormigón reparte las cargas sobre un área amplia de la subrasante y resiste el tránsito pesado; la vaciamos en fajas sobre una subrasante drenada y compactada, con juntas y acabado estriado antideslizante. El adoquín de hormigón intertrabado se asienta sobre una cama de arena y se sella con arena fina: entra en servicio rápido y, si hay que reparar, se levanta y se vuelve a colocar sin demoler.',
    caracteristicas: [
      'Pavimento rígido de hormigón en patios y accesos',
      'Losas con pasadores y juntas de contracción',
      'Acabado estriado antideslizante',
      'Adoquinado intertrabado en parqueos',
      'Preparación y compactación de subrasante y base',
      'Bordillos y confinamientos',
    ],
    proceso: [
      { paso: 'Subrasante y base', descripcion: 'Nivelamos y compactamos el terreno y colocamos la base granular.' },
      { paso: 'Encofrado y pasadores', descripcion: 'Formamos las fajas y colocamos el acero de transferencia entre losas.' },
      { paso: 'Vaciado y acabado', descripcion: 'Colocamos, vibramos y reglamos el hormigón, y le damos el acabado estriado.' },
      { paso: 'Curado y juntas', descripcion: 'Curamos la losa y cortamos y sellamos las juntas antes de abrir al tránsito.' },
    ],
    beneficios: [
      'Soporta tránsito pesado y montacargas',
      'Larga vida útil con poco mantenimiento',
      'Superficie antideslizante',
      'Adoquines reparables sin demoler',
      'Puesta en servicio rápida del adoquinado',
    ],
    equipos: ['Camiones hormigonera', 'Reglas vibratorias', 'Rodillos compactadores', 'Placas vibratorias', 'Cortadoras de juntas'],
    fotos: ['pavimento-1', 'pavimento-2', 'pavimento-3', 'pavimento-4', 'pavimento-rannik', 'adoquines-parqueo-1', 'adoquines-parqueo-2'],
  },
  {
    id: 'hormigon-armado',
    titulo: 'Envarillado y Colocación de Hormigón',
    categoria: 'Estructuras',
    imagen: 'envarillado-losa-1',
    descripcionCorta: 'Encofrado, envarillado, vaciado y curado de losas y elementos de hormigón armado.',
    descripcionLarga:
      'Ejecutamos el ciclo completo del hormigón armado: encofrado y apuntalamiento, envarillado, vaciado, vibrado, acabado y curado. Las varillas se cortan, doblan y amarran firmemente según los planos para que conserven su posición y su recubrimiento durante el vaciado y el vibrado. Antes de vaciar revisamos niveles, plomos y encofrados humedecidos; colocamos el hormigón con bomba o desde el camión hormigonera, lo vibramos para eliminar vacíos y lo curamos hasta que alcanza la resistencia necesaria para desencofrar.',
    caracteristicas: [
      'Losas macizas y de entrepiso',
      'Losas y muros de cajas de ascensor',
      'Zapatas, columnas y vigas',
      'Corte, doblado y amarre de acero de refuerzo',
      'Encofrado de madera o metálico',
      'Colocación con bomba o camión hormigonera',
    ],
    proceso: [
      { paso: 'Encofrado y apuntalamiento', descripcion: 'Montamos formaletas y puntales a nivel y a plomo.' },
      { paso: 'Envarillado', descripcion: 'Armamos y amarramos el acero con sus separadores para respetar el recubrimiento.' },
      { paso: 'Vaciado y vibrado', descripcion: 'Colocamos el hormigón de forma continua y lo vibramos para eliminar vacíos.' },
      {
        paso: 'Curado y desencofrado',
        descripcion: 'Mantenemos la humedad del hormigón y desencoframos cuando alcanza la resistencia indicada.',
      },
    ],
    beneficios: [
      'Alta resistencia y durabilidad',
      'Buen comportamiento sísmico bien diseñado y armado',
      'Resistencia al fuego',
      'Bajo mantenimiento',
      'Control de calidad en cada etapa',
    ],
    equipos: [
      'Camiones hormigonera',
      'Bombas de hormigón',
      'Vibradores de inmersión',
      'Cortadoras y dobladoras de varilla',
      'Puntales y encofrados',
    ],
    fotos: ['envarillado-losa-1', 'envarillado-losa-2', 'colocacion-hormigon-1', 'colocacion-hormigon-2'],
  },
  {
    id: 'estructura-metalica',
    titulo: 'Techos y Estructuras Metálicas',
    categoria: 'Estructuras',
    imagen: 'showroom-1',
    descripcionCorta: 'Techos de tijerillas, cubiertas de policarbonato, marquesinas y escaleras de emergencia en acero.',
    descripcionLarga:
      'Fabricamos y montamos estructuras metálicas a medida: techos con sistema de tijerillas (cerchas de tubo de acero) para comedores, escuelas y galpones; cubiertas de policarbonato sobre estructura metálica para pasillos y patios que necesitan luz natural; marquesinas como la de un showroom de vehículos, y escaleras de emergencia exteriores. Las tijerillas cubren grandes luces con poco peso. El policarbonato resiste mucho mejor los impactos que el vidrio, pesa menos y filtra los rayos UV. Las escaleras de emergencia son de acero, un material incombustible, con descansos y barandas en cada nivel.',
    caracteristicas: [
      'Techos con tijerillas o cerchas metálicas',
      'Cubiertas de policarbonato sobre estructura metálica',
      'Marquesinas para showrooms y parqueos',
      'Escaleras de emergencia exteriores',
      'Cubiertas de lámina metálica',
      'Pintura anticorrosiva y acabados',
    ],
    proceso: [
      { paso: 'Diseño y cálculo', descripcion: 'Definimos perfiles, uniones y anclajes según las luces y las cargas.' },
      { paso: 'Fabricación en taller', descripcion: 'Cortamos, soldamos y pintamos las piezas con protección anticorrosiva.' },
      { paso: 'Montaje en sitio', descripcion: 'Izamos y fijamos la estructura con personal especializado en altura.' },
      { paso: 'Cubierta y acabados', descripcion: 'Instalamos lámina o policarbonato, canales, barandas y retoques de pintura.' },
    ],
    beneficios: [
      'Grandes luces con poco peso',
      'Luz natural con protección UV',
      'Montaje rápido en obra',
      'Bajo mantenimiento con protección anticorrosiva',
      'Ruta de evacuación segura en edificios',
    ],
    equipos: ['Equipos de soldadura', 'Camiones grúa', 'Plataformas elevadoras', 'Andamios', 'Cortadoras de metal'],
    fotos: [
      'showroom-1',
      'techo-tijerillas-1',
      'techo-tijerillas-2',
      'techo-policarbonato-1',
      'techo-policarbonato-2',
      'escalera-emergencia-1',
      'escalera-emergencia-2',
    ],
  },
  {
    id: 'retrofit',
    titulo: 'Retrofit y Reforzamiento Estructural',
    categoria: 'Estructuras',
    imagen: 'retrofit-2',
    descripcionCorta: 'Reforzamiento de columnas y vigas existentes con encamisado de hormigón o empresillado metálico.',
    descripcionLarga:
      'El retrofit refuerza estructuras existentes para que soporten más carga, mejoren su respuesta ante sismos o cambien de uso sin demolerlas. Evaluamos el estado del edificio y reforzamos columnas y vigas con encamisado de hormigón armado o con empresillado metálico: ángulos de acero en las esquinas unidos con platinas, que confinan el elemento y aumentan su capacidad. Después protegemos el refuerzo con mortero y devolvemos el acabado. Es una alternativa más rápida y económica que demoler y reconstruir.',
    caracteristicas: [
      'Evaluación estructural y diagnóstico de daños',
      'Encamisado de columnas con hormigón armado',
      'Empresillado metálico con ángulos y platinas',
      'Reforzamiento de vigas y losas',
      'Reparación de hormigón deteriorado',
      'Protección y acabado del refuerzo',
    ],
    proceso: [
      { paso: 'Diagnóstico', descripcion: 'Inspeccionamos la estructura e identificamos los elementos que necesitan refuerzo.' },
      { paso: 'Diseño del refuerzo', descripcion: 'Elegimos encamisado o empresillado según la capacidad que hay que ganar.' },
      { paso: 'Preparación', descripcion: 'Picamos y limpiamos la superficie para que el refuerzo trabaje unido al elemento.' },
      { paso: 'Refuerzo y acabado', descripcion: 'Instalamos el acero o el hormigón nuevo y lo cubrimos con mortero.' },
    ],
    beneficios: [
      'Evita demoler y reconstruir',
      'Mayor capacidad de carga',
      'Mejor respuesta ante sismos',
      'Permite cambios de uso y ampliaciones',
      'Obra más corta, con el edificio en pie',
    ],
    equipos: ['Equipos de soldadura', 'Taladros y anclajes químicos', 'Andamios', 'Martillos demoledores ligeros', 'Cortadoras de metal'],
    fotos: ['retrofit-2', 'retrofit-1', 'retrofit-3', 'retrofit-4'],
  },
  {
    id: 'muros-contencion',
    titulo: 'Muros de Contención Tipo AB',
    categoria: 'Obras de tierra',
    imagen: 'muro-contencion-ab-1',
    descripcionCorta: 'Muros de bloques segmentados tipo AB (Allan Block), apilados en seco y reforzados con geomalla.',
    descripcionLarga:
      'Construimos muros de contención de bloques segmentados tipo AB (Allan Block): bloques de hormigón que se apilan en seco, sin mortero, con un pequeño retranqueo entre hiladas que inclina el muro hacia el terreno que sostiene. Según la altura y la carga, el muro trabaja por gravedad o se refuerza con capas de geomalla ancladas en el relleno compactado. El sistema permite curvas, esquinas y escalonamientos, deja drenar el agua por sus juntas y por el relleno de grava, y se diseña con el análisis estructural de un ingeniero. Un ejemplo es el muro del km 13 de la Autopista Duarte.',
    caracteristicas: [
      'Muros por gravedad de bloques segmentados',
      'Muros reforzados con geomalla',
      'Curvas, esquinas y escalonamientos',
      'Drenaje con grava y tubería perforada',
      'Relleno compactado por capas',
      'Coronamientos y remates',
    ],
    proceso: [
      { paso: 'Diseño', descripcion: 'Un ingeniero define altura, tipo de muro y geomalla según el suelo y las cargas.' },
      { paso: 'Base nivelada', descripcion: 'Excavamos la zanja y colocamos una base de grava compactada y a nivel.' },
      { paso: 'Hiladas y geomalla', descripcion: 'Apilamos los bloques y tendemos la geomalla en las hiladas indicadas.' },
      { paso: 'Relleno y drenaje', descripcion: 'Rellenamos y compactamos por capas, con grava y tubería de drenaje detrás del muro.' },
    ],
    beneficios: [
      'Montaje rápido, sin mortero ni encofrado',
      'Acabado de piedra arquitectónico',
      'Drena el agua y reduce la presión sobre el muro',
      'Se adapta a curvas y desniveles',
      'Larga vida útil',
    ],
    equipos: ['Retroexcavadoras', 'Rodillos compactadores', 'Placas vibratorias', 'Cargadores frontales'],
    fotos: ['muro-contencion-ab-1', 'muro-contencion-ab-2'],
  },
  {
    id: 'cunetas',
    titulo: 'Cunetas y Drenaje Pluvial',
    categoria: 'Obras viales y drenaje',
    imagen: 'cunetas-1',
    descripcionCorta: 'Cunetas revestidas de hormigón que recogen y desvían el agua de lluvia de caminos y taludes.',
    descripcionLarga:
      'Las cunetas recogen el agua de lluvia que escurre por la calzada y los taludes y la llevan a alcantarillas o cauces naturales, para que no erosione el camino. Construimos cunetas revestidas de hormigón, de sección trapezoidal o triangular, con malla de refuerzo y juntas a intervalos regulares, dimensionadas para el caudal de cada tramo. Las hacemos en caminos internos, accesos y parques industriales, junto con el perfilado del terreno.',
    caracteristicas: [
      'Cunetas de hormigón trapezoidales y triangulares',
      'Refuerzo con malla electrosoldada',
      'Juntas de control',
      'Perfilado y compactación del cauce',
      'Conexión con alcantarillas y descargas',
      'Cunetas al borde de caminos y al pie de taludes',
    ],
    proceso: [
      { paso: 'Trazado y pendientes', descripcion: 'Definimos el recorrido y la pendiente para que el agua corra sin estancarse.' },
      { paso: 'Excavación y perfilado', descripcion: 'Abrimos y compactamos la sección de la cuneta.' },
      { paso: 'Encofrado y malla', descripcion: 'Colocamos formaletas y la malla de refuerzo.' },
      { paso: 'Vaciado y juntas', descripcion: 'Vaciamos el hormigón, le damos acabado y marcamos las juntas.' },
    ],
    beneficios: [
      'Protegen la vía de la erosión',
      'Evitan encharcamientos',
      'Alargan la vida del pavimento',
      'Poco mantenimiento',
      'Cuestan menos que reparar los daños del agua',
    ],
    equipos: ['Excavadoras hidráulicas', 'Retroexcavadoras', 'Camiones hormigonera', 'Vibradores de inmersión'],
    fotos: ['cunetas-1', 'cunetas-2'],
  },
  {
    id: 'control-acceso',
    titulo: 'Control de Acceso y Seguridad',
    categoria: 'Seguridad perimetral',
    imagen: 'control-acceso-1',
    descripcionCorta: 'Garitas de seguridad, portones y marquesinas de control vehicular para empresas e industrias.',
    descripcionLarga:
      'Diseñamos y construimos los puntos de entrada de empresas, puertos, parques industriales y residenciales: garitas de seguridad, portones de acceso y casetas de control vehicular bajo marquesina. Las garitas tienen ventanas en todas sus caras para que el vigilante vea en todas direcciones y atienda a los conductores sin salir. Los portones se fabrican en acero, abatibles o corredizos, y quedan listos para automatizarse. Completamos con islas de hormigón, bolardos, marquesinas metálicas y señalización.',
    caracteristicas: [
      'Garitas de vigilancia de bloques u hormigón',
      'Casetas de control sobre islas vehiculares',
      'Marquesinas metálicas sobre los carriles de acceso',
      'Portones metálicos abatibles y corredizos',
      'Verjas y puertas peatonales',
      'Preparación para barreras y automatización',
    ],
    proceso: [
      { paso: 'Estudio del flujo', descripcion: 'Analizamos la entrada y salida de vehículos y peatones para ubicar cada elemento.' },
      { paso: 'Obra civil', descripcion: 'Cimentación, losas, islas y canalizaciones eléctricas.' },
      { paso: 'Estructura y cerramientos', descripcion: 'Levantamos garitas, marquesinas y portones.' },
      { paso: 'Instalaciones y acabados', descripcion: 'Electricidad, iluminación, pintura y señalización.' },
    ],
    beneficios: [
      'Entradas y salidas ordenadas',
      'Más seguridad para personas y bienes',
      'Vigilancia con visibilidad completa',
      'Personal protegido del sol y la lluvia',
      'Buena imagen en la entrada de la empresa',
    ],
    equipos: ['Equipos de soldadura', 'Camiones grúa', 'Mezcladoras de hormigón', 'Andamios'],
    fotos: ['control-acceso-1', 'garita-seguridad-1', 'garita-seguridad-2', 'porton-acceso-1'],
  },
  {
    id: 'vallado-perimetral',
    titulo: 'Vallado Perimetral',
    categoria: 'Seguridad perimetral',
    imagen: 'vallado-perimetral-1',
    descripcionCorta: 'Cercas de malla ciclónica galvanizada con alambre de púas para terrenos, fincas e industrias.',
    descripcionLarga:
      'Cercamos terrenos, fincas, parques solares e instalaciones industriales con vallado de malla ciclónica galvanizada sobre postes metálicos, rematado con hilos de alambre de púas. Anclamos en hormigón los postes de línea, de esquina y de refuerzo; tensamos la malla con barras, ganchos y tensores galvanizados, y la arriostramos con hilos de alambre de alta resistencia para que quede firme. Un ejemplo es el vallado de Peravia, Baní.',
    caracteristicas: [
      'Malla ciclónica galvanizada',
      'Postes de línea, esquina y refuerzo',
      'Remate con alambre de púas',
      'Tensado con barras y tensores galvanizados',
      'Portones y accesos en el vallado',
      'Limpieza y perfilado de la línea de cerca',
    ],
    proceso: [
      { paso: 'Replanteo', descripcion: 'Marcamos el perímetro, las esquinas y la ubicación de cada poste.' },
      { paso: 'Postes', descripcion: 'Excavamos y anclamos los postes en hormigón, a plomo y alineados.' },
      { paso: 'Malla y tensado', descripcion: 'Tendemos la malla y la tensamos entre postes de refuerzo.' },
      { paso: 'Remates', descripcion: 'Colocamos el alambre de púas, los portones y los amarres finales.' },
    ],
    beneficios: [
      'Delimita y protege la propiedad',
      'Resiste la corrosión',
      'Deja ver a través de la cerca',
      'Instalación rápida en perímetros grandes',
      'Bajo costo por metro lineal',
    ],
    equipos: ['Ahoyadoras', 'Mezcladoras de hormigón', 'Tensores', 'Camionetas de carga'],
    fotos: ['vallado-perimetral-1', 'vallado-perimetral-2', 'vallado-perimetral-3'],
  },
];

const RELATED_LIMIT = 5;

/** Servicios relacionados: primero los de la misma categoría, luego el resto, en el orden del listado. */
const relatedIds = (s: TenaxService): string[] => {
  const others = tenaxServices.filter((o) => o.id !== s.id);
  const sameCategory = others.filter((o) => o.categoria === s.categoria);
  const rest = others.filter((o) => o.categoria !== s.categoria);
  return [...sameCategory, ...rest].slice(0, RELATED_LIMIT).map((o) => o.id);
};

export const services: Service[] = tenaxServices.map((s) => ({
  slug: s.id,
  title: s.titulo,
  category: s.categoria,
  tags: s.equipos.slice(0, 3).join(' · '),
  excerpt: s.descripcionCorta,
  tagline: s.descripcionCorta,
  image: obraThumb(s.imagen),
  // Las fotos de obra son pequeñas para una panorámica 21:9: el detalle usa la galería de miniaturas.
  gallery: { layout: 'tiles', images: s.fotos.map(obraThumb) },
  heroLink: { label: 'Ver características ↓', target: 'caracteristicas' },
  sections: [
    { id: 'descripcion', label: 'Descripción general', body: s.descripcionLarga },
    ...s.proceso.map((p, i) => ({ label: `Paso ${i + 1} · ${p.paso}`, body: p.descripcion })),
  ],
  lists: [
    { id: 'caracteristicas', label: 'Características', items: s.caracteristicas },
    { id: 'beneficios', label: 'Beneficios', items: s.beneficios },
    { id: 'equipos', label: 'Equipos', items: s.equipos },
  ],
  related: relatedIds(s),
  collapseRailOnTablet: false,
}));

export const getService = (slug: string): Service | undefined => services.find((s) => s.slug === slug);

/** Servicios de la portada: los cuatro con más obra fotografiada. */
export const featuredServiceSlugs = ['movimiento-tierra', 'naves-industriales', 'puentes-alcantarillados', 'pavimentos'] as const;

export const servicesPage: ServicesPageContent = {
  seo: {
    title: 'Servicios de construcción en RD',
    description:
      'Movimiento de tierra, naves industriales, estructuras metálicas, pavimentos, puentes y más, en Santo Domingo y toda la República Dominicana.',
  },
  hero: {
    breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: 'Servicios' }],
    eyebrow: 'Servicios',
    title: 'Nuestros',
    titleEmphasis: 'Servicios',
    subtitle: 'Ofrecemos soluciones integrales en construcción con los más altos estándares de calidad y compromiso.',
    strip: [...new Set(tenaxServices.map((s) => s.categoria))],
  },
  heading: 'Soluciones integrales en construcción',
  intro:
    'Descubre nuestros servicios: movimiento de tierra, naves industriales, puentes y alcantarillados, pavimentos, hormigón armado, estructuras metálicas, retrofit, muros de contención, drenaje y seguridad perimetral.',
  cta: {
    title: '¿Tienes un proyecto en mente?',
    text: 'Contáctanos para una cotización personalizada. Nuestro equipo está listo para ayudarte a hacer realidad tu proyecto.',
    action: { label: 'Solicitar cotización', href: '/contacto/' },
  },
  sideCtaText: 'Contáctanos para una cotización personalizada.',
};
