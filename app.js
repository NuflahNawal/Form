function getDetails () {
    var name = document.getElementById ("signUp-name").value
    var email = document.getElementById ("signUp-email").value
    var password = document.getElementById ("signUp-password").value

    console.log(name,email,password);

    var myCard = document.getElementById ("myCard");
    var form = document.getElementById("form");

    form.style.display = "none";
    // myCard.style.display = "block";

    myCard.innerHTML = `
<div class="id-card">
    <div class="id-header">
        <div class="badge">PRO MEMBER</div>
        <div class="avatar-icon">✨</div>
    </div>
    
    <div class="id-body">
        <h2 class="user-title">${name}</h2>
        
        <div class="info-box">
            <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
            </div>
            <div class="info-row">
                <span class="label">Password:</span>
                <span class="value">${password}</span>
            </div>
        </div>
    </div>

    <div class="id-footer">
        <span>Status: Active</span>
        <span>Secure ID</span>
    </div>
</div>`;
}


function logIn () {
    var logInEmail = document.getElementById ("logIn-email").value
    var logInPassword = document.getElementById ("logIn-password").value

    console.log(logInEmail,logInPassword);

    var myCard = document.getElementById ("myCard");
    var form = document.getElementById("form");

    form.style.display = "none";
    myCard.style.display = "block";

    myCard.innerHTML = `
<div class="id-card">
    <div class="id-header">
        <div class="badge">PRO MEMBER</div>
        <div class="avatar-icon">✨</div>
    </div>
    
    <div class="id-body">        
        <div class="info-box">
            <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${logInEmail}</span>
            </div>
            <div class="info-row">
                <span class="label">Password:</span>
                <span class="value">${logInPassword}</span>
            </div>
        </div>
    </div>

    <div class="id-footer">
        <span>Status: Active</span>
        <span>Secure ID</span>
    </div>
</div>`;
}
