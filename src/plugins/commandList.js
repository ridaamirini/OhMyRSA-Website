const commandList = {
  version: {
    description: 'Return this terminal version',
    messages: [
      { message: '1.0.0.' + Math.random().toString(36).substring(7) + '.' + (new Date()).getFullYear() }
    ]
  },
  contact: {
    description: 'How to contact me',
    messages: [
    { message: 'Website: http://ridaamirini.me' },
    { message: 'Company website: http://rsa-apps.de' },
    { message: 'Email: rida-amirini@gmx.de' },
    { message: 'Github: https://github.com/ridaamirini' },
    { message: 'Xing: https://www.xing.com/profile/Rida_Amirini' }
    ] },
  about: {
    description: 'About Me',
    messages: [
    { message: 'My name is Rida Amirini. I\'m a developer, You can visit my personal website at http://ridaamirini.me/blog to learn more about me.' }
    ]
  }
}
export default commandList
