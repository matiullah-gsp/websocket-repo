class Room {
    constructor(roomId, roomTitle, namespaceId, privateRoom = false) {
        this.id = roomId
        this.title = roomTitle
        this.namespaceId = namespaceId
        this.isPrivate = privateRoom
        this.history = []
    }

    addMessage(message) {
        this.history.push(message)
    }

    clearHistory() {
        this.history = []
    }
}

module.exports = Room