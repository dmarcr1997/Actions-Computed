const SerialPort = require('serialport');

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
    } 
    console.log(data)
})

// Open errors will be emitted as an error event
port.on('error', function(err) {
    console.log('Error: ', err.message)
})