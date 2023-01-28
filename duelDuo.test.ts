import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:4000/')
    await driver.sleep(5000)
})

afterAll(async () => {
    await driver.sleep(5000)
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button renders choices div', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(5000)

    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})

test('add to duo button adds bot to div', async () => {
    await driver.findElement(By.xpath("//div[@id='choices']/div[5]/button[1]")).click()
    await driver.sleep(5000)  
    
    const playerDuo = await driver.findElement(By.id("player-duo"))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})
