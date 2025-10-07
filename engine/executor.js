import parseCommand from './command.js'
import engine from './engine.js'

const execute = (input) => {
  const command = parseCommand(input)
  switch (command) {
    case 'publish':
      return engine.publishManager.run()
    case 'feature':
      return engine.featureEngine.list()
    case 'help':
      return 'اكتب أمرًا مثل "نشر المشروع" أو "عرض الميزات"'
    default:
      return 'لم يتم التعرف على الأمر'
  }
}

export default execute
