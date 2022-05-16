export class StaffsBuilder {
  constructor() {
    this.staffs = new Map();
  }
  addStaffs(role, ...ids) {
    if(this.staffs.has(role)) throw new Error(`Staff role exists for ${role}`);
    this.staffs.set(role, ids);
    return this;
  }
  build() {
    const output = {};
    for(const [role, ids] of this.staffs.entries()){
      output[role] = ids;
    }
    return output;
  }
}
