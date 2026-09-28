// ==========================================================================
// APP.JS - DASHBOARD INTERAKTIF & IDE MARKDOWN PREVIEW
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTabs();
  initCharts();
  renderIdeMarkdown();
  renderDataTable();
  initSearch();
  initPrint();
});

// 1. THEME SWITCHER
function initTheme() {
  const themeBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('jii_theme') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.replace('dark-theme', 'light-theme');
    themeBtn.querySelector('.theme-icon').textContent = '☀️';
  }

  themeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.replace('dark-theme', 'light-theme');
      themeBtn.querySelector('.theme-icon').textContent = '☀️';
      localStorage.setItem('jii_theme', 'light');
    } else {
      document.body.classList.replace('light-theme', 'dark-theme');
      themeBtn.querySelector('.theme-icon').textContent = '🌙';
      localStorage.setItem('jii_theme', 'dark');
    }
    updateChartsTheme();
  });
}

// 2. TAB NAVIGATION
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) {
        targetPane.classList.add('active');
        // If switching to chart tab, resize charts
        if (targetTabId === 'tab-dashboard') {
          setTimeout(updateChartsTheme, 50);
        }
      }
    });
  });
}

// 3. EXACT IDE MARKDOWN RENDERER WITH SMOOTH ANCHOR NAVIGATION & KATEX
function renderIdeMarkdown() {
  const viewport = document.getElementById('ideMarkdownViewport');
  const container = document.getElementById('vscodeMarkdownContent');
  const tocList = document.getElementById('ideTocDynamicList');
  const toggleTocBtn = document.getElementById('toggleTocBtn');
  const tocSidebar = document.getElementById('ideTocSidebar');

  if (!container || typeof MARKDOWN_CONTENT === 'undefined') return;

  // Toggle TOC sidebar
  if (toggleTocBtn && tocSidebar) {
    toggleTocBtn.addEventListener('click', () => {
      tocSidebar.classList.toggle('collapsed');
    });
  }

  // Configure marked custom renderer to assign consistent IDs
  const renderer = new marked.Renderer();

  // Helper function to create clean slug matching markdown TOC links
  function createSlug(text) {
    return text
      .toLowerCase()
      .replace(/<[^>]+>/g, '') // remove HTML tags
      .replace(/[\$\(\)\,\.\:\/]/g, '') // remove math/punctuation
      .replace(/\s+/g, '-') // spaces to dashes
      .replace(/-+/g, '-') // multiple dashes to single
      .trim();
  }

  const headings = [];

  renderer.heading = function(headingData) {
    const text = headingData.text;
    const level = headingData.depth;
    
    let rawText = text.replace(/<[^>]+>/g, '');
    let slug = createSlug(rawText);

    // Map specific known heading slugs to exact TOC link targets
    if (slug.includes('1-ringkasan-eksekutif')) slug = '1-ringkasan-eksekutif--struktur-analisis';
    else if (slug.includes('opsi-data-agregat')) slug = '2-bagian-i-opsi-data-agregat-bulanan-portofolio-jii-n--36';
    else if (slug.includes('21-statistik-deskriptif')) slug = '21-statistik-deskriptif-agregat';
    else if (slug.includes('22-uji-asumsi-klasik')) slug = '22-uji-asumsi-klasik-agregat';
    else if (slug.includes('23-analisis-regresi')) slug = '23-analisis-regresi-linear-berganda-agregat';
    else if (slug.includes('24-pengujian-hipotesis')) slug = '24-pengujian-hipotesis-agregat';
    else if (slug.includes('25-pembahasan-hasil')) slug = '25-pembahasan-hasil-penelitian-agregat';
    else if (slug.includes('26-kesimpulan-dan-saran')) slug = '26-kesimpulan-dan-saran-bab-v-agregat';
    else if (slug.includes('opsi-data-panel-bulanan')) slug = '3-bagian-ii-opsi-data-panel-bulanan-16-emiten-n--576';
    else if (slug.includes('31-statistik-deskriptif')) slug = '31-statistik-deskriptif-panel';
    else if (slug.includes('32-regresi-pooled-ols')) slug = '32-regresi-pooled-ols-vs-fixed-effects-model-fem';
    else if (slug.includes('33-pembahasan-hasil')) slug = '33-pembahasan-hasil-penelitian-panel';
    else if (slug.includes('34-kesimpulan-dan-saran')) slug = '34-kesimpulan-dan-saran-bab-v-panel';
    else if (slug.includes('panduan-memilih')) slug = '4-bagian-iii-panduan-memilih--menghadapi-dosen-pembimbingpenguji';

    headings.push({ level, text: rawText, slug });

    return `<h${level} id="${slug}">${text}</h${level}>\n`;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    breaks: false
  });

  // Render markdown HTML
  container.innerHTML = marked.parse(MARKDOWN_CONTENT);

  // Render KaTeX for math formulas: $X_1$, $R^2$, etc.
  if (typeof renderMathInElement !== 'undefined') {
    renderMathInElement(container, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }

  // Populate Sidebar Quick TOC
  if (tocList) {
    tocList.innerHTML = '';
    headings.forEach(h => {
      if (h.level <= 3) {
        const li = document.createElement('li');
        if (h.level === 3) li.className = 'toc-sub';
        li.innerHTML = `<a href="#${h.slug}" title="${h.text}">${h.text}</a>`;
        tocList.appendChild(li);
      }
    });
  }

  // Attach smooth scrolling to all anchor links inside markdown and sidebar
  const allAnchorLinks = document.querySelectorAll('.vscode-markdown-content a[href^="#"], .ide-toc-list a[href^="#"]');
  allAnchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl && viewport) {
          e.preventDefault();
          // Scroll inside viewport smoothly
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Highlight target briefly
          targetEl.style.transition = 'background-color 0.4s ease';
          targetEl.style.backgroundColor = 'rgba(55, 148, 255, 0.2)';
          setTimeout(() => {
            targetEl.style.backgroundColor = 'transparent';
          }, 1200);
        }
      }
    });
  });
}

// 4. CHARTS INITIALIZATION (CHART.JS)
let stockKursChartInstance = null;
let macroChartInstance = null;

function initCharts() {
  if (typeof AGREGAT_DATA === 'undefined' || !AGREGAT_DATA.length) return;

  const labels = AGREGAT_DATA.map(d => d.periode);
  const stockPrices = AGREGAT_DATA.map(d => d.rata_rata_harga_saham);
  const exchangeRates = AGREGAT_DATA.map(d => d.nilai_tukar);
  const biRates = AGREGAT_DATA.map(d => d.bi_rate);
  const inflations = AGREGAT_DATA.map(d => d.inflasi);

  const isLight = document.body.classList.contains('light-theme');
  const textColor = isLight ? '#475569' : '#9ca3af';
  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';

  // Chart 1: Stock Price vs USD/IDR (Dual Axis)
  const ctx1 = document.getElementById('stockKursChart');
  if (ctx1) {
    stockKursChartInstance = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Rata-rata Saham JII (Rp)',
            data: stockPrices,
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 2.5,
            tension: 0.3,
            fill: true,
            yAxisID: 'yStock',
            pointRadius: 3,
            pointHoverRadius: 6
          },
          {
            label: 'Kurs USD/IDR (Rp)',
            data: exchangeRates,
            borderColor: '#06b6d4',
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            borderDash: [5, 4],
            tension: 0.3,
            yAxisID: 'yKurs',
            pointRadius: 2,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'top',
            labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 12 } }
          },
          tooltip: {
            backgroundColor: 'rgba(17, 24, 39, 0.95)',
            titleColor: '#fff',
            bodyColor: '#e5e7eb',
            borderColor: '#374151',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            ticks: { color: textColor, maxRotation: 45 },
            grid: { color: gridColor }
          },
          yStock: {
            type: 'linear',
            position: 'left',
            title: { display: true, text: 'Harga Saham (Rp)', color: '#10b981' },
            ticks: { color: textColor },
            grid: { color: gridColor }
          },
          yKurs: {
            type: 'linear',
            position: 'right',
            title: { display: true, text: 'Kurs USD/IDR (Rp)', color: '#06b6d4' },
            ticks: { color: textColor },
            grid: { drawOnChartArea: false }
          }
        }
      }
    });
  }

  // Chart 2: BI-Rate vs Inflation
  const ctx2 = document.getElementById('macroChart');
  if (ctx2) {
    macroChartInstance = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'BI-Rate (%)',
            data: biRates,
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            borderWidth: 2,
            tension: 0.2,
            pointRadius: 2
          },
          {
            label: 'Inflasi YoY (%)',
            data: inflations,
            borderColor: '#ef4444',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.2,
            pointRadius: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: {
            position: 'top',
            labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } }
          }
        },
        scales: {
          x: {
            ticks: { color: textColor, maxTicksLimit: 12 },
            grid: { color: gridColor }
          },
          y: {
            ticks: { color: textColor },
            grid: { color: gridColor },
            title: { display: true, text: 'Persen (%)', color: textColor }
          }
        }
      }
    });
  }
}

function updateChartsTheme() {
  if (stockKursChartInstance) stockKursChartInstance.destroy();
  if (macroChartInstance) macroChartInstance.destroy();
  initCharts();
}

// 5. RENDER RAW DATA TABLE
function renderDataTable(filteredData) {
  const tbody = document.getElementById('dataTableBody');
  if (!tbody || typeof AGREGAT_DATA === 'undefined') return;

  const dataToRender = filteredData || AGREGAT_DATA;
  tbody.innerHTML = '';

  dataToRender.forEach((row, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><strong>${row.periode}</strong></td>
      <td>Rp ${formatNumber(row.rata_rata_harga_saham)}</td>
      <td>Rp ${formatNumber(row.nilai_tukar)}</td>
      <td>${row.bi_rate.toFixed(2).replace('.', ',')}%</td>
      <td>${row.inflasi.toFixed(2).replace('.', ',')}%</td>
    `;
    tbody.appendChild(tr);
  });
}

function formatNumber(num) {
  return Number(num).toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// 6. SEARCH / FILTER ON RAW DATA TABLE
function initSearch() {
  const input = document.getElementById('tableSearchInput');
  if (!input || typeof AGREGAT_DATA === 'undefined') return;

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      renderDataTable(AGREGAT_DATA);
      return;
    }
    const filtered = AGREGAT_DATA.filter(row => {
      return (
        row.periode.toLowerCase().includes(q) ||
        String(row.tahun).includes(q) ||
        String(row.nilai_tukar).includes(q)
      );
    });
    renderDataTable(filtered);
  });
}

// 7. COPY UTILITIES
window.copyEquation = function() {
  const eq = "Y = 11.600,00 - 0,3477 (X1) - 205,1123 (X2) + 69,6470 (X3)";
  navigator.clipboard.writeText(eq).then(() => {
    showToast("Persamaan regresi berhasil disalin!");
  });
};

window.copyFullMarkdown = function() {
  if (typeof MARKDOWN_CONTENT !== 'undefined') {
    navigator.clipboard.writeText(MARKDOWN_CONTENT).then(() => {
      showToast("Seluruh naskah Markdown berhasil disalin!");
    });
  }
};

function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// 8. PRINT / PDF EXPORT
function initPrint() {
  const btn = document.getElementById('printBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      window.print();
    });
  }
}
