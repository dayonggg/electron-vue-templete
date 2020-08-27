export default class Rule {
  public ruleData: RuleOptions = {}

  constructor (options: RuleOptions) {
    this.init(options)
  }

  private init (options: RuleOptions): void {
    this.ruleData.editcourse = options.editcourse || false
    this.ruleData.saveLesson = options.saveLesson || false
    this.ruleData.editLesson = options.editLesson || false
    this.ruleData.updateRepo = options.updateRepo || false
    this.ruleData.ftpTool = options.ftpTool || false
    this.ruleData.cutmapTool = options.cutmapTool || false
    this.ruleData.captureTool = options.captureTool || false
    this.ruleData.publishTool = options.publishTool || false
    this.ruleData.testTool = options.testTool || false
    this.ruleData.exportLesson = options.exportLesson || false
  }
}
