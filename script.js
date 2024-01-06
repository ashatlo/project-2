function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".burger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
function sendEmail() {
    emailjs.send("smtp_server", "template_id", {
        to_email: 'them@website.com',
        from_email: "you@isp.com",
        subject: "This is the subject",
        body: "And this is the body"
    })
    .then(function(response) {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
    }, function(error) {
        console.log('Email sending failed:', error);
        alert('Email sending failed. Please try again later.');
    });
    AOS.init();
}
