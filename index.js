window.onload = async () => {
  await getData();
};
let response;
let alldata;

const getData = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        alldata = data;
      });
  } catch (error) {}
};

const displlayNames = async () => {
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        let eachName = data;
        let listofNames = document.getElementById("names");
        listofNames.innerHTML = "";

        eachName.forEach((element) => {
          console.log(element);
          let newInnerHtml = ` <div > <ul> 
          <li>Name :${element["name"]} </li>
           <li> Username :${element["username"]} </li> 
           <li> Email :${element["email"]} </li></ul>
           <hr></div>`;
          listofNames.innerHTML += newInnerHtml;
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const getAllElements = async () => {
  await displlayNames();
};

const getNames = async () => {
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        let eachName = data;
        let listofNames = document.getElementById("names");
        listofNames.innerHTML = "";

        eachName.forEach((element) => {
          console.log(element);
          let newInnerHtml = ` <div > <p>${element["name"]} </p></div>`;
          listofNames.innerHTML += newInnerHtml;
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const getUserName = async () => {
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        let eachName = data;
        let listofNames = document.getElementById("names");
        listofNames.innerHTML = "";

        eachName.forEach((element) => {
          console.log(element);
          let newInnerHtml = ` <div > <p>${element["username"]} </p></div>`;
          listofNames.innerHTML += newInnerHtml;
        });
      });
    await console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const getEmail = async () => {
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        let eachName = data;
        let listofNames = document.getElementById("names");
        listofNames.innerHTML = "";

        eachName.forEach((element) => {
          console.log(element);
          let newInnerHtml = ` <div > <p>${element["email"]} </p></div>`;
          listofNames.innerHTML += newInnerHtml;
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const stringAddress = async () => {
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        let eachName = data;
        let listofNames = document.getElementById("names");
        listofNames.innerHTML = "";

        eachName.forEach((element) => {
          console.log(element);
          let { city, suite, street, zipcode } = element.address;
          let address = `${street}, ${suite}, ${city}, (${zipcode})`;
          console.log(address);
          let newInnerHtml = ` <div > <p>${element.name} :</p>
          <p>${address} </p> <hr></div>`;
          listofNames.innerHTML += newInnerHtml;
        });
      });
  } catch (error) {
    console.log(error);
  }
};
