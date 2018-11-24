const carlo = require('carlo')

const bootstrap = async () => {
  const app = await carlo.launch({
    width: 385,
    height: 600
  })
  app.on('exit', () => process.exit())
  app.serveFolder('build')
  await app.load('index.html')
}

bootstrap()
