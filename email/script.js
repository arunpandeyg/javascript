function sendEmail() {
    Email.send({
        SecureToken:"4ba05a9c-ff4b-4f2d-a821-73140cdd77d8",
    //   Host: "smtp.gmail.com",
    //   Username: "arunpandeyntl@gmail.com",
    //   Password: "D85B8B1956869C10832D79DB7F93DB5F1EB7",
      To: "arunpandeyom@gmail.com.com",
      From: document.getElementById("email").value,
      Subject: "New contact form enquiry",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Phone: " +
        document.getElementById("phone").value +
        "<br> Message: " +
        document.getElementById("message").value,
    }).then((message) => alert(message, "Message sent successfully"));
}