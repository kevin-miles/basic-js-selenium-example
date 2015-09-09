var test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
test.describe('Google Search', function() {
  var driver;
  test.before(function() {
    driver = new webdriver.Builder().forBrowser('firefox').build();
  });
  test.it('should append query to title', function() {
    driver.get('http://www.google.com');
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  });
  test.after(function() {
    driver.quit();
  });
});
