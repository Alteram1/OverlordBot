const fs = require('fs');
const Canvas = require('canvas');
const Discord = require('discord.js');

/** 
* Generate image of bingo balls.
* @param {collection} numbers - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @param {object} interaction - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @return {Image Buffer} Brief description of the returning value here.
*/

exports.generateCanvas = async function(game, numbers, interaction) {
    const channel = interaction.channel;
    if (!channel) return;

    const canvas = Canvas.createCanvas(700, 300);
    const context = canvas.getContext('2d');

    const Letter = numbers.last(4);
    const Number = numbers.lastKey(4);
    let bigLetter, bigColor, bigBGColor;
    let medLetter, medColor, medBGColor;
    let smallLetter, smallColor, smallBGColor;
    let miniLetter, miniColor, miniBGColor;

    switch (numbers.size) {
        case 0:
        console.log(`Oh NO NO HELP NOOOO AHHHHHH!`);
        break;

        case 1:
        bigLetter = [Letter[0], Number[0]];
        medLetter = [null, null];
        smallLetter = [null, null];
        miniLetter = [null, null];
        break;

        case 2:
        bigLetter = [Letter[1], Number[1]];
        medLetter = [Letter[0], Number[0]];
        smallLetter = [null, null];
        miniLetter = [null, null];
        break;

        case 3:
        bigLetter = [Letter[2], Number[2]];
        medLetter = [Letter[1], Number[1]];
        smallLetter = [Letter[0], Number[0]];
        miniLetter = [null, null];
        break;

        default:
        bigLetter = [Letter[3], Number[3]];
        medLetter = [Letter[2], Number[2]];
        smallLetter = [Letter[1], Number[1]];
        miniLetter = [Letter[0], Number[0]];
        break;
    }

    //Set colors
    switch (bigLetter[0]) {
        case 'B':
        bigColor = '#00f'; //'blue'
        bigBGColor = '#b3b3ff';
        break;
        case 'I':
        bigColor = '#f00'; //'red'
        bigBGColor = '#ffb3b3';
        break;
        case 'N':
        bigColor = '#ff8000'; //'orange'
        bigBGColor = '#ffd9b3';
        break;
        case 'G':
        bigColor = '#009900'; //'green'
        bigBGColor = '#b3ffb3';
        break;
        case 'O':
        bigColor = '#8000ff'; //'purple'
        bigBGColor = '#d9b3ff';
        break;
        default:
        bigColor = '#666';
        bigBGColor = '#aaa';
        break;
    }
    //Set colors
    switch (medLetter[0]) {
        case 'B':
        medColor = '#00f'; //'blue';
        medBGColor = '#b3b3ff';
        break;
        case 'I':
        medColor = '#f00'; //'red'
        medBGColor = '#ffb3b3';
        break;
        case 'N':
        medColor = '#ff8000'; //'orange'
        medBGColor = '#ffd9b3';
        break;
        case 'G':
        medColor = '#009900'; //'green'
        medBGColor = '#b3ffb3';
        break;
        case 'O':
        medColor = '#8000ff'; //'purple'
        medBGColor = '#d9b3ff';
        break;
        default:
        medColor = '#666';
        medBGColor = '#aaa';
        break;
    }
    //Set colors
    switch (smallLetter[0]) {
        case 'B':
        smallColor = '#00f'; //'blue';
        smallBGColor = '#b3b3ff';
        break;
        case 'I':
        smallColor = '#f00'; //'red'
        smallBGColor = '#ffb3b3';
        break;
        case 'N':
        smallColor = '#ff8000'; //'orange'
        smallBGColor = '#ffd9b3';
        break;
        case 'G':
        smallColor = '#009900'; //'green'
        smallBGColor = '#b3ffb3';
        break;
        case 'O':
        smallColor = '#8000ff'; //'purple'
        smallBGColor = '#d9b3ff';
        break;
        default:
        smallColor = '#666';
        smallBGColor = '#aaa';
        break;
    }
    //Set colors
    switch (miniLetter[0]) {
        case 'B':
        miniColor = '#00f'; //'blue';
        miniBGColor = '#b3b3ff';
        break;
        case 'I':
        miniColor = '#f00'; //'red'
        miniBGColor = '#ffb3b3';
        break;
        case 'N':
        miniColor = '#ff8000'; //'orange'
        miniBGColor = '#ffd9b3';
        break;
        case 'G':
        miniColor = '#009900'; //'green'
        miniBGColor = '#b3ffb3';
        break;
        case 'O':
        miniColor = '#8000ff'; //'purple'
        miniBGColor = '#d9b3ff';
        break;
        default:
        miniColor = '#666';
        miniBGColor = '#aaa';
        break;
    }

    // console.log(`big color: ${bigColor}, big letter: ${bigLetter[0]}`)
    // console.log(`medium color: ${medColor}, medium letter: ${medLetter[0]}`)
    // console.log(`small color: ${smallColor}, small letter: ${smallLetter[0]}`)
    // console.log(`mini color: ${miniColor}, mini letter: ${miniLetter[0]}`)

    context.shadowColor = '#262626';
    context.shadowBlur = 1;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 16;
    // Big
    context.beginPath();
    context.arc(568, 150, 122, 0, Math.PI * 2, true);
    context.closePath();
    let gradient = context.createRadialGradient(568, 150, 112, 568, 150, 90);
    gradient.addColorStop(0, bigColor);
    gradient.addColorStop(1, bigBGColor);
    context.fillStyle = gradient;
    context.fill(5, 5, 200, 200);

    //Add numbers.last letter and numbers.lastkey number

    // Medium
    context.beginPath();
    context.arc(350, 91, 92, 0, Math.PI * 2, true);
    context.closePath();
    gradient = context.createRadialGradient(350, 91, 92, 350, 91, 65);
    gradient.addColorStop(0, medColor);
    gradient.addColorStop(1, medBGColor);
    context.fillStyle = gradient;
    context.fill(5, 5, 200, 200);

    // Small
    context.beginPath();
    context.arc(182, 150, 66, 0, Math.PI * 2, true);
    context.closePath();
    gradient = context.createRadialGradient(182, 150, 66, 182, 150, 48);
    gradient.addColorStop(0, smallColor);
    gradient.addColorStop(1, smallBGColor);
    context.fillStyle = gradient;
    context.fill(5, 5, 200, 200);

    // Mini
    context.beginPath();
    context.arc(75, 236, 54, 0, Math.PI * 2, true);
    context.closePath();
    gradient = context.createRadialGradient(75, 236, 54, 75, 236, 38);
    gradient.addColorStop(0, miniColor);
    gradient.addColorStop(1, miniBGColor);
    context.fillStyle = gradient;
    context.fill(5, 5, 200, 200);

    context.shadowColor = null;
    context.shadowBlur = null;
    context.shadowOffsetX = null;
    context.shadowOffsetY = null;

    context.font = 'small-caps bold 80px sans';
    context.textAlign = 'center';
    context.fillStyle = 'black';

    //big
    context.fillText(`${bigLetter[0]}`, 568, 140);
    context.fillText(`${bigLetter[1]}`, 568, 210);

    //medium
    if (medLetter[0]) {
        context.font = 'small-caps bold 60px sans';
        context.fillText(`${medLetter[0]}`, 350, 80);
        context.fillText(`${medLetter[1]}`, 350, 130);
    }

    //small
    if (smallLetter[0]) {
        context.font = 'small-caps bold 50px sans';
        context.fillText(`${smallLetter[0]}`, 182, 145);
        context.fillText(`${smallLetter[1]}`, 182, 185);
    }

    //mini
    if (miniLetter[0]) {
        context.font = 'small-caps bold 36px sans';
        context.fillText(`${miniLetter[0]}`, 75, 235);
        context.fillText(`${miniLetter[1]}`, 75, 265);
    }

    // const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    // context.drawImage(avatar, 25, 25, 200, 200);
    
    
    const CanvasList = await game.drawnBallsCanvasList;
    var buf = canvas.toBuffer();
    fs.writeFileSync("test.png", buf);
    
    //let n = new Discord.MessageAttachment(canvas.toBuffer(), `bingo_balls.png`)
    let n = new Discord.MessageAttachment(canvas.toBuffer(), `bingo_balls${numbers.size}.png`)
    //console.log(n)
    const ballEmbed = new Discord.MessageEmbed()
        .setTitle(`Bingo Numbers for Game #${game.gameNumber}`)
        .setDescription('New number appears on right, last three numbers to left of it.')
        .attachFiles(n)
        .setImage(`attachment://bingo_balls${numbers.size}.png`);
    //ballEmbed.setImage('https://.../bingo_balls1.png')
    
    if (CanvasList.length >= 1) {
        var newCanvas = await CanvasList[0].edit(ballEmbed)
        
        CanvasList.splice(0, 1);
        game.drawnBallsCanvasList.push(newCanvas);
    } else { 
        var newCanvas = await channel.send(ballEmbed);
        game.drawnBallsCanvasList.push(newCanvas);
        console.log(CanvasList.length)
    }
}
