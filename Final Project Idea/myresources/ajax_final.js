document.addEventListener('DOMContentLoaded', () => {

  document.querySelector("#qcodeform").onsubmit = () => {

      let qcode_input = document.querySelector("#qcode").value
        //initialize new request
        const request = new XMLHttpRequest();
        //.Define the XMLHttpRequest

        let api_endpoint = `http://127.0.0.1:3000/courses/qcode/${qcode_input}`
        request.open('GET', api_endpoint);

        //callback function for when request completes
        request.onload = () => {
          //extract JSON data from requets
          const data = JSON.parse(request.responseText);

          //this code will execute

          let html_response = process_response(data)
          document.querySelector("#result").innerHTML = html_response

        } //end of onload callback



        //send request.
        request.send();

        return false;

  } // end of onsubmit

  document.querySelector("#qtitleform").onsubmit = () => {

      let qtitle_input = document.querySelector("#qtitle").value
        //initialize new request
        const request = new XMLHttpRequest();
        //.Define the XMLHttpRequest

        let api_endpoint = `http://127.0.0.1:3000/courses/qtitle/${qtitle_input}`
        request.open('GET', api_endpoint);

        //callback function for when request completes
        request.onload = () => {
          //extract JSON data from requets
          const data = JSON.parse(request.responseText);

          //this code will execute

          let html_response = process_response(data)
          document.querySelector("#result").innerHTML = html_response

        } //end of onload callback



        //send request.
        request.send();

        return false;

  } // end of onsubmit

  document.querySelector("#qinstructorform").onsubmit = () => {

      let qinstructor_input = document.querySelector("#qinstructor").value
        //initialize new request
        const request = new XMLHttpRequest();
        //.Define the XMLHttpRequest

        let api_endpoint = `http://127.0.0.1:3000/courses/qinstructor/${qinstructor_input}`
        request.open('GET', api_endpoint);

        //callback function for when request completes
        request.onload = () => {
          //extract JSON data from requets
          const data = JSON.parse(request.responseText);

          //this code will execute

          let html_response = process_response(data)
          document.querySelector("#result").innerHTML = html_response

        } //end of onload callback



        //send request.
        request.send();

        return false;

  } // end of onsubmit

  document.querySelector("#qdayform").onsubmit = () => {

      let qday_input = document.querySelector("#qday").value
        //initialize new request
        const request = new XMLHttpRequest();
        //.Define the XMLHttpRequest

        let api_endpoint = `http://127.0.0.1:3000/courses/qday/${qday_input}`
        request.open('GET', api_endpoint);

        //callback function for when request completes
        request.onload = () => {
          //extract JSON data from requets
          const data = JSON.parse(request.responseText);

          //this code will execute

          let html_response = process_response(data)
          document.querySelector("#result").innerHTML = html_response

        } //end of onload callback



        //send request.
        request.send();

        return false;

  } // end of onsubmit

  document.querySelector("#qtypeform").onsubmit = () => {

      let qtype_input = document.querySelector("#qtype").value
        //initialize new request
        const request = new XMLHttpRequest();
        //.Define the XMLHttpRequest

        let api_endpoint = `http://127.0.0.1:3000/courses/qtype/${qtype_input}`
        request.open('GET', api_endpoint);

        //callback function for when request completes
        request.onload = () => {
          //extract JSON data from requets
          const data = JSON.parse(request.responseText);

          //this code will execute

          let html_response = process_response(data)
          document.querySelector("#result").innerHTML = html_response

        } //end of onload callback



        //send request.
        request.send();

        return false;

  } // end of onsubmit
  document.querySelector("#qseatsform").onsubmit = () => {

      let qseats_input = document.querySelector("#qseats").value
        //initialize new request
        const request = new XMLHttpRequest();
        //.Define the XMLHttpRequest

        let api_endpoint = `http://127.0.0.1:3000/courses/qseats/${qseats_input}`
        request.open('GET', api_endpoint);

        //callback function for when request completes
        request.onload = () => {
          //extract JSON data from requets
          const data = JSON.parse(request.responseText);

          //this code will execute

          let html_response = process_response(data)
          document.querySelector("#result").innerHTML = html_response

        } //end of onload callback



        //send request.
        request.send();

        return false;

  } // end of onsubmit

  document.querySelector("#qcomboform").onsubmit = () => {

      let qcomboinstructor_input = document.querySelector("#qcomboinstructor").value
      let qcombocode_input = document.querySelector("#qcombocode").value
        //initialize new request
        const request = new XMLHttpRequest();
        //.Define the XMLHttpRequest

        let api_endpoint = `http://127.0.0.1:3000/courses/qinstructor/${qcomboinstructor_input}/qcode/${qcombocode_input}`
        request.open('GET', api_endpoint);

        //callback function for when request completes
        request.onload = () => {
          //extract JSON data from requets
          const data = JSON.parse(request.responseText);

          //this code will execute

          let html_response = process_response(data)
          document.querySelector("#result").innerHTML = html_response

        } //end of onload callback

        //send request.
        request.send();

        return false;

  } // end of onsubmit

})//end of domcontentloaded



function process_response(data) {

  var list = document.createElement('ul');

  for (var i=0 ; i<data.length; i++){
    var item = document.createElement('li');

    //set its contents
    item.appendChild(document.createTextNode(data[i].code + ", " +  data[i].title + ", " + "Instructor: " + data[i].instructor + ", " + "Meeting Times: " + data[i].day + ", " + "Class Type: " + data[i].type + ", " + "Available Seats: " + data[i].seats));
    //add it to the list
    list.appendChild(item);
  }
  console.log(list)
  return list.outerHTML;
  }
