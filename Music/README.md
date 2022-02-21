# Notice
There is any issue in BDFD that ` $httpResult[] ` isn't working with multiple requests. The developer's have fixed it tho as mentioned in the changelog

![Screenshot_20220217_192839](https://user-images.githubusercontent.com/95774950/154497385-1f4bfb38-a782-46ca-b91a-55a5dd70065b.png)

but the update isn't available on some nodes. So, my music commands will only work on bots if they are having one of these node numbers. As for them, they have the latest version
- 2, 12, 21, 22, 29

## FAQs
1. How do i check my Bot Node?

Ans. Create a command in BDFD. Then, copy-paste this code
```
$nomention
$botNode
```

and trigger the command in discord and your bot will return a number. And that's, your bot node.

2. How can i use the music commands if my bot node is not present here?

Ans. Follow this steps :
- Regenerate your bot's token in Discord Developer Portal
- Copy the new token and paste it in the app
- Run your node command and check if the node number is one of those which i gave. If you didn't got, regenerate the token until you get the desired one and if you got any one of those, you can skip to the next point.
- Now, Go to your Music replit page and open the Replit Editor
- Then, head off to Commands > Secrets > Update your previous token with the new one.
- Finally, run the replit and you are good to go now.

# Note
In order to use music commands in BDFD, you will need a lavalink server first
