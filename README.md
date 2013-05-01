Drone
=====

programming the [parrat AR Drone][parrot] with [node][].

Getting started
---------------

Connect to your drone wifi and try out various programs.


Programs
--------

This section introduces various programs to try out. They all work by
the following principle.

```shell
node <section_name>
```

### read_data.js

This logs navigation data to standard out. You can expect a stream of the
following output.

```javascript
{ header: 1432778632,
  droneState:
   { flying: 0,
     videoEnabled: 0,
     visionEnabled: 0,
     controlAlgorithm: 0,
     altitudeControlAlgorithm: 1,
     startButtonState: 0,
     controlCommandAck: 0,
     cameraReady: 1,
     travellingEnabled: 0,
     usbReady: 0,
     navdataDemo: 1,
     navdataBootstrap: 1,
     motorProblem: 0,
     communicationLost: 0,
     softwareFault: 0,
     lowBattery: 0,
     userEmergencyLanding: 0,
     timerElapsed: 0,
     MagnometerNeedsCalibration: 0,
     anglesOutOfRange: 0,
     tooMuchWind: 0,
     ultrasonicSensorDeaf: 0,
     cutoutDetected: 0,
     picVersionNumberOk: 1,
     atCodecThreadOn: 1,
     navdataThreadOn: 1,
     videoThreadOn: 1,
     acquisitionThreadOn: 1,
     controlWatchdogDelay: 0,
     adcWatchdogDelay: 0,
     comWatchdogProblem: 0,
     emergencyLanding: 0 },
  sequenceNumber: 2790,
  visionFlag: 1 }
```

[parrot]: http://ardrone2.parrot.com/
[node]: http://nodejs.org/