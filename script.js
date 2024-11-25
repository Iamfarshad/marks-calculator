// Function to calculate total, average, and grade
function addSum(c1, c2, c3, c4, c5, c6, name) {
    const total = c1 + c2 + c3 + c4 + c5 + c6; 
    const average = total / 600; 
    const grade = average * 100; 

    //  adding the student's name
    return `The student ${name} total marks: ${total}, average: ${average}, grade: ${grade}%`;
}


function listenToclick(e) {
    e.preventDefault(); 

    // Get the values from the input fields (marks and name)
    const c1 = Number(document.getElementById("c1").value);
    const c2 = Number(document.getElementById("c2").value);
    const c3 = Number(document.getElementById("c3").value);
    const c4 = Number(document.getElementById("c4").value);
    const c5 = Number(document.getElementById("c5").value);
    const c6 = Number(document.getElementById("c6").value);
    const myName = String(document.getElementById("myname").value); // Get name from input field

    // Call addSum function with marks and name
    const template = addSum(c1, c2, c3, c4, c5, c6, myName);

    // Display's the result in an HTML element with id "temp"
    document.getElementById("temp").innerText = template;
}

// Add event listener to the "Calculate" button
document.getElementById("my-button").addEventListener("click", listenToclick);
