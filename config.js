const fs = require("fs"); 
require("dotenv").config();

module.exports = {
    prefix: process.env.PREFIX || ".",
    ownerName: process.env.OWNER_NAME || "Drex",
    ownerNumber: process.env.OWNER_NUMBER || "243904785035",
    mode: process.env.MODE || "public",
    region: process.env.REGION || "Africa/Kinshasa",
    botName: process.env.BOT_NAME || "ᎠᎯᏒᏦ_ᎿᏒᎯᎨᏁᎨᏁᎶ",
    exifPack: process.env.EXIF_PACK || "ᎠᎯᏒᏦ_ᎿᏒᎯᎨᏁᎨᏁᎶ",
    exifAuthor: process.env.EXIF_AUTHOR || "Drex",
    timeZone: process.env.TIME_ZONE || "Africa/Kinshasa",
    presenceStatus: process.env.PRESENCE_STATUS || "unavailable",
    autoRead: process.env.AUTO_READ === "true",
    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true",
    autoReact: process.env.AUTO_REACT === "true",
    sessionId: process.env.SESSION_ID || "",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => {
    fs.unwatchFile(file); 
    console.log(`Update '${__filename}'`); 
    delete require.cache[file];
    require(file); 
});