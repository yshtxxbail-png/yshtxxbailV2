import './Utils/long-safe.js';
import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
HALO SAYA YSHTXXBAILV2 SALKEN YAK
`));
console.log(chalk.hex("#00c2ff")("yshtxxbail/ yshtxxbailV2 20 November— a Baileys-based WhatsApp Web library\n"));
console.log(chalk.gray("Stay updated with the latest yshtxxbailV2 & Baileys news:"));
console.log(chalk.cyan("https://whatsapp.com/channel/0029VbDUxFj6rsQt0QVPxV2H\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
