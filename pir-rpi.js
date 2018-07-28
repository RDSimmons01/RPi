const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {

    // Create a new `motion` hardware instance.
    const motion = new five.IR.Motion(7);

    // "calibrated" occurs once, at the beginning of a session,
    motion.on("calibrated", function() {
        console.log("calibrated", Date.now());
    });

    // "motionstart" events are fired when the "calibrated"
    // proximal area is disrupted, generally by some form of movement
    motion.on("motionstart", function() {
        console.log("motionstart", Date.now());
    });

    // "motionend" events are fired following a "motionstart" event
    // when no movement has occurred in X ms
    motion.on("motionend", function() {
        console.log("motionend", Date.now());
    });
});
