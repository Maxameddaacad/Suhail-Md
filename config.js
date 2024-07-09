const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252611525786";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,252xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,252xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "252611525786,252xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_24_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDksXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXdFBPVm1Xa0RZb0twdlZZZjljRENXeW1EUDZjd213RkJGcXNsdU1jOThJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1MjYxMTUyNTc4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjZDNDg2ODRDQjMwQUY2MTk0MTY3NzlGQkRDQkJDMTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTAyNjg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjExNTI1Nzg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQjIwMjRGREY3RkEzMDc1NDBDMzRCRkE4NDAzNDkyRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MDI2ODhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVElhUUlDUHlSOTZzVWcxNTUtX1FfZ1wiLFxuICBcInBob25lSWRcIjogXCIyNmIxYTA2OC02OGJiLTQyOWEtODk3ZS0xOTgzMTQwZTIwZjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAxMjQsXG4gICAgICAyMzgsXG4gICAgICAxOTEsXG4gICAgICAxOTIsXG4gICAgICA1NixcbiAgICAgIDU3LFxuICAgICAgMTQzLFxuICAgICAgMTc2LFxuICAgICAgMTQwLFxuICAgICAgNDUsXG4gICAgICAxMzYsXG4gICAgICA0NSxcbiAgICAgIDgzLFxuICAgICAgMjUzLFxuICAgICAgMTU1LFxuICAgICAgMjE0LFxuICAgICAgMjM1LFxuICAgICAgMTc0LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDU2LFxuICAgICAgODUsXG4gICAgICA0NixcbiAgICAgIDIxNCxcbiAgICAgIDE2NixcbiAgICAgIDMzLFxuICAgICAgMTMyLFxuICAgICAgMTg2LFxuICAgICAgNSxcbiAgICAgIDE1NyxcbiAgICAgIDI0OCxcbiAgICAgIDE5MSxcbiAgICAgIDEwNSxcbiAgICAgIDg4LFxuICAgICAgNjcsXG4gICAgICA5OSxcbiAgICAgIDEyMCxcbiAgICAgIDE5LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0VFNzNHNU1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjYxMTUyNTc4NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDIwMDE0MzAwMDgwNTE6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcXczWThHRUphVHM3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJvM1lyLzlSaGNyOWpWQWdxc1dlTDk0NkxLRFNGcFNySHhFSDhzbk1UbXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZk50QWlvc1ZKMEJ2U3VVNkhTTDV2SHhPQXNEZndKNFFjRFphTm9TWWlzeWd2SldoLzFadFZiU0JmOVhDbEc4NFhYaXFCYmNsV21zOGpEY2ZGSFYwRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidWZDQStuRDQ0TTBMN3pRVjQ1YXA2ajBuNm5RckNQNnNjTWtBaEdqeEhVWWdOS0RTTjVyNi9EQWtEME50aFk5UWR5RnprY1hlS1JRNjZtYTV6bmlUakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjExNTI1Nzg2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MDI2ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFUFJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVQUi5qc29uIjogIntcImtleURhdGFcIjpcImRwVkJncVA1ekF2RElaQXNVNit0b3NlK0J6V2dQNzF6dEdremZOMEp6WnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0MzU5OTkxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTAyNjg2MDUxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "maxamed-daacad",
  ownername:process.env.OWNER_NAME|| "maxamed",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
