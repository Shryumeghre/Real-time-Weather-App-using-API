import EventEmitter from "events";

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is Shryu");
});

event.on("sayMyName", () => {
    console.log("Purushottam");
});

event.on("sayMyName", () => {
    console.log("Meghare");
});

event.emit("sayMyName");