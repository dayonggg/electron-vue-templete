import staticRoleData from "@/common/StaticData/staticRoleData";
import Rule from "@/common/classes/Rule";

export default class Role {
  private data: RoleData = {};
  private rules: RuleOptions = {};

  constructor(roleType: string) {
    this.init(roleType);
  }

  private init(roleType: string) {
    const data = staticRoleData.data;
    for (const i in data) {
      if (data[i].roleType === roleType) {
        this.data = data[i];
        this.rules = new Rule(this.data.ruler);
      }
    }
  }

  public getData() {
    return this.data;
  }

  public getRule() {
    return this.rules;
  }

  public getPwd() {
    return this.data.pwd;
  }
}
