function insert(){
    let name = document.getElementById("n").value;
    let email = document.getElementById("e").value;
    let password = document.getElementById("p").value;
    let date = document.getElementById("d").value; 
    let table = document.getElementById("table");
   
      // Create a row using the inserRow() method and
      // specify the index where you want to add the row
      let row = table.insertRow(-1); // We are adding at the end
   
      // Create table cells
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      let c4 = row.insertCell(3);
   
      // Add data to c1 and c2
      c1.innerText = name
      c2.innerText = email
      c3.innerText = password 
      c4.innerText = date
}