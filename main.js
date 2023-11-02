function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderElements).map(el => el.value).join(', ');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    const submissionDetails = document.getElementById("submissionDetails");
    submissionDetails.innerHTML = `
        <li><b>First Name:</b> ${firstName}</li>
        <li><b>Last Name:</b> ${lastName}</li>
        <li><b>Date of Birth:</b> ${dob}</li>
        <li><b>Country:</b> ${country}</li>
        <li><b>Gender:</b> ${gender}</li>
        <li><b>Profession:</b> ${profession}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Mobile Number:</b> ${mobile}</li>
    `;

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("surveyForm").reset();
}