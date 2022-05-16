export class MappoolsBuilder {
  constructor() {
    this.mappools = new Map();
  }
  addBeatmaps(mode, ...ids) {
    if(this.mappools.has(mode)) throw new Error(`Mappool exists for ${mode}`);
    this.mappools.set(mode, ids);
    return this;
  }
  build() {
    const output = {};
    for(const [mode, ids] of this.mappools.entries()){
      output[mode] = ids;
    }
    return output;
  }
}
