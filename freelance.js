// First encounter with creating dynamic content in DOM
// Freelancer Forum (Block 19)

const container = document.querySelector(".container");

const h1 = document.createElement("h1");
h1.textContent = "Freelancer Forum";
container.appendChild(h1);

/*const p = document.createElement("p");
container.appendChild(p);
p.textContent = " ";
*/

const p = document.createElement("p");
p.innerHTML = `The average starting price is $30.00.`;
container.appendChild(p);

const h2 = document.createElement("h2");
h2.textContent = "Available Freelancers";
container.appendChild(h2);

const table = document.createElement("table");
container.appendChild(table);

/*const h2 = document.createElement("h2");
h2.textContent = "Available Freelancers";
container.appendChild(h2); */

const thead = document.createElement("thead");
table.appendChild(thead);

const headers = ["Name", "Occupation", "Starting Price"];

const headerRow = document.createElement("tr");
table.appendChild(headerRow);

headers.forEach((header) => {
  //console.log("head ", head)
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);

const freelancers = [
  { name: "Alice", occupation: "Writer", price: "$30" },
  { name: "Bob", occupation: "Teacher", price: "$50" },
  { name: "Carol", occupation: "Programmer", price: "$70" },
];

// Loop through the array of objects to populate table rows
freelancers.forEach((freelancer) => {
  const row = document.createElement("tr");
  // Name
  const tdName = document.createElement("td");
  tdName.textContent = freelancer.name;
  row.appendChild(tdName);

  // Occupation
  const tdOccupation = document.createElement("td");
  tdOccupation.textContent = freelancer.occupation;
  row.appendChild(tdOccupation);

  // Price
  const tdPrice = document.createElement("td");
  tdPrice.textContent = freelancer.price;
  row.appendChild(tdPrice);

  table.append(row);
});
// loop thru data and create table rows

/*
freelancers.forEach((freelancer) => {
  const tableRow = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = freelancer.name;
  tableRow.appendChild(tdName);

  const tdOcc = document.createElement("td");
  tdOcc.textContent = freelancer.occupation;
  tableRow.appendChild(tdOcc);

  const tdPrice = document.createElement("td");
  tdPrice.textContent = freelancer.price;
  tableRow.appendChild(tdPrice);

  table.appendChild(tableRow);
});
*/
