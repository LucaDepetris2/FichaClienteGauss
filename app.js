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
};

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

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
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
   INIT
   ===================== */
renderProgramas();
renderApis();
renderIntegraciones();
