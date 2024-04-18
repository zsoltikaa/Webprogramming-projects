// Fetch the JSON file using JavaScript 
fetch('nevek.json') 
.then(response => response.json()) 
.then(data => { 
    // Use the JSON data as needed 
    console.log(data); 
}); 