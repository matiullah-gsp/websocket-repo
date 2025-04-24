const jonNs = (element, nsData) => {
    const nsEndpoint = element.getAttribute('ns')
    const clickedNs = nsData.find(row => row.endpoint === nsEndpoint)
    const roomDiv = document.querySelector('.room-list')
    roomDiv.innerHTML = ''
    clickedNs.rooms.forEach(room => {
       console.log(room.id, " Room:", room.title, " private:", room.isPrivate)
       roomDiv.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.title}</li>`
    })
    localStorage.setItem('lastNsEndpoint', nsEndpoint)
}