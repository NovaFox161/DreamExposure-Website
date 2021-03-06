function onSubmit() {
    var bodyRaw = {
        "subject": document.getElementById("subject").value,
        "message": document.getElementById("message").value,
        "position": document.getElementById("position").value,
        "resume": document.getElementById("resume").value,
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "type": "job-application",
        "gcap": grecaptcha.getResponse()
    };

    $.ajax({
        url: "/api/v1/contact",
        headers: {
            "Authorization": "CONTACT",
            "Content-Type": "application/json"
        },
        method: "POST",
        data: JSON.stringify(bodyRaw),
        success: function (jqXHR, textStatus) {
            formHide("contact");
            formShow("thanks");
            showSnackbar("Email Sent! Thank you for applying!");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            showSnackbar(jqXHR.responseText);
            grecaptcha.reset();
        }
    });
}