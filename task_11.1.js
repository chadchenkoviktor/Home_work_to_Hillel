// Task 11.1
task = 'task № 11.1';
console.log(task);

const table = document.querySelector('table');
const start = 2;
const end = 10;

const headerRow = document.createElement('tr');
const emptyCell = document.createElement('th');
headerRow.appendChild(emptyCell);

for (let i = start; i <= end; i++) {
  const th = document.createElement('th');
  th.textContent = i;
  headerRow.appendChild(th);
}
table.appendChild(headerRow);

for (let i = start; i <= end; i++) {
  const row = document.createElement('tr');
  const th = document.createElement('th');
  th.textContent = i;
  row.appendChild(th);

  for (let j = start; j <= end; j++) {
    const td = document.createElement('td');
    td.textContent = i * j;
    row.appendChild(td);
    table.appendChild(row);
  }
}


