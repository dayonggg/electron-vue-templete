export default {
  optionsData: {
    editcourse: false, // 是否可编辑课程
    saveLesson: false, // 是否可保存课时修改
    editLesson: false, // 是否可编辑课时内容
    updateRepo: false, // 是否可更新关卡库
    ftpTool: false, // ftp是否可用
    cutmapTool: false, // 切割场景图工具是否可用
    captureTool: false, // 课后练习截图工具是否可用
    publishTool: false // 发布工具是否可用
  },
  data: [
    {
      label: 'root',
      roleType: 'root',
      pwd: 'KKcode2020',
      info: '包含所有功能，但选择该身份需要输入验证码',
      ruler: {
        editcourse: true, // 是否可编辑课程
        saveLesson: true, // 是否可保存课时修改
        editLesson: true, // 是否可编辑课时内容
        updateRepo: true, // 是否可更新关卡库
        ftpTool: false, // ftp是否可用
        cutmapTool: true, // 切割场景图工具是否可用
        captureTool: false, // 课后练习截图工具是否可用
        publishTool: false // 发布工具是否可用
      }
    },
    {
      label: '策划',
      roleType: 'designer',
      pwd: '',
      info: '修改和更新课程内容和资源',
      ruler: {
        editcourse: true, // 是否可编辑课程
        saveLesson: true, // 是否可保存课时修改
        editLesson: true, // 是否可编辑课时内容
        updateRepo: true, // 是否可更新关卡库
        ftpTool: false, // ftp是否可用
        cutmapTool: true, // 切割场景图工具是否可用
        captureTool: false, // 课后练习截图工具是否可用
        publishTool: false // 发布工具是否可用
      }
    },
    {
      label: '教研',
      roleType: 'teacher',
      pwd: '',
      info: '浏览课程内容和编写关卡提示',
      ruler: {
        editcourse: true, // 是否可编辑课程
        saveLesson: true, // 是否可保存课时修改
        editLesson: true, // 是否可编辑课时内容
        updateRepo: false, // 是否可更新关卡库
        ftpTool: false, // ftp是否可用
        cutmapTool: false, // 切割场景图工具是否可用
        captureTool: false, // 课后练习截图工具是否可用
        publishTool: false // 发布工具是否可用
      }
    },
    {
      label: '其他',
      roleType: 'other',
      pwd: '',
      info: '仅限于浏览课程内容',
      ruler: {
        editcourse: false, // 是否可编辑课程
        saveLesson: false, // 是否可保存课时修改
        editLesson: false, // 是否可编辑课时内容
        updateRepo: false, // 是否可更新关卡库
        ftpTool: false, // ftp是否可用
        cutmapTool: false, // 切割场景图工具是否可用
        captureTool: false, // 课后练习截图工具是否可用
        publishTool: false // 发布工具是否可用
      }
    }
  ],
  getRole (roleType: string) {
    this.data.forEach(element => {
      if (element.roleType === roleType) {
        return element
      }
    })
    return null
  }
}
