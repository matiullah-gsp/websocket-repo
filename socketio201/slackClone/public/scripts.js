const socket = io("http://localhost:3000");

const username = "Jamil";
const password = "password";

socket.on("connect", () => {
  socket.emit("clientConnect");
});

socket.on("welcome", (serverMessage) => {
  console.log("From Server:", serverMessage.message);
});

socket.on("nsList", (nsData) => {

  const lastNsEndpoint = localStorage.getItem('lastNsEndpoint')   
  const namespaceDiv = document.querySelector(".namespaces");

  namespaceDiv.innerHTML = ''
  nsData.forEach((namespace) => {
    namespaceDiv.innerHTML += `<div class="namespace" ns="${namespace.endpoint}"><img src="${namespace.image}"></div>`;

  });

  const nsElements = document.getElementsByClassName("namespace")
  
  Array.from((nsElements)).forEach(
    (element) => {
      element.addEventListener("click", (event) => {
         jonNs(element, nsData)
      });
    }
  )

  if (lastNsEndpoint) {
    const lastElement = Array.from(nsElements).find(el => el.getAttribute('ns') === lastNsEndpoint);
    if (lastElement) jonNs(lastElement, nsData);
  } else {
    jonNs(nsElements[0], nsData); 
  }
   
});
