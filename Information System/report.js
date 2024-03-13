document.addEventListener('DOMContentLoaded', function() {
  const reportForm = document.getElementById('reportForm');
  const reportResult = document.getElementById('reportResult');

  reportForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const reportType = reportForm.elements['reportType'].value;
    let reportData = '';
    if (reportType === 'population') {
      reportData = generatePopulationReport();
    } else if (reportType === 'infrastructure') {
      reportData = generateInfrastructureReport();
    } else if (reportType === 'residents') {
      reportData = generateResidentsReport();
    }
    reportResult.innerHTML = reportData;
  });

  function generatePopulationReport() {
    const villageRows = document.getElementById('villageTable').getElementsByTagName('tbody')[0].rows;
    let totalPopulation = 0;
    for (let i = 0; i < villageRows.length; i++) {
      totalPopulation += parseInt(villageRows[i].cells[1].textContent);
    }
    return `<h3>Total Population</h3><p>${totalPopulation}</p>`;
  }

  function generateInfrastructureReport() {
    const infrastructureRows = document.getElementById('infrastructureTable').getElementsByTagName('tbody')[0].rows;
    let infrastructureSummary = {};
    for (let i = 0; i < infrastructureRows.length; i++) {
      const type = infrastructureRows[i].cells[0].textContent;
      if (infrastructureSummary[type]) {
        infrastructureSummary[type]++;
      } else {
        infrastructureSummary[type] = 1;
      }
    }
    let report = '<h3>Infrastructure Summary</h3><ul>';
    for (const type in infrastructureSummary) {
      report += `<li>${type}: ${infrastructureSummary[type]}</li>`;
    }
    report += '</ul>';
    return report;
  }

  function generateResidentsReport() {
    const residentRows = document.getElementById('residentTable').getElementsByTagName('tbody')[0].rows;
    let oldestResident = { name: '', age: 0 };
    for (let i = 0; i < residentRows.length; i++) {
      const age = parseInt(residentRows[i].cells[1].textContent);
      if (age > oldestResident.age) {
        oldestResident.name = residentRows[i].cells[0].textContent;
        oldestResident.age = age;
      }
    }
    return `<h3>Oldest Resident</h3><p>Name: ${oldestResident.name}<br>Age: ${oldestResident.age}</p>`;
  }
});
