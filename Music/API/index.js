const { LavalinkServer } = require('bdfd-lavalink');

const server = new LavalinkServer({
    apiPort: 3000,
    url: "lava.link",
    lavalinkPort: 80, 
    password: "lava123"
});

server.init(process.env.token)
