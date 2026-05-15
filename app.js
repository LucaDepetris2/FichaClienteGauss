/* =====================
   DATA
   ===================== */
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
   INIT
   ===================== */
renderProgramas();
renderApis();
