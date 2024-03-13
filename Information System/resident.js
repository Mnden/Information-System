document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('residentTable').getElementsByTagName('tbody')[0];
  const residents = [
    { name: 'John Doe', age: 30, village: 'Village 1' },
    { name: 'Jane Smith', age: 25, village: 'Village 2' },
    { name: 'Bob Johnson', age: 40, village: 'Village 1' }
  ];

  residents.forEach(resident => {
    addResident(resident.name, resident.age, resident.village);
  });
  

  const residentForm = document.getElementById('residentForm');
  residentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = residentForm.elements['residentName'].value;
    const age = residentForm.elements['residentAge'].value;
    const village = residentForm.elements['residentVillage'].value;
    if (name && age && village) {
      addResident(name, age, village);
      residentForm.reset();
    } else {
      alert('Please enter name, age, and village.');
    }
  });

  function addResident(name, age, village) {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const ageCell = row.insertCell(1);
    const villageCell = row.insertCell(2);
    const actionCell = row.insertCell(3);
    nameCell.textContent = name;
    ageCell.textContent = age;
    villageCell.textContent = village;
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editResident(row);
    });
    actionCell.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteResident(row);
    });
    actionCell.appendChild(deleteButton);
  }

  function editResident(row) {
    const name = row.cells[0].textContent;
    const age = row.cells[1].textContent;
    const village = row.cells[2].textContent;
    const newName = prompt('Enter new name:', name);
    const newAge = prompt('Enter new age:', age);
    const newVillage = prompt('Enter new village:', village);
    if (newName && newAge && newVillage) {
      row.cells[0].textContent = newName;
      row.cells[1].textContent = newAge;
      row.cells[2].textContent = newVillage;
    }
  }

  function deleteResident(row) {
    if (confirm('Are you sure you want to delete this resident?')) {
      row.remove();
    }
  }
});
