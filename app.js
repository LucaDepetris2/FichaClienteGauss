/* =====================
   DATA
   ===================== */

/* SVG icon templates keyed by name */
const iconos = {
  'file-text': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  'file-check': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>`,
  'cart':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  'bag':        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  'tag':        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  'message':    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  'truck':      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  'bot':        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></svg>`,
  'chart':      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  'cog':        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  'credit-card':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  'code':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  'hierarchy':  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="1" width="6" height="4" rx="1"/><rect x="1" y="19" width="6" height="4" rx="1"/><rect x="9" y="19" width="6" height="4" rx="1"/><rect x="17" y="19" width="6" height="4" rx="1"/><line x1="12" y1="5" x2="12" y2="10"/><line x1="4" y1="19" x2="4" y2="14"/><line x1="12" y1="19" x2="12" y2="14"/><line x1="20" y1="19" x2="20" y2="14"/><line x1="4" y1="14" x2="20" y2="14"/></svg>`,
  'book':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  'warn':       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
};

/* ---- Shape badge SVG paths (viewBox 0 0 24 18) ---- */
const tipoShapes = {
  'manual':       { label: 'Confección Manual',    color: '#4a7aaa', svg: '<rect x="1" y="1" width="22" height="16" rx="2" stroke-width="1.6"/>' },
  'descarga-obl': { label: 'Descarga Obligatoria', color: '#2e8a52', svg: '<polygon points="5,1 23,1 19,17 1,17" stroke-width="1.6"/>' },
  'descarga-opt': { label: 'Descarga Opcional',    color: '#d4882a', svg: '<rect x="1" y="1" width="22" height="16" rx="0" stroke-width="1.6"/><line x1="8" y1="1" x2="8" y2="17"/><line x1="16" y1="1" x2="16" y2="17"/>' },
  'automatico':   { label: 'Comprobante Automático', color: '#6a2a9a', svg: '<path d="M1,1 H23 V12 Q17,18 12,18 Q7,18 1,12 Z" stroke-width="1.6"/>' },
};

/* ---- Behavior icon definitions ---- */
const procIconos = {
  'validar-stock':  { emoji: '🔍', label: 'Valida Stock'          },
  'suma-stock':     { emoji: '📦', label: '+Suma Stock', prefix: '+' },
  'resta-stock':    { emoji: '📦', label: '−Resta Stock', prefix: '−' },
  'afecta-cont':    { emoji: '📋', label: 'Afecta Contabilidad'   },
  'liq-iva':        { emoji: '🔢', label: 'Liquida IVA'           },
  'liq-perc':       { emoji: '➕', label: 'Liquida Percepción'    },
  'electronico':    { emoji: '🌐', label: 'Electrónico'           },
  'valorizado':     { emoji: '💰', label: 'Valorizado'            },
  'autorizable':    { emoji: '🔒', label: 'Autorizable'           },
  'confeccion':     { emoji: '✅', label: 'Confección'            },
};

const procesos = {
  ventas: {
    label: 'Ventas',
    etapas: [
      {
        nombre: 'Pedido',
        tipo: 'manual',
        iconos: ['validar-stock'],
        params: [
          { label: 'Reserva stock',         val: false },
          { label: 'Asiento contable',       val: false },
          { label: 'Imprime automático',     val: false },
          { label: 'Requiere autorización',  val: false },
          { label: 'Actualiza costos',       val: false },
        ],
      },
      {
        nombre: 'Remito',
        tipo: 'descarga-obl',
        iconos: ['resta-stock', 'afecta-cont', 'valorizado'],
        params: [
          { label: 'Reserva stock',         val: true  },
          { label: 'Asiento contable',       val: true  },
          { label: 'Imprime automático',     val: false },
          { label: 'Requiere autorización',  val: false },
          { label: 'Actualiza costos',       val: false },
        ],
      },
      {
        nombre: 'Factura A/B',
        tipo: 'descarga-obl',
        iconos: ['resta-stock', 'afecta-cont', 'electronico', 'liq-iva'],
        params: [
          { label: 'Reserva stock',         val: false },
          { label: 'Asiento contable',       val: true  },
          { label: 'Imprime automático',     val: true  },
          { label: 'Requiere autorización',  val: false },
          { label: 'Actualiza costos',       val: false },
        ],
        alerta: 'Comprobante electrónico activo (AFIP)',
      },
      {
        nombre: 'Recibo',
        tipo: 'automatico',
        iconos: ['afecta-cont', 'valorizado'],
        params: [
          { label: 'Reserva stock',         val: false },
          { label: 'Asiento contable',       val: true  },
          { label: 'Imprime automático',     val: true  },
          { label: 'Requiere autorización',  val: false },
          { label: 'Actualiza costos',       val: false },
        ],
      },
    ],
  },
  compras: {
    label: 'Compras',
    etapas: [
      {
        nombre: 'Orden de Compra',
        tipo: 'manual',
        iconos: ['autorizable'],
        params: [
          { label: 'Reserva stock',         val: false },
          { label: 'Asiento contable',       val: false },
          { label: 'Imprime automático',     val: false },
          { label: 'Requiere autorización',  val: true  },
          { label: 'Actualiza costos',       val: false },
        ],
        alerta: 'Requiere autorización de gerencia',
      },
      {
        nombre: 'Recepción',
        tipo: 'descarga-opt',
        iconos: ['suma-stock', 'afecta-cont'],
        params: [
          { label: 'Reserva stock',         val: false },
          { label: 'Asiento contable',       val: true  },
          { label: 'Imprime automático',     val: false },
          { label: 'Requiere autorización',  val: false },
          { label: 'Actualiza costos',       val: true  },
        ],
      },
      {
        nombre: 'Factura Proveedor',
        tipo: 'manual',
        iconos: ['afecta-cont', 'liq-iva', 'liq-perc'],
        params: [
          { label: 'Reserva stock',         val: false },
          { label: 'Asiento contable',       val: true  },
          { label: 'Imprime automático',     val: false },
          { label: 'Requiere autorización',  val: false },
          { label: 'Actualiza costos',       val: true  },
        ],
      },
    ],
  },
};

const contable = {
  costos: {
    metodoActivo: 'ultima-compra',
    opciones: [
      { id: 'promedio',      label: 'Promedio Ponderado' },
      { id: 'ultima-compra', label: 'Última Compra'      },
      { id: 'fifo',          label: 'FIFO'               },
    ],
  },
  impositivo: [
    { id: 'retenciones',  label: 'Retenciones',          activo: true },
    { id: 'percepciones', label: 'Percepciones de IIBB', activo: true },
    { id: 'iva',          label: 'IVA',                  activo: true },
  ],
  integracion: {
    activa: true,
    desc: 'La contabilidad está totalmente integrada con el sistema de farmacia.',
  },
};

const usuarios = {
  responsable: { nombre: 'Ing. Pedro Pacheco', seed: 'PedroPacheco' },
  lista: [
    { nombre: 'Marta Gómez',     seed: 'MartaGomez'     },
    { nombre: 'Laura Rodríguez', seed: 'LauraRodriguez'  },
    { nombre: 'Marta Rodríguez', seed: 'MartaRodriguez2' },
    { nombre: 'Carlos Pérez',    seed: 'CarlosPerez'     },
    { nombre: 'Juan Martínez',   seed: 'JuanMartinez'    },
    { nombre: 'Sofía García',    seed: 'SofiaGarcia'     },
    { nombre: 'Liera García',    seed: 'LieraGarcia'     },
    { nombre: 'Carva Pérez',     seed: 'CarvaPerez'      },
    { nombre: 'Barrey Hanlen',   seed: 'BarreyHanlen'    },
    { nombre: 'Caroe Rodríguez', seed: 'CaroeRodriguez'  },
    { nombre: 'Juiría Solís',    seed: 'JuiriaSolis'     },
  ],
};

const especiales = [
  {
    categoria: 'Especiales del Cliente',
    tipo: 'normal',
    items: [
      { nombre: 'Perfiles de Descuento',       icono: 'cog'  },
      { nombre: 'Reglas de Compra Específicas', icono: 'cart' },
    ],
  },
  {
    categoria: 'Desarrollos Personalizados',
    tipo: 'normal',
    items: [
      { nombre: 'Módulo de Reportes Personalizados', icono: 'code'        },
      { nombre: 'Integración Pasarela Pagos Local',  icono: 'credit-card' },
    ],
  },
  {
    categoria: 'Descripción Funcional',
    tipo: 'normal',
    items: [
      { nombre: 'Lógica Perfiles Descuento',         icono: 'hierarchy' },
      { nombre: 'Resumen Funcional Módulo Reportes',  icono: 'book'      },
    ],
  },
  {
    categoria: 'Observaciones y Alertas',
    tipo: 'alertas',
    items: [
      { nombre: 'Alerta Flujo Pago No Estándar',     desc: 'Proceso de checkout difiere del estándar, requiere atención especial ...' },
      { nombre: 'Configuración Impuestos Sucursal 2', desc: 'Proceso de checkout difiere del estándar, requiere atención especial ...' },
    ],
  },
];

const integraciones = [
  {
    categoria: 'Fiscal / Legal',
    items: [
      { nombre: 'CAE', icono: 'file-text', bg: '#e8eef8', color: '#3a52a0' },
      { nombre: 'COT', icono: 'file-check', bg: '#e8f4ee', color: '#2e7a4a' },
    ],
  },
  {
    categoria: 'Venta Online',
    items: [
      { nombre: 'VTEX',          icono: 'cart', bg: '#ffe8ec', color: '#cc2244' },
      { nombre: 'Shopify',       icono: 'bag',  bg: '#e8f8e8', color: '#1a7a2a' },
      { nombre: 'Mercado Libre', icono: 'tag',  bg: '#fff4d0', color: '#b07800' },
    ],
  },
  {
    categoria: 'Interfaces Externas',
    items: [
      { nombre: 'Mensajería Unificada',           icono: 'message', bg: '#e0f0ff', color: '#1a6aaa' },
      { nombre: 'Sistemas Logísticos Integrados', icono: 'truck',   bg: '#f0ece0', color: '#7a5a20' },
    ],
  },
  {
    categoria: 'Inteligencia Artificial',
    items: [
      { nombre: 'Chatbot de Atención al Cliente', icono: 'bot',   bg: '#f0e8ff', color: '#6a2a9a' },
      { nombre: 'Análisis Predictivo de Stock',   icono: 'chart', bg: '#e8faf0', color: '#1a7a4a' },
    ],
  },
];

const apis = [
  { nombre: 'API Mercado Libre', estado: 'activa',   estadoTexto: 'Activa'   },
  { nombre: 'API WhatsApp',      estado: 'inactiva', estadoTexto: 'Inactiva' },
];

const programas = [
  {
    nombre: 'Replicador',
    desc: 'Sincronización de datos entre sucursales en tiempo real.',
  },
  {
    nombre: 'Fiscal',
    desc: 'Gestión de comprobantes fiscales y liquidaciones impositivas.',
  },
  {
    nombre: 'Ajuste Stock',
    desc: 'Corrección y actualización de existencias en inventario.',
  },
];

/* =====================
   TABS
   ===================== */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels  = document.querySelectorAll('.tab-panel');

const contentArea = document.querySelector('.content-area');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
    contentArea.classList.toggle('especiales-bg',   target === 'especiales');
    contentArea.classList.toggle('usuarios-active', target === 'usuarios');
    contentArea.classList.toggle('contable-active', target === 'contable');
  });
});

/* =====================
   EMPRESA SELECT
   ===================== */
const empresaSelect = document.getElementById('empresaSelect');

function getEmpresaNombre() {
  return empresaSelect.options[empresaSelect.selectedIndex].text;
}

/* =====================
   RENDER PROGRAMS
   ===================== */
function renderProgramas() {
  const empresa = getEmpresaNombre();
  const grid = document.getElementById('programGrid');

  grid.innerHTML = programas.map(p => `
    <div class="program-card">
      <div class="program-card-header">
        <span class="program-card-title">${p.nombre}</span>
        <button class="info-btn" title="Más información">ⓘ</button>
      </div>
      <p class="program-empresa">Empresa asociada: ${empresa}</p>
      <p class="program-desc-label">Desc.</p>
      <p class="program-desc">${p.desc}</p>
    </div>
  `).join('');
}

/* =====================
   RENDER APIS
   ===================== */
function renderApis() {
  const empresa = getEmpresaNombre();
  const tbody = document.getElementById('apiTableBody');

  tbody.innerHTML = apis.map(a => `
    <tr>
      <td><span class="status-dot ${a.estado}"></span></td>
      <td class="api-nombre">${a.nombre}</td>
      <td class="api-empresa">${empresa}</td>
      <td class="api-estado-texto">${a.estadoTexto}</td>
      <td><button class="info-btn" title="Más información">ⓘ</button></td>
    </tr>
  `).join('');
}

empresaSelect.addEventListener('change', () => {
  renderProgramas();
  renderApis();
});

/* =====================
   RENDER INTEGRATIONS
   ===================== */
function renderIntegraciones() {
  const grid = document.getElementById('integracionesGrid');

  grid.innerHTML = integraciones.map(grupo => `
    <div class="integracion-grupo">
      <p class="grupo-titulo">${grupo.categoria}</p>
      <div class="grupo-items">
        ${grupo.items.map(item => `
          <div class="integracion-item">
            <div class="item-icon-box" style="background:${item.bg}; color:${item.color}">
              ${iconos[item.icono]}
            </div>
            <span class="item-nombre">${item.nombre}</span>
            <button class="info-btn" title="Más información">ⓘ</button>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* =====================
   RENDER ESPECIALES
   ===================== */
function renderEspeciales() {
  const grid = document.getElementById('especialesGrid');
  const iconBg    = '#fdf0d0';
  const iconColor = '#8a6000';

  grid.innerHTML = especiales.map(grupo => {
    const itemsHtml = grupo.tipo === 'alertas'
      ? grupo.items.map(item => `
          <div class="alerta-item">
            <div class="alerta-item-header">
              <span class="alerta-warn-icon">${iconos['warn']}</span>
              <span class="alerta-nombre">${item.nombre}</span>
              <button class="info-btn" title="Más información">ⓘ</button>
            </div>
            <p class="alerta-desc">${item.desc}</p>
          </div>
        `).join('')
      : grupo.items.map(item => `
          <div class="especial-item">
            <div class="item-icon-box" style="background:${iconBg}; color:${iconColor}">
              ${iconos[item.icono]}
            </div>
            <span class="item-nombre">${item.nombre}</span>
            <button class="info-btn" title="Más información">ⓘ</button>
          </div>
        `).join('');

    return `
      <div class="especial-grupo">
        <p class="especial-grupo-titulo">${grupo.categoria}</p>
        <div class="especial-items">${itemsHtml}</div>
      </div>
    `;
  }).join('');
}

/* =====================
   RENDER USUARIOS
   ===================== */
function avatarUrl(seed) {
  return `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,ffd5dc,ffdfbf,d1d4f9`;
}

function renderUsuarios() {
  const total = 1 + usuarios.lista.length;
  document.getElementById('usuariosTotal').textContent = total;

  const grid = document.getElementById('usuariosGrid');

  const responsableHtml = `
    <div class="usuario-card responsable">
      <img class="usuario-avatar" src="${avatarUrl(usuarios.responsable.seed)}" alt="${usuarios.responsable.nombre}" />
      <div class="usuario-info">
        <span class="responsable-label">Responsable Principal</span>
        <span class="usuario-nombre">${usuarios.responsable.nombre}</span>
      </div>
      <button class="info-btn" title="Más información">ⓘ</button>
    </div>
  `;

  const listaHtml = usuarios.lista.map(u => `
    <div class="usuario-card">
      <img class="usuario-avatar" src="${avatarUrl(u.seed)}" alt="${u.nombre}" />
      <div class="usuario-info">
        <span class="usuario-nombre">${u.nombre}</span>
      </div>
      <button class="info-btn" title="Más información">ⓘ</button>
    </div>
  `).join('');

  grid.innerHTML = responsableHtml + listaHtml;
}

/* =====================
   RENDER CONTABLE
   ===================== */
function renderCostos() {
  document.getElementById('costosContainer').innerHTML = `
    <p class="contable-section-title">Métodos de Actualización<br>Actualización de Costos</p>
    ${contable.costos.opciones.map(op => {
      const sel = contable.costos.metodoActivo === op.id;
      return `
        <div class="costo-option${sel ? ' selected' : ''}" data-costo-id="${op.id}">
          <span class="vfp-radio">${sel ? '⊙&nbsp;(●)' : '○&nbsp;(&nbsp;)'}</span>
          <span class="costo-label">${op.label}</span>
          <button class="info-btn" title="Más información">ⓘ</button>
        </div>`;
    }).join('')}
  `;
}

function renderImpositivo() {
  document.getElementById('impositivoContainer').innerHTML = `
    <p class="contable-section-title">Cálculos Impositivos<br>Automáticos</p>
    ${contable.impositivo.map(item => `
      <div class="impositivo-row">
        <span class="imp-label">${item.label}</span>
        <button class="toggle-si${item.activo ? ' active' : ''}"
                data-imp-id="${item.id}" data-val="true">Sí</button>
        <button class="toggle-no${!item.activo ? ' active' : ''}"
                data-imp-id="${item.id}" data-val="false">[No]</button>
        <button class="info-btn" title="Más información">ⓘ</button>
      </div>
    `).join('')}
  `;
}

function renderContabilidadSection() {
  document.getElementById('contabilidadContainer').innerHTML = `
    <p class="contable-section-title">Integración Contable<br>con el Sistema</p>
    <div class="int-check-wrap">
      <svg viewBox="0 0 24 24" fill="none" stroke="#2e8a52" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
    <div class="int-box">
      <span class="int-box-icon">✅</span>
      <span class="int-box-text">Integración Contable Activa</span>
      <button class="info-btn" title="Más información">ⓘ</button>
    </div>
    <p class="int-desc">${contable.integracion.desc}</p>
  `;
}

function renderContable() {
  renderCostos();
  renderImpositivo();
  renderContabilidadSection();
}

/* Event delegation for Contable interactions */
document.getElementById('tab-contable').addEventListener('click', e => {
  if (e.target.classList.contains('info-btn')) return;

  const costoOpt = e.target.closest('.costo-option');
  if (costoOpt) {
    contable.costos.metodoActivo = costoOpt.dataset.costoId;
    renderCostos();
    return;
  }

  const toggleBtn = e.target.closest('[data-imp-id]');
  if (toggleBtn) {
    const item = contable.impositivo.find(i => i.id === toggleBtn.dataset.impId);
    if (item) {
      item.activo = toggleBtn.dataset.val === 'true';
      renderImpositivo();
    }
  }
});

/* =====================
   RENDER PROCESOS
   ===================== */
function renderProcesos(modId) {
  const mod = procesos[modId];
  const flow = document.getElementById('procesoFlow');

  flow.innerHTML = mod.etapas.map((etapa, i) => {
    const shape = tipoShapes[etapa.tipo];

    const tipoBadge = `
      <div class="proc-tipo-badge">
        <svg viewBox="0 0 24 18" fill="none" stroke="${shape.color}" stroke-linecap="round" stroke-linejoin="round">
          ${shape.svg}
        </svg>
        <span class="proc-tipo-label" style="color:${shape.color}">${shape.label}</span>
      </div>`;

    const iconosHtml = etapa.iconos.map(key => {
      const ic = procIconos[key];
      return `<span class="proc-icono-tag" title="${ic.label}">${ic.emoji} ${ic.label}</span>`;
    }).join('');

    const paramsHtml = etapa.params.map(p => `
      <div class="proc-param">
        <span class="proc-param-dot ${p.val ? 'activo' : 'inactivo'}"></span>
        <span class="proc-param-label">${p.label}</span>
        <span class="proc-param-val ${p.val ? 'activo' : 'inactivo'}">${p.val ? 'Sí' : 'No'}</span>
      </div>`).join('');

    const alertaHtml = etapa.alerta ? `
      <div class="proc-alerta">
        <svg class="proc-alerta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        ${etapa.alerta}
      </div>` : '';

    const arrowHtml = i < mod.etapas.length - 1 ? `
      <div class="proc-arrow">
        <svg viewBox="0 0 36 16" fill="none" stroke="#9ca3af" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <line x1="2" y1="8" x2="30" y2="8"/>
          <polyline points="23,2 30,8 23,14"/>
        </svg>
      </div>` : '';

    return `
      <div class="proc-step">
        <div class="proc-card tipo-${etapa.tipo}">
          <div class="proc-card-top">${tipoBadge}</div>
          <h3 class="proc-nombre">${etapa.nombre}</h3>
          <div class="proc-iconos">${iconosHtml}</div>
          <div class="proc-params">${paramsHtml}</div>
          ${alertaHtml}
        </div>
        ${arrowHtml}
      </div>`;
  }).join('');
}

/* Module button event delegation */
document.getElementById('procModNav').addEventListener('click', e => {
  const btn = e.target.closest('.proc-mod-btn');
  if (!btn) return;
  document.querySelectorAll('.proc-mod-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProcesos(btn.dataset.mod);
});

/* =====================
   INIT
   ===================== */
renderProgramas();
renderApis();
renderIntegraciones();
renderEspeciales();
renderUsuarios();
renderContable();
renderProcesos('ventas');
