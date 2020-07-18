const os = require('os')

const arch = os.arch()
const platform = os.platform() + (arch === 'arm' ? '-arm' : '')

// only windows has separate files to link against and to load at runtime
switch (platform) {
  case 'win32':
    require('fuse-shared-library-win32/bin')
    break
  default:
    require('./lib')
    break
}
