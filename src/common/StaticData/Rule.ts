class Rule {
  private optionsData:any = {
    editcourse: false,  // 是否可编辑课程
    saveLesson: false,  // 是否可保存课时修改
    editLesson: false,  // 是否可编辑课时内容
    updateRepo: false,  // 是否可更新关卡库
    ftpTool: false, // ftp是否可用
    cutmapTool: false, // 切割场景图工具是否可用
    captureTool: false, // 课后练习截图工具是否可用
    publishTool: false // 发布工具是否可用
  }
  private rule = {}

  constructor(options: any = {}) {
    this.init(options)
  }
  init(opt: any) {
    for (const key1 in opt) {
      for (const key2 in this.optionsData) {
        if (key1 === key2) {
          this.optionsData[key2] = opt[key1]
          break
        }
      }
    }
    return this.optionsData
  }
}