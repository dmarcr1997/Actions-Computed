const SerialPort = require('serialport');
const open = require('open');
const loudness = require('loudness')
const brightness = require('brightness');
const Readline = require('@serialport/parser-readline')
const parser = new Readline()
const port = new SerialPort("\\\\.\\COM7", {
  baudRate: 9600
})
port.pipe(parser)
parser.on('data', (data) => {
    let datValue = data.trim()
    
    if(datValue === "Close"){
        console.log("Goodbye ;)")
        process.exit()
    } else if(datValue === "New Tab"){
        openChrome().then(() => console.log('\nOpened Tab\n')).catch(err => console.log(err))
    } else if (datValue === "Left Locked") {
        console.log("Increase Vol less 10\nDecrease Vol Greater than 20\nEnd Lock > 40")
    } else if (datValue === "Volume Increased"){
        increaseVol().catch(err => console.log(err))
    } else if (datValue === "Volume Decreased"){
        decreaseVol().catch(err => console.log(err))
    } else if (datValue === "Right Locked") {
        console.log("Increase Brightness less 10\nDecrease Vol Greater than 20\nEnd Lock > 40")
    } else if (datValue === "Brightness Increased"){
        increaseBrightness().catch(err => console.log(err))
    } else if (datValue === "Brightness Decreased"){
        decreaseBrightness().catch(err => console.log(err))
    }
    
    console.log(data)
})

// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
})

async function openChrome(){
    await open('https://google.com', {app: ['google chrome']});
}

async function increaseVol(){
    let currVol = await loudness.getVolume();
    let vol = parseInt(currVol) + 2;
    await loudness.setVolume(vol);
}

async function decreaseVol(){
    let currVol = await loudness.getVolume();
    let vol = parseInt(currVol) - 2;
    await loudness.setVolume(vol);
}

async function increaseBrightness(){
    let BR = 0.0
    await brightness.get().then(level => {
        BR = level + 0.1
    });
     
    await brightness.set(BR).then(() => {
        console.log(`Changed brightness to ${BR}`);
    });
}

async function decreaseBrightness(){
    let BR = 0.0
    await brightness.get().then(level => {
        BR = level - 0.1
    });
     
    await brightness.set(BR).then(() => {
        console.log(`Changed brightness to ${BR}`);
    });
}