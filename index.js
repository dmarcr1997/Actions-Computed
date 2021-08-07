const SerialPort = require('serialport');
const open = require('open');
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
        openChrome().then(() => console.log('/nOpened Tab/n')).catch(err => console.log(err))
    } else if (datValue === "Left Locked") {
        console.log("Increase Vol less 10/nDecrease Vol Greater than 20/nEnd Lock > 40")
    } else if (datValue === "Volume Increased"){

    } else if (datValue === "Volume Decreased"){

    } else if (datValue === "Right Locked") {
        console.log("Increase Brightness less 10/nDecrease Vol Greater than 20/nEnd Lock > 40")
    } else if (datValue === "Brightness Increased"){

    } else if (datValue === "Brightness Decreased"){

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