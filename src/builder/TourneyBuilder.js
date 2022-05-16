import { BracketsBuilder } from "./Brackets.js";
import { StaffsBuilder } from './Staffs.js';

export class TourneyBuilder {
  constructor() {
    this.staffs = null;
    this.brackets = null;
  }
  setupStaffs(staffCb) {
    const staffs = new StaffsBuilder();
    staffCb(staffs);
    this.staffs = staffs.build();
    return this;
  }
  setupBrackets(bracketCb) {
    const brackets = new BracketsBuilder();
    bracketCb(brackets);
    this.brackets = brackets.build();
    return this;
  }
  build() {
    const output = {
      staffs: this.staffs,
      brackets: this.brackets,
    }
    return output;
  }
}
