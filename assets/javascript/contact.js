$(document).ready(function () {
  $('.submit').click(function (event) {
    event.preventDefault()
    console.log("clicked button")

    var firstName = $(".firstName1").val()
    var lastName = $(".lastName1").val()
    var phoneNumber = $(".phoneNumber1").val()
    var email = $(".email1").val()
    var comments = $(".comments1").val()
    var statusElm = $(".status")
    statusElm.empty()

    if(firstName.length >= 1) {
     console.log("First name worked")
    } else {
      statusElm.append("<div>First name not valid</div>")
    }

    if(lastName.length > 1) {
      console.log("Last name worked")
    } else {
      statusElm.append("<div>Last name not valid</div>")
    }

    if(phoneNumber.length > 7) {
      console.log("Phone number worked")
    } else {
      statusElm.append("<div>Phone number not valid</div>")
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      console.log("Email worked")
    } else {
      statusElm.append("<div>Email not valid</div>")
    }   

    if(comments.length > 20) {
      console.log("Message worked")
    } else {
      statusElm.append("<div>Message didn't work</div>")
    }

    





  })
})