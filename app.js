// Default Mock Datasets
const defaultDatasets = [
  { id: 'dataset-1', name: 'E-commerce Sales.csv', schema: 'sales', format: 'CSV Text', size: '1.4 KB', rows: '7 Rows', useCase: 'Sales Trends & Product Margins', data: 'sales' },
  { id: 'dataset-2', name: 'Zomato Analysis.csv', schema: 'restaurants', format: 'CSV Text', size: '0.8 KB', rows: '5 Rows', useCase: 'Food Rating & Delivery Times', data: 'restaurants' },
  { id: 'dataset-3', name: 'User Retention.csv', schema: 'retention', format: 'CSV Text', size: '0.6 KB', rows: '5 Rows', useCase: 'User Cohorts & Activity Logs', data: 'retention' },
  { id: 'dataset-4', name: 'Tech Salaries 2026.csv', schema: 'salaries', format: 'CSV Text', size: '0.5 KB', rows: '4 Rows', useCase: 'BI Developer & Data Analyst Comp', data: 'salaries' }
];

// Default Mock Submissions
const defaultSubmissions = [
  { id: 'sub-1', name: 'Amit Sharma', project: 'Zomato Rating Analysis', repo: 'https://github.com/amit/zomato-analysis', desc: 'Analyzed food ratings vs delivery delays.', date: '2026-06-24 10:15', status: 'Approved' },
  { id: 'sub-2', name: 'Zoe Martinez', project: 'E-commerce Cohort Retention', repo: 'https://github.com/zoe/ecom-retention', desc: 'Cohort retention analysis using Python.', date: '2026-06-24 11:30', status: 'Under Review' },
  { id: 'sub-3', name: 'Afzal Ehsan', project: 'DataLabs Pro Landing Page', repo: 'https://github.com/afzalehsan/datalabs-pro', desc: 'Interactive learning sandbox portal UI.', date: '2026-06-24 12:00', status: 'Approved' }
];

// Mock SQL Relational Database Schemas
const mockDB = {
  sales: [
    { sale_id: 101, product: 'MacBook Air', category: 'Electronics', revenue: 999, units_sold: 1, order_date: '2026-06-01' },
    { sale_id: 102, product: 'iPhone 15 Pro', category: 'Electronics', revenue: 1998, units_sold: 2, order_date: '2026-06-02' },
    { sale_id: 103, product: 'Ergonomic Chair', category: 'Office Supplies', revenue: 249, units_sold: 1, order_date: '2026-06-03' },
    { sale_id: 104, product: 'Wireless Mouse', category: 'Electronics', revenue: 150, units_sold: 3, order_date: '2026-06-04' },
    { sale_id: 105, product: 'Standing Desk', category: 'Office Supplies', revenue: 450, units_sold: 1, order_date: '2026-06-05' },
    { sale_id: 106, product: 'Coffee Maker', category: 'Home Appliances', revenue: 120, units_sold: 1, order_date: '2026-06-06' },
    { sale_id: 107, product: 'Smart Watch', category: 'Electronics', revenue: 299, units_sold: 1, order_date: '2026-06-07' }
  ],
  customers: [
    { customer_id: 1, name: 'John Doe', city: 'New York', sign_up_date: '2026-01-15', total_spent: 1250 },
    { customer_id: 2, name: 'Alice Smith', city: 'San Francisco', sign_up_date: '2026-02-20', total_spent: 2450 },
    { customer_id: 3, name: 'Bob Johnson', city: 'Chicago', sign_up_date: '2026-03-05', total_spent: 450 },
    { customer_id: 4, name: 'Emma Watson', city: 'London', sign_up_date: '2026-04-10', total_spent: 3100 },
    { customer_id: 5, name: 'David Lee', city: 'Toronto', sign_up_date: '2026-05-18', total_spent: 890 }
  ],
  restaurants: [
    { restaurant_id: 1, name: 'Pizza Palace', cuisine: 'Italian', rating: 4.6, avg_cost_for_two: 40, delivery_time_mins: 25 },
    { restaurant_id: 2, name: 'Spicy Tadka', cuisine: 'Indian', rating: 4.8, avg_cost_for_two: 30, delivery_time_mins: 35 },
    { restaurant_id: 3, name: 'Sushi Zen', cuisine: 'Japanese', rating: 4.7, avg_cost_for_two: 60, delivery_time_mins: 20 },
    { restaurant_id: 4, name: 'Burger Bistro', cuisine: 'American', rating: 4.2, avg_cost_for_two: 25, delivery_time_mins: 15 },
    { restaurant_id: 5, name: 'Taco Express', cuisine: 'Mexican', rating: 4.4, avg_cost_for_two: 20, delivery_time_mins: 30 }
  ]
};

// Simulated activities for automated toasts
const mockActivities = [
  "Suresh just solved LeetCode Top 50 SQL Challenge #14!",
  "Fatima just downloaded Zomato Analysis dataset.",
  "Liam just submitted E-commerce RFM Dashboard.",
  "Afzal Ehsan updated SQL Sandbox schema.",
  "Priya just completed Accenture Data Virtual Internship Module 1.",
  "Raj just downloaded User Retention.csv.",
  "Chen just registered a new project submission: BI Salaries Analytics."
];

// Mock AI Audit Responses
const mockAIFeedback = [
  {
    cleaning: 94, visual: 88, sql: 91,
    comment: "Excellent indexing patterns detected. The queries utilize index-seek mechanisms. Data cleaning scripts handle null inputs correctly. Recommendation: Add a primary key constraint to the customer table to speed up joins."
  },
  {
    cleaning: 88, visual: 94, sql: 85,
    comment: "Outstanding visualization structure with interactive cross-filters. The SQL queries use nested sub-queries which could be optimized using Common Table Expressions (CTEs) for better readability and 12% faster execution."
  },
  {
    cleaning: 95, visual: 85, sql: 96,
    comment: "Perfect query execution plans with minimal table scans. Robust data transformation schemas. Recommendation: Expand visualization dimensions to include dynamic categorical binning."
  }
];

// Global Chart References
let dashboardChart = null;
let adminChart = null;

// DOMContentLoaded Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Setup data local storage fallback
  initLocalStorage();

  // Initialize Toast Container
  initToastContainer();

  // Initialize Resource Filter
  initResourceFilter();

  // Initialize Dashboard Charts
  initDashboardCharts('ecommerce');

  // Bind SQL Playground triggers
  initSQLPlayground();

  // Bind Submission Portal
  initSubmissionPortal();

  // Bind Mock Auth Modals & Gamified Profile
  initAuthAndProfile();

  // Bind Admin Dashboard Switcher
  initAdminDashboard();

  // Start Live Activity Notifications Loop
  initActivityToasts();

  // Bind AI Code Auditor Sandbox
  initAIAuditor();

  // Bind Capstone Locked Modals
  initPremiumModal();

  // Bind Admin Project Preview Modal
  initProjectPreviewModal();

  // Render lists & grids
  renderSubmissions();
  renderDatasets();
});

/* LOCAL STORAGE INITIALIZER */
function initLocalStorage() {
  if (!localStorage.getItem('datasets')) {
    localStorage.setItem('datasets', JSON.stringify(defaultDatasets));
  }
  if (!localStorage.getItem('submissions')) {
    localStorage.setItem('submissions', JSON.stringify(defaultSubmissions));
  }
}

/* TOAST SYSTEM */
function initToastContainer() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-24 right-5 z-50 flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `glass-panel toast-animate flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl border pointer-events-auto min-w-[280px] max-w-sm`;
  
  let iconColor = 'text-cyanaccent';
  let borderStyle = 'border-cyanaccent/30';
  let svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`;

  if (type === 'success') {
    iconColor = 'text-emeraldaccent';
    borderStyle = 'border-emeraldaccent/30';
    svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`;
  } else if (type === 'error') {
    iconColor = 'text-red-400';
    borderStyle = 'border-red-500/30';
    svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>`;
  }

  toast.innerHTML = `
    <div class="${iconColor}">${svgIcon}</div>
    <div class="flex-1 text-xs sm:text-sm text-gray-200 font-medium">${message}</div>
    <button class="text-gray-400 hover:text-white transition-colors" onclick="this.parentElement.remove()">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  `;
  toast.classList.add(borderStyle);

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

/* LOOPING ACTIVITY TOASTS */
function initActivityToasts() {
  setInterval(() => {
    const isAdmin = document.getElementById('admin-mode-toggle').checked;
    if (!isAdmin) {
      const idx = Math.floor(Math.random() * mockActivities.length);
      showToast(mockActivities[idx], 'info');
    }
  }, 15000);
}

/* BOTTOM NOTCH DOCK NAVIGATION */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const iconPath = document.getElementById('hamburger-icon-path');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
        if (iconPath) {
          iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        if (iconPath) {
          iconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        if (iconPath) {
          iconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
      });
    });
  }
}

/* RESOURCE HUB FILTERING */
function initResourceFilter() {
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.resource-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-gradient-to-r', 'from-cyanaccent', 'to-indigoaccent', 'text-white', 'shadow-lg', 'shadow-indigoaccent/20');
        b.classList.add('text-gray-400', 'hover:text-white', 'hover:bg-white/5');
      });

      btn.classList.remove('text-gray-400', 'hover:text-white', 'hover:bg-white/5');
      btn.classList.add('bg-gradient-to-r', 'from-cyanaccent', 'to-indigoaccent', 'text-white', 'shadow-lg', 'shadow-indigoaccent/20');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        card.classList.remove('animate-fade-in');
        card.style.opacity = '0';
        
        setTimeout(() => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
            card.classList.add('animate-fade-in');
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
          }
        }, 150);
      });
    });
  });
}

/* INTERACTIVE SQL PLAYGROUND ENGINE */
function initSQLPlayground() {
  const runBtn = document.getElementById('sql-run-btn');
  const querySelect = document.getElementById('sql-preset-select');
  const textarea = document.getElementById('sql-editor');
  const outputArea = document.getElementById('sql-output-area');
  const terminalBorder = document.getElementById('sql-editor-container');

  if (!runBtn || !textarea || !outputArea) return;

  querySelect.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'preset1') {
      textarea.value = 'SELECT sale_id, product, category, revenue FROM sales WHERE category = \'Electronics\';';
    } else if (selectedValue === 'preset2') {
      textarea.value = 'SELECT name, city, total_spent FROM customers WHERE total_spent > 1000 ORDER BY total_spent DESC;';
    } else if (selectedValue === 'preset3') {
      textarea.value = 'SELECT name, cuisine, rating, avg_cost_for_two FROM restaurants WHERE rating >= 4.6;';
    } else if (selectedValue === 'preset4') {
      textarea.value = 'SELECT * FROM sales;';
    }
  });

  runBtn.addEventListener('click', () => {
    const rawQuery = textarea.value.trim();
    if (!rawQuery) {
      showToast('Please type an SQL query to execute!', 'error');
      return;
    }

    terminalBorder.classList.add('code-active-border');
    outputArea.innerHTML = `
      <div class="flex items-center justify-center py-10 gap-2">
        <svg class="animate-spin h-5 w-5 text-cyanaccent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-sm text-gray-400">Executing SQL Statement on local sandbox DB...</span>
      </div>
    `;

    setTimeout(() => {
      terminalBorder.classList.remove('code-active-border');
      try {
        const parsedResult = executeMockSQL(rawQuery);
        renderSQLOutput(parsedResult, outputArea);
        showToast('Query compiled and executed successfully!', 'success');
      } catch (err) {
        outputArea.innerHTML = `
          <div class="p-4 border border-red-500/20 bg-red-950/20 rounded-lg text-sm">
            <div class="flex items-center gap-2 text-red-400 font-semibold mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              SQL Execution Error
            </div>
            <p class="text-gray-300 font-mono text-xs">${err.message}</p>
          </div>
        `;
        showToast('SQL Execution failed. Check syntax error.', 'error');
      }
    }, 800);
  });
}

function executeMockSQL(query) {
  const clean = query.replace(/\s+/g, ' ').replace(/;$/, '').trim();
  const lower = clean.toLowerCase();

  if (!lower.startsWith('select')) {
    throw new Error('DataLabs Sandbox only supports SELECT queries. Other DML/DDL commands (INSERT, UPDATE, DELETE) are disabled.');
  }

  let tableName = '';
  if (lower.includes('from sales')) tableName = 'sales';
  else if (lower.includes('from customers')) tableName = 'customers';
  else if (lower.includes('from restaurants')) tableName = 'restaurants';
  else {
    throw new Error('Table not found. Available tables in sandbox schema: [sales], [customers], [restaurants]');
  }

  const database = mockDB[tableName];
  let results = [...database];

  if (lower.includes('where')) {
    const whereClause = clean.substring(lower.indexOf('where') + 6);
    const orderIndex = whereClause.toLowerCase().indexOf('order by');
    const filterExpr = orderIndex !== -1 ? whereClause.substring(0, orderIndex).trim() : whereClause.trim();

    results = applyWhereFilter(results, filterExpr);
  }

  if (lower.includes('order by')) {
    const orderClause = clean.substring(lower.indexOf('order by') + 9).trim();
    results = applyOrderBy(results, orderClause);
  }

  const selectCols = clean.substring(6, lower.indexOf('from')).split(',').map(s => s.trim());
  if (selectCols.length === 1 && selectCols[0] === '*') {
    return { columns: Object.keys(database[0]), data: results };
  } else {
    const validCols = Object.keys(database[0]);
    selectCols.forEach(col => {
      if (!validCols.includes(col)) {
        throw new Error(`Column '${col}' does not exist on table '${tableName}'. Valid columns are: [${validCols.join(', ')}]`);
      }
    });
    const parsedData = results.map(row => {
      const obj = {};
      selectCols.forEach(col => { obj[col] = row[col]; });
      return obj;
    });
    return { columns: selectCols, data: parsedData };
  }
}

function applyWhereFilter(data, filterString) {
  const operators = ['>=', '<=', '>', '<', '='];
  let operator = '';
  for (let op of operators) {
    if (filterString.includes(op)) {
      operator = op;
      break;
    }
  }

  if (!operator) return data;

  const parts = filterString.split(operator).map(s => s.trim());
  const col = parts[0];
  let val = parts[1].replace(/['"]/g, '');

  return data.filter(row => {
    const rowVal = row[col];
    if (rowVal === undefined) return false;

    const numVal = parseFloat(val);
    const isNum = !isNaN(numVal) && !isNaN(rowVal);

    const compareA = isNum ? parseFloat(rowVal) : String(rowVal).toLowerCase();
    const compareB = isNum ? numVal : val.toLowerCase();

    if (operator === '=') return compareA == compareB;
    if (operator === '>') return compareA > compareB;
    if (operator === '<') return compareA < compareB;
    if (operator === '>=') return compareA >= compareB;
    if (operator === '<=') return compareA <= compareB;

    return false;
  });
}

function applyOrderBy(data, orderExpr) {
  const parts = orderExpr.split(/\s+/);
  const col = parts[0];
  const direction = parts[1] && parts[1].toLowerCase() === 'desc' ? 'desc' : 'asc';

  return data.sort((a, b) => {
    let valA = a[col];
    let valB = b[col];
    if (valA === undefined || valB === undefined) return 0;

    const numA = parseFloat(valA);
    const numB = parseFloat(valB);
    const isNum = !isNaN(numA) && !isNaN(numB);

    if (isNum) {
      return direction === 'desc' ? numB - numA : numA - numB;
    } else {
      valA = String(valA).toLowerCase();
      valB = String(valB).toLowerCase();
      if (valA < valB) return direction === 'desc' ? 1 : -1;
      if (valA > valB) return direction === 'desc' ? -1 : 1;
      return 0;
    }
  });
}

function renderSQLOutput(result, container) {
  if (result.data.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto opacity-50 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7m-16 0c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3M4 7c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3M12 11v8" />
        </svg>
        <span class="text-sm font-semibold">Query OK, but returned 0 rows.</span>
      </div>
    `;
    return;
  }

  let tableHtml = `
    <div class="overflow-x-auto w-full sql-table-container">
      <table class="min-w-full divide-y divide-gray-800 text-left">
        <thead class="bg-gray-900/60">
          <tr>
  `;

  result.columns.forEach(col => {
    tableHtml += `<th>${col}</th>`;
  });

  tableHtml += `
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800/40">
  `;

  result.data.forEach(row => {
    tableHtml += `<tr>`;
    result.columns.forEach(col => {
      const displayVal = row[col] !== null && typeof row[col] === 'object' ? JSON.stringify(row[col]) : row[col];
      tableHtml += `<td>${displayVal}</td>`;
    });
    tableHtml += `</tr>`;
  });

  tableHtml += `
        </tbody>
      </table>
    </div>
    <div class="mt-3 px-4 flex items-center justify-between text-xs text-cyanaccent font-semibold">
      <span>Rows count: ${result.data.length}</span>
      <span>Engine: Local Sandbox SQLite v3 (WASM Mock)</span>
    </div>
  `;

  container.innerHTML = tableHtml;
}

/* INTERACTIVE ANALYTICS VISUALIZATION (CHART.JS) */
function initDashboardCharts(type) {
  const ctx = document.getElementById('analyticsChart');
  if (!ctx) return;

  const datasetBtns = document.querySelectorAll('.dataset-btn');
  datasetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      datasetBtns.forEach(b => {
        b.classList.remove('bg-cyanaccent/20', 'text-cyanaccent', 'border-cyanaccent/50');
        b.classList.add('bg-white/5', 'text-gray-400', 'border-transparent');
      });
      btn.classList.remove('bg-white/5', 'text-gray-400', 'border-transparent');
      btn.classList.add('bg-cyanaccent/20', 'text-cyanaccent', 'border-cyanaccent/50');

      const dsType = btn.getAttribute('data-dataset');
      updateDashboardData(dsType);
    });
  });

  const chartConfigs = {
    ecommerce: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'E-commerce Revenue ($K)',
          data: [12, 19, 15, 25, 22, 30],
          borderColor: '#06B6D4',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Marketing Spend ($K)',
          data: [5, 6, 8, 12, 10, 14],
          borderColor: '#6366F1',
          backgroundColor: 'rgba(99, 102, 241, 0.05)',
          fill: true,
          tension: 0.4
        }
      ]
    },
    zomato: {
      labels: ['Biryani', 'Pizza', 'Burgers', 'North Indian', 'Desserts', 'Beverages'],
      datasets: [
        {
          label: 'Orders Count (Hundreds)',
          data: [45, 32, 28, 50, 18, 22],
          backgroundColor: [
            'rgba(239, 68, 68, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(6, 182, 212, 0.7)',
            'rgba(99, 102, 241, 0.7)',
            'rgba(168, 85, 247, 0.7)'
          ],
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1
        }
      ]
    }
  };

  if (dashboardChart) {
    dashboardChart.destroy();
  }

  const isBar = type === 'zomato';
  dashboardChart = new Chart(ctx, {
    type: isBar ? 'bar' : 'line',
    data: chartConfigs[type] || chartConfigs['ecommerce'],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#9CA3AF',
            font: { family: 'Outfit' }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#9CA3AF', font: { family: 'Inter' } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#9CA3AF', font: { family: 'Inter' } }
        }
      }
    }
  });

  updateSummaryMetrics(type);
}

function updateDashboardData(dsType) {
  initDashboardCharts(dsType);
  showToast(`Dashboard visualization updated to: ${dsType === 'ecommerce' ? 'E-commerce Sales' : 'Zomato Analysis'}`, 'success');
}

function updateSummaryMetrics(type) {
  const metric1 = document.getElementById('metric-label-1');
  const val1 = document.getElementById('metric-val-1');
  const trend1 = document.getElementById('metric-trend-1');

  const metric2 = document.getElementById('metric-label-2');
  const val2 = document.getElementById('metric-val-2');
  const trend2 = document.getElementById('metric-trend-2');

  if (!metric1 || !metric2) return;

  if (type === 'ecommerce') {
    metric1.innerText = 'Total Revenue';
    val1.innerText = '$123,000';
    trend1.innerHTML = `<span class="text-emeraldaccent">↑ 18.2%</span> vs last month`;

    metric2.innerText = 'Avg. Order Value';
    val2.innerText = '$84.50';
    trend2.innerHTML = `<span class="text-emeraldaccent">↑ 4.3%</span> vs last month`;
  } else {
    metric1.innerText = 'Total Orders';
    val1.innerText = '19,500';
    trend1.innerHTML = `<span class="text-emeraldaccent">↑ 12.8%</span> vs weekend avg`;

    metric2.innerText = 'Avg. Prep Time';
    val2.innerText = '24.2 mins';
    trend2.innerHTML = `<span class="text-red-400">↓ 2.1 mins</span> improvement`;
  }
}

/* DATASET REPOSITORY DOWNLOADS */
function triggerDatasetDownload(fileName) {
  let fileContent = '';
  
  if (fileName.includes('E-commerce')) {
    fileContent = `SaleID,Product,Category,Revenue,UnitsSold,Date,Country\n101,MacBook Air,Electronics,999,1,2026-06-01,USA\n102,iPhone 15 Pro,Electronics,1998,2,2026-06-02,UK\n103,Ergonomic Chair,Office Supplies,249,1,2026-06-03,Canada`;
  } else if (fileName.includes('Zomato')) {
    fileContent = `RestaurantID,Name,Cuisine,Rating,CostForTwo,DeliveryTimeMins,City\n1,Pizza Palace,Italian,4.6,40,25,New Delhi\n2,Spicy Tadka,Indian,4.8,30,35,Mumbai`;
  } else if (fileName.includes('User')) {
    fileContent = `UserID,CohortMonth,MonthsActive,TotalLogs,ReturnedInMonth6\n1001,2026-01,5,45,True\n1002,2026-01,2,12,False`;
  } else {
    fileContent = `Rank,Title,ExperienceLevel,SalaryUSD,CompanySize\n1,Data Scientist,Senior,165000,Large\n2,Data Analyst,Mid,95000,Medium`;
  }

  const blob = new Blob([fileContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(`Initiating download: ${fileName}`, 'success');
}

/* DYNAMIC DATA RENDERING (FROM LOCAL STORAGE) */
function renderSubmissions() {
  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
  
  const studentTableBody = document.getElementById('student-submissions-tbody');
  if (studentTableBody) {
    if (submissions.length === 0) {
      studentTableBody.innerHTML = `<tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">No submissions found. Submit your project below!</td></tr>`;
    } else {
      studentTableBody.innerHTML = submissions.map(sub => {
        let badgeClass = 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20';
        if (sub.status === 'Approved') badgeClass = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
        else if (sub.status === 'Rejected') badgeClass = 'bg-red-500/10 text-red-400 border-red-500/20';

        return `
          <tr>
            <td class="px-6 py-4">
              <span class="font-semibold text-white block text-sm">${sub.name}</span>
              <span class="text-[10px] text-gray-500">${sub.date}</span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-300">${sub.project}</td>
            <td class="px-6 py-4 text-sm">
              <a href="${sub.repo}" target="_blank" class="text-cyanaccent hover:underline flex items-center gap-1">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub Link
              </a>
            </td>
            <td class="px-6 py-4 text-right">
              <span class="px-2.5 py-1 rounded text-xs font-bold border ${badgeClass}">${sub.status}</span>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  const adminTableBody = document.getElementById('admin-submissions-tbody');
  if (adminTableBody) {
    if (submissions.length === 0) {
      adminTableBody.innerHTML = `<tr><td colspan="5" class="px-6 py-4 text-center text-gray-500">No submissions to manage.</td></tr>`;
    } else {
      adminTableBody.innerHTML = submissions.map(sub => {
        let badgeClass = 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20';
        if (sub.status === 'Approved') badgeClass = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
        else if (sub.status === 'Rejected') badgeClass = 'bg-red-500/10 text-red-400 border-red-500/20';

        return `
          <tr>
            <td class="px-6 py-4 text-sm font-semibold text-white">${sub.name}</td>
            <td class="px-6 py-4 text-sm text-gray-300">${sub.project}</td>
            <td class="px-6 py-4 text-xs text-gray-400 font-mono">${sub.date}</td>
            <td class="px-6 py-4 text-sm">
              <span class="px-2 py-0.5 rounded text-xs font-bold border ${badgeClass}" id="admin-badge-${sub.id}">${sub.status}</span>
            </td>
            <td class="px-6 py-4 text-right flex items-center justify-end gap-1.5 sm:gap-2 shrink-0 font-display">
              <button onclick="previewProjectSubmission('${sub.id}')" class="p-1.5 sm:px-2.5 sm:py-1 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded text-xs font-bold transition-all border border-white/5 flex items-center gap-1" title="Preview Project">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-cyanaccent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span class="hidden md:inline">Preview</span>
              </button>
              <button onclick="updateSubmissionStatus('${sub.id}', 'Approved')" class="p-1.5 sm:px-2.5 sm:py-1 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 rounded text-xs font-bold transition-all border border-emerald-500/20 flex items-center gap-1" title="Approve Project">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span class="hidden md:inline">Approve</span>
              </button>
              <button onclick="updateSubmissionStatus('${sub.id}', 'Rejected')" class="p-1.5 sm:px-2.5 sm:py-1 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded text-xs font-bold transition-all border border-red-500/20 flex items-center gap-1" title="Reject Project">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span class="hidden md:inline">Reject</span>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  const pendingCount = submissions.filter(s => s.status === 'Under Review').length;
  const adminPendingCountEl = document.getElementById('admin-pending-approvals');
  if (adminPendingCountEl) {
    adminPendingCountEl.innerText = pendingCount;
  }
}

window.updateSubmissionStatus = function(subId, newStatus) {
  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
  const idx = submissions.findIndex(s => s.id === subId);
  if (idx !== -1) {
    submissions[idx].status = newStatus;
    localStorage.setItem('submissions', JSON.stringify(submissions));
    renderSubmissions();
    showToast(`Submission by ${submissions[idx].name} has been ${newStatus}!`, 'success');
  }
};

function renderDatasets() {
  const datasets = JSON.parse(localStorage.getItem('datasets')) || [];
  const datasetTbody = document.getElementById('datasets-tbody');
  
  if (datasetTbody) {
    datasetTbody.innerHTML = datasets.map(ds => {
      return `
        <tr>
          <td class="px-6 py-4 flex items-center gap-3">
            <div class="w-8 h-8 rounded bg-cyanaccent/15 flex items-center justify-center text-cyanaccent font-bold text-xs shrink-0">CSV</div>
            <div>
              <span class="font-semibold text-white block">${ds.name}</span>
              <span class="text-[10px] text-gray-500">Schema: ${ds.schema}</span>
            </div>
          </td>
          <td class="px-6 py-4 font-mono text-xs text-gray-400">${ds.format}</td>
          <td class="px-6 py-4 text-xs text-gray-400">${ds.size}</td>
          <td class="px-6 py-4 text-xs text-gray-400">${ds.rows}</td>
          <td class="px-6 py-4 text-xs text-gray-400">${ds.useCase}</td>
          <td class="px-6 py-4 text-right">
            <button onclick="triggerDatasetDownload('${ds.name}')" class="px-3.5 py-1.5 rounded bg-white/5 hover:bg-cyanaccent/20 hover:text-cyanaccent border border-transparent hover:border-cyanaccent/30 text-xs transition-all font-semibold">
              Download
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }
}

/* SUBMISSION PORTAL HANDLER */
function initSubmissionPortal() {
  const form = document.getElementById('project-submit-form');
  const successModal = document.getElementById('submission-success-modal');
  const closeModalBtn = document.getElementById('close-submission-success-btn');

  if (!form || !successModal) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('submit-student-name').value.trim();
    const email = document.getElementById('submit-student-email').value.trim();
    const projName = document.getElementById('submit-project-name').value.trim();
    const repo = document.getElementById('submit-repo-link').value.trim();
    const desc = document.getElementById('submit-desc').value.trim();

    if (!name || !repo || !projName || !desc) {
      showToast('All form fields are required!', 'error');
      return;
    }

    if (!repo.startsWith('http://') && !repo.startsWith('https://')) {
      showToast('Repository link must start with http:// or https://', 'error');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg> Validating Codebase...
    `;

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;

      const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
      const newSub = {
        id: 'sub-' + Date.now(),
        name: name,
        project: projName,
        repo: repo,
        desc: desc,
        date: new Date().toISOString().replace('T', ' ').substring(0, 16),
        status: 'Under Review'
      };
      submissions.unshift(newSub);
      localStorage.setItem('submissions', JSON.stringify(submissions));

      renderSubmissions();

      successModal.classList.remove('hidden');
      successModal.classList.add('flex');
      
      form.reset();
      showToast('Project repository successfully submitted for review!', 'success');
      triggerConfettiEffect();
    }, 1500);
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('flex');
      successModal.classList.add('hidden');
    });
  }
}

function triggerConfettiEffect() {
  const container = document.getElementById('confetti-holder');
  if (!container) return;

  container.innerHTML = '';
  const particleCount = 45;
  const colors = ['#06B6D4', '#6366F1', '#10B981', '#F59E0B', '#EC4899'];

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 8) + 6;
    const startX = 50;
    const startY = 60;

    p.style.position = 'absolute';
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.backgroundColor = color;
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '20%';
    p.style.left = `${startX}%`;
    p.style.top = `${startY}%`;
    p.style.transform = 'translate(-50%, -50%)';
    p.style.pointerEvents = 'none';

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 120 + 60;
    const moveX = Math.cos(angle) * velocity;
    const moveY = Math.sin(angle) * velocity - 30;

    p.animate([
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      { transform: `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) scale(0.5)`, opacity: 0 }
    ], {
      duration: Math.random() * 1000 + 800,
      easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
      fill: 'forwards'
    });

    container.appendChild(p);
  }
}

/* GAMIFIED STUDENT PROFILE AND AUTH */
function initAuthAndProfile() {
  const avatarWidget = document.getElementById('avatar-widget');
  const avatarDropdown = document.getElementById('avatar-dropdown');

  if (avatarWidget && avatarDropdown) {
    avatarWidget.addEventListener('click', (e) => {
      e.stopPropagation();
      avatarDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      avatarDropdown.classList.add('hidden');
    });

    avatarDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  initMobileMenu();
}

/* INTERACTIVE AI PROJECT AUDITOR */
function initAIAuditor() {
  const auditBtn = document.getElementById('ai-audit-btn');
  const repoInput = document.getElementById('ai-repo-input');
  const resultArea = document.getElementById('ai-audit-results');

  if (!auditBtn || !repoInput || !resultArea) return;

  auditBtn.addEventListener('click', () => {
    const url = repoInput.value.trim();
    if (!url) {
      showToast('Please paste a GitHub repository link to audit!', 'error');
      return;
    }
    if (!url.startsWith('https://github.com')) {
      showToast('Please enter a valid GitHub URL (starts with https://github.com)', 'error');
      return;
    }

    // AI audit typing loading states
    auditBtn.disabled = true;
    let seconds = 0;
    
    const loadingStatements = [
      "AI Analyzing GitHub Repository Structure...",
      "Checking SQL query index layouts and JOIN variables...",
      "Evaluating data cleaning scripts & visual integrity..."
    ];

    resultArea.innerHTML = `
      <div class="glass-panel rounded-xl p-5 border border-cyanaccent/20 bg-cyanaccent/5 flex flex-col items-center justify-center text-center space-y-3 min-h-[160px]">
        <svg class="animate-spin h-7 w-7 text-cyanaccent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-xs sm:text-sm text-cyanaccent font-mono" id="ai-loading-text">${loadingStatements[0]}</span>
      </div>
    `;

    const textInterval = setInterval(() => {
      seconds++;
      const textEl = document.getElementById('ai-loading-text');
      if (textEl && loadingStatements[seconds]) {
        textEl.innerText = loadingStatements[seconds];
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(textInterval);
      auditBtn.disabled = false;

      // Select dynamic evaluation feedback card
      const idx = Math.floor(Math.random() * mockAIFeedback.length);
      const evalData = mockAIFeedback[idx];

      resultArea.innerHTML = `
        <div class="glass-panel rounded-xl p-5 border border-cyanaccent/30 bg-cyanaccent/5 space-y-4 animate-fade-in relative overflow-hidden group">
          <div class="absolute -right-10 -top-10 w-28 h-28 bg-cyanaccent/5 rounded-full blur-xl"></div>
          
          <div class="flex items-center justify-between border-b border-gray-800 pb-3">
            <h4 class="font-display font-bold text-sm text-white flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-cyanaccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Audit Evaluation Report
            </h4>
            <span class="text-[10px] text-gray-500 font-mono">Audited: Just now</span>
          </div>

          <!-- Evaluation Scores Grid -->
          <div class="grid grid-cols-3 gap-3">
            <div class="bg-gray-950/40 p-3 rounded-lg border border-white/5 text-center">
              <span class="text-[10px] text-gray-400 block font-semibold">Data Cleaning</span>
              <span class="text-xl sm:text-2xl font-display font-black text-cyanaccent">${evalData.cleaning}%</span>
            </div>
            <div class="bg-gray-950/40 p-3 rounded-lg border border-white/5 text-center">
              <span class="text-[10px] text-gray-400 block font-semibold">Visualization</span>
              <span class="text-xl sm:text-2xl font-display font-black text-indigoaccent">${evalData.visual}%</span>
            </div>
            <div class="bg-gray-950/40 p-3 rounded-lg border border-white/5 text-center">
              <span class="text-[10px] text-gray-400 block font-semibold">SQL Opt</span>
              <span class="text-xl sm:text-2xl font-display font-black text-emeraldaccent">${evalData.sql}%</span>
            </div>
          </div>

          <!-- Feedback commentary -->
          <div class="bg-gray-950/60 p-3 rounded-lg border border-white/5 text-xs text-gray-300 leading-relaxed font-mono">
            ${evalData.comment}
          </div>
        </div>
      `;

      showToast('AI Audit completed successfully!', 'success');
    }, 3000);
  });
}

/* PREMIUM LOCKS CAPSTONE INTERACTION */
function initPremiumModal() {
  const modal = document.getElementById('premium-coaching-modal');
  const closeBtn = document.getElementById('close-premium-modal-btn');
  const lockedCards = document.querySelectorAll('.capstone-locked-card');

  if (!modal) return;

  lockedCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    });
  }
}

/* ADMIN VIEW & DASHBOARD STATE TOGGLE */
function initAdminDashboard() {
  const toggle = document.getElementById('admin-mode-toggle');
  const studentMain = document.getElementById('student-main-content');
  const adminMain = document.getElementById('admin-main-content');
  const dynamicIsland = document.getElementById('dynamic-island-menu');
  const bottomDock = document.getElementById('bottom-dock-nav');

  if (!toggle || !studentMain || !adminMain) return;

  toggle.addEventListener('change', () => {
    const isChecked = toggle.checked;

    if (isChecked) {
      studentMain.classList.add('opacity-0');
      if (dynamicIsland) dynamicIsland.classList.add('pointer-events-none', 'opacity-50');
      if (bottomDock) bottomDock.classList.add('pointer-events-none', 'opacity-20');
      
      setTimeout(() => {
        studentMain.classList.add('hidden');
        adminMain.classList.remove('hidden');
        adminMain.classList.add('animate-slide-up', 'opacity-100');
        showToast('Admin Mode Enabled - Management Console Online.', 'success');
        
        // Initialize Neon Chart inside Admin dashboard
        renderAdminChart();
        renderSubmissions();
      }, 300);
    } else {
      adminMain.classList.remove('opacity-100');
      setTimeout(() => {
        adminMain.classList.add('hidden');
        studentMain.classList.remove('hidden');
        studentMain.classList.add('animate-slide-up', 'opacity-100');
        if (dynamicIsland) dynamicIsland.classList.remove('pointer-events-none', 'opacity-50');
        if (bottomDock) bottomDock.classList.remove('pointer-events-none', 'opacity-20');
        showToast('Logged out of Admin console.', 'info');
        renderDatasets();
      }, 300);
    }
  });

  // Bind new Admin Workspace navigation triggers
  const dropdownBtn = document.getElementById('admin-workspace-btn');
  const navBtn = document.getElementById('nav-admin-workspace-btn');
  const mobileBtn = document.getElementById('mobile-admin-workspace-btn');
  const exitBtn = document.getElementById('admin-exit-workspace-btn');

  function toggleAdmin() {
    toggle.checked = !toggle.checked;
    toggle.dispatchEvent(new Event('change'));
  }

  if (dropdownBtn) dropdownBtn.addEventListener('click', toggleAdmin);
  if (navBtn) navBtn.addEventListener('click', toggleAdmin);
  if (mobileBtn) mobileBtn.addEventListener('click', toggleAdmin);
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      if (toggle.checked) {
        toggle.checked = false;
        toggle.dispatchEvent(new Event('change'));
      }
    });
  }

  // Update status indicator dot in dropdown when toggle state changes
  toggle.addEventListener('change', () => {
    const isChecked = toggle.checked;
    const dot = document.getElementById('admin-workspace-status-dot');
    if (dot) {
      if (isChecked) {
        dot.classList.remove('bg-gray-600');
        dot.classList.add('bg-emeraldaccent');
      } else {
        dot.classList.remove('bg-emeraldaccent');
        dot.classList.add('bg-gray-600');
      }
    }
  });

  const addDatasetForm = document.getElementById('admin-add-dataset-form');
  if (addDatasetForm) {
    addDatasetForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('admin-ds-name').value.trim();
      const schema = document.getElementById('admin-ds-schema').value.trim();
      const size = document.getElementById('admin-ds-size').value.trim();
      const rows = document.getElementById('admin-ds-rows').value.trim();
      const useCase = document.getElementById('admin-ds-usecase').value.trim();

      if (!name || !schema || !size || !rows || !useCase) {
        showToast('All fields are required to register a dataset.', 'error');
        return;
      }

      const datasets = JSON.parse(localStorage.getItem('datasets')) || [];
      const newDs = {
        id: 'dataset-' + Date.now(),
        name: name,
        schema: schema,
        format: 'CSV Text',
        size: size,
        rows: rows,
        useCase: useCase,
        data: 'custom'
      };

      datasets.push(newDs);
      localStorage.setItem('datasets', JSON.stringify(datasets));
      renderDatasets();
      addDatasetForm.reset();
      showToast(`Dataset '${name}' registered successfully!`, 'success');
    });
  }
}

/* RENDER ADMIN PROGRESS NEON GRADIENT LINE CHART */
function renderAdminChart() {
  const ctx = document.getElementById('adminAnalyticsChart');
  if (!ctx) return;

  if (adminChart) {
    adminChart.destroy();
  }

  adminChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6', 'Wk 7'],
      datasets: [
        {
          label: 'Total Submissions',
          data: [5, 12, 18, 14, 25, 30, 45],
          borderColor: '#06B6D4', // Neon Cyan
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.35
        },
        {
          label: 'Queries Executed (Hundreds)',
          data: [15, 22, 35, 28, 42, 58, 70],
          borderColor: '#6366F1', // Neon Indigo
          backgroundColor: 'rgba(99, 102, 241, 0.05)',
          borderWidth: 3,
          fill: true,
          tension: 0.35
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#9CA3AF',
            font: { family: 'Outfit', size: 11 }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#9CA3AF', font: { family: 'Inter' } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#9CA3AF', font: { family: 'Inter' } }
        }
      }
    }
  });
}

/* PROJECT PREVIEW MODAL LOGIC (ADMIN PANEL) */
function initProjectPreviewModal() {
  const modal = document.getElementById('admin-project-preview-modal');
  const closeBtn = document.getElementById('close-admin-preview-modal-btn');
  const btnApprove = document.getElementById('preview-btn-approve');
  const btnReject = document.getElementById('preview-btn-reject');
  
  if (!modal) return;

  // Close modal event
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  // Approve action inside modal
  if (btnApprove) {
    btnApprove.addEventListener('click', () => {
      const subId = document.getElementById('preview-project-id').innerText;
      updateSubmissionStatus(subId, 'Approved');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  // Reject action inside modal
  if (btnReject) {
    btnReject.addEventListener('click', () => {
      const subId = document.getElementById('preview-project-id').innerText;
      updateSubmissionStatus(subId, 'Rejected');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }
}

window.previewProjectSubmission = function(subId) {
  const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
  const sub = submissions.find(s => s.id === subId);
  if (!sub) return;

  document.getElementById('preview-student-name').innerText = sub.name;
  document.getElementById('preview-student-date').innerText = sub.date;
  document.getElementById('preview-project-title').innerText = sub.project;
  document.getElementById('preview-project-desc').innerText = sub.desc;
  document.getElementById('preview-project-id').innerText = sub.id;

  // Generate mock file structure tree
  const fileTreeContainer = document.getElementById('preview-project-file-tree');
  if (fileTreeContainer) {
    fileTreeContainer.innerHTML = getMockFileTree(sub.project);
  }

  const modal = document.getElementById('admin-project-preview-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

function getMockFileTree(projectTitle) {
  const titleLower = projectTitle.toLowerCase();
  let files = [];
  if (titleLower.includes('zomato') || titleLower.includes('food') || titleLower.includes('rating')) {
    files = [
      { name: 'data/', type: 'folder', children: ['zomato_raw.csv', 'cleaned_ratings.parquet'] },
      { name: 'notebooks/', type: 'folder', children: ['exploratory_data_analysis.ipynb', 'zomato_demand_model.ipynb'] },
      { name: 'scripts/', type: 'folder', children: ['data_pipeline.py', 'sql_queries.sql'] },
      { name: 'README.md', type: 'file' },
      { name: 'requirements.txt', type: 'file' }
    ];
  } else if (titleLower.includes('retention') || titleLower.includes('cohort') || titleLower.includes('e-commerce') || titleLower.includes('sales')) {
    files = [
      { name: 'configs/', type: 'folder', children: ['db_connection.json', 'airflow_dag.py'] },
      { name: 'queries/', type: 'folder', children: ['rfm_analysis.sql', 'cohort_retention_curves.sql'] },
      { name: 'src/', type: 'folder', children: ['cleaning_utils.py', 'visualization.py'] },
      { name: 'dashboard.pbix', type: 'file' },
      { name: 'README.md', type: 'file' }
    ];
  } else {
    files = [
      { name: 'data/', type: 'folder', children: ['raw_dataset.csv', 'schema.sql'] },
      { name: 'notebooks/', type: 'folder', children: ['data_cleaning.ipynb', 'visualization_trends.ipynb'] },
      { name: 'src/', type: 'folder', children: ['query_optimizer.py', 'app.py'] },
      { name: 'README.md', type: 'file' },
      { name: 'requirements.txt', type: 'file' }
    ];
  }

  // Render tree as HTML
  let html = `<div class="font-mono text-[10px] sm:text-xs text-gray-300 space-y-1.5 bg-gray-950/80 p-4 rounded-xl border border-white/5 max-h-[180px] overflow-y-auto">`;
  
  files.forEach(f => {
    if (f.type === 'folder') {
      html += `
        <div class="space-y-1">
          <div class="flex items-center gap-1.5 text-cyanaccent font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            <span>${f.name}</span>
          </div>
          <div class="pl-4 border-l border-gray-800 ml-1.5 space-y-1.5">
      `;
      f.children.forEach(child => {
        html += `
          <div class="flex items-center gap-1.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
            </svg>
            <span>${child}</span>
          </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="flex items-center gap-1.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
          <span>${f.name}</span>
        </div>
      `;
    }
  });

  html += `</div>`;
  return html;
}
