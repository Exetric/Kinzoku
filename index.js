const version = "0.3.0";

console.log("> Starting index.js");
console.log("> Loading Repos\n==============================");

const Discord = require("discord.js");
console.log("> discord.js loaded");
const DiscordCommando = require("discord.js-commando");
console.log("> discord.js commando loaded");
const dl = require('discord-leveling');
console.log("> discord leveling loaded");
const jimp = require('jimp');
console.log("> jimp loaded");
const Canvas = require('canvas');
console.log("> canvas loaded");
const fs = require('fs');
console.log("> fs loaded");
const FFMPEG = require('ffmpeg');
console.log("> ffmpeg loaded");
const randomPuppy = require('random-puppy');
console.log("> random puppy loaded");
const fetch = require('node-fetch');
console.log("> node fetch loaded");
const querystring = require('querystring');
console.log("> querystring loaded");
const eco = require('discord-economy');
console.log("> discord economy loaded");
const SelfReloadJSON = require('self-reload-json');
console.log("> self reload json loaded\n==============================");
const noop = () => {};
console.log("> setup noop");
const talkedRecently = new Set();
console.log("> setup talkedRecently")
let userCooldown = {};
console.log("> setup userCooldown");
console.log(`> Loaded Repos\n==============================`);

console.log("> Starting client");

const client = new Discord.Client();

const config = require("./config.json");

console.log("> config.json loaded");

var statusMessage = `${config.prefix}help`;

var deademoji = "<:dead:613565497669320704>";
var mademoji = "<:mad:613565498940063752>";
var happyemoji = "<:happy:613565500404006932>";
var sademoji = "<:sad:613565502136254484>";
var defaultemoji = "<:default:613566063824732189>";
var checkemoji = "<:check:613760362168320000>";
var crossemoji = "<:cross:613762387757236245>";
var kreditemoji = "<:coin:613565665210662912>";

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds\nVersion ${version}`);
  client.user.setActivity(`${statusMessage} | ${version}`);
  client.user.setStatus('idle')
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    var embed = new Discord.RichEmbed()
        .setTitle("Thank you for adding me!")
        .setColor(`FFA953`)
        .setThumbnail(`https://i.imgur.com/JuurDyu.png`)
        .setDescription(`Thank you for adding me to your server! To set everything up, do the ${config.prefix}setup command, for help do the ${config.prefix}help command, use the ${config.prefix}rank command to setup your rank, and for info about the bot, so the ${config.prefix}info command`)
        .setTimestamp()
    guild.channels.find(t => t.name == 'general').send(embed);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("guildMemberAdd", async member => {
  if(!fs.existsSync(`operations/memberlog/${member.guild.id}.json`)) return;
  const join = require(`./operations/memberlog/${member.guild.id}.json`);
  let memberavatar = member.user.avatarURL

    member.guild.channels.get(join.channelid).startTyping()
    const applyText = (canvas, text) => {
      let fontSize = 70;
      do {
        ctx.font = `${fontSize -= 10}px sans-serif`;
      } while (ctx.measureText(text).width > canvas.width - 290);
      return ctx.font;
    }
    const canvas = Canvas.createCanvas(508, 242);
    const ctx = canvas.getContext('2d');

    const { registerFont, createCanvas } = require('canvas')
    registerFont('images/profile/new/font.ttf', { family: 'montserrat' })
    registerFont('images/profile/fallback.ttf', { family: 'montserrat' })

    var card = await Canvas.loadImage('./images/profile/new/joinbanner.png')

    ctx.drawImage(card, 0, 0, 508, 242);

    ctx.textAlign = 'center';

    ctx.font = '12px montserrat';

    ctx.fillStyle = '#000000';
    ctx.fillText(`text`, 273, 375);
    ctx.fillStyle = '#9DFF00';
    ctx.fillText(`text`, 273, 372);

    devcolor = '#ffffff'

    var fontSize;
    if(member.user.username.length > 9) {
      if(member.user.tag.length > 16) {
        if(member.user.tag.length > 23) {
          fontSize = "10";
        } else {
          fontSize = "15";
        }
      } else {
        fontSize = "17";
      }
    } else {
      fontSize = "20";
    }

    ctx.font = `${fontSize}px montserrat`;
    ctx.fillStyle = devcolor;
    ctx.fillText(`${member.user.username} has joined`, 347, 94);

    ctx.font = `22px montserrat`;

    ctx.fillStyle = '#9DFF00';
    ctx.fillText(`${member.guild.memberCount} Members`, 347, 130);

    ctx.fillStyle = '#FFFFFF';
    ctx.fillText("ID " + member.user.id, 347, 166);

    if(!member.user.avatarURL) {
      var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
    } else {
      var avatar = await Canvas.loadImage(member.user.avatarURL);
    }
    ctx.beginPath();
    ctx.arc(112, 119, 74, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 35, 43, 155, 153);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-card.png');

    member.guild.channels.get(join.channelid).send(`<:check:613760362168320000> **|** ${member} has joined the server`, attachment);

    member.guild.channels.get(join.channelid).stopTyping();

})

client.on("guildMemberRemove", async member => {

  if(!fs.existsSync(`operations/memberlog/${member.guild.id}.json`)) return;
  if(!fs.existsSync(`operations/memberlog/${member.guild.id}.json`)) return;
  const join = require(`./operations/memberlog/${member.guild.id}.json`);
  let memberavatar = member.user.avatarURL

    member.guild.channels.get(join.channelid).startTyping()
    const applyText = (canvas, text) => {
      let fontSize = 70;
      do {
        ctx.font = `${fontSize -= 10}px sans-serif`;
      } while (ctx.measureText(text).width > canvas.width - 290);
      return ctx.font;
    }
    const canvas = Canvas.createCanvas(508, 242);
    const ctx = canvas.getContext('2d');

    const { registerFont, createCanvas } = require('canvas')
    registerFont('images/profile/new/font.ttf', { family: 'montserrat' })
    registerFont('images/profile/fallback.ttf', { family: 'montserrat' })

    var card = await Canvas.loadImage('./images/profile/new/leavebanner.png')

    ctx.drawImage(card, 0, 0, 508, 242);

    ctx.textAlign = 'center';

    ctx.font = '12px montserrat';

    ctx.fillStyle = '#FF0028';
    ctx.fillText(`text`, 273, 372);

    devcolor = '#ffffff'

    var fontSize;
    if(member.user.username.length > 9) {
      if(member.user.tag.length > 16) {
        if(member.user.tag.length > 23) {
          fontSize = "10";
        } else {
          fontSize = "15";
        }
      } else {
        fontSize = "17";
      }
    } else {
      fontSize = "20";
    }

    ctx.font = `${fontSize}px montserrat`;
    ctx.fillStyle = devcolor;
    ctx.fillText(`${member.user.username} has left`, 347, 94);

    ctx.font = `22px montserrat`;

    ctx.fillStyle = '#FF0084';
    ctx.fillText(`${member.guild.memberCount} Members`, 347, 130);

    ctx.fillStyle = '#FFFFFF';
    ctx.fillText("ID " + member.user.id, 347, 166);

    if(!member.user.avatarURL) {
      var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
    } else {
      var avatar = await Canvas.loadImage(member.user.avatarURL);
    }
    ctx.beginPath();
    ctx.arc(112, 119, 74, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 35, 43, 155, 153);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'leave-card.png');

    member.guild.channels.get(join.channelid).send(`<:cross:613762387757236245> **|** ${member} has left the server`, attachment);

    member.guild.channels.get(join.channelid).stopTyping();
})

client.on("message", async message => {

  if(message.author.bot) return;

  if(!message.guild) {
    var odds = Math.floor((Math.random() * 15) + 1);
    if(odds == "1") {
      message.author.send("DM bad")
    }

    if(odds == "2") {
      message.author.send("No DM")
    }

    if(odds == "3") {
      message.author.send("Pls no DM")
    }

    if(odds == "4") {
      message.author.send("Don't like DM")
    }

    if(odds == "5") {
      message.author.send("DM no like")
    }

    if(odds == "6") {
      message.author.send("Don't DM pls")
    }

    if(odds == "7") {
      message.author.send("DM is bad")
    }

    if(odds == "8") {
      message.author.send("DM no good")
    }

    if(odds == "9") {
      message.author.send("DM no work")
    }

    if(odds == "10") {
      message.author.send("DM isn't good")
    }

    if(odds == "11") {
      message.author.send("Stop DM")
    }

    if(odds == "12") {
      message.author.send("Don't DM me")
    }

    if(odds == "13") {
      message.author.send("Pls no DM pls")
    }

    if(odds == "14") {
      message.author.send("Stop DM pls")
    }

    if(odds == "15") {
      message.author.send("DM stop pls")
    }
    return;
  }

if(fs.existsSync(`./operations/purify/${message.guild.id}.ver`)) {
  var mess1 = message.content.toLowerCase()
  if(mess1.includes("fuck")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("shit")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("bitch")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("cunt")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("dick")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("nigger")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("nigga")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("faggot")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("bastard")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("choad")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("prick")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("slut")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("whore")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
  if(mess1.includes("twat")) {
    message.delete().catch(O_o=>{});
    message.reply("Swearing is not allowed on this server")
  }
}

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();

// IF NO COMMAND
  if(!command) {
    return;
  }

// EMBED COMMAND
  if(command === "embed") {
    if(message.author.id == "340225283560833026") {
      if(!args[0]) {
        return message.channel.send(`\`\`\`/embed <sendto: preview/userid> <color: default/null/hex> <thumbnail: default/null/url> <image: null/url> <title: separate with - > <description: spaces can be used>\`\`\``)
      }
      var sendto = args[0]
      var color = args[1]
      var title = args[4]
      var image = args[3]
      var description = args.slice(5).join(' ')
      var thumbnail = args[2]
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      title = title.replace("-", " ")
      if(color == "default") {
        color = "FFA953"
      }
      if(color == "null") {
        color = null
      }
      if(thumbnail == "null") {
        thumbnail = null
      }
      if(image == "null") {
        image = null
      }
      if(thumbnail == "default") {
        thumbnail = "https://i.imgur.com/JuurDyu.png"
      }
      var embed = new Discord.RichEmbed()
        .setTitle(title)
        .setColor(color)
        .setThumbnail(thumbnail)
        .setImage(image)
        .setDescription(description)
        .setTimestamp()
      message.delete().catch(O_o=>{});

      if(sendto == "preview") {
        message.channel.send(embed)
      } else {
        client.users.get(sendto).send(embed)
      }
    } else {
      return
    }
  }
// PING COMMAND
  if(command === "ping") {
    const m = await message.channel.send("Loading...");
    m.edit(`<:check:613760362168320000> **|** Latency is **${m.createdTimestamp - message.createdTimestamp}ms**. API Latency is **${Math.round(client.ping)}ms**`);
  }
// SET LEVEL COMMAND
  if(command === 'setlevel') {
    if(message.author.id == "340225283560833026") {
      var amount = args[1]
      var user = message.mentions.users.first() || message.author

      var output = await dl.SetLevel(user.id, amount)
      message.channel.send(`${user.username} is now level ${amount}`);
    } else {
      return;
    }
  }
// SET XP COMMAND
  if(command === "addxp") {
    if(message.author.id == "340225283560833026") {
      var user = message.mentions.users.first() || message.author
      var profile = await eco.FetchBalance(user.id)
      var amount = args[1]
      dl.AddXp(user.id, amount)
      message.channel.send(`${user.username} now has ${amount} more XP`);
    } else {
      return;
    }
  }
// STATUS COMMAND
  if(command === 'status') {
    if(message.author.id == "340225283560833026") {
      if(!args.join(' ')) {
        message.channel.send("\`/status <message> <*=online, ~=Idle, ^=DND, >=Streaming>\`")
        return;
      }
      var statusMessage = args.join(' ');
      if(statusMessage.includes("~")) {
        client.user.setStatus('idle')
        statusMessage = statusMessage.replace("~", "")
        client.user.setActivity(`${statusMessage} | ${version}`);
      }
      if(statusMessage.includes("*")) {
        client.user.setStatus('online')
        statusMessage = statusMessage.replace("*", "")
        client.user.setActivity(`${statusMessage} | ${version}`);
      }
      if(statusMessage.includes("^")) {
        client.user.setStatus('dnd')
        statusMessage = statusMessage.replace("^", "")
        client.user.setActivity(`${statusMessage} | ${version}`);
      }
      if(statusMessage.includes(">")) {
        statusMessage = statusMessage.replace(">", "")
        client.user.setPresence({
          game: {
              name: `${statusMessage} | ${version}`,
              type: "STREAMING",
              url: "https://www.twitch.tv/exetric15"
          }
        })
        statusMessage = statusMessage.replace(">", "")
      }
      message.channel.send(`\`Status set to ${statusMessage}\``)
    } else {
      return;
    }
  }
// INVITE COMMAND
  if(command === "invite") {
    message.reply("join it pls https://discord.gg/r6xXWpK");
  }
// HI COMMAND (Thanks Blaid/AppleArcade)
  if(command === "hi") {
    var odds = Math.floor((Math.random() * 10) + 1);
    if(odds == "1") {
      message.channel.send("> ***__~~\`Hey how you doing?\`~~__***")
    }

    if(odds == "2") {
      if(fs.existsSync(`./operations/purify/${message.guild.id}.ver`)) {
        odds = odds + 1
        console.log("bruv it was 2 at first")
      } else {
        message.channel.send("H-H-Hey what's up, how you doin, you lookin fine, holy shit you grew")
      }
    }

    if(odds == "3") {
      message.channel.send("Hey VSauce, Micheal here")
    }

    if(odds == "4") {
      message.channel.send("H-H-Hewo? ;///////////;")
    }

    if(odds == "5") {
      message.channel.send("Hey all! Scott Here!")
    }

    if(odds == "6") {
      message.channel.send(".... . -.-- / -.. ..- -.. .")
    }

    if(odds == "7") {
      message.channel.send("How's it goin bros")
    }

    if(odds == "8") {
      message.channel.send("█░░█ █▀▀ █░░ █░░ █▀▀█\n█▀▀█ █▀▀ █░░ █░░ █░░█\n▀░░▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀")
    }

    if(odds == "9") {
      message.channel.send("Kon'nichiwa Senpai")
    }

    if(odds == "10") {
      message.channel.send("dn sʇɐɥʍ ʎǝɥ")
    }
  }
// COIN FLIP COMMAND
  if(command === "coinflip") {
    var highodds = Math.floor((Math.random() * 1000) + 1);
    var odds = Math.floor((Math.random() * 2) + 1);
    if(highodds == "30") {
      var attachment = new Discord.Attachment(`images/side.png`)
      return message.channel.send("Wow, the thing landed on its side, I didn't even think that was possible (fun fact, this outcome is a 1/999 chance)", attachment)
      message.channel.stopTyping()
    }
    if(odds == "1") {
      var attachment = new Discord.Attachment(`images/heads.png`)
      return message.channel.send("Heads", attachment)
      message.channel.stopTyping()
    } else {
      var attachment = new Discord.Attachment(`images/tails.png`)
      return message.channel.send("Tails", attachment)
    }}
// DICE ROLL COMMAND
  if(command === "diceroll") {
    var odds = Math.floor((Math.random() * 6) + 1);
    var attachment = new Discord.Attachment(`images/${odds}.png`)
    message.channel.send(`You got ${odds}`, attachment)
  }
// TANK COMMAND
  if(command === "tank") {
    if (talkedRecently.has(message.author.id)) {
      return message.channel.send("Only one tank");
    }
    var attachment = new Discord.Attachment(`images/tank.jpg`)
    message.channel.send(attachment)
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 60000);
  }
// CONSOLE LOG COMMAND
  if(command === "console") {
    console.log(args.splice(` `))
  }
// MOST LIKELY TO
  if(command === "mlt") {
    if(fs.existsSync(`./operations/mlt.ver`)) {
      return console.log("Someone tried to do the mlt command");
    } else {
      fs.writeFile(`./operations/mlt.ver`, ` `, noop)
      var startEmbed = new Discord.RichEmbed()
        .setColor("7FE830")
        .setTitle("Welcome to the Most Likely To Event!")
        .setDescription("The Most Likely To event is an event where theres a series of questions such as `Who's most likely to become famous?`, and you vote for the person that you think fits the description the best.")
        .addField("How to I vote for someone?", "To vote for someone, just react to the question with the emote that is related to that person")
        .addField("Example", "if **Kinzoku =** <:default:613566063824732189>, then to vote for kinzoku, just react with the <:default:613566063824732189> on that message")
        .setThumbnail("https://i.imgur.com/zaJ4m9R.png");
      var personEmbed = new Discord.RichEmbed()
        .setColor("7FE830")
        .setTitle("The Emojis!")
        .setDescription(":rainbow_flag: - brody\n<:whyd:718541093851103383> - Exetric\n<:blurryeyes:718541218979643426> - lando\n:hear_no_evil: - Redkwan\n<:memecube:718541670848790538> - Memecube\n<a:dreamcast:718541684580810823> - Dreamcast64\n:auto_rickshaw: - SupremeBubbo\n:hot_face: - Slash\n:cloud_lightning: - Luxen\n:manual_wheelchair: - Solaris\n:snake: - Hayk\n:squid: - SquiVolt\n<:how:718541722170425431> - Weeb\n<:doubt1:718541761223458886> - BlueSomething\n:truck: - DaHero\n:flag_sa: - Larc\n:flag_ao: - MKGP\n:pregnant_woman: - BobbyFrothy\n:fox: - Blaid")
      var question1 = new Discord.RichEmbed()
        .setColor("000000")
        .setTitle("Most likely to become an anime girl")
      var question2 = new Discord.RichEmbed()
        .setColor("000000")
        .setTitle("Most likely to smoke weed")
      var question3 = new Discord.RichEmbed()
        .setColor("000000")
        .setTitle("Most likely to get banned soon")
      var question4 = new Discord.RichEmbed()
        .setColor("000000")
        .setTitle("Most likely to be a billionaire")
      var question5 = new Discord.RichEmbed()
        .setColor("000000")
        .setTitle("Most likely to have their server overtake link lounge")
      var question6 = new Discord.RichEmbed()
        .setColor("000000")
        .setTitle("Most likely to become a famous Youtuber")
      var question7 = new Discord.RichEmbed()
        .setColor("000000")
        .setTitle("Most likely to become the next server owner of Link Lounge")
      message.channel.send("@everyone", startEmbed);
      message.channel.send(personEmbed);
      const questionReact1 = await message.channel.send(question1)
      const questionReact2 = await message.channel.send(question2)
      const questionReact3 = await message.channel.send(question3)
      const questionReact4 = await message.channel.send(question4)
      const questionReact5 = await message.channel.send(question5)
      const questionReact6 = await message.channel.send(question6)
      const questionReact7 = await message.channel.send(question7)
      questionReact1.react("🏳️‍🌈")
      questionReact1.react("718541093851103383")
      questionReact1.react("718541218979643426")
      questionReact1.react("🙉")
      questionReact1.react("718541670848790538")
      questionReact1.react("718541684580810823")
      questionReact1.react("🛺")
      questionReact1.react("🥵")
      questionReact1.react("🌩️")
      questionReact1.react("🦽")
      questionReact1.react("🐍")
      questionReact1.react("🦑")
      questionReact1.react("718541722170425431")
      questionReact1.react("🚚")
      questionReact1.react("🇸🇦")
      questionReact1.react("🇦🇴")
      questionReact1.react("🤰")
      questionReact1.react("🦊")
      questionReact1.react("718541761223458886")

      questionReact2.react("🏳️‍🌈")
      questionReact2.react("718541093851103383")
      questionReact2.react("718541218979643426")
      questionReact2.react("🙉")
      questionReact2.react("718541670848790538")
      questionReact2.react("718541684580810823")
      questionReact2.react("🛺")
      questionReact2.react("🥵")
      questionReact2.react("🌩️")
      questionReact2.react("🦽")
      questionReact2.react("🐍")
      questionReact2.react("🦑")
      questionReact2.react("718541722170425431")
      questionReact2.react("🚚")
      questionReact2.react("🇸🇦")
      questionReact2.react("🇦🇴")
      questionReact2.react("🤰")
      questionReact2.react("🦊")
      questionReact2.react("718541761223458886")

      questionReact3.react("🏳️‍🌈")
      questionReact3.react("718541093851103383")
      questionReact3.react("718541218979643426")
      questionReact3.react("🙉")
      questionReact3.react("718541670848790538")
      questionReact3.react("718541684580810823")
      questionReact3.react("🛺")
      questionReact3.react("🥵")
      questionReact3.react("🌩️")
      questionReact3.react("🦽")
      questionReact3.react("🐍")
      questionReact3.react("🦑")
      questionReact3.react("718541722170425431")
      questionReact3.react("🚚")
      questionReact3.react("🇸🇦")
      questionReact3.react("🇦🇴")
      questionReact3.react("🤰")
      questionReact3.react("🦊")
      questionReact3.react("718541761223458886")

      questionReact4.react("🏳️‍🌈")
      questionReact4.react("718541093851103383")
      questionReact4.react("718541218979643426")
      questionReact4.react("🙉")
      questionReact4.react("718541670848790538")
      questionReact4.react("718541684580810823")
      questionReact4.react("🛺")
      questionReact4.react("🥵")
      questionReact4.react("🌩️")
      questionReact4.react("🦽")
      questionReact4.react("🐍")
      questionReact4.react("🦑")
      questionReact4.react("718541722170425431")
      questionReact4.react("🚚")
      questionReact4.react("🇸🇦")
      questionReact4.react("🇦🇴")
      questionReact4.react("🤰")
      questionReact4.react("🦊")
      questionReact4.react("718541761223458886")

      questionReact5.react("🏳️‍🌈")
      questionReact5.react("718541093851103383")
      questionReact5.react("718541218979643426")
      questionReact5.react("🙉")
      questionReact5.react("718541670848790538")
      questionReact5.react("718541684580810823")
      questionReact5.react("🛺")
      questionReact5.react("🥵")
      questionReact5.react("🌩️")
      questionReact5.react("🦽")
      questionReact5.react("🐍")
      questionReact5.react("🦑")
      questionReact5.react("718541722170425431")
      questionReact5.react("🚚")
      questionReact5.react("🇸🇦")
      questionReact5.react("🇦🇴")
      questionReact5.react("🤰")
      questionReact5.react("🦊")
      questionReact5.react("718541761223458886")

      questionReact6.react("🏳️‍🌈")
      questionReact6.react("718541093851103383")
      questionReact6.react("718541218979643426")
      questionReact6.react("🙉")
      questionReact6.react("718541670848790538")
      questionReact6.react("718541684580810823")
      questionReact6.react("🛺")
      questionReact6.react("🥵")
      questionReact6.react("🌩️")
      questionReact6.react("🦽")
      questionReact6.react("🐍")
      questionReact6.react("🦑")
      questionReact6.react("718541722170425431")
      questionReact6.react("🚚")
      questionReact6.react("🇸🇦")
      questionReact6.react("🇦🇴")
      questionReact6.react("🤰")
      questionReact6.react("🦊")
      questionReact6.react("718541761223458886")

      questionReact7.react("🏳️‍🌈")
      questionReact7.react("718541093851103383")
      questionReact7.react("718541218979643426")
      questionReact7.react("🙉")
      questionReact7.react("718541670848790538")
      questionReact7.react("718541684580810823")
      questionReact7.react("🛺")
      questionReact7.react("🥵")
      questionReact7.react("🌩️")
      questionReact7.react("🦽")
      questionReact7.react("🐍")
      questionReact7.react("🦑")
      questionReact7.react("718541722170425431")
      questionReact7.react("🚚")
      questionReact7.react("🇸🇦")
      questionReact7.react("🇦🇴")
      questionReact7.react("🤰")
      questionReact7.react("🦊")
      questionReact7.react("718541761223458886")
    }
  }
// WHO DID THIS COMMAND
  if(command === "wdt") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    var images = [`${message.attachments.first().url}`, 'images/wdt.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      data[0].resize( 512, 512 )
      data[0].composite(data[1],0,0);

      data[0].write('images/wdt2.png')
      const attachment = new Discord.Attachment(`images/wdt2.png`)

    message.channel.send(attachment);
    message.channel.stopTyping();
    });
  }
// GOD COMMAND
  if(command === "god") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    var images = [`${message.attachments.first().url}`, 'images/god.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      data[0].resize( 720, 397 )
      data[0].composite(data[1],0,0);

      data[0].write('images/god2.png')
      const attachment = new Discord.Attachment(`images/god2.png`)

    message.channel.send(attachment);
    message.channel.stopTyping();
    });
  }
// MLG COMMAND
  if(command === "mlg") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    var images = [`${message.attachments.first().url}`, 'images/mlg.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      data[0].resize( 360, 360 )
      data[0].composite(data[1],0,0);

      data[0].write('images/mlg2.png')
      const attachment = new Discord.Attachment(`images/mlg2.png`)

      message.channel.send(attachment);
      message.channel.stopTyping();
    });
  }
// DEEPFRY COMMAND
  if(command === "deepfry") {
      if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
      message.channel.startTyping();
      var images = [`${message.attachments.first().url}`, 'images/black.png'];
      var jimps = [];
      for (var i = 0; i < images.length; i++) {
        jimps.push(jimp.read(images[i]));
      }
      Promise.all(jimps).then(function(data) {
        return Promise.all(jimps);
      }).then(function(data) {
        data[0].posterize(3);
        data[0].write('images/deepfry.png')
        const attachment = new Discord.Attachment(`images/deepfry.png`)

        message.channel.send(attachment);
        message.channel.stopTyping();
      });
    }
// LEADERBOARD COMMAND
  if (command === "leaderboard") {
      dl.Leaderboard({
        limit: 3
      }).then(async users => {

        if (users[0]) var firstplace = await client.fetchUser(users[0].userid)
        if (users[1]) var secondplace = await client.fetchUser(users[1].userid)
        if (users[2]) var thirdplace = await client.fetchUser(users[2].userid)

        var embed = new Discord.RichEmbed()
          .setTitle("Kinzoku Leaderboard")
          .setColor("FFA953")
          .setThumbnail("https://i.imgur.com/Scbvhsn.png")
          .addField(`🥇 1st Place **${firstplace && firstplace.tag}**`, `Level ${users[0] && users[0].level || 'N/A'} : ${users[0] && users[0].xp || 'N/A'} XP`)
          .addField(`🥈 2nd Place **${secondplace && secondplace.tag}**`, `Level ${users[1] && users[1].level || 'N/A'} : ${users[1] && users[1].xp || 'N/A'} XP`)
          .addField(`🥉 3rd Place **${thirdplace && thirdplace.tag}**`, `Level ${users[2] && users[1].level || 'N/A'} : ${users[2] && users[2].xp || 'N/A'} XP`)
        message.channel.send(embed)
    })
  }
// RANK COMMAND
  if(command === "rank") {
    var user = message.mentions.users.first() || message.author
    if(!fs.existsSync(`./operations/themes/json/${user.id}.json`)) {
      message.reply(`We had to set up some info before you use the \`/rank\` command, so you should be able to use it now`)
      fs.writeFile(`./operations/themes/json/${user.id}.json`, `{
        "settheme": "0"
      }`, noop);
      fs.writeFile(`./operations/themes/0/${user.id}.json`, `_`, noop)
    }
    var theme = new SelfReloadJSON(`./operations/themes/json/${user.id}.json`);
    if(theme.settheme == "1") {
        message.channel.startTyping()
        const { registerFont, createCanvas } = require('canvas')
        registerFont('images/profile/themes/presets/1font.ttf', { family: 'pokemon' })
        const applyText = (canvas, text) => {
          let fontSize = 70;
          do {
            ctx.font = `${fontSize -= 10}px pokemon`;
          } while (ctx.measureText(text).width > canvas.width - 290);
          return ctx.font;
        }
        const canvas = Canvas.createCanvas(360, 270);
        const ctx = canvas.getContext('2d');
        const member = message.author
        var user = message.mentions.users.first() || message.author
        var output = await dl.Fetch(user.id)
        var profile = await eco.FetchBalance(user.id)

        var cardbg = await Canvas.loadImage(`./images/profile/backgrounds/default.png`);
        if (fs.existsSync(`./images/profile/backgrounds/${user.id}.png`)) {
          cardbg = await Canvas.loadImage(`./images/profile/backgrounds/${user.id}.png`);
        }

        ctx.drawImage(cardbg, 4, 14, 352, 113);

        var black = await Canvas.loadImage(`./images/profile/themes/presets/1bg.png`)
        ctx.drawImage(black, 13, 183, 214, 20)

        var bar = await Canvas.loadImage(`./images/profile/themes/presets/1bar.png`)
        var levelmult;
        if(output.level > "10") {
          var levelmult = "10";
        } else {
          var levelmult = output.level;
        }
        var barmath = ((output.xp / 2.5) * 500) / (levelmult * 100);
        ctx.drawImage(bar, 26, 192, barmath, 3)

        var card = await Canvas.loadImage('./images/profile/themes/presets/1.png')
        ctx.drawImage(card, 0, 0, 360, 270);

        if(!user.avatarURL) {
          var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
        } else {
          var avatar = await Canvas.loadImage(user.avatarURL);
        }
        ctx.drawImage(avatar, 238, 86, 89, 83);

        if(fs.existsSync(`./operations/verify/${user.id}.ver`)) {
          ctx.font = '10px pokemon';
          ctx.fillStyle = '#2D2D2D';
          ctx.fillText(`Verified`, 280, 250);
        }

        ctx.font = '10px pokemon';
        ctx.fillStyle = '#2C2C2C';
        ctx.fillText(`${output.xp}/${levelmult * 100}`, 100, 207);

        var devcolor;
        var name;
        if(!message.guild.members.get(user.id).displayName) {
          name = `${user.username}'s Rank'`;
        } else {
          name = `${message.guild.members.get(user.id).displayName}'s Rank`
        }

        ctx.font = '10px pokemon';
        ctx.fillStyle = "#000000";
        ctx.fillText(name, 4, 11);

        ctx.font = '15px pokemon';
        ctx.fillStyle = '#2C2C2C';
        ctx.fillText(`Level: ${output.level}\nKredits: ${profile.balance}`, 20, 231);

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile-card.png');

        message.channel.send(attachment)
        message.channel.stopTyping();
      }
// END OF POKEMON THEME
    if(theme.settheme == "0") {
      message.channel.startTyping()
	  const { registerFont, createCanvas } = require('canvas')
      registerFont('images/profile/new/font.ttf', { family: 'montserrat' })
      const applyText = (canvas, text) => {
        let fontSize = 70;
        do {
          ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 290);
        return ctx.font;
      }
      const canvas = Canvas.createCanvas(547, 410);
      const ctx = canvas.getContext('2d');
      const member = message.author
      var output = await dl.Fetch(user.id)
      var profile = await eco.FetchBalance(user.id)

      var hotdogodd = Math.floor((Math.random() * 9999) + 1);

      var cardbg = await Canvas.loadImage(`./images/profile/backgrounds/default.png`);
      if (fs.existsSync(`./images/profile/backgrounds/${user.id}.png`)) {
        cardbg = await Canvas.loadImage(`./images/profile/backgrounds/${user.id}.png`);
      }
      if(hotdogodd == 1) {
        cardbg = await Canvas.loadImage(`./images/profile/backgrounds/hotdog.png`);
      }

      var cardbackground = await Canvas.loadImage('./images/profile/new/background.png')
      ctx.drawImage(cardbackground, 0, 0, 547, 410);

      ctx.drawImage(cardbg, 7, 7, 539, 193);

      var bar = await Canvas.loadImage(`./images/profile/new/bar.png`)
      var levelmult;
      if(output.level > 10) {
        var levelmult = 10;
      } else {
        var levelmult = output.level;
      }
      var barmath = ((output.xp / 1.905) * 500) / (levelmult * 100);
      ctx.drawImage(bar, 143, 318, barmath, 11)

      var card = await Canvas.loadImage('./images/profile/new/profilebar.png')

      ctx.drawImage(card, 0, 0, 547, 410);

      if(user.presence.status == "online") {
        var stat = await Canvas.loadImage('./images/profile/new/online.png')
      }

      if(user.presence.status == "offline") {
        var stat = await Canvas.loadImage('./images/profile/new/inv.png')
      }

      if(user.presence.status == "idle") {
        var stat = await Canvas.loadImage('./images/profile/new/idle.png')
      }

      if(user.presence.status == "dnd") {
        var stat = await Canvas.loadImage('./images/profile/new/dnd.png')
      }

      if(hotdogodd == 1) {
        var stat = await Canvas.loadImage('./images/profile/new/hotdog.png')
      }

      if(fs.existsSync(`./operations/verify/${user.id}.ver`)) {
        verified = await Canvas.loadImage('./images/profile/new/verified.png');
        ctx.drawImage(verified, 0, 0, 547, 410);
      }

      ctx.textAlign = 'center';

      var level = output.level;
      var xp = output.xp;
      var xpcap = levelmult * 100;
      var kredits = profile.balance;

      ctx.font = '12px montserrat';
      ctx.fillStyle = '#5A5A5B';
      ctx.fillText(`${xp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / ${xpcap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 273, 352);
      ctx.fillStyle = '#000000';
      ctx.fillText(`${xp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / ${xpcap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 273, 350);

      ctx.fillStyle = '#191919';
      ctx.fillText(`${kredits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Kredits`, 273, 375);
      ctx.fillStyle = '#FFA953';
      ctx.fillText(`${kredits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Kredits`, 273, 372);

      var devcolor;
      var name;
      devcolor = '#ffffff'
      if(!message.guild.members.get(user.id).displayName) {
        name = `${user.username}`;
      } else {
        name = `${message.guild.members.get(user.id).displayName}`
      }

      if(hotdogodd == 1) {
        name = 'Hotdog'
      }

      var fontSize;
      if(name.length > 16) {
        fontSize = "14";
      } else {
        fontSize = "24";
      }

      ctx.font = `${fontSize}px montserrat`;
      ctx.fillStyle = '#191919';
      ctx.fillText(`${name}'s Rank`, 273, 267);
      ctx.fillStyle = devcolor;
      ctx.fillText(`${name}'s Rank`, 273, 262);

      ctx.font = `24px montserrat`;

      ctx.fillStyle = '#191919';
      ctx.fillText(`Level ${level.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 273, 301);
      ctx.fillStyle = '#FFA953';
      ctx.fillText(`Level ${level.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 273, 296);

      if(!user.avatarURL) {
        var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
      } else {
        var avatar = await Canvas.loadImage(user.avatarURL);
      }

      if(hotdogodd == 1) {
        var avatar = await Canvas.loadImage('./images/profile/backgrounds/hotdogpfp.png');
      }
      ctx.save();
      ctx.beginPath();
      ctx.arc(273, 146, 74, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(avatar, 199, 71, 148, 149);
      ctx.restore();

      ctx.drawImage(stat, 0, 0, 547, 410);

      const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile-card.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
  }
// END OF DEFAULT THEME
    if(theme.settheme == "2") {
      message.channel.startTyping()

      const applyText = (canvas, text) => {
        let fontSize = 70;
        do {
          ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 290);
        return ctx.font;
      }

      const canvas = Canvas.createCanvas(360, 270);
      const ctx = canvas.getContext('2d');
      const member = message.author
      var output = await dl.Fetch(user.id)
      var profile = await eco.FetchBalance(user.id)

      const { registerFont, createCanvas } = require('canvas')

      registerFont('images/profile/themes/presets/3font.ttf', { family: 'pussab' })

      var cardbg = await Canvas.loadImage(`./images/profile/backgrounds/default.png`);
      if (fs.existsSync(`./images/profile/backgrounds/${user.id}.png`)) {
        cardbg = await Canvas.loadImage(`./images/profile/backgrounds/${user.id}.png`);
      }

      ctx.drawImage(cardbg, 4, 14, 352, 113);

      var bartexture = await Canvas.loadImage(`./images/profile/themes/presets/3bar.png`)
      ctx.drawImage(bartexture, 13, 191, 200, 6)

      var bar = await Canvas.loadImage(`./images/profile/themes/presets/3bg.png`)
      var levelmult;
      if(output.level > 10) {
        var levelmult = 10;
      } else {
        var levelmult = output.level;
      }
      var barmath = ((output.xp / 2.5) * 500) / (levelmult * 100);
      ctx.drawImage(bar, 13 + barmath, 191, 203, 6)

      var card = await Canvas.loadImage('./images/profile/themes/presets/3.png')
      ctx.drawImage(card, 0, 0, 360, 270);

      if(!user.avatarURL) {
        var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
      } else {
        var avatar = await Canvas.loadImage(user.avatarURL);
      }

      ctx.drawImage(avatar, 231, 78, 103, 98);

      if(fs.existsSync(`./operations/verify/${user.id}.ver`)) {
        verified = await Canvas.loadImage('./images/profile/themes/presets/3ver.png');
        ctx.drawImage(verified, 330, 240, 20, 20);
        ctx.font = '11px pussab';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`Verified`, 274, 253);
      }

      ctx.font = '11px pussab';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`${output.xp}/${output.level * 100}`, 100, 209);

      var name;

      if(!message.guild.members.get(user.id).displayName) {
        name = `${user.username}'s Rank'`;
      } else {
        name = `${message.guild.members.get(user.id).displayName}'s Rank`
      }

      ctx.font = '11px pussab';
      ctx.fillStyle = "#000000";
      ctx.fillText(name, 4, 11);

      ctx.font = '20px pussab';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`Level: ${output.level}\nKredits: ${profile.balance}`, 10, 231);

      var avatarborder = await Canvas.loadImage('./images/profile/themes/presets/3border.png')
      ctx.drawImage(avatarborder, 0, 0, 360, 270);

      const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile-card.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
// END OF GD THEME
    }
      if(theme.settheme == "4") {
        message.channel.startTyping()
        const applyText = (canvas, text) => {
        	let fontSize = 70;
        	do {
        		ctx.font = `${fontSize -= 10}px sans-serif`;
        	} while (ctx.measureText(text).width > canvas.width - 290);
        	return ctx.font;
        }
        const canvas = Canvas.createCanvas(533, 533);
        const ctx = canvas.getContext('2d');
        const member = message.author
        var output = await dl.Fetch(user.id)
        var profile = await eco.FetchBalance(user.id)

        const { registerFont, createCanvas } = require('canvas')

        registerFont('images/profile/themes/presets/4font.ttf', { family: 'comic' })

        var card = await Canvas.loadImage('./images/profile/themes/presets/4barbg.png')
        ctx.drawImage(card, 0, 0, 533, 533);

        var cardbg = await Canvas.loadImage(`./images/profile/backgrounds/default.png`);
        if (fs.existsSync(`./images/profile/backgrounds/${user.id}.png`)) {
          cardbg = await Canvas.loadImage(`./images/profile/backgrounds/${user.id}.png`);
        }

        ctx.drawImage(cardbg, 0, 0, 533, 188);

        var bar = await Canvas.loadImage(`./images/profile/themes/presets/4bar.png`)
        var levelmult;
        if(output.level > 10) {
          var levelmult = 10;
        } else {
          var levelmult = output.level;
        }
        var barmath = ((output.xp / 1.325) * 500) / (levelmult * 100);
        ctx.drawImage(bar, 24, 456, barmath, 55)

        var card = await Canvas.loadImage('./images/profile/themes/presets/4.png')
        ctx.drawImage(card, 0, 0, 533, 533);

        if(!user.avatarURL) {
          var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
        } else {
          var avatar = await Canvas.loadImage(user.avatarURL);
        }
        ctx.drawImage(avatar, 18, 204, 178, 141);

        var card = await Canvas.loadImage('./images/profile/themes/presets/4overlay.png')
        ctx.drawImage(card, 0, 0, 533, 533);

        if(fs.existsSync(`./operations/verify/${user.id}.ver`)) {
          verified = await Canvas.loadImage('./images/profile/themes/presets/4ver.png');
          ctx.drawImage(verified, 0, 0, 533, 533);
        }

        ctx.font = '26px comic';
        ctx.fillStyle = '#FF00FF';
        ctx.fillText(`${output.xp} /${levelmult * 100}`, 53, 446);

        var devcolor;
        var devname;

        devcolor = '#FF00FF'
        var name;

        if(!message.guild.members.get(user.id).displayName) {
          name = `${user.username}'s ran k'`;
          name = name.toUpperCase();
        } else {
          name = `${message.guild.members.get(user.id).displayName}'s ran k`
          name = name.toUpperCase();
        }

        ctx.font = '26px comic';
        ctx.fillStyle = devcolor;
        ctx.fillText(name, 242, 257);

        ctx.font = '26px comic';
        ctx.fillStyle = '#0000FF';
        ctx.fillText(`leveL =${output.level} tbh\nkredits= ${profile.balance}`, 255, 315);

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile-card.png');

        message.channel.send(attachment)
        message.channel.stopTyping();
    }
// END OF SHITTY THEME
    if(theme.settheme == "3") {
      message.channel.startTyping()
      const applyText = (canvas, text) => {
        let fontSize = 70;
        do {
          ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 290);
        return ctx.font;
      }
      const canvas = Canvas.createCanvas(360, 270);
      const ctx = canvas.getContext('2d');
      const member = message.author
      var output = await dl.Fetch(user.id)
      var profile = await eco.FetchBalance(user.id)

      const { registerFont, createCanvas } = require('canvas')

      registerFont('images/profile/font.ttf', { family: 'hooge' })

      var cardbg = await Canvas.loadImage(`./images/profile/backgrounds/default.png`);
      if (fs.existsSync(`./images/profile/backgrounds/${user.id}.png`)) {
        cardbg = await Canvas.loadImage(`./images/profile/backgrounds/${user.id}.png`);
      }

      ctx.drawImage(cardbg, 0, 14, 360, 113);

      var black = await Canvas.loadImage(`./images/profile/barbg.png`)
      ctx.drawImage(black, 13, 183, 214, 20)

      if(user.id == "340225283560833026") {
        var card = await Canvas.loadImage('./images/profile/coolbar.png')
      } else {
        var card = await Canvas.loadImage('./images/profile/profilebar.png')
      }

      ctx.drawImage(card, 0, 0, 360, 270);

      var bar = await Canvas.loadImage(`./images/profile/bar.png`)
      var levelmult;
      if(output.level > 10) {
        var levelmult = 10;
      } else {
        var levelmult = output.level;
      }
      var barmath = ((output.xp / 2.5) * 500) / (levelmult * 100);
      ctx.drawImage(bar, 14, 185, barmath, 17)

      if(!user.avatarURL) {
        var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
      } else {
        var avatar = await Canvas.loadImage(user.avatarURL);
      }
      ctx.drawImage(avatar, 228, 72, 109, 109);

      if(user.id == "340225283560833026") {
        verified = await Canvas.loadImage('./images/profile/cooldude.png');
        ctx.drawImage(verified, 0, 0, 360, 270);
      } else {
        if(fs.existsSync(`./operations/verify/${user.id}.ver`)) {
          verified = await Canvas.loadImage('./images/profile/verified.png');
          ctx.drawImage(verified, 0, 0, 360, 270);
        }
      }

      ctx.font = '13px hooge';
      ctx.fillStyle = '#DBD4CE';
      ctx.fillText(`${output.xp}/${levelmult * 100}`, 88, 197);

      var devcolor;
      var name;
      var devname;

      if(!message.guild.members.get(user.id).displayName) {
        devname = `${user.username}'s Rank'`;
        name = devname.toUpperCase();
      } else {
        devname = `${message.guild.members.get(user.id).displayName}'s Rank`
        name = devname.toUpperCase();
      }

      ctx.font = '13px hooge';
      ctx.fillStyle = "#DBD4CE";
      ctx.fillText(name, 2, 11);

      ctx.font = '20px hooge';
      ctx.fillStyle = '#DBD4CE';
      ctx.fillText(`LEVEL: ${output.level}\nKREDITS: ${profile.balance}`, 10, 236);

      const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile-card.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
    }
// END OF OLD THEME
    if(theme.settheme == "5") {
      message.channel.startTyping()
      const applyText = (canvas, text) => {
        let fontSize = 70;
        do {
          ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 290);
        return ctx.font;
      }
      const canvas = Canvas.createCanvas(447, 338);
      const ctx = canvas.getContext('2d');
      const member = message.author
      var output = await dl.Fetch(user.id)
      var profile = await eco.FetchBalance(user.id)

      const { registerFont, createCanvas } = require('canvas')

      registerFont('images/profile/themes/presets/5font.ttf', { family: 'minecraft' })

      var cardbg = await Canvas.loadImage(`./images/profile/backgrounds/default.png`);
      if (fs.existsSync(`./images/profile/backgrounds/${user.id}.png`)) {
        cardbg = await Canvas.loadImage(`./images/profile/backgrounds/${user.id}.png`);
      }

      ctx.drawImage(cardbg, 0, 0, 447, 158);

      var black = await Canvas.loadImage(`./images/profile/themes/presets/5barbg.png`)
      ctx.drawImage(black, 0, 0, 447, 338)

      var card = await Canvas.loadImage('./images/profile/themes/presets/5.png')

      ctx.drawImage(card, 0, 0, 447, 338);

      var bar = await Canvas.loadImage(`./images/profile/themes/presets/5bar.png`)
      var levelmult;
      if(output.level > 10) {
        var levelmult = 10;
      } else {
        var levelmult = output.level;
      }
      var barmath = ((output.xp / 2.5) * 500) / (levelmult * 100);
      ctx.drawImage(bar, 10, 246, barmath, 12)

      if(!user.avatarURL) {
        var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
      } else {
        var avatar = await Canvas.loadImage(user.avatarURL);
      }
      ctx.drawImage(avatar, 342, 164, 99, 96);

      if(fs.existsSync(`./operations/verify/${user.id}.ver`)) {
        verified = await Canvas.loadImage('./images/profile/themes/presets/5ver.png');
        ctx.drawImage(verified, 0, 0, 447, 338);
      }

      ctx.font = '36px minecraft';
      ctx.fillStyle = '#000000';
      ctx.fillText(`${output.xp}/${levelmult * 100}`, 6, 292);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`${output.xp}/${levelmult * 100}`, 6, 289);

      var devcolor;
      var name;

      if(!message.guild.members.get(user.id).displayName) {
        name = `${user.username}'s Rank'`;
      } else {
        name = `${message.guild.members.get(user.id).displayName}'s Rank`
      }

      devcolor = '#ffffff'

      ctx.font = '36px minecraft';
      ctx.fillStyle = '#000000';
      ctx.fillText(name, 4, 156);
      ctx.fillStyle = devcolor;
      ctx.fillText(name, 4, 153);

      ctx.font = '36px minecraft';
      ctx.fillStyle = '#000000';
      ctx.fillText(`Level: ${output.level}`, 6, 196);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`Level: ${output.level}`, 6, 193);

      ctx.fillStyle = '#000000';
      ctx.fillText(`Kredits: ${profile.balance}`, 6, 238);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`Kredits: ${profile.balance}`, 6, 235);

      const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile-card.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
    }
// END OF MINECRAFT THEME
    if(theme.settheme == "6") {
      message.channel.startTyping()
      const applyText = (canvas, text) => {
        let fontSize = 70;
        do {
          ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 290);
        return ctx.font;
      }
      const canvas = Canvas.createCanvas(646, 438);
      const ctx = canvas.getContext('2d');
      const member = message.author
      var output = await dl.Fetch(user.id)
      var profile = await eco.FetchBalance(user.id)

      const { registerFont, createCanvas } = require('canvas')

      registerFont('images/profile/themes/presets/6font.ttf', { family: 'windows' })

      var cardbg = await Canvas.loadImage(`./images/profile/backgrounds/default.png`);
      if (fs.existsSync(`./images/profile/backgrounds/${user.id}.png`)) {
        cardbg = await Canvas.loadImage(`./images/profile/backgrounds/${user.id}.png`);
      }

      ctx.drawImage(cardbg, 10, 48, 626, 212);

      var card = await Canvas.loadImage('./images/profile/themes/presets/6.png')

      ctx.drawImage(card, 0, 0, 646, 438);

      var levelmult;
      if(output.level > 10) {
        var levelmult = 10;
      } else {
        var levelmult = output.level;
      }

      var barmath = ((output.xp) * 500) / (levelmult * 100);
      ctx.beginPath();
      ctx.rect(74, 340, barmath, 34);
      ctx.fillStyle = "#000080";
      ctx.fill();

      if(!user.avatarURL) {
        var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
      } else {
        var avatar = await Canvas.loadImage(user.avatarURL);
      }
      ctx.drawImage(avatar, 253, 177, 140, 140);

      if(fs.existsSync(`./operations/verify/${user.id}.ver`)) {
        verified = await Canvas.loadImage('./images/profile/themes/presets/6ver.png');
        ctx.drawImage(verified, 0, 0, 646, 438);
      }

      ctx.font = '18px windows';

      var devcolor;
      var name;

      if(!message.guild.members.get(user.id).displayName) {
        name = `${user.username}'s Rank'`;
      } else {
        name = `${message.guild.members.get(user.id).displayName}'s Rank`
      }

      ctx.fillStyle = '#ffffff';
      ctx.fillText(name, 13, 34);
      ctx.fillText(name, 14, 34);

      ctx.fillStyle = '#000000';
      ctx.textAlign = "center";
      ctx.fillText(`Level: ${output.level}`, 323, 402);
      ctx.fillText(`Kredits: ${profile.balance}`, 323, 427);

      ctx.fillStyle = '#808080';
      var xpmath = output.xp / (levelmult * 100) * 100
      ctx.fillText(`${Math.round(xpmath)}%`, 324, 367);

      const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile-card.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
    }
// END OF WINDOWS THEME
    if(theme.settheme == "r") {
      message.channel.startTyping()
      const applyText = (canvas, text) => {
        let fontSize = 70;
        do {
          ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 290);
        return ctx.font;
      }
      const canvas = Canvas.createCanvas(534, 364);
      const ctx = canvas.getContext('2d');
      const member = message.author
      var output = await dl.Fetch(user.id)
      var profile = await eco.FetchBalance(user.id)

      const { registerFont, createCanvas } = require('canvas')

      registerFont('images/profile/themes/presets/4font.ttf', { family: 'comic' })

      var card = await Canvas.loadImage('./images/profile/themes/presets/rbg.png')
      ctx.drawImage(card, 0, 0, 534, 364);

      var cardbg = await Canvas.loadImage(`./images/profile/backgrounds/default.png`);
      if (fs.existsSync(`./images/profile/backgrounds/${user.id}.png`)) {
        cardbg = await Canvas.loadImage(`./images/profile/backgrounds/${user.id}.png`);
      }

      ctx.drawImage(cardbg, 57, 0, 407, 143);

      var card = await Canvas.loadImage('./images/profile/themes/presets/r.png')
      ctx.drawImage(card, 0, 0, 534, 364);

      if(!user.avatarURL) {
        var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
      } else {
        var avatar = await Canvas.loadImage(user.avatarURL);
      }
      ctx.drawImage(avatar, 63, 212, 73, 73);

      ctx.font = '26px comic';

      var devcolor;
      var devname;

      devcolor = '#000000'
      var name;

      if(!message.guild.members.get(user.id).displayName) {
        name = `${user.username}'s rank'`;
        name = name.toUpperCase();
      } else {
        name = `${message.guild.members.get(user.id).displayName}'s rank`
        name = name.toUpperCase();
      }

      ctx.font = '26px comic';
      ctx.fillStyle = devcolor;
      ctx.fillText(name, 144, 237);

      ctx.font = '26px comic';
      ctx.fillStyle = '#FF0000';
      var levelmult;
      if(output.level > 10) {
        var levelmult = 10;
      } else {
        var levelmult = output.level;
      }
      ctx.fillText(`Level ${output.level}    ${output.xp}/${levelmult}\nKredits ${profile.balance}`, 144, 265);

      const attachment = new Discord.Attachment(canvas.toBuffer(), 'profile-card.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
    }
  }
// WILL SMITH COMMAND
  if(command === "will") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    const canvas = Canvas.createCanvas(720, 810);
    const ctx = canvas.getContext('2d');
    const member = message.author
  	const background = await Canvas.loadImage('./images/black.png');
    var user = message.mentions.users.first() || message.author
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(message.attachments.first().url);
    ctx.drawImage(avatar, 0, 0, 720, 405);

    const ink = await Canvas.loadImage('./images/rewind.png');
    ctx.drawImage(ink, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'willsmith.png');

  	message.channel.send(attachment)
    message.channel.stopTyping();
  }
// SET COMMAND
  if(command === "set") {
    var comm2 = args[0];

    if(comm2 == "background") {
      if(message.attachments.first()) {
        const m = await message.channel.send("Processing...")
        var images = [message.attachments.first().url, 'images/red.png'];

        var jimps = [];

        for (var i = 0; i < images.length; i++) {
          jimps.push(jimp.read(images[i]));
        }

        Promise.all(jimps).then(function(data) {
          return Promise.all(jimps);
        }).then(function(data) {
          data[0].resize(533, 188)
          data[0].write(`./images/profile/backgrounds/${message.author.id}.png`)
          const attachment = new Discord.Attachment(`./images/profile/backgrounds/${message.author.id}.png`)
          var embed = new Discord.RichEmbed()
            .setTitle(`<:default:613566063824732189> **|** **${message.author.username}'s** background is now **set**`)
            .setColor("FFA953")
          m.edit(embed);
          message.delete()
          })
        } else {
          var embed = new Discord.RichEmbed()
            .setTitle(`<:sad:613565502136254484> **|** You must provide an **Image** to set as your **Background**`)
            .setColor("FFA953")
          message.channel.send(embed)
        }
      }

    if(comm2 == "theme") {
      var request = args[1]

      if(request == "options") {
        message.channel.send("<:default:613566063824732189> **|** Sending you all themes, all of them cost **1000 Kredits**")
        var explain = new Discord.RichEmbed()
          .setTitle("How to set themes")
          .setDescription("To set a theme on your rank, just choose a theme you want, then type in the command above the image, and you will get that theme, keep in mind that all themes cost **1000 kredits**")
        message.author.send(explain)
        var theme1 = new Discord.RichEmbed()
          .setImage("https://i.imgur.com/JOlOHk7.png")
          .setTitle("/set theme 0")
        message.author.send(theme1)
        var theme2 = new Discord.RichEmbed()
          .setImage("https://imgur.com/rZ6WGE9.png")
          .setTitle("/set theme 1")
        message.author.send(theme2)
        var theme3 = new Discord.RichEmbed()
          .setImage("https://imgur.com/1TMGTJ5.png")
          .setTitle("/set theme 2")
        message.author.send(theme3)
        var theme4 = new Discord.RichEmbed()
          .setImage("https://imgur.com/EpMT9qp.png")
          .setTitle("/set theme 3")
        message.author.send(theme4)
        var theme5 = new Discord.RichEmbed()
          .setImage("https://i.imgur.com/yCDVtgI.png")
          .setTitle("/set theme 4")
        message.author.send(theme5)
        var theme6 = new Discord.RichEmbed()
          .setImage("https://i.imgur.com/ElGr9BD.png")
          .setTitle("/set theme 5")
        message.author.send(theme6)
        var theme7 = new Discord.RichEmbed()
          .setImage("https://imgur.com/ynSNd8F.png")
          .setTitle("/set theme 6")
        return message.author.send(theme7)
      }

      if(request == "69") {
        return message.channel.send("oMg DuDe YoU'rE sO fUnNy");
      }

      if(request == "rickroll") {
        if(!fs.existsSync(`./operations/themes/${request}/temp.ver`)) {
          message.channel.send(`<:default:613566063824732189> **|** Congratulations ${message.author}! You have figured out the **Secret Theme!** Check your DMs for information on what it is!`);
          fs.writeFile(`./operations/themes/${request}/temp.ver`, "_", noop);
          return fs.writeFile(`./operations/themes/json/${message.author.id}.json`, `{
            "settheme": "r"
          }`, noop);
        } else {
          return message.channel.send(`<:cross:613762387757236245> **|** That theme does not exist! Do **/set theme options** to view all the themes!`)
        }
      }

      var profile = await eco.FetchBalance(message.author.id)

      if(!fs.existsSync(`./operations/themes/${request}.ver`)) {
        return message.channel.send(`<:cross:613762387757236245> **|** That theme does not exist! Do **/set theme options** to view all the themes!`)
      }

      if(request == "0") {
        fs.writeFile(`./operations/themes/${request}/${message.author.id}.ver`, "_", noop);
        fs.writeFile(`./operations/themes/json/${message.author.id}.json`, `{
  "settheme": "0"
}`, noop);
        return message.channel.send(`<:default:613566063824732189> **|** Your theme is now set to **theme ${request}**`);
      } else {
        if(!fs.existsSync(`./operations/themes/${request}/${message.author.id}.ver`)) {
          if (profile.balance < "1000") {
            return message.channel.send(`<:sad:613565502136254484> **|** You must have **1000 kredits** to buy this theme **|** Your balance is **${profile.balance} kredits**`)
        } else {
            var profile = await eco.AddToBalance(message.author.id, "-1000")
          }
        }
      }
      fs.writeFile(`./operations/themes/${request}/${message.author.id}.ver`, "_", noop);
      fs.writeFile(`./operations/themes/json/${message.author.id}.json`, `{
        "settheme": "${request}"
      }`, noop);
      message.channel.send(`<:default:613566063824732189> **|** Your theme is now set to **theme ${request}**`);
    }

    if(comm2 == null) {
      var embed = new Discord.RichEmbed()
        .setTitle("**Set Command**")
        .addField("Rank Background", "Type `/set background` with an image provided to set your rank background")
        .addField("Rank Theme", "Type `/set theme <theme ID>`, you can find the ID's for themes by typing `/set theme options` and get a list of themes")
        .setColor("FFA953")
        .setThumbnail(message.author.avatarURL)
      message.channel.send(embed)
    }

  }
// VERIFY COMMAND
  if(command === "verify") {
    var user = message.mentions.users.first() || message.author
    if(message.author.id == "340225283560833026") {
      if (fs.existsSync(`./operations/verify/${user.id}.ver`)) {return message.reply(`${user.username} is already verified`)}
        message.channel.startTyping();
        message.channel.send("Processing...")
        var images = [`${user.avatarURL}`, 'images/black.png'];

        var jimps = [];

        for (var i = 0; i < images.length; i++) {
          jimps.push(jimp.read(images[i]));
        }

        Promise.all(jimps).then(function(data) {
          return Promise.all(jimps);
        }).then(function(data) {

          data[1].write(`operations/verify/${user.id}.ver`);

        message.reply(`${user.username} is now Verified`)
        message.channel.stopTyping();
      })} else {
        return;
      }
  }
// WORSE THAN HITLER COMMAND
  if(command === "wth") {
    if(fs.existsSync(`./operations/purify/${message.guild.id}.ver`)) {
      message.delete().catch(O_o=>{});
      return client.users.get(message.author.id).send(`You cannot use the command \`/${command}\` on a purified server`);
    }
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping()
    const canvas = Canvas.createCanvas(960, 720);
    const ctx = canvas.getContext('2d');
    const member = message.author
  	const background = await Canvas.loadImage('./images/wth.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(message.attachments.first().url);
    ctx.drawImage(avatar, 85, 77, 287, 318);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

  	message.channel.send(attachment)
    message.channel.stopTyping();
  }
// INKLING COMMAND
  if(command === "inkling") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping()
    const canvas = Canvas.createCanvas(560, 293);
    const ctx = canvas.getContext('2d');
    const member = message.author
  	const background = await Canvas.loadImage('./images/black.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(message.attachments.first().url);
    ctx.drawImage(avatar, 227, 86, 97, 100);

    const ink = await Canvas.loadImage('./images/inkling.png');
    ctx.drawImage(ink, 0, 0, 560, 293);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

  	message.channel.send(attachment)
    message.channel.stopTyping();
  }
// NAE NAE COMMAND
  if(command === "naenae") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    var images = [`${message.attachments.first().url}`, 'images/naenae.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      data[0].resize( 250, 260 )
      data[1].composite(data[0],0,0);

      data[1].write('images/naenae2.png')
      const attachment = new Discord.Attachment(`images/naenae2.png`)

    message.channel.send(attachment);
    message.channel.stopTyping();
    });
  }
// FREDDY COMMAND
  if(command === "freddy") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping()
    const canvas = Canvas.createCanvas(470, 353);
    const ctx = canvas.getContext('2d');
    const member = message.author
  	const background = await Canvas.loadImage(message.attachments.first().url);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage('./images/freddy.png');
    ctx.drawImage(avatar, 0, 0, 470, 353);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

  	message.channel.send(attachment)
    message.channel.stopTyping();
  }
// IDUBBBZ COMMAND
  if(command === "idubbbz") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping()
    const canvas = Canvas.createCanvas(720, 405);
    const ctx = canvas.getContext('2d');
    const member = message.author
    const background = await Canvas.loadImage(message.attachments.first().url);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage('./images/idubbbz.png');
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

    message.channel.send(attachment)
    message.channel.stopTyping();
  }
// TIME TO STOP COMMAND
  if(command === "filthy") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping()
    const canvas = Canvas.createCanvas(720, 405);
    const ctx = canvas.getContext('2d');
    const member = message.author
    const background = await Canvas.loadImage(message.attachments.first().url);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage('./images/time.png');
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

    message.channel.send(attachment)
    message.channel.stopTyping();
  }
// DBH COMMAND
  if(command === "dbh") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping()
    const canvas = Canvas.createCanvas(480, 268);
    const ctx = canvas.getContext('2d');
    const member = message.author
  	const background = await Canvas.loadImage('./images/black.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(message.attachments.first().url);
    ctx.drawImage(avatar, 134, 35, 187, 234);

    const ink = await Canvas.loadImage('./images/dbh.png');
    ctx.drawImage(ink, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

  	message.channel.send(attachment)
    message.channel.stopTyping();
  }
// BOB ROSS COMMAND
  if(command === "bobross") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping()
    const canvas = Canvas.createCanvas(600, 419);
    const ctx = canvas.getContext('2d');
    const member = message.author
  	const background = await Canvas.loadImage('./images/black.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(message.attachments.first().url);
    ctx.drawImage(avatar, 14, 37, 437, 325);

    const ink = await Canvas.loadImage('./images/bobross.png');
    ctx.drawImage(ink, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

  	message.channel.send(attachment)
    message.channel.stopTyping();
  }
// CUM COMMAND
  if(command === "cum") {
    if(fs.existsSync(`./operations/purify/${message.guild.id}.ver`)) {
      message.delete().catch(O_o=>{});
      return client.users.get(message.author.id).send(`You cannot use the command \`/${command}\` on a purified server`);
    }
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    var images = [`${message.attachments.first().url}`, 'images/cum.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      data[0].resize( 388, 594 )
      data[1].composite(data[0],0,0);

      data[1].write('images/cum2.png')
      const attachment = new Discord.Attachment(`images/cum2.png`)

    message.channel.send(attachment);
    message.channel.stopTyping();
    });
  }
// AGREE COMMAND
  if(command === "agree") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    var images = [`${message.attachments.first().url}`, 'images/iwant.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      data[0].resize( 327, 270 )
      data[1].composite(data[0],0,0);

      data[1].write('images/iwant2.png')
      const attachment = new Discord.Attachment(`images/iwant2.png`)

    message.channel.send(attachment);
    message.channel.stopTyping();
    });
  }
// GREYSCALE COMMAND
  if(command === "greyscale") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    jimp.read(`${message.attachments.first().url}`, (err, lenna) => {
      if (err) throw err;
      lenna
        .quality(60)
        .greyscale()
        .write('images/greyscale.png');
        const attachment = new Discord.Attachment('images/greyscale.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
    });
  }
// SEPIA COMMAND
  if(command === "sepia") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    jimp.read(`${message.attachments.first().url}`, (err, lenna) => {
      if (err) throw err;
      lenna
        .quality(60)
        .sepia()
        .write('images/sepia.png');
        const attachment = new Discord.Attachment('images/sepia.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
    });
  }
// INVERT COMMAND
  if(command === "invert") {
    if(!message.attachments.first()) {return message.channel.send("You must provide an image to edit <:sad:613565502136254484>")}
    message.channel.startTyping();
    jimp.read(`${message.attachments.first().url}`, (err, lenna) => {
      if (err) throw err;
      lenna
        .quality(60)
        .invert()
        .write('images/invert.png');
        const attachment = new Discord.Attachment('images/invert.png');

      message.channel.send(attachment)
      message.channel.stopTyping();
    })
  }
// YOU SEE THAT GUY COMMAND
  if(command === "ystg") {
    if(!args.join(" ")) {return message.channel.send("You must provide a message to use after the command <:sad:613565502136254484>")}
    message.channel.startTyping();
    const sayMeme = args.join(" ");
    var images = [`images/thatguy.png`, 'images/rank.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
          data[0].print(
            font,
            280,
            663,
            `${sayMeme}`,
            200)
        data[0].write(`images/thatguy2.png`);
        const attachment = new Discord.Attachment(`images/thatguy2.png`)

      message.channel.send(attachment);
      message.channel.stopTyping();
      })
    })
  }
// DUMBEST MAN ALIVE COMAND
  if(command === "dma") {
    if(!args.join(" ")) {return message.channel.send("You must provide a message to use after the command <:sad:613565502136254484>")}
    message.channel.startTyping();
    const sayMeme = args.join(" ");
    if(sayMeme.length > "168") {
      message.channel.stopTyping()
      return message.channel.send("<:sad:613565502136254484> **|** You can't have a message that is over **163** characters in length")
    }
    var images = [`images/dumbman.png`, 'images/rank.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
          data[0].print(
            font,
            160,
            600,
            `${sayMeme}`,
            310)
            // 168
        data[0].write(`images/dumbman2.png`);
        const attachment = new Discord.Attachment(`images/dumbman2.png`)

      message.channel.send(attachment);
      message.channel.stopTyping();
      })
    })
  }
// IDIOT COMMAND
  if(command === "idiot") {
    if(fs.existsSync(`./operations/purify/${message.guild.id}.ver`)) {
      message.delete().catch(O_o=>{});
      return client.users.get(message.author.id).send(`You cannot use the command \`/${command}\` on a purified server`);
    }
    if(!args.join(" ")) {return message.channel.send("You must provide a message to use after the command <:sad:613565502136254484>")}
    message.channel.startTyping();
    const sayMeme = args.join(" ");
    var images = [`images/idiot.png`, 'images/rank.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
          data[0].print(
            font,
            40,
            630,
            `${sayMeme}`,
            420)
        data[0].write(`images/idiot2.png`);
        const attachment = new Discord.Attachment(`images/idiot2.png`)

      message.channel.send(attachment);
      message.channel.stopTyping();
      })
    })
  }
// MONSTER COMMAND
  if(command === "monster") {
    if(!args.join(" ")) {return message.channel.send("You must provide a message to use after the command <:sad:613565502136254484>")}
    message.channel.startTyping();
    const sayMeme = args.join(" ");
    var images = [`images/monster.png`, 'images/rank.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
          data[0].print(
            font,
            45,
            500,
            `${sayMeme}`,
            440)
        data[0].write(`images/monster2.png`);
        const attachment = new Discord.Attachment(`images/monster2.png`)

      message.channel.send(attachment);
      message.channel.stopTyping();
      })
    })
  }
// POLICE COMMAND
  if(command === "police") {
    if(!args.join(" ")) {return message.channel.send("You must provide a message to use after the command <:sad:613565502136254484>")}
    message.channel.startTyping();
    const sayMeme = args.join(" ");
    var images = [`images/police.png`, 'images/rank.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
          data[0].print(
            font,
            25,
            245,
            `${sayMeme}`,
            600)
        data[0].write(`images/police2.png`);
        const attachment = new Discord.Attachment(`images/police2.png`)

      message.channel.send(attachment);
      message.channel.stopTyping();
      })
    })
  }
// PILLS COMMAND
  if(command === "pills") {
    if(!args.join(" ")) {return message.channel.send("You must provide a message to use after the command <:sad:613565502136254484>")}
    message.channel.startTyping();
    const sayMeme = args.join(" ");
    var images = [`images/pills.png`, 'images/rank.png'];

    var jimps = [];

    for (var i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps).then(function(data) {
      return Promise.all(jimps);
    }).then(function(data) {
      jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
          data[0].print(
            font,
            200,
            675,
            `${sayMeme}`,
            260)
        data[0].write(`images/pills2.png`);
        const attachment = new Discord.Attachment(`images/pills2.png`)

      message.channel.send(attachment);
      message.channel.stopTyping();
      })
    })
  }
// INFO COMMAND
  if(command === "info") {
    var user = client.fetchUser("340225283560833026")
    var infoembed = new Discord.RichEmbed()
      .setColor(`E62E38`)
      .addField(`Code Used`, `JavaScript along with Discord.js`)
      .addField(`Fun Fact 1`, `I am a successor to a bot named Hybrid Luma, also made by Exetric#7625, where my original name was \"BlueExetric\"`)
      .addField(`Fun Fact 2`, `The reason why I was made was because Dyno was being buggy when I was first being made and MEE6 started their MEE6 Premium service`)
      .addField(`Fun Fact 3`, `This bot started out using code online that was open source, but now only contains about 2% of that code now`)
      .setAuthor(`Created by Exetric#7625`, `https://cdn.discordapp.com/avatars/340225283560833026/a3a530b954465d4d7a36a79e0980d418.png?size=2048`, `https://www.youtube.com/channel/UCnDuIJMUZb9hEziM5t4vmpA`)
      .setTimestamp()

    message.channel.send(infoembed);
  }
// EMOJI COMMAND
  if(command === "emoji") {
    if(!args[0]) {
      return message.channel.send("Please provide an **emoji**/**emoji name** <:sad:613565502136254484>")
    }
    var emojiArg = args[0]
    var emojiArg2 = args[0]
    var emojiArg = emojiArg.replace(":", "");
    var emojiArg = emojiArg.replace(":", "");
    var emojiArg = emojiArg.replace("<", "");
    var emojiArg = emojiArg.replace(">", "");
    var emojiArg = emojiArg.slice(-18)
    const emojiArg1 = message.guild.emojis.find(emoji => emoji.id === emojiArg);
    if(emojiArg1 != null) {
      var embed = new Discord.RichEmbed()
        .setTitle(emojiArg1.name)
        .setThumbnail(emojiArg1.url)
        .setColor("FFA953")
        .setDescription(`\`<:${emojiArg1.name}:${emojiArg1.id}>\`\n[**Emoji URL**](${emojiArg1.url})`)
      message.channel.send(embed);
    } else {
      if(emojiArg2 != null) {
        const emojiArg3 = message.guild.emojis.find(emoji => emoji.name === emojiArg2);
        if(emojiArg3 != null) {
            var embed = new Discord.RichEmbed()
              .setTitle(emojiArg3.name)
              .setThumbnail(emojiArg3.url)
              .setColor("FFA953")
              .setDescription(`\`<:${emojiArg3.name}:${emojiArg3.id}>\`\n[**Emoji URL**](${emojiArg3.url})`)
            return message.channel.send(embed);
        }
      }
      message.channel.send("Could not find that emoji <:sad:613565502136254484>")
    }
  }
// TYPING START
  if(command === "typingstart") {
    message.channel.send("`Starting typing, this might take a couple seconds`")
    message.channel.startTyping();
  }
// TYPING Stop
  if(command === "typingstop") {
    message.channel.send("`Stopping typing, this might take a couple seconds`")
    message.channel.stopTyping();
  }
// JOIN TEST COMMAND
  if(command === "jointest") {
    var member = message.guild.members.get(args[0]) || message.author;
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("You must have the **Admin** permission to use this command <:sad:613565502136254484>");
      client.emit('guildMemberAdd', member.member || await message.guild.fetchMember(member));
    }
// LEAVE TEST COMMAND
  if(command === "leavetest") {
    var member = message.guild.members.get(args[0]) || message.author;
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("You must have the **Admin** permission to use this command <:sad:613565502136254484>");
      client.emit('guildMemberRemove', member.member || await message.guild.fetchMember(member));
    }
// TOPIC COMMAND
  if(command === "topic") {
    if (!message.member.hasPermission('MANAGE_CHANNELS'))
      return message.channel.send("You must have the **Manage Channels** permission to use this command <:sad:613565502136254484>");
    var argument = args.join(` `);
    if(!argument) {
      return message.channel.send("You need to have text to set the channels **topic** <:sad:613565502136254484>")
    }
    message.channel.setTopic(argument)
      .then(message.channel.send(`Channel topic set to **${argument}** <:default:613566063824732189>`))
  }
// AVATAR COMMAND
  if(command === "avatar") {
    const user = message.mentions.users.first() || message.author;
    if(!user.avatarURL) {
      var attachment = new Discord.Attachment(`images/dumbthing.jpg`)
      return message.channel.send(attachment);
    }
    const avatarEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setDescription(`[**Avatar URL Link**](${user.avatarURL})`)
        .setAuthor(`${user.username}`,`${user.avatarURL}`)
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
  }
// WARN COMMAND
  if(command === "warn") {
    if (!message.member.hasPermission('KICK_MEMBERS')) if (!message.member.hasPermission('MANAGE_MESSAGES')) {return message.channel.send("You must have the **Kick members** permission to use this command <:sad:613565502136254484>")}
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(!member)
      return message.channel.send("You must mention a valid member <:sad:613565502136254484>");

      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";

      var embed = new Discord.RichEmbed()
        .setAuthor(`You have been warned on ${message.guild.name}`, `${message.guild.iconURL}`)
        .addField(`Reason`, `${reason}`)
        .addField(`Warned by`, `${message.author.tag}`)
        .setColor(`FFA953`)
        .setThumbnail(`https://cdn.discordapp.com/emojis/613565498940063752.png?v=1`)
        .setTimestamp()

    client.users.get(member.id).send(embed);
    message.channel.send(`Warned **${member.user.tag}** for **${reason}** <:happy:613565500404006932>`)
  }
// REPORT BUG COMMAND
  if(command === "reportbug") {
    let bug = args.join(" ");
    client.users.get(`340225283560833026`).send(`Bug report: **${bug}**\nSent by ${message.author}`);
    await message.reply(`Report sent!`)
  }
// KICK COMMAND
  if(command === "kick") {
    if (!message.member.hasPermission('KICK_MEMBERS')) {return message.channel.send("You must have the **Kick members** permission to use this command <:sad:613565502136254484>")}
    let member = message.mentions.members.first()
    if(!member)
      return message.channel.send("You must mention a valid member <:sad:613565502136254484>");
    if(!member.kickable)
      return message.channel.send("I can not ban someone if I don't have kick perms/The member is above me <:dead:613565497669320704>");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      var kickembed = new Discord.RichEmbed()
        .setDescription(`${member.user.username}\'s ID - \`${member.user.id}\`\n${message.author.username}\'s ID - \`${message.author.id}\``)
        .setColor(`FFA953`)
        .addField(`Reason`, `${reason}\n`)
        .setAuthor(`${message.author.tag} has kicked ${member.user.tag}`, `${message.author.avatarURL}`)
        .setThumbnail(member.user.avatarURL)
        .setTimestamp()

    message.channel.send(kickembed);
  }
// BAN COMMAND
  if(command === "ban") {
    if (!message.member.hasPermission('BAN_MEMBERS')) {return message.channel.send("You must have the **Ban members** permission to use this command <:sad:613565502136254484>")}

    let member = message.mentions.members.first();

    if(!member) {
      if(message.guild.member(args[0])) {
        member = client.fetchUser(args[0]);
      } else {
        return message.channel.send("You must mention a valid member <:sad:613565502136254484>")
      }
    }

    if(!member.bannable)
      return message.channel.send("I can not ban someone if I don't have ban perms/The member is above me <:dead:613565497669320704>")

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.ban(reason)

      .catch(error => message.channel.send("Error! Please use the `/reportbug` command <:dead:613565497669320704>"));
      var banembed = new Discord.RichEmbed()
      .setDescription(`${member.user.username}\'s ID - \`${member.user.id}\`\n${message.author.username}\'s ID - \`${message.author.id}\``)
      .setColor(`FFA953`)
      .addField(`Reason`, `${reason}\n`)
      .setAuthor(`${message.author.tag} has banned ${member.user.tag}`, `${message.author.avatarURL}`)
      .setThumbnail(member.user.avatarURL)
      .setTimestamp()

      message.channel.send(banembed);
  }
// PURGE COMMAND
  if(command === "purge") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {return message.channel.send("You must have the **Manage Messages** permission to use this command <:sad:613565502136254484>")}

    const deleteCount = parseInt(args[0], 10) + 1;

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send("You must specify a number between 2-99 to delete to use this command <:sad:613565502136254484>")

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.channel.send("Error! Please use the `/reportbug` command <:dead:613565497669320704>"));
  }
// HELP COMMAND
  if(command === "help") {
    var embed1 = new Discord.RichEmbed()
      .setTitle(`**BASIC COMMANDS**\n`)
      .addField("/ping", "pings the bot")
      .addField("/set", "used to set your rank background and theme")
      .addField("/rank", "shows your rank")
      .addField("/leaderboard", "shows the top ranks")
      .addField("/invite", "sends an invite to the creators server")
      .addField("/hi", "says a friendly hello")
      .addField("/coinflip", "flips a coin")
      .addField("/diceroll", "rolls a dice")
      .addField("/info", "shows info about the bot")
      .addField("/daily", "gives you your daily 100 kredits")
      .addField("/kredits", "shows the amount of kredits you have")
      .setColor(`FFA953`)

    message.author.send(embed1)
    var embed2 = new Discord.RichEmbed()
      .setTitle(`**IMAGE COMMANDS**\n`)
      .addField("/wdt <provide image>", "who did this meme")
      .addField("/god <provide image>", "smash bros god meme")
      .addField("/mlg <provide image>", "mlg meme")
      .addField("/deepfry <provide image>", "deepfries your image")
      .addField("/will <provide image>", "will smith meme")
      .addField("/wth <provide image>", "worse than hitler meme")
      .addField("/inkling <provide image>", "inkling smash meme")
      .addField("/naenae <provide image>", "naenae frog meme")
      .addField("/freddy <provide image>", "Freddy Benson meme")
      .addField("/idubbbz <provide image>", "idubbbz meme")
      .addField("/filthy <provide image>", "it's time to stop meme")
      .addField("/dbh <provide image>", "detroit become human painting meme")
      .addField("/bobross <provide image>", "bobross painting meme")
      .addField("/cum <provide image>", "this will make you cum in a millisecond ad meme")
      .addField("/agree <provide image>", "I would want to meme")
      .addField("/greyscale <provide image>", "greyscales and image")
      .addField("/sepia <provide image>", "adds sepia to an image")
      .addField("/invert <provide image>", "inverts the colors of an image")
      .addField("/puppy", "shows an image of a puppy")
      .addField("/kitty", "shows an image of a kitty")
      .addField("/duck", "shows an image of a duck")
      .addField("/chinchilla", "shows an image of a chinchilla")
      .addField("/guineapig", "shows an image of a guineapig")
      .addField("/rat", "shows an image of a rat")
      .addField("/meme", "shows a meme")
      .setColor(`FFA953`)

    message.author.send(embed2)

    var embed3 = new Discord.RichEmbed()
      .setTitle(`**TEXT COMMANDS COMMANDS**\n`)
      .addField("/ystg <provide text>", "you see that guy meme")
      .addField("/idiot <provide text>", "talk to me like you're and idiot meme")
      .addField("/monster <provide text>", "you're a monster meme")
      .addField("/police <provide text>", "google search police meme")
      .addField("/pills <provide text>", "hard to swallow pills meme")
      .addField("/dma <provide text>", "dumbest man alive meme")
      .addField("/say <provide text>", "kinzoku repeats what you said")
      .setColor(`FFA953`)

    message.author.send(embed3)

    var embed4 = new Discord.RichEmbed()
      .setTitle(`**MISC COMMANDS COMMANDS**\n`)
      .addField("/emoji <emoji/emojiname>", "gives info on a certian emoji")
      .addField("/typingstart", "makes the bot start typing")
      .addField("/typingstop", "makes the bot stop typing")
      .addField("/avatar <@MENTION/NOTHING>", "shows the avatar of any user")
      .addField("/serverinfo", "lists info about the current server")
      .addField("/reportbug <MESSAGE>", "reports a bug to the dev")
      .addField("/changelog", "lists info about the latest update")
      .setColor(`FFA953`)

    message.author.send(embed4)

    var embed5 = new Discord.RichEmbed()
      .setTitle(`**STAFF COMMANDS COMMANDS**\n`)
      .addField("/jointest", "tests to see how it would look if someone joined the server")
      .addField("/leavetest", "tests to see how it would look if someone left the server")
      .addField("/warn <@MENTION> <REASON>", "warns a user")
      .addField("/kick <@MENTION> <REASON>", "kicks a user")
      .addField("/ban <@MENTION> <REASON>", "bans a user")
      .addField("/purge <AMOUNT>", "bulk deletes messages")
      .addField("/setup", "used to setup purification, join/leave messages, and more")
      .addField("/topic", "allows you to set the topic of a channel, but also allows you to add custom emojis to it without nitro")
      .setColor(`FFA953`)

    message.author.send(embed5)
    message.react("613566063824732189");
  }
// CHANGELOG COMMAND
  if(command === "changelog") {
      var changeembed = new Discord.RichEmbed()
        .setColor(`FFA953`)
        .addField(`June 24, 2020`, `- I added so much stuff, but mainy, instead of there being 3 themes, theres now 7`)
        .setThumbnail("https://i.imgur.com/wPFHxTc.png")
        .setAuthor("Changelog", "https://i.imgur.com/JuurDyu.png")

    message.channel.send(changeembed);
  }
// SETUP COMMAND
  if(command === "setup") {
    if (!message.member.hasPermission('ADMINISTRATOR')) {return message.channel.send("You must have the **Admin** permission to use this command <:sad:613565502136254484>")}
    var comm2 = args[0];

    if(comm2 == "join") {
      var comm3 = args[1];
      if(comm3 == "off") {
        if(!fs.existsSync(`operations/memberlog/${message.guild.id}.json`)) {return message.channel.send("Join messages are already off")}
        message.channel.send("Processing...")
        fs.unlinkSync(`operations/memberlog/${message.guild.id}.json`)
        return message.channel.send("Join/Leave messages turned off")
    }
      comm3 = comm3.replace("<", "")
      comm3 = comm3.replace(">", "")
      comm3 = comm3.replace("#", "")
      if(!message.guild.channels.get(comm3)) {return message.channel.send("You must mention a valid channel <:sad:613565502136254484>")}
      if(fs.existsSync(`operations/memberlog/${message.guild.id}.json`)) {
        message.channel.send("Overwriting old file...")
        fs.unlinkSync(`operations/memberlog/${message.guild.id}.json`)
      }
      fs.writeFileSync(`operations/memberlog/${message.guild.id}.json`, `{
  "channelid": "${comm3}"
}`)
      return message.channel.send("Join channel setup!")
    }

    if(comm2 == "purify") {
      var onoff = args[1]

      if (onoff == "off") {
        message.channel.send("Processing...")
        fs.unlinkSync(`./operations/purify/${message.guild.id}.ver`)
        message.reply(`\`${message.guild.name}\` is now unpurified`);
      } else {
          message.channel.startTyping();
          message.channel.send("Processing...")
          var images = [`${message.author.avatarURL}`, 'images/black.png'];

          var jimps = [];

          for (var i = 0; i < images.length; i++) {
            jimps.push(jimp.read(images[i]));
          }

          Promise.all(jimps).then(function(data) {
            return Promise.all(jimps);
          }).then(function(data) {

            data[1].write(`operations/purify/${message.guild.id}.ver`);

          message.reply(`Server is now purified from using commands with bad words and from users using bad words\nTo turn off purification, use the \`/purify off\` command\nThe commands /cum /idiot /wth are now not allowed to be used, it also deletes messages that swear in them`)
          message.channel.stopTyping();
        })
      }
    }

    if(comm2 == null) {
      var onoffpur;
      var onoffjoin;

      if(fs.existsSync(`operations/purify/${message.guild.id}.ver`)) {
        onoffpur = "<:check:613760362168320000>"
      } else {
        onoffpur = "<:cross:613762387757236245>"
      }

      if(fs.existsSync(`operations/memberlog/${message.guild.id}.json`)) {
        onoffjoin = "<:check:613760362168320000>"
      } else {
        onoffjoin = "<:cross:613762387757236245>"
      }

      var embed = new Discord.RichEmbed()
        .setTitle("**Setup**")
        .addField(`${onoffjoin} | Join/Leave messages`, "This will send a message every time someone joins and leaves the server in a channel that you choose\nType `/setup join <#channel>`\nTo turn it off, do `/setup join off`")
        .addField(`${onoffpur} | Purify Server`, "This will turn off all commands on this bot that use curse words (not a lot) and also delete all messages with curse words\nTo turn it on, type `/setup purify`, and to turn it off type `/setup purify off`")
        .setColor("FFA953")
        .setThumbnail(message.guild.iconURL)
      message.channel.send(embed)
    }
  }
// SERVER INFO COMMAND
  if(command === "serverinfo") {
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong",
        "russia": "Russia",
        "southafrica": "South Africa"
    };
    var embed = new Discord.RichEmbed()
      .setAuthor(`Owned by ${message.guild.owner.user.username}`, message.guild.owner.user.avatarURL)
      .addField(`Server name`, message.guild.name)
      .setThumbnail(message.guild.iconURL)
      .addField("Verification Level", `${verifLevels[message.guild.verificationLevel]}`)
      .addField("Total Server Members", `${message.guild.members.size} Members`)
      .addField("Human Members", `${message.guild.members.filter(member => !member.user.bot).size} Humans (${message.guild.members.filter(member => member.user.bot).size} Bots)`)
      .addField("Channels", `${message.guild.channels.size} Channels`)
      .addField("Roles", `${message.guild.roles.size} Roles`)
      .addField("ID", message.guild.id)
      .addField("Region", region[message.guild.region])
      .setColor("RANDOM")
    message.channel.send(embed)
  }
// PUPPY COMMAND
  if(command === "puppy") {
    var sub = "puppy"
    randomPuppy()
    .then(url => {
      var embed = new  Discord.RichEmbed()
        .setAuthor("Reddit", "https://www.redditstatic.com/new-icon.png")
        .setTitle("Puppo 🐶")
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Taken from random-puppy API`)
        .setTimestamp()
      message.channel.send(embed);
    })
  }
// MEME COMMAND
  if(command === "meme") {
    var sub = "dankmemes"
    randomPuppy(sub)
    .then(url => {
      var embed = new  Discord.RichEmbed()
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Taken from r/${sub}`)
        .setTimestamp()
        .setAuthor("Reddit", "https://www.redditstatic.com/new-icon.png")
      message.channel.send(embed);
    })
  }
// KITTY COMMAND
  if(command === "kitty") {
    var sub = "cats"
    randomPuppy(sub)
    .then(url => {
      var embed = new  Discord.RichEmbed()
        .setTitle("Kitty 🐱")
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Taken from r/${sub}`)
        .setTimestamp()
        .setAuthor("Reddit", "https://www.redditstatic.com/new-icon.png")
      message.channel.send(embed);
    })
  }
// DUCK COMMAND
  if(command === "duck") {
    var sub = "duck"
    randomPuppy(sub)
    .then(url => {
      var embed = new  Discord.RichEmbed()
        .setTitle("Duck 🦆")
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Taken from r/${sub}`)
        .setTimestamp()
        .setAuthor("Reddit", "https://www.redditstatic.com/new-icon.png")
      message.channel.send(embed);
    })
  }
// CHINCHILLA COMMAND
  if(command === "chinchilla") {
    var odds = Math.floor((Math.random() * 1000) + 1);
    if(odds == "50") {
      var embed = new Discord.RichEmbed()
        .setTitle("Huh, it seams you have triggered a command with the 1/999 chance of seeing a photo of the bot creators chinchilla, so say hello to Francis")
        .setImage("https://i.imgur.com/v0qnOIv.png")
        .setColor("RANDOM")
      return message.channel.send(embed)
    }
    var sub = "chinchilla"
    randomPuppy(sub)
    .then(url => {
      var embed = new  Discord.RichEmbed()
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Taken from r/${sub}`)
        .setTimestamp()
        .setAuthor("Reddit", "https://www.redditstatic.com/new-icon.png")
      message.channel.send(embed);
    })
  }
// GUINEAPIG COMMAND
  if(command === "guineapig") {
    var sub = "guineapigs"
    randomPuppy(sub)
    .then(url => {
      var embed = new  Discord.RichEmbed()
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Taken from r/${sub}`)
        .setTimestamp()
        .setAuthor("Reddit", "https://www.redditstatic.com/new-icon.png")
      message.channel.send(embed);
    })
  }
// RAT COMMAND
  if(command === "rat") {
    var sub = "RATS"
    randomPuppy(sub)
    .then(url => {
      var embed = new  Discord.RichEmbed()
        .setImage(url)
        .setColor("RANDOM")
        .setFooter(`Taken from r/${sub}`)
        .setTimestamp()
        .setAuthor("Reddit", "https://www.redditstatic.com/new-icon.png")
      message.channel.send(embed);
    })
  }
// DAILY COMMAND
  if (command === 'daily') {
    var user = message.mentions.users.first() || message.author
    var output = await eco.Daily(message.author.id)
    if (output.updated) {
      var profile = await eco.AddToBalance(user.id, 100)
      var embed = new Discord.RichEmbed()
        .setTitle(`<:coin:613565665210662912> **|** ${user.username} claimed their daily **100 kredits**, they now have **${profile.newbalance}** kredits`)
        .setColor("FFA953")
      message.channel.send(embed);
    } else {
      var embed = new Discord.RichEmbed()
        .setTitle(`<:sad:613565502136254484> **|** You must wait **${output.timetowait}** until you can claim your daily kredits again`)
        .setColor("FFA953")
      message.channel.send(embed);
    }
  }
// RESET DAILY COMMAND
  if (command === 'resetdaily') {
    if(message.author.id == "340225283560833026") {
      var user = message.mentions.users.first() || message.author
      var output = await eco.ResetDaily(user.id)
      message.channel.send(`\`${user.username}\'s daily has been reset\``)
    } else {
      return;
    }
  }
// GIVE KREDITS COMMAND
  if (command === 'givekredits') {
    if(message.author.id == "340225283560833026") {
      var request = args[1]
      if(isNaN(request)) {return message.channel.send("`Please request a number`")}
      var user = message.mentions.users.first() || message.author
      var profile = await eco.AddToBalance(user.id, request)
      var user = message.mentions.users.first() || message.author
      var output = await eco.ResetDaily(user.id)
      message.channel.send(`\`${user.username} has gained ${request} kredits\``)
    } else {
      return;
    }
  }
// KREDITS COMMAND
  if(command === "kredits") {
    var user = message.mentions.users.first() || message.author
    var profile = await eco.FetchBalance(user.id)
    message.channel.send(`<:coin:613565665210662912> **| ${user.username}** has **${profile.balance} kredits**`)
  }
});

client.on(`message`, async message => {
  if (message.author.bot) return
  var profile = await dl.Fetch(message.author.id)
  if(profile.level == "0") {
    return dl.AddLevel(message.author.id, 1);
  }
  var levelmult;
  if(profile.level > 10) {
    var levelmult = 10;
  } else {
    var levelmult = profile.level;
  }
  if(profile.xp > levelmult * 100) {
    return dl.SetXp(message.author.id, 0)
  }
  dl.AddXp(message.author.id, 1)
  if (profile.xp + 1 > profile.level * 100) {
   dl.AddLevel(message.author.id, 1)
   dl.SetXp(message.author.id, 0)
   var output = await dl.Fetch(message.author.id)
   message.channel.startTyping()

   const canvas = Canvas.createCanvas(137, 51);
   const ctx = canvas.getContext('2d');
   const member = message.author
   var user = message.author
   var output = await dl.Fetch(user.id)

   if(!fs.existsSync(`./images/profile/backgrounds/${message.author.id}.png`)) {
     var card = await Canvas.loadImage(`./images/profile/backgrounds/leveldefault.png`)
   } else {
     var card = await Canvas.loadImage(`./images/profile/backgrounds/${message.author.id}.png`)
   }

   ctx.drawImage(card, 0, 0, 137, 51);

   var card = await Canvas.loadImage('./images/profile/new/rankup.png')
   ctx.drawImage(card, 0, 0, 137, 51);

   const { registerFont, createCanvas } = require('canvas')
   registerFont('images/profile/new/font.ttf', { family: 'montserrat' })

   var username = message.author.username
   username = username.toUpperCase();

   ctx.textAlign = 'center';

   ctx.font = '12px montserrat';
   ctx.fillStyle = '#000000';
   ctx.fillText(`RANK UP`, 88, 23);
   ctx.fillStyle = '#FFA953';
   ctx.fillText(`RANK UP`, 88, 21);
   ctx.fillStyle = '#000000';
   ctx.fillText(`LEVEL ${output.level.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 88, 42);
   ctx.fillStyle = '#ffffff';
   ctx.fillText(`LEVEL ${output.level.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, 88, 40);

   if(!user.avatarURL) {
     var avatar = await Canvas.loadImage('./images/profile/defaultavatar.png');
   } else {
     var avatar = await Canvas.loadImage(user.avatarURL);
   }
   ctx.beginPath();
   ctx.arc(25, 25, 17, 0, Math.PI * 2, true);
   ctx.closePath();
   ctx.clip();
   ctx.drawImage(avatar, 7, 8, 36, 35);

   var profile = await eco.AddToBalance(message.author.id, "100")

   const attachment = new Discord.Attachment(canvas.toBuffer(), 'rankup.png');

   message.channel.send(attachment)
   message.channel.stopTyping();

 }})

client.login(config.token);
