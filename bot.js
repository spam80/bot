const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : KING_Dz `); 
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '#daily1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '#credit1'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '#rep1'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '#daily2'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '#credit2'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '#rep2'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === '#daily3'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === '#credit3'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === '#rep3'){
        message.channel.send('#credits')
    }
});

client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`:drum: :drum:  :cartwheel: :cartwheel: :cartwheel: :cartwheel: :syringe:`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By KING_Dz , Farm Credit By KING_Dz, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By KING_Dz , Farm Credit By KING_Dz, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client2.login(process.env.BOT_TOKEN2);// لا تغير فيها شيء
client3.login(process.env.BOT_TOKEN3);// لا تغير فيها شيء