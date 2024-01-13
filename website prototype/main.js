var textRotator = document.getElementById("text-rotator");
var style = window.getComputedStyle(textRotator);
var textRotatorHeight = parseInt(style.height);

var row = document.getElementsByClassName("metrics-row")[0];

var currentMargin = parseInt(window.getComputedStyle(row).getPropertyValue("margin-top"))

var newMargin = textRotatorHeight + currentMargin;

row.style.marginTop = `${newMargin}px`

form = document.getElementById("template-contactform")

// form.addEventListener('submit', function(e) {
//     // Prevent default behavior:
//     e.preventDefault();
//     // Create new FormData object
//     const formData = new FormData(form);
//     const formDataObject = Object.fromEntries(formData.entries());
// 	console.log(formDataObject)
// 	console.log(JSON.stringify(formDataObject))
// 	requestBody = {
// 		"candidateEmail": formDataObject["template-contactform-email"],
// 		"candidateName": `Here is the customer's phone number: ${formDataObject["template-contactform-phone"]},
// Customer's message:
// 	${formDataObject["template-contactform-message"]}`
		
// 	}
// 	console.log(requestBody)
//     // Post the payload using Fetch:
//     fetch('https://yvx3jhhcoos7kkldez726ctnna0ennro.lambda-url.us-west-2.on.aws/', {
// 		// mode: 'no-cors',
// 		method: 'POST',
// 		body: JSON.stringify(requestBody),
// 		headers: {
// 			// "Content-Type": 'application/json',
// 			"Accept": 'application/json',
// 			// "Access-Control-Allow-Origin": "https://yvx3jhhcoos7kkldez726ctnna0ennro.lambda-url.us-west-2.on.aws/"
// 		}	
//     }).then(res => res.json()).then(data => {
// 	//log the response obtained to the browser console
//       console.log(data);
// 	// call to the function displayToHTML
//       displayToHTML(data)
//     })

//     function displayToHTML(data) {
// 		const wrapper = document.createElement('div')
// 		wrapper.innerHTML = [
// 			'<div class="alert alert-success alert-dismissible" role="alert">',
// 			'   <div>Email was succesfully sent!</div>',
// 			'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
// 			'</div>'
// 		].join('')
// 		if (document.getElementById("form-result").innerHTML == "") {
// 			document.getElementById("form-result").append(wrapper)
// 		} else {
// 			document.getElementById("form-result").innerHTML = ""
// 			document.getElementById("form-result").append(wrapper)
// 		}
//     }
//   })