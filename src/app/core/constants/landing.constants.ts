import {
  AiFeature,
  AiMessage,
  FaqItem,
  FooterColumn,
  ModuleFeature,
  NavItem,
  ProblemItem,
} from '../models/landing.models';

export const BRAND_NAME = 'Promethixia';

export const DEMO_MAILTO = 'mailto:contacto@promethixia.com?subject=Solicitar%20demostración';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Solución', href: '#solucion' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'IA', href: '#ia' },
  { label: 'Preguntas frecuentes', href: '#faq' },
];

export const HERO_CHIPS: string[] = [
  'Ventas',
  'Inventario',
  'Clientes',
  'Facturación DIAN',
  'IA integrada',
];

export const PROBLEM_ITEMS: ProblemItem[] = [
  {
    title: 'Inventario a ciegas',
    description: 'Productos que se agotan sin aviso y compras improvisadas que generan pérdidas.',
  },
  {
    title: 'Ventas sin análisis',
    description: 'Cierras caja todos los días, pero no sabes qué está funcionando.',
  },
  {
    title: 'Información dispersa',
    description: 'Excel, cuadernos y sistemas separados dificultan decidir con claridad.',
  },
];

export const MODULES: ModuleFeature[] = [
  {
    id: 'dashboard',
    tab: 'Dashboard',
    title: 'Tu negocio en una sola pantalla',
    description: 'Indicadores y reportes en tiempo real para saber cómo vas sin hacer cuentas.',
    points: ['Ventas del día, semana y año', 'Productos más vendidos', 'Alertas de stock bajo'],
  },
  {
    id: 'pos',
    tab: 'Punto de venta',
    title: 'Cobra rápido y sin errores',
    description: 'Una interfaz clara para buscar productos, armar el carrito y cerrar la venta en segundos.',
    points: ['Lector de código de barras y balanza', 'Efectivo y tarjeta', 'Impresión de tickets'],
  },
  {
    id: 'inventory',
    tab: 'Inventario',
    title: 'Sabe qué tienes y qué comprar',
    description: 'Controla productos, precios y existencias; las compras a proveedores actualizan el stock solas.',
    points: ['Búsqueda y filtros por categoría', 'Órdenes de compra a proveedores', 'Avisos antes de agotarse'],
  },
  {
    id: 'customers',
    tab: 'Clientes',
    title: 'Conoce a quién te compra',
    description: 'Historial y frecuencia de compra de cada cliente para fidelizar mejor.',
    points: ['Datos de contacto', 'Total comprado y última compra', 'Historial completo'],
  },
  {
    id: 'billing',
    tab: 'Facturación',
    title: 'Factura electrónica desde la venta',
    description: 'Emite facturas electrónicas desde el mismo flujo de cobro, integradas con la DIAN.',
    points: ['Integración DIAN', 'Emisión en el momento del cobro', 'Sin doble digitación'],
  },
];

export const PERIPHERALS: string[] = [
  'Lector de código de barras',
  'Balanza',
  'Impresora de tickets',
  'DIAN',
];

export const AI_CHAT: AiMessage[] = [
  {
    role: 'user',
    text: '¿Cómo estuvieron las ventas esta semana?',
  },
  {
    role: 'assistant',
    text: 'Aumentaron un 14% frente a la semana anterior. Lo que más creció fueron bebidas y comidas rápidas.',
  },
  {
    role: 'user',
    text: '¿Qué productos debería comprar?',
  },
  {
    role: 'assistant',
    text: 'Según tus ventas y el inventario actual, revisa el stock de arroz, gaseosas y café.',
  },
];

export const AI_FEATURES: AiFeature[] = [
  {
    title: 'Pregunta en tu idioma',
    description: 'Consulta ventas, productos y clientes como si hablaras con un asesor.',
  },
  {
    title: 'Anticipa la demanda',
    description: 'Predicción de ventas y recomendaciones de reposición según tu historial.',
  },
  {
    title: 'Alertas que importan',
    description: 'Te avisa cuando detecta cambios relevantes en tu negocio.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Para qué tipo de negocios está diseñado?',
    answer: 'Para tiendas, restaurantes y PYMEs que necesitan centralizar ventas, inventario, clientes y operación diaria.',
  },
  {
    question: '¿Funciona con mis equipos actuales?',
    answer: 'Sí. Es compatible con lectores de código de barras, balanzas e impresoras de tickets, y se puede usar desde computador o tablet.',
  },
  {
    question: '¿Tiene facturación electrónica?',
    answer: 'Sí. Incluye integración con la DIAN para emitir facturas electrónicas desde el flujo de venta.',
  },
  {
    question: '¿Puedo tener varios usuarios?',
    answer: 'Sí. Puedes crear usuarios y definir roles y permisos según lo que cada persona necesita ver y hacer.',
  },
  {
    question: '¿Mi información está segura?',
    answer: 'Tus datos se guardan centralizados, con acceso seguro, control por roles y copias de seguridad.',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Funcionalidades', href: '#funcionalidades' },
      { label: 'Inteligencia Artificial', href: '#ia' },
    ],
  },
  {
    title: 'Empresa',
    links: [
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
