document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('villageTable').getElementsByTagName('tbody')[0];
  const villages = [
    { name: 'Village 1', population: 1000 },
    { name: 'Village 2', population: 1500 },
    { name: 'Village 3', population: 800 }
  ];


  villages.forEach(village => {
    addVillage(village.name, village.population);
  });

  function addVillage(name, population) {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const populationCell = row.insertCell(1);
    const actionCell = row.insertCell(2);
    nameCell.textContent = name;
    populationCell.textContent = population;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editVillage(row);
    });
    actionCell.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteVillage(row);
    });
    actionCell.appendChild(deleteButton);
  }
  
  function editVillage(row) {
    const name = row.cells[0].textContent;
    const population = row.cells[1].textContent;
    const newName = prompt('Enter new name:', name);
    const newPopulation = prompt('Enter new population:', population);
    if (newName && newPopulation) {
      row.cells[0].textContent = newName;
      row.cells[1].textContent = newPopulation;
    }
  }
  
  function deleteVillage(row) {
    if (confirm('Are you sure you want to delete this village?')) {
      row.remove();
    }
  }
  
});
