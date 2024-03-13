document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('infrastructureTable').getElementsByTagName('tbody')[0];
  const infrastructure = [
    { type: 'Road', name: 'Main Street', village: 'Village 1' },
    { type: 'School', name: 'Primary School', village: 'Village 2' },
    { type: 'Hospital', name: 'General Hospital', village: 'Village 1' }
  ];

  infrastructure.forEach(item => {
    addInfrastructure(item.type, item.name, item.village);
  });

  const infrastructureForm = document.getElementById('infrastructureForm');
  infrastructureForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const type = infrastructureForm.elements['infrastructureType'].value;
    const name = infrastructureForm.elements['infrastructureName'].value;
    const village = infrastructureForm.elements['infrastructureVillage'].value;
    if (type && name && village) {
      addInfrastructure(type, name, village);
      infrastructureForm.reset();
    } else {
      alert('Please enter infrastructure type, name, and village.');
    }
  });

  function addInfrastructure(type, name, village) {
    const row = table.insertRow();
    const typeCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const villageCell = row.insertCell(2);
    const actionCell = row.insertCell(3);
    typeCell.textContent = type;
    nameCell.textContent = name;
    villageCell.textContent = village;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editInfrastructure(row);
    });
    actionCell.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteInfrastructure(row);
    });
    actionCell.appendChild(deleteButton);
  }

  function editInfrastructure(row) {
    const type = row.cells[0].textContent;
    const name = row.cells[1].textContent;
    const village = row.cells[2].textContent;
    const newType = prompt('Enter new type:', type);
    const newName = prompt('Enter new name:', name);
    const newVillage = prompt('Enter new village:', village);
    if (newType && newName && newVillage) {
      row.cells[0].textContent = newType;
      row.cells[1].textContent = newName;
      row.cells[2].textContent = newVillage;
    }
  }

  function deleteInfrastructure(row) {
    if (confirm('Are you sure you want to delete this infrastructure?')) {
      row.remove();
    }
  }
});
