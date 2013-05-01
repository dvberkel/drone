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

```json
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

By adding any argument to the commandline call the full data is
generate. E.g.

```shell
node read_data.js full
```

results in a stream of data like

```json
{ header: 1432778632,
  droneState:
   { flying: 0,
     videoEnabled: 0,
     visionEnabled: 0,
     controlAlgorithm: 0,
     altitudeControlAlgorithm: 1,
     startButtonState: 0,
     controlCommandAck: 1,
     cameraReady: 1,
     travellingEnabled: 0,
     usbReady: 0,
     navdataDemo: 1,
     navdataBootstrap: 0,
     motorProblem: 0,
     communicationLost: 0,
     softwareFault: 0,
     lowBattery: 0,
     userEmergencyLanding: 0,
     timerElapsed: 1,
     MagnometerNeedsCalibration: 0,
     anglesOutOfRange: 1,
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
     emergencyLanding: 1 },
  sequenceNumber: 97673,
  visionFlag: 0,
  demo:
   { controlState: 'CTRL_DEFAULT',
     flyState: 'FLYING_OK',
     batteryPercentage: 34,
     rotation:
      { frontBack: 0.821,
        pitch: 0.821,
        theta: 0.821,
        y: 0.821,
        leftRight: -4.962,
        roll: -4.962,
        phi: -4.962,
        x: -4.962,
        clockwise: -7.003,
        yaw: -7.003,
        psi: -7.003,
        z: -7.003 },
     frontBackDegrees: 0.821,
     leftRightDegrees: -4.962,
     clockwiseDegrees: -7.003,
     altitude: 0,
     altitudeMeters: 0,
     velocity: { x: 0, y: 0, z: 0 },
     xVelocity: 0,
     yVelocity: 0,
     zVelocity: 0,
     frameIndex: 0,
     detection: { camera: [Object], tagIndex: 0 },
     drone: { camera: [Object] } },
  visionDetect:
   { nbDetected: 0,
     type: [ 0, 0, 0, 0 ],
     xc: [ 0, 0, 0, 0 ],
     yc: [ 0, 0, 0, 0 ],
     width: [ 0, 0, 0, 0 ],
     height: [ 0, 0, 0, 0 ],
     dist: [ 0, 0, 0, 0 ],
     orientationAngle: [ 0, 0, 0, 0 ],
     rotation: [ [Object], [Object], [Object], [Object] ],
     translation: [ [Object], [Object], [Object], [Object] ],
     cameraSource: [ 0, 0, 0, 0 ] } }
```

[parrot]: http://ardrone2.parrot.com/
[node]: http://nodejs.org/