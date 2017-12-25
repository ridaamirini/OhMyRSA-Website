// const USER_ID = parseInt(Math.random() * 1000)
function generateTime() {
  const timeNow = new Date()
  const hours = timeNow.getHours()
  const minutes = timeNow.getMinutes()
  const seconds = timeNow.getSeconds()
  let timeString = '' + hours
  timeString += (minutes < 10 ? ':0' : ':') + minutes
  timeString += (seconds < 10 ? ':0' : ':') + seconds
  return timeString
}

const mockData = [
    { time: generateTime(), type: 'info', label: 'Info', message: 'Composer initializing ............' },
    { time: generateTime(), type: 'system', label: 'System', message: 'Changed current directory to /Users/ridaamirini/resume' },
    { time: generateTime(), type: 'system', label: 'System', message: 'Using version ^1.0.1 for ridaamirini/resume' },
    { time: generateTime(), type: 'info', label: 'info', message: 'Loading composer repositories with package information' },
    { time: generateTime(), type: 'info', label: 'info', message: ' - Installing school/school (v3.1.0): Downloading (100%)' },
    { time: generateTime(), type: 'info', label: 'info', message: ' - Installing college/college (v6.1.2): Downloading (100%)' },
    { time: generateTime(), type: 'info', label: 'info', message: ' - Installing self/employeed (v0.5.2): Downloading (100%)' },
    { time: generateTime(), type: 'info', label: 'info', message: ' - Installing ridaamirini/me (v2.3.4): Downloading (100%)' },
    { time: generateTime(), type: 'info', label: 'info', message: ' - Installing google/nynan-cat (v10.3.4): Downloading (100%)' },
    { time: generateTime(), type: 'system', label: 'System', message: 'Writing lock file' },
    { time: generateTime(), type: 'system', label: 'System', message: 'Generating autoload files' },
    { time: generateTime(), type: 'success', label: 'Success', message: 'ridaamirini/resume is ready to use.' }
]

export default {
  ridaamirini: {
      description: 'Reloads the terminal',
      ridaamirini() {
        location.reload();
      }
  },
  echo: {
    description: 'Echoes input',
    echo(pushToList, input) {
      input = input.split(' ')
      input.splice(0, 1)
      const p = new Promise(resolve => {
        pushToList({ time: generateTime(), label: 'Echo', type: 'success', message: input.join(' ') })
        resolve({ type: 'success', label: '', message: '' })
      })
      return p
    }
  },
  init: {
    description: 'This initializes the terminal',
    init(pushToList) {
      let i = 0
      const p = new Promise(resolve => {
        const interval = setInterval(() => {
          mockData[i].time = generateTime()
          pushToList(mockData[i])
          i++
          if (!mockData[i]) {
            clearInterval(interval)
            resolve({ type: 'success', label: 'Success', message: 'ridaamirini fully loaded' })
          }
        }, 1000)
      })
      return p
    }
  },
  open: {
    description: 'Open a specified url in a new tab.',
    open(pushToList, input) {
      const p = new Promise((resolve, reject) => {
        let url = input.split(' ')[1]
        if (!url) {
          reject({ type: 'error', label: 'Error', message: 'a url is required!' })
          return
        }
        pushToList({ type: 'success', label: 'Success', message: 'Opening' })

        if (input.split(' ')[1].indexOf('http') === -1) {
          url = 'http://' + input.split(' ')[1]
        }
        window.open(url, '_blank')
        resolve({ type: 'success', label: 'Done', message: 'Page Opened!' })
      })
      return p
    }
  }
}
