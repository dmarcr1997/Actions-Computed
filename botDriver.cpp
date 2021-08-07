int trigger1 = 8;      //Define IO pins
int echo1 = 9;
int trigger2 = 7;
int echo2 = 6;

long duration;
int distL, distR;

void setup()
{
  pinMode(trigger1, OUTPUT);   //Define pin
  pinMode(echo1, INPUT);
  pinMode(trigger2, OUTPUT);   //Define pin
  pinMode(echo2, INPUT);
  
  Serial.begin(9600);           //Starts the serial communication
}

int calculateDist(int echo, int trig){
  int distance = 0;
  digitalWrite(trig, LOW);  
  delay(1000);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  duration = pulseIn(echo, HIGH); 
  distance= duration*0.034/2; 
  if(distance > 60){
    distance = 60;       
  }
  return distance;
}

void checkDists(int distL, int distR){
  if ((distL >45 && distR>45) && (distL <60 && distR<60))
  {
    Serial.println("New Tab"); 
    Serial.print("DistanceL: ");       
    Serial.println(distL);
    Serial.print("DistanceR: ");       
    Serial.println(distR);
    delay (500);
  }
  else if (distR <=5 && distL <=5){
      Serial.println("Close");
  }
  else if (distL>=10 && distL<=20 && distR >= 30)
  {
    Serial.println("Volume Lock");
    while(distL<=30)
    {
      
      distL =calculateDist(echo1, trigger1);
      Serial.print("DistanceL: ");       
      Serial.println(distL);
      if (distL<10) //Hand pushed in 
      {
        Serial.println("Volume Increased"); 
        delay (300);
      }
      else if (distL>20 && distL<=30) //Hand pulled out
      {
        Serial.println("Volume Decreased"); 
        delay (300);
      }
    }
  }
  
  else if (distR>=10 && distR<=20 && distL >= 30)
  {
    Serial.println("Brightness Lock");
    while(distR<=30)
    {
      distR =calculateDist(echo2, trigger2);
      Serial.print("DistanceR: ");       
      Serial.println(distR);
      if (distR<10) 
      {
        Serial.println("Brightness Increased"); 
        delay (300);
      }
      else if (distR>20 && distR <= 30) 
      {
        Serial.println("Brightness Decreased"); 
        delay (300);
      }
    }
  }
  
  delay(200);
}

void loop()
{
  distL= calculateDist(echo1, trigger1);

  distR= calculateDist(echo2, trigger2);

  Serial.println("...");
  Serial.print("DistanceL: ");
  Serial.println(distL);
  Serial.print("DistanceR: ");
  Serial.println(distR);
  Serial.println("...");
  
  checkDists(distL, distR);
}