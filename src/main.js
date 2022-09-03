class TestApp {
  getData = () => console.log(Date.now())

  init(title) {
    this.getData()
    console.log(`${title} Sandbox demo`)
  }
}
const testApp = new TestApp()
testApp.init('Webpack')

const logger = () => console.log('test')
logger()
