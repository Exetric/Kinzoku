# Kinzoku
I started Kinzoku a while ago at this point, like 2 years ago, so some of the code is spagetti code as I had no idea how to program when I started the bot and I still hardly do, so if you wonder why the code looks terrible then that's why.

Keep in mind there will be a lot of errors as of late and I'm not completely sure why as I'm a bad coder but keep that in mind if you ever try and get it running again.

What you'll need to do in order to get the bot running is

 1. Install [Node.js](https://nodejs.org/en/)
 2. Create a bot on the [Discord Bot Portal](https://discord.com/developers/applications/)
 3. Copy it's token into the **config.json** file
 4. Install all of the fonts in the fonts folder (after installing them you can delete the folder)
 5. Run the **start.bat** file

There might be errors but I'm too lazy to fix them.

**This is important though** there are many commands that are set to be dev only, these commands are used by checking the ID of the person sending it, so there's a new variable on the top of **index.js** that is called **Owner ID**, and in here you will want to paste your User ID, which you can get by enabling Developer mode in Discord's settings, and right clicking your name in a message and hitting "Copy ID"
