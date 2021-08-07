https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/618/131/datas/gallery.jpg
## Inspiration
In my day-to-day life, I work at a computer for 8+ hours a day, and as often as I can I try to find some way to cut this time down using various shortcuts. So I thought of some of the tasks at my computer that has not been automated as of yet. These included the automatic opening of browser windows and tabs, changing volume, and changing the brightness. 
## What it does
This device can automatically open browser windows, increase and decrease the volume on my computer, increase and decrease the brightness, and shut itself off.
## How we built it
I built this using two ultrasonic sensors connected to an Arduino through a breadboard. The Arduino outputs some values based on various locations of hands. Then a node application reads the values from a serial port and spins up changes to my computer.
https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/618/127/datas/gallery.jpg
https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/618/128/datas/gallery.jpg
## Challenges we ran into
There were two challenges I ran into regarding this project. These included setting the sensors up; initially, they did not want to work and continuously returned no values. After getting this fixed and writing up the code to read the values, I ran into an issue with getting node permission to read from the serial port that the Arduino was on. After some trial and error with the ports, I found that I was trying to open the port twice, and was able to fix this fairly easy after that.
## Accomplishments that we're proud of
I set up the serial port connection and data processing myself, which is something I have never done before. I feel that I accomplished all I set out to do with this app and cannot wait to extend this device.
## What we learned
I learned a lot regarding reading and processing data from a serial port and how to determine distance using ultrasonic sensors.
## What's next for Actions Computed
I wanted to extend this to a keyboard cover that can be used with a more focused sensor and allow more direct gestures besides hand location.

