const SendMail = ()=>{
    var params = {
        from_name:document.getElementById("form-name").value,
        email_id :document.getElementById("email-field").value,
        message: document.getElementById("form-text").value
    }
    emailjs.send("service_zki7pdb", "template_xxlsqrp", params).then(function (res) {
        res.status != "200" && alert("It didn't work this time")         
    })    
}