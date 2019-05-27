let messages = []

let id = 0

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body

        let newMessage = {
            id: id,
            text: text,
            time: time
        }

        messages.push(newMessage)
        id++
        res.send(messages)
    },

    read: (req, res) => {
        res.send(messages)
    },

    update: (req, res) => {
        let { id } = req.params
        let { text, time } = req.body

        let updatedMessage = {
            id: id,
            text: text,
            time: time
        }

        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1, updatedMessage)
        res.send(messages)
    },

    delete: (req, res) => {
        let { id } = req.params

        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1)
        res.send(messages)
    }
}