import { MappoolsBuilder } from "./Mappools.js";

export class BracketsBuilder {
  constructor() {
    this.brackets = new Map();
  }
  addBracket(name, callback) {
    if(this.brackets.has(name)) throw new Error(`Bracket exists for ${name}`);
    const mappools = new MappoolsBuilder();
    callback(mappools);
    this.brackets.set(name, mappools.build());
    return this;
  }
  build() {
    const output = {};
    for(const [name, info] of this.brackets.entries()){
      output[name] = info;
    }
    return output;
  }
}
