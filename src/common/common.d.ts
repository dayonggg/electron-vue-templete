interface RuleOptions {
  editcourse?: boolean;
  saveLesson?: boolean;
  editLesson?: boolean;
  updateRepo?: boolean;
  ftpTool?: boolean;
  cutmapTool?: boolean;
  captureTool?: boolean;
  publishTool?: boolean;
  testTool?: boolean;
  exportLesson?: boolean;
}

interface RoleData {
  label: string;
  roleType: string;
  pwd: string;
  info: string;
  ruler: RuleOptions;
  repos: Array;
}
