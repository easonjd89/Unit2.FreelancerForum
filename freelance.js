// First encounter with creating dynamic content in DOM
// Freelancer Forum (Block 19)

const h1 = document.createElement(h1);

const table = container.appendChild(table);

const h2 = document.createElement("h2"); 
h2.textContent = "Available Freelancers"; 
table.appendChild(h2); 

const thead = document.createElement("thead"); 
 table.appendChild(thead); 

 const headers = ["Name", "Occupation", "Starting Price"] 

 const headerRow = document.createElement("tr"); 
 thead.appendChild("tr")

Headers.forEac h1((header)) => {
    console.log("head ", head)
}

const freelancers = [
    { name: "Alice", occupation: "Writer", price:"$30"},
    { name: "Bob", occupation: "Teacher", price: "$50"}, 
    { name: "Carol", occupation: "Programmer", price: "$70"},
]; 

// loop thru data and create table rows

freelancers.forEach((freelancer) => {
    const tableRow = document.createElement("tr"); 

    const tdName = document.createElement("td"); 
    tdName.textContent = freelancer.name 
    tableRow.appendChild(tdName)

    const tdOcc = document.createElement("td"); 
    tdOcc.textContent = freelancer.occupation 
    tableRow.appendChild(tdOcc)

    const tdPrice = document.createElement("td"); 
    tdPrice.textContent = freelancer.price 
    tableRow.appendChild(tdPrice) 

    tbody.appendChild(tableRow)
})

