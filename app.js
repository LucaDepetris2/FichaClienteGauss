/* =====================
   DATA
   ===================== */
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

empresaSelect.addEventListener('change', renderProgramas);

/* =====================
   INIT
   ===================== */
renderProgramas();
