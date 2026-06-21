// Mock Datasets for SQL Playground
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

// Global variables for Chart references
let dashboardChart = null;

// DOMContentLoaded Initialization
document.addEventListener('DOMContentLoaded', () => {
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

  // Bind Mock Auth Modals
  initAuthSystem();

  // Bind Mobile Navigation Menu
  initMobileMenu();
});

/* MOBILE MENU NAVIGATION TOGGLE */
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
          iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Close "X" shape
        }
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        if (iconPath) {
          iconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Hamburger shape
        }
      }
    });

    // Close menu when navigation links are clicked
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

/* TOAST SYSTEM */
function initToastContainer() {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-3 pointer-events-none';
  document.body.appendChild(container);
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `glass-panel toast-animate flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border pointer-events-auto min-w-[280px]`;
  
  let iconColor = 'text-cyan-400';
  let borderBorder = 'border-cyan-500/30';
  let svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`;

  if (type === 'success') {
    iconColor = 'text-emerald-400';
    borderBorder = 'border-emerald-500/30';
    svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`;
  } else if (type === 'error') {
    iconColor = 'text-red-400';
    borderBorder = 'border-red-500/30';
    svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>`;
  }

  toast.innerHTML = `
    <div class="${iconColor}">${svgIcon}</div>
    <div class="flex-1 text-sm text-gray-200 font-medium">${message}</div>
    <button class="text-gray-400 hover:text-white transition-colors" onclick="this.parentElement.remove()">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  `;
  toast.classList.add(borderBorder);

  container.appendChild(toast);

  // Auto remove after 3.5s (matching toast-animate animation duration)
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

/* RESOURCE HUB FILTERING */
function initResourceFilter() {
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const projectCards = document.querySelectorAll('.resource-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button styles
      filterButtons.forEach(b => {
        b.classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-indigo-500', 'text-white', 'shadow-lg', 'shadow-indigo-500/20');
        b.classList.add('text-gray-400', 'hover:text-white', 'hover:bg-white/5');
      });

      btn.classList.remove('text-gray-400', 'hover:text-white', 'hover:bg-white/5');
      btn.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-indigo-500', 'text-white', 'shadow-lg', 'shadow-indigo-500/20');

      const filterValue = btn.getAttribute('data-filter');

      // Filter logic with smooth animations
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

  // Handler for preset query selection
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

  // Handler for query execution
  runBtn.addEventListener('click', () => {
    const rawQuery = textarea.value.trim();
    if (!rawQuery) {
      showToast('Please type an SQL query to execute!', 'error');
      return;
    }

    // Add pulse glowing effect to code block border
    terminalBorder.classList.add('code-active-border');
    outputArea.innerHTML = `
      <div class="flex items-center justify-center py-10 gap-2">
        <svg class="animate-spin h-5 w-5 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

// Regex mock SQL compiler
function executeMockSQL(query) {
  const clean = query.replace(/\s+/g, ' ').replace(/;$/, '').trim();
  const lower = clean.toLowerCase();

  // Validate SELECT statement
  if (!lower.startsWith('select')) {
    throw new Error('DataLabs Sandbox only supports SELECT queries. Other DML/DDL commands (INSERT, UPDATE, DELETE) are disabled.');
  }

  // Parse Table Source
  let tableName = '';
  if (lower.includes('from sales')) tableName = 'sales';
  else if (lower.includes('from customers')) tableName = 'customers';
  else if (lower.includes('from restaurants')) tableName = 'restaurants';
  else {
    throw new Error('Table not found. Available tables in sandbox schema: [sales], [customers], [restaurants]');
  }

  const database = mockDB[tableName];
  let results = [...database];

  // Parse WHERE clause filters
  if (lower.includes('where')) {
    const whereClause = clean.substring(lower.indexOf('where') + 6);
    const orderIndex = whereClause.toLowerCase().indexOf('order by');
    const filterExpr = orderIndex !== -1 ? whereClause.substring(0, orderIndex).trim() : whereClause.trim();

    results = applyWhereFilter(results, filterExpr);
  }

  // Parse ORDER BY sorting
  if (lower.includes('order by')) {
    const orderClause = clean.substring(lower.indexOf('order by') + 9).trim();
    results = applyOrderBy(results, orderClause);
  }

  // Parse SELECT Columns
  const selectCols = clean.substring(6, lower.indexOf('from')).split(',').map(s => s.trim());
  if (selectCols.length === 1 && selectCols[0] === '*') {
    return { columns: Object.keys(database[0]), data: results };
  } else {
    // Check if column exists
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
  // Support basic clauses:
  // category = 'Electronics'
  // total_spent > 1000
  // rating >= 4.6
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
  let val = parts[1].replace(/['"]/g, ''); // strip quotes

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
    <div class="mt-3 px-4 flex items-center justify-between text-xs text-cyan-400 font-semibold">
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
        b.classList.remove('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/50');
        b.classList.add('bg-white/5', 'text-gray-400', 'border-transparent');
      });
      btn.classList.remove('bg-white/5', 'text-gray-400', 'border-transparent');
      btn.classList.add('bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/50');

      const dsType = btn.getAttribute('data-dataset');
      updateDashboardData(dsType);
    });
  });

  // Chart configuration sets
  const chartConfigs = {
    ecommerce: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'E-commerce Revenue ($K)',
          data: [12, 19, 15, 25, 22, 30],
          borderColor: '#06B6D4', // Cyan
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          fill: true,
          tension: 0.4
        },
        {
          label: 'Marketing Spend ($K)',
          data: [5, 6, 8, 12, 10, 14],
          borderColor: '#6366F1', // Indigo
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
            'rgba(239, 68, 68, 0.7)',  // Red
            'rgba(245, 158, 11, 0.7)', // Amber
            'rgba(16, 185, 129, 0.7)', // Emerald
            'rgba(6, 182, 212, 0.7)',  // Cyan
            'rgba(99, 102, 241, 0.7)', // Indigo
            'rgba(168, 85, 247, 0.7)'  // Purple
          ],
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1
        }
      ]
    }
  };

  // Create Chart
  if (dashboardChart) {
    dashboardChart.destroy();
  }

  const isBar = type === 'zomato';
  dashboardChart = new Chart(ctx, {
    type: isBar ? 'bar' : 'line',
    data: chartConfigs[type],
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

  // Display metrics summaries
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
    trend1.innerHTML = `<span class="text-emerald-400">↑ 18.2%</span> vs last month`;

    metric2.innerText = 'Avg. Order Value';
    val2.innerText = '$84.50';
    trend2.innerHTML = `<span class="text-emerald-400">↑ 4.3%</span> vs last month`;
  } else {
    metric1.innerText = 'Total Orders';
    val1.innerText = '19,500';
    trend1.innerHTML = `<span class="text-emerald-400">↑ 12.8%</span> vs weekend avg`;

    metric2.innerText = 'Avg. Prep Time';
    val2.innerText = '24.2 mins';
    trend2.innerHTML = `<span class="text-red-400">↓ 2.1 mins</span> improvement`;
  }
}

/* DATASET REPOSITORY MOCK DOWNLOADS */
function triggerDatasetDownload(fileName) {
  let fileContent = '';
  
  if (fileName.includes('E-commerce')) {
    fileContent = `SaleID,Product,Category,Revenue,UnitsSold,Date,Country\n101,MacBook Air,Electronics,999,1,2026-06-01,USA\n102,iPhone 15 Pro,Electronics,1998,2,2026-06-02,UK\n103,Ergonomic Chair,Office Supplies,249,1,2026-06-03,Canada\n104,Wireless Mouse,Electronics,150,3,2026-06-04,Germany\n105,Standing Desk,Office Supplies,450,1,2026-06-05,USA\n106,Coffee Maker,Home Appliances,120,1,2026-06-06,France\n107,Smart Watch,Electronics,299,1,2026-06-07,India`;
  } else if (fileName.includes('Zomato')) {
    fileContent = `RestaurantID,Name,Cuisine,Rating,CostForTwo,DeliveryTimeMins,City\n1,Pizza Palace,Italian,4.6,40,25,New Delhi\n2,Spicy Tadka,Indian,4.8,30,35,Mumbai\n3,Sushi Zen,Japanese,4.7,60,20,Bangalore\n4,Burger Bistro,American,4.2,25,15,Kolkata\n5,Taco Express,Mexican,4.4,20,30,Chennai`;
  } else if (fileName.includes('User')) {
    fileContent = `UserID,CohortMonth,MonthsActive,TotalLogs,ReturnedInMonth6\n1001,2026-01,5,45,True\n1002,2026-01,2,12,False\n1003,2026-02,4,30,True\n1004,2026-03,3,22,True\n1005,2026-04,1,5,False`;
  } else {
    fileContent = `Rank,Title,ExperienceLevel,SalaryUSD,CompanySize\n1,Data Scientist,Senior,165000,Large\n2,Data Analyst,Mid,95000,Medium\n3,Analytics Engineer,Senior,142000,Small\n4,BI Developer,Junior,70000,Medium`;
  }

  // Create real download link using Blob
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

/* PROJECT SUBMISSION PORTAL */
function initSubmissionPortal() {
  const form = document.getElementById('project-submit-form');
  const successModal = document.getElementById('submission-success-modal');
  const closeModalBtn = document.getElementById('close-submission-success-btn');

  if (!form || !successModal) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('submit-student-name').value.trim();
    const repo = document.getElementById('submit-repo-link').value.trim();
    const projName = document.getElementById('submit-project-name').value.trim();
    const desc = document.getElementById('submit-desc').value.trim();

    if (!name || !repo || !projName || !desc) {
      showToast('All form fields are required!', 'error');
      return;
    }

    // URL format check
    if (!repo.startsWith('http://') && !repo.startsWith('https://')) {
      showToast('Repository link must start with http:// or https://', 'error');
      return;
    }

    // Visual button loading spinner state
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
      // Re-enable submit button
      btn.disabled = false;
      btn.innerHTML = originalText;

      // Show beautiful popup modal
      successModal.classList.remove('hidden');
      successModal.classList.add('flex');
      
      // Update interactive statistics if user is logged in
      const submissionCount = document.getElementById('student-sub-count');
      if (submissionCount) {
        let count = parseInt(submissionCount.innerText);
        submissionCount.innerText = count + 1;
      }

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

// Spark colorful dots inside success dialog
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
    const startX = 50; // percent
    const startY = 60; // percent

    p.style.position = 'absolute';
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.backgroundColor = color;
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '20%';
    p.style.left = `${startX}%`;
    p.style.top = `${startY}%`;
    p.style.transform = 'translate(-50%, -50%)';
    p.style.pointerEvents = 'none';

    // Calculate motion paths
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 120 + 60;
    const moveX = Math.cos(angle) * velocity;
    const moveY = Math.sin(angle) * velocity - 30; // arc upwards

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

/* STUDENT LOGIN & AUTHENTICATION MOCK STATE */
function initAuthSystem() {
  const loginModal = document.getElementById('login-modal');
  const loginBtn = document.getElementById('student-login-btn');
  const closeLoginBtn = document.getElementById('close-login-btn');
  const submitLoginBtn = document.getElementById('submit-login-btn');

  // Interactive header updates
  const headerActions = document.getElementById('header-actions');
  const studentDashboard = document.getElementById('student-dashboard-panel');

  if (!loginModal || !loginBtn) return;

  // Toggle modal display
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('hidden');
    loginModal.classList.add('flex');
  });

  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => {
      loginModal.classList.remove('flex');
      loginModal.classList.add('hidden');
    });
  }

  // Handle Form Login submit
  if (submitLoginBtn) {
    submitLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const pass = document.getElementById('login-pass').value.trim();

      if (!email || !pass) {
        showToast('Please enter both email and password.', 'error');
        return;
      }

      // Simulated validation
      if (email === 'student@datalabs.pro' || email.includes('@')) {
        // Close Login dialog
        loginModal.classList.remove('flex');
        loginModal.classList.add('hidden');

        // Transition layout state to logged-in
        const truncatedEmail = email.split('@')[0];
        const studentName = truncatedEmail.charAt(0).toUpperCase() + truncatedEmail.slice(1);

        headerActions.innerHTML = `
          <div class="flex items-center gap-3">
            <span class="hidden md:inline-block text-sm text-gray-300">Welcome, <strong class="text-cyan-400 font-display">${studentName}</strong></span>
            <div class="relative group">
              <img src="https://ui-avatars.com/api/?name=${studentName}&background=06B6D4&color=fff&bold=true" alt="Avatar" class="w-8 h-8 rounded-full border border-cyan-500/50 shadow-lg cursor-pointer">
              <div class="absolute right-0 mt-2 w-48 rounded-md shadow-lg glass-panel py-1 hidden group-hover:block z-50">
                <a href="#student-dashboard-panel" class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">My Dashboard</a>
                <a href="#" id="logout-trigger" class="block px-4 py-2 text-sm text-red-400 hover:bg-white/5">Log Out</a>
              </div>
            </div>
          </div>
        `;

        // Render dashboard panel
        studentDashboard.classList.remove('hidden');
        studentDashboard.classList.add('animate-slide-up');
        
        // Populate Progress bar
        simulateDashboardStats();

        // Scroll to personal dashboard
        setTimeout(() => {
          studentDashboard.scrollIntoView({ behavior: 'smooth' });
        }, 300);

        showToast(`Welcome back, ${studentName}! Sandbox Workspace Loaded.`, 'success');

        // Bind logout trigger
        document.getElementById('logout-trigger').addEventListener('click', (e) => {
          e.preventDefault();
          location.reload(); // Quick reset state
        });
      } else {
        showToast('Login failed. Use student@datalabs.pro or any standard email format.', 'error');
      }
    });
  }
}

function simulateDashboardStats() {
  const progressBar = document.getElementById('student-progress-bar');
  const progressText = document.getElementById('student-progress-text');
  
  if (!progressBar || !progressText) return;

  // Animate progress bar fill from 0 to 74%
  let curVal = 0;
  progressBar.style.width = '0%';
  
  const timer = setInterval(() => {
    curVal += 2;
    progressBar.style.width = `${curVal}%`;
    progressText.innerText = `${curVal}%`;

    if (curVal >= 74) {
      clearInterval(timer);
    }
  }, 30);
}
