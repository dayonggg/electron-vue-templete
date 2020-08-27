import Rule from '@/common/classes/Rule'

export default {
  data: [
    {
      label: 'Root',
      roleType: 'root',
      pwd: 'KKcode2020', // 选择该身份，需要输入验证码，空为不校验
      info: '包含所有功能，但选择该身份需要输入验证码',
      ruler: new Rule({
        editcourse: true,
        saveLesson: true,
        editLesson: true,
        updateRepo: true,
        ftpTool: true,
        cutmapTool: true,
        captureTool: true,
        publishTool: true,
        testTool: true,
        exportLesson: true
      }).ruleData
    },
    {
      label: '策划',
      roleType: 'designer',
      pwd: '', // 选择该身份，需要输入验证码，空为不校验
      info: '修改和更新课程内容和资源',
      ruler: new Rule({
        editLesson: true,
        updateRepo: true,
        cutmapTool: true,
        testTool: true,
        exportLesson: true
      }).ruleData
    },
    {
      label: '教研',
      roleType: 'teacher',
      pwd: '', // 选择该身份，需要输入验证码，空为不校验
      info: '浏览课程内容和编写关卡提示',
      ruler: new Rule({
        editLesson: true,
        updateRepo: true,
        testTool: true,
        exportLesson: true
      }).ruleData
    },
    {
      label: '其他',
      roleType: 'other',
      pwd: '', // 选择该身份，需要输入验证码，空为不校验
      info: '仅限于浏览课程内容',
      ruler: new Rule({}).ruleData
    }
  ],
  getRole (roleType: string) {
    this.data.forEach(element => {
      console.log(element.roleType, roleType)
      if (element.roleType === roleType) {
        return element
      }
    })
    for (const item in this.data) {
      if (item.roleType === roleType) {
        console.log(item)
        break
      }
    }
    return null
  }
}
