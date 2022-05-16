import { ServerBuilder } from "../../src/builder/Server";

/**
 * osu!Malaysia
 */
const server = new ServerBuilder()
  .setName('osu!Malaysia')
  .setUrl('https://discord.gg/bKWwf8j')
  .setImage('https://cdn.discordapp.com/attachments/360609816554504203/534046219375345664/osu_Malaysian_Discord_Chino_Banner.png')
  .build();

export default server;
