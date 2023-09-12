module.exports = {
  types: [
    { value: 'feat', name: '✨ 新功能 feat: 添加新功能' },
    { value: 'fix', name: '🐛 修复 bug fix: 修复bug' },
    { value: 'docs', name: '📚 文档 docs: 更新文档' },
    { value: 'style', name: '💄 格式 style: 代码格式化' },
    { value: 'chore', name: '🔧 构建/工具 chore: 更新构建或工具配置' }
    // 添加更多类型...
  ],
  scopes: [
    { name: 'function', description: '功能' },
    { name: 'utils', description: '工具' },
    { name: 'release', description: '版本' }
    // 添加更多作用范围...
  ],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    customScope: '请输入自定义的scope:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue, 例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?(yes/no)'
  },
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer'],
  allowBreakingChanges: ['feat', 'fix']
  // 其他配置...
};
