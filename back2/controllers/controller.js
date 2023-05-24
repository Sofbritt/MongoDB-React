const mainController = async (req, res) => {
    res.send('Main Page')
}

const addFilm = async (req, res) => {
    res.send('Films Page')
}

module.exports = {
    mainController,
    addFilm
}