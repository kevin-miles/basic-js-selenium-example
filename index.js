var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    driver;

test.describe('Google Search', function() {
  this.timeout(100000);

  test.before(function () {
    driver = new chrome.Driver();
  });

  test.after(function () {
    driver.quit();
  });

  test.it('should work', function(done) {
    driver.get('http://google.com');

    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('webdriver');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'webdriver');
    });

    done();
  });
});
