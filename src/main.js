class TestApp {
	init(title) {
		console.log(`${title} Sandbox demo`)
	}
}
const testApp = new TestApp()
testApp.init('Webpack')

const logger = () => console.log('test')
logger()

