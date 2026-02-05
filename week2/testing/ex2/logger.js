import fs from "fs";

export function writeMessage(message){
    fs.appendFileSync("./ex2/log.txt", message + "\n")
}