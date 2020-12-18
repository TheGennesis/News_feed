const express = require('express')
const cors = require('cors');

const newsRoute = require('../routes/news.route');

module.exports = (localConfig) => {
    let server = express();

    //function that sets up the server
    const create = (localConfig) => {

        //base settings
        server.set('hostname', localConfig.hostname);
        server.set('port', localConfig.port);

        //middlewares
        server.use(express.json());
        server.use(express.urlencoded({ extended: false }));
        server.use(cors());

        //route here
        server.use('/news', newsRoute);
    };

    //function that starts up the server
    const start = () => {
        const hostname = server.get('hostname');
        const port = server.get('port');

        server.listen(port, () => console.log(`Server is running on http://${hostname}:${port}`));
    };

    return {
        create: create,
        start: start
    };
};