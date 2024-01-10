## Getting Started

- Install the version of Node JS for your OS https://nodejs.org/en/download
- From a terminal run the following commands to check if the installation was successful:
  - `$ node -v`
  - `$ npm -v`
  - Set PATH environment variable to path/to/bin/node and path/to/bin/npm if the above commands failed to return the version number.
- In the terminal install dependencies using the command:
    `$ npm install`
- In the terminal run the local server using the command:
  - `node form-server.js`
- Open "form.html" in a browser. Enter username and password and click "Submit".

## Questions for you to answer
1. What is the purpose of the _action_ attribute in the _form_ tag?
    - The _action_ attribute of the _form_ tag is the URL that is going to process the form submission.
2. What is the purpose of the _method_ attribute in the _form_ tag?
    - The _method_ attribute of the _form_ tag is the HTTP method that the form is going to be submitted with (GET/POST).
      - A GET request will show the parameters in plainview within the URL
      - A POST request will try and hide the information in the request body, to a certain extent.
3. What is the purpose of the _name_ attribute in the _input_ tag?
    - The _name_ attribute of the _input_ tag is the name of the form control: Submitted as a name-value pair. As the form would be compiled to a JSON/query parameter format that is sent to the server.
4. What is the purpose of the _type_ attrbute in the _input_ tag?
    - The _type_ attribute of the _input_ tag is the type of input that the application expects for this input element. Password type hides plaintext, number type only allows numbers to be entered, etc.
5. What is the purpose of the _label_ tag?
    - The _label_ tag is a caption connected to an input tag in a user interface. Hint to the user that this should be entered here in this textbox.
6. What is the purpose of the _required_ attribute? 
    - The purpose of the _required_ attribute is to make sure that this name-value pair shouldn't be empty for the form to be submittable.