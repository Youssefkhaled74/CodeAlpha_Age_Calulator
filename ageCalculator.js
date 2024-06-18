function calculateAge() {
    // Get the date of birth from the input field
    const dob = new Date(document.getElementById('dob').value);
    if (isNaN(dob.getTime())) {
        document.getElementById('result').innerText = "Please enter a valid date.";
        return;
    }

    // Get today's date
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
