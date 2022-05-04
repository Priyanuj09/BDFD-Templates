# Description
Ever wondered to make a music bot in BDFD? but you can't since it doesn't have any music functions support at the moment.

Worry not, there is an indirect method which can let you make a music bot in BDFD. Also, please note that using this method your bot will be banned by Discord if you try to verify it since it violates Discord Developer [Terms of Service](https://discord.com/developers/docs/policies-and-agreements/terms-of-service). So, it's not recommendable to use it in public bots.

In order to use the above commands, you need to have a running lavalink server API.

# FAQs
## How do i setup Lavalink server API?

Before we proceed, make sure you already have an account and logged it in [Replit](https://replit.com). If not, create one because we will be using that here for example (_You can choose whichever service you want_).

1. Click [here](https://replit.com/new/nodejs) and you will be redirected to Replit create new Node.js project webpage.

2. Select a suitable name for your project and click ` Create Repl `.

3. In Shell, type ` npm init -y ` (_This will create the package.json file_) & then, type ` npm i bdfd-lavalink ` (_This will install the npm package called [bdfd-lavalink](https://www.npmjs.com/package/bdfd-lavalink)_).

4. Copy the below code & paste it in your ` index.js ` file.

```js
const { LavalinkServer } = require('bdfd-lavalink');

const server = new LavalinkServer({
    apiPort: 3000,
    url: "lava.link",
    lavalinkPort: 80, 
    password: "lava123"
});

server.init(process.env.token)
```

5. Open ` Secrets ` tab and create a new secret. Write ` token ` as key and put your bot token as value.

6. Run the file and wait until the process is completed.

7. Once done, an url will be generated in the Web tab (_This is your host/lavalink server api url._). Finally, copy that and paste it in your ` bdfd-lavalink ` variable as value.

## I am still confused. Do you have any video tutorial?

[![H](https://img.youtube.com/vi/zO28WkmaYss/maxresdefault.jpg)](https://youtu.be/zO28WkmaYss)

Yes, click the image thumbnail & you will redirected to YouTube.

(_Didn't uploaded the video through GitHub because GitHub doesn't allows to upload videos more than 10MB size & the video size is about 43MB._)
