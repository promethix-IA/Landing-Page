import {
  AiFeature,
  AiMessage,
  BenefitItem,
  FaqItem,
  FooterColumn,
  IntegrationItem,
  ModuleFeature,
  NavItem,
  PricingPlan,
  ProblemItem,
  SecurityItem,
  StepItem,
  TestimonialItem,
  TrustItem,
} from '../models/landing.models';

export const BRAND_NAME = 'Promethixia';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'IA', href: '#ia' },
  { label: 'Integraciones', href: '#integraciones' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas frecuentes', href: '#faq' },
];

export const TRUST_ITEMS: TrustItem[] = [
  { label: 'Ventas' },
  { label: 'Inventario' },
  { label: 'Clientes' },
  { label: 'Compras' },
  { label: 'Facturación electrónica' },
  { label: 'Inteligencia Artificial' },
];

export const PROBLEM_ITEMS: ProblemItem[] = [
  {
    title: 'Inventario difícil de controlar',
    description: 'Existencias desactualizadas y compras improvisadas generan pérdidas.',
    icon: 'inventory',
  },
  {
    title: 'Ventas sin análisis',
    description: 'Cierras caja todos los días, pero no sabes qué está funcionando.',
    icon: 'sales',
  },
  {
    title: 'Productos que se agotan sin aviso',
    description: 'Te enteras tarde y pierdes ventas en los momentos clave.',
    icon: 'alert',
  },
  {
    title: 'Información dispersa',
    description: 'Excel, cuadernos y sistemas separados dificultan decidir con claridad.',
    icon: 'data',
  },
];

export const MODULES: ModuleFeature[] = [
  {
    title: 'Dashboard',
    description: 'Obtén una visión completa de tu negocio con indicadores y reportes en tiempo real.',
    points: [
      'Ventas de hoy',
      'Ventas de la semana',
      'Ventas del año',
      'Gráficas',
      'Productos más vendidos',
      'Alertas de stock',
    ],
    accent: 'dashboard',
  },
  {
    title: 'Productos e inventario',
    description: 'Controla productos, precios y existencias sin complicaciones.',
    points: [
      'Código',
      'Nombre',
      'Categoría',
      'Precio',
      'Stock',
      'Búsqueda y filtros',
      'Alertas de stock bajo',
    ],
    accent: 'inventory',
  },
  {
    title: 'Clientes',
    description: 'Conoce mejor a tus clientes y consulta su historial de compras.',
    points: [
      'Nombre',
      'Teléfono',
      'Email',
      'Total comprado',
      'Última compra',
      'Historial de compras',
    ],
    accent: 'customers',
  },
  {
    title: 'Proveedores',
    description: 'Gestiona tus proveedores y controla tus órdenes de compra.',
    points: [
      'Proveedores',
      'Productos suministrados',
      'Órdenes de compra',
      'Cantidades y precios',
      'Fechas',
      'Actualización automática del inventario',
    ],
    accent: 'suppliers',
  },
  {
    title: 'Punto de Venta',
    description: 'Cobra rápido, con precisión y sin fricción en el mostrador.',
    points: [
      'Búsqueda de productos',
      'Lector de código de barras',
      'Carrito y cantidades',
      'Subtotales',
      'Efectivo y tarjeta',
      'Peso por kilogramo',
      'Impresión de tickets',
    ],
    accent: 'pos',
  },
  {
    title: 'Facturación electrónica',
    description: 'Factura electrónicamente y mantén tu operación alineada con los requisitos de tu negocio.',
    points: ['Integración DIAN', 'Estado: Conectado', 'Emisión desde el flujo de venta'],
    accent: 'billing',
  },
];

export const AI_CHAT: AiMessage[] = [
  {
    role: 'user',
    text: '¿Cómo estuvieron las ventas esta semana?',
  },
  {
    role: 'assistant',
    text: 'Las ventas aumentaron un 14% respecto a la semana anterior. Los productos con mayor crecimiento fueron bebidas y comidas rápidas.',
  },
  {
    role: 'user',
    text: '¿Qué productos debería comprar?',
  },
  {
    role: 'assistant',
    text: 'Según las ventas recientes y el inventario actual, te recomiendo revisar el stock de arroz, gaseosas y café.',
  },
  {
    role: 'user',
    text: '¿Cuánto vendí este mes?',
  },
  {
    role: 'assistant',
    text: 'Has generado $12.450.000 en ventas este mes.',
  },
];

export const AI_FEATURES: AiFeature[] = [
  {
    title: 'Asistente inteligente',
    description: 'Consulta la información de tu negocio utilizando lenguaje natural.',
    example: '¿Cuáles fueron mis productos más vendidos?',
  },
  {
    title: 'Predicción de ventas',
    description: 'Analiza el historial de ventas para identificar tendencias y ayudarte a anticipar la demanda.',
  },
  {
    title: 'Recomendación de inventario',
    description: 'La IA identifica productos con riesgo de agotarse y recomienda cantidades de reposición.',
  },
  {
    title: 'Análisis de negocio',
    description: 'Obtén explicaciones simples sobre ventas, productos, clientes y comportamiento del negocio.',
  },
  {
    title: 'Alertas inteligentes',
    description: 'Recibe recomendaciones cuando la IA detecte comportamientos importantes en tu negocio.',
  },
  {
    title: 'Reportes con IA',
    description: 'Convierte tus datos en conclusiones fáciles de entender.',
  },
];

export const HOW_IT_WORKS: StepItem[] = [
  {
    step: '01',
    title: 'Registra tu negocio',
    description: 'Configura productos, clientes, proveedores y parámetros iniciales.',
  },
  {
    step: '02',
    title: 'Gestiona tus ventas',
    description: 'Realiza ventas rápidamente desde el POS.',
  },
  {
    step: '03',
    title: 'Deja que la IA analice',
    description: 'Obtén recomendaciones y análisis basados en los datos reales de tu negocio.',
  },
];

export const INTEGRATIONS: IntegrationItem[] = [
  { title: 'Lector de código de barras', subtitle: 'Periféricos de punto de venta', status: 'Conectado' },
  { title: 'Balanza', subtitle: 'Productos vendidos por peso', status: 'Conectado' },
  { title: 'Impresora de tickets', subtitle: 'Comprobantes de venta', status: 'Conectado' },
  { title: 'DIAN', subtitle: 'Facturación electrónica', status: 'Conectado' },
];

export const BENEFITS: BenefitItem[] = [
  { title: 'Ahorra tiempo', description: 'Automatiza tareas repetitivas.', icon: 'time' },
  { title: 'Reduce errores', description: 'Centraliza la información de tu negocio.', icon: 'errors' },
  { title: 'Controla tu inventario', description: 'Conoce qué tienes y qué necesitas comprar.', icon: 'stock' },
  { title: 'Entiende tus ventas', description: 'Visualiza información en tiempo real.', icon: 'insights' },
  { title: 'Toma mejores decisiones', description: 'Utiliza IA para analizar tu información.', icon: 'ai' },
  { title: 'Escala tu negocio', description: 'Una plataforma preparada para crecer contigo.', icon: 'scale' },
];

export const SECURITY_ITEMS: SecurityItem[] = [
  { title: 'Acceso seguro', description: 'Control de ingreso para proteger la operación.' },
  { title: 'Información centralizada', description: 'Tus datos de negocio en un solo lugar.' },
  { title: 'Roles y permisos', description: 'Define qué puede ver y hacer cada usuario.' },
  { title: 'Copias de seguridad', description: 'Respaldo orientado a continuidad operativa.' },
  { title: 'Datos protegidos', description: 'Medidas para resguardar la información del negocio.' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Básico',
    description: 'Para pequeños negocios.',
    features: ['Punto de venta', 'Inventario esencial', 'Clientes', 'Reportes básicos'],
  },
  {
    name: 'Profesional',
    description: 'Para negocios en crecimiento.',
    features: ['Todo lo del plan Básico', 'Proveedores y compras', 'Facturación electrónica', 'Asistente de IA'],
    highlighted: true,
  },
  {
    name: 'Empresarial',
    description: 'Para operaciones con mayores necesidades.',
    features: ['Todo lo del plan Profesional', 'Múltiples usuarios', 'Integraciones avanzadas', 'Acompañamiento prioritario'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'Testimonio de cliente. Espacio preparado para reseñas reales de negocios que usen Promethixia.',
    name: 'Nombre del cliente',
    role: 'Tipo de negocio',
  },
  {
    quote: 'Testimonio de cliente. Aquí irá la experiencia de un comercio o restaurante con el sistema.',
    name: 'Nombre del cliente',
    role: 'Tipo de negocio',
  },
  {
    quote: 'Testimonio de cliente. Placeholder para validar el diseño de la sección de confianza.',
    name: 'Nombre del cliente',
    role: 'Tipo de negocio',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Para qué tipo de negocios está diseñado?',
    answer: 'Promethixia está pensado para tiendas, restaurantes y PYMEs que necesitan centralizar ventas, inventario, clientes y operación diaria.',
  },
  {
    question: '¿Puedo utilizar lectores de código de barras?',
    answer: 'Sí. El punto de venta contempla el uso de lectores de código de barras para agilizar la identificación de productos.',
  },
  {
    question: '¿Es compatible con impresoras de tickets?',
    answer: 'Sí. Puedes integrar impresoras de tickets para emitir comprobantes al finalizar una venta.',
  },
  {
    question: '¿Puedo controlar mi inventario?',
    answer: 'Sí. Puedes gestionar productos, precios, existencias y recibir alertas de stock bajo.',
  },
  {
    question: '¿Tiene facturación electrónica?',
    answer: 'Sí. Incluye integración con DIAN para alinear la facturación electrónica con la operación del negocio.',
  },
  {
    question: '¿Cómo funciona la Inteligencia Artificial?',
    answer: 'La IA analiza la información de tu negocio para responder consultas en lenguaje natural, detectar tendencias y sugerir acciones sobre ventas e inventario.',
  },
  {
    question: '¿Puedo consultar mis ventas?',
    answer: 'Sí. Desde el dashboard y los reportes puedes revisar ventas del día, de la semana y del periodo que necesites.',
  },
  {
    question: '¿Puedo utilizarlo desde una tablet?',
    answer: 'La interfaz está diseñada para adaptarse a distintos dispositivos, incluyendo entornos de trabajo con tablet en el punto de venta.',
  },
  {
    question: '¿Puedo agregar varios usuarios?',
    answer: 'Sí. Puedes trabajar con distintos usuarios y definir roles y permisos según la operación de tu negocio.',
  },
  {
    question: '¿El sistema funciona para restaurantes?',
    answer: 'Sí. Está pensado para PYMEs como tiendas, restaurantes y pequeños comercios que necesitan control operativo y de ventas.',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Dashboard', href: '#funcionalidades' },
      { label: 'POS', href: '#experiencia-pos' },
      { label: 'Inventario', href: '#funcionalidades' },
      { label: 'Clientes', href: '#funcionalidades' },
      { label: 'IA', href: '#ia' },
      { label: 'Integraciones', href: '#integraciones' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#solucion' },
      { label: 'Contacto', href: '#cta-final' },
      { label: 'Preguntas frecuentes', href: '#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de privacidad', href: '#privacidad' },
      { label: 'Términos y condiciones', href: '#terminos' },
    ],
  },
];
