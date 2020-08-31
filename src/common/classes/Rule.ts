export default class Rule {
  private ruleData: RuleOptions = {}

  public editcourse = false
  public saveLesson = false
  public editLesson = false
  public updateRepo = false
  public ftpTool = false
  public cutmapTool = false
  public captureTool = false
  public publishTool = false
  public testTool = false
  public exportLesson = false

  constructor (options: RuleOptions) {
    this.init(options)
  }

  private init (options: RuleOptions): void {
    this.editcourse = this.ruleData.editcourse = options.editcourse || false
    this.saveLesson = this.ruleData.saveLesson = options.saveLesson || false
    this.editLesson = this.ruleData.editLesson = options.editLesson || false
    this.updateRepo = this.ruleData.updateRepo = options.updateRepo || false
    this.ftpTool = this.ruleData.ftpTool = options.ftpTool || false
    this.cutmapTool = this.ruleData.cutmapTool = options.cutmapTool || false
    this.captureTool = this.ruleData.captureTool = options.captureTool || false
    this.publishTool = this.ruleData.publishTool = options.publishTool || false
    this.testTool = this.ruleData.testTool = options.testTool || false
    this.exportLesson = this.ruleData.exportLesson = options.exportLesson || false
  }
}
