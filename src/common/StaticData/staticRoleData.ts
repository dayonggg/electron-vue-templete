export default {
  data: [
    {
      label: 'Root',
      roleType: 'root',
      pwd: 'KKcode2020', // 选择该身份，需要输入验证码，空为不校验
      info: '包含所有功能，但选择该身份需要输入验证码',
      ruler: {
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
      },
      repos: ['kkcode_live_game_client', 'kkcode-course-repo', 'game_build', 'game_ftp_assets']
    },
    {
      label: '策划',
      roleType: 'designer',
      pwd: '', // 选择该身份，需要输入验证码，空为不校验
      info: '修改和更新课程内容和资源',
      ruler: {
        editLesson: true,
        updateRepo: true,
        cutmapTool: true,
        testTool: true,
        exportLesson: true
      },
      repos: ['kkcode_live_game_client', 'kkcode-course-repo', 'game_build']
    },
    {
      label: '教研',
      roleType: 'teacher',
      pwd: '', // 选择该身份，需要输入验证码，空为不校验
      info: '浏览课程内容和编写关卡提示',
      ruler: {
        editLesson: true,
        updateRepo: true,
        testTool: true,
        exportLesson: true
      },
      repos: ['kkcode_live_game_client', 'kkcode-course-repo', 'game_build']
    },
    {
      label: '其他',
      roleType: 'other',
      pwd: '', // 选择该身份，需要输入验证码，空为不校验
      info: '仅限于浏览课程内容',
      ruler: {},
      repos: ['kkcode-course-repo', 'game_build']
    }
  ]
}
