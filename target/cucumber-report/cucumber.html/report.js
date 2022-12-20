$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktops.feature");
formatter.feature({
  "line": 2,
  "name": "Desktop Page Test",
  "description": "as a user I want to arrange products and add to shopping cart",
  "id": "desktop-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 16635914000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to select product in alphabetical order",
  "description": "",
  "id": "desktop-page-test;user-should-be-able-to-select-product-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sortby descending position \"Name Z to A\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 1420261600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToDesktopTab()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 2724014300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name Z to A",
      "offset": 37
    }
  ],
  "location": "DesktopSteps.iSelectSortbyDescendingPosition(String)"
});
formatter.result({
  "duration": 15465200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 1973081400,
  "status": "passed"
});
formatter.after({
  "duration": 2059137600,
  "status": "passed"
});
formatter.before({
  "duration": 7238551000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to add product to shopping cart successfully",
  "description": "",
  "id": "desktop-page-test;user-should-be-able-to-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover to desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select sortby ascending position \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the HP Text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Select Delivery Date \"2023-01-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Enter Qty \"1\" using Select class",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Message \"Success: You have added HP LP3065 to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the text \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Product name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the Delivery Date \"Delivery Date: 2023-01-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the Model \"Product 21\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the Todat \"£74.73\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 1281800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToDesktopTab()"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 1756875100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 36
    }
  ],
  "location": "DesktopSteps.iSelectSortbyAscendingPosition(String)"
});
formatter.result({
  "duration": 3236036400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 18
    }
  ],
  "location": "DesktopSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 120600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 20
    }
  ],
  "location": "DesktopSteps.verifyTheHPText(String)"
});
formatter.result({
  "duration": 89753300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2023-01-30",
      "offset": 24
    }
  ],
  "location": "DesktopSteps.iSelectDeliveryDate(String)"
});
formatter.result({
  "duration": 16224969600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "DesktopSteps.iEnterQtyUsingSelectClass(String)"
});
formatter.result({
  "duration": 234860000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 129134000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added HP LP3065 to your shopping cart!",
      "offset": 20
    }
  ],
  "location": "DesktopSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 539983000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "duration": 1202411900,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"http://tutorialsninja.com/demo/index.php?route\u003dcheckout/cart\"\u003e...\u003c/a\u003e is not clickable at point (492, 8). Other element would receive the click: \u003cdiv class\u003d\"container\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d79f3bf9377326505a8ad0d65f8b93c8, clickElement {id\u003defd654b3-e2fc-4bf0-ab29-1bf4d1478d79}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\kaush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54771}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54771/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (d79f3bf9377326505a8ad0d65f8b93c8)] -\u003e xpath: //a[contains(text(),\u0027shopping cart\u0027)]]\nSession ID: d79f3bf9377326505a8ad0d65f8b93c8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat com.tutorialsninja.utility.Utility.clickOnElement(Utility.java:47)\r\n\tat com.tutorialsninja.pages.Desktops.clickOnShoppingCart(Desktops.java:163)\r\n\tat com.tutorialsninja.steps.DesktopSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage(DesktopSteps.java:75)\r\n\tat ✽.And I Click on link shopping cart display into success message(desktops.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 17
    }
  ],
  "location": "DesktopSteps.verifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 25
    }
  ],
  "location": "DesktopSteps.verifyTheProductName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Delivery Date: 2023-01-30",
      "offset": 26
    }
  ],
  "location": "DesktopSteps.verifyTheDeliveryDate(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 18
    }
  ],
  "location": "DesktopSteps.verifyTheModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 18
    }
  ],
  "location": "DesktopSteps.verifyTheTodat(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2133064900,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page Test",
  "description": "as a user I want to navigate to tabs",
  "id": "home-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6567314800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify desktop text message",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 76000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToDesktopTab()"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 1911210800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyDesktopTextMessage()"
});
formatter.result({
  "duration": 72340600,
  "status": "passed"
});
formatter.after({
  "duration": 1977558400,
  "status": "passed"
});
formatter.before({
  "duration": 6705462500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to laptop and notebooks page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-laptop-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover to laptop and desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show all laptop and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify laptop and notebooks text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 40500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToLaptopAndDesktopTab()"
});
formatter.result({
  "duration": 110200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllLaptopAndNotebooks()"
});
formatter.result({
  "duration": 1336238000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyLaptopAndNotebooksText()"
});
formatter.result({
  "duration": 84533800,
  "status": "passed"
});
formatter.after({
  "duration": 1811431500,
  "status": "passed"
});
formatter.before({
  "duration": 6469927700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should navigate to components page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I mouse hover to component tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on show all components",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify components text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 141100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToComponentTab()"
});
formatter.result({
  "duration": 56300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllComponents()"
});
formatter.result({
  "duration": 1065106600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyComponentsText()"
});
formatter.result({
  "duration": 63486800,
  "status": "passed"
});
formatter.after({
  "duration": 1647864500,
  "status": "passed"
});
formatter.uri("laptopnsandnotebooks.feature");
formatter.feature({
  "line": 2,
  "name": "Laptops and notebooks Test",
  "description": "as a user I want to place order successfully",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6177236900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to display product price high to low",
  "description": "",
  "id": "laptops-and-notebooks-test;user-should-able-to-display-product-price-high-to-low",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover to laptop and desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on show all laptop and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Sort By \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the Product price will arrange in High to Low order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 61300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToLaptopAndDesktopTab()"
});
formatter.result({
  "duration": 69700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllLaptopAndNotebooks()"
});
formatter.result({
  "duration": 1200081200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iSelectSortBy(String)"
});
formatter.result({
  "duration": 888017300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyTheProductPriceWillArrangeInHighToLowOrder()"
});
formatter.result({
  "duration": 475984700,
  "status": "passed"
});
formatter.after({
  "duration": 1357051300,
  "status": "passed"
});
formatter.before({
  "duration": 6662733300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;user-should-be-able-to-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover to laptop and desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on show all laptop and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Sort By \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Product \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the text \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Click on ‘Add To Cart’ button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the message \"Success: You have added MacBook to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Click on link “shopping cart” display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the text after adding \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the Product name after adding \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Change Quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Click on “Update” Tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the message \"Success: You have modified your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Total \"£737.45\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on “Checkout” button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the text \"Checkout\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the Text \"New Customer\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Click on Guest Checkout radio button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on Continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Fill the mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I Add Comments About your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Click on Continue button again",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the lastMessage \"Warning: Payment method required!\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToLaptopAndDesktopTab()"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllLaptopAndNotebooks()"
});
formatter.result({
  "duration": 1185127900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iSelectSortBy(String)"
});
formatter.result({
  "duration": 860888000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 16
    }
  ],
  "location": "LaptopsAndNotebooksSteps.selectProduct(String)"
});
formatter.result({
  "duration": 2196272700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 17
    }
  ],
  "location": "DesktopSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 73298900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 170909800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added MacBook to your shopping cart!",
      "offset": 20
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 421354600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "duration": 562905900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 30
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheTextAfterAdding(String)"
});
formatter.result({
  "duration": 84977100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 38
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheProductNameAfterAdding(String)"
});
formatter.result({
  "duration": 78091300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iChangeQuantity(String)"
});
formatter.result({
  "duration": 251542200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnUpdateTab()"
});
formatter.result({
  "duration": 1005967600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have modified your shopping cart!",
      "offset": 20
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 153697900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£737.45",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheTotal(String)"
});
formatter.result({
  "duration": 1220920900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 741084100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 17
    }
  ],
  "location": "DesktopSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 95185500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 368700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "duration": 3286525000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueTab()"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iFillTheMandatoryFields()"
});
formatter.result({
  "duration": 2367836300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 2150746900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAddCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "duration": 970376500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iCheckTheTermsConditionsCheckBox()"
});
formatter.result({
  "duration": 289935300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButtonAgain()"
});
formatter.result({
  "duration": 2134640900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warning: Payment method required!",
      "offset": 24
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheLastMessage(String)"
});
formatter.result({
  "duration": 102800,
  "status": "passed"
});
formatter.after({
  "duration": 1681350500,
  "status": "passed"
});
formatter.uri("myaccounts.feature");
formatter.feature({
  "line": 2,
  "name": "my accounts Test",
  "description": "as a user I want to register and log in successfully",
  "id": "my-accounts-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 7026767100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Register page successfully",
  "description": "",
  "id": "my-accounts-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I call method \u0027SelectMyAccountOptions\u0027 and pass the parameter \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the register text \"Register Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 58600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 175806100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 63
    }
  ],
  "location": "MyAccountsSteps.iCallMethodSelectMyAccountOptionsAndPassTheParameter(String)"
});
formatter.result({
  "duration": 21637804900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 26
    }
  ],
  "location": "MyAccountsSteps.verifyTheRegisterText(String)"
});
formatter.result({
  "duration": 64589300,
  "status": "passed"
});
formatter.after({
  "duration": 1677440700,
  "status": "passed"
});
formatter.before({
  "duration": 7486867100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to Login page successfully",
  "description": "",
  "id": "my-accounts-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I call method \u0027SelectMyAccountOptions\u0027 and pass the parameter as \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the returning text \"Returning Customer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 207858300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 66
    }
  ],
  "location": "MyAccountsSteps.iCallMethodSelectMyAccountOptionsAndPassTheParameterAs(String)"
});
formatter.result({
  "duration": 843695700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 27
    }
  ],
  "location": "MyAccountsSteps.verifyTheReturningText(String)"
});
formatter.result({
  "duration": 139574400,
  "status": "passed"
});
formatter.after({
  "duration": 2355863200,
  "status": "passed"
});
formatter.before({
  "duration": 6074508400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to Register Account Successfully",
  "description": "",
  "id": "my-accounts-test;user-should-be-able-to-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I call method \u0027SelectMyAccountOptions\u0027 and pass the parameter \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Enter First Name",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Enter Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Enter Email",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Enter Telephone",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Enter Password Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Select Subscribe Yes radio button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Click on Privacy Policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I Click on after privacy Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Verify the message \"Your Account Has Been Created!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Click on after message Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I Call the method \u0027selectMyAccountOptions\u0027 method and pass the parameter \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify the account logout text \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Click on after logout Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 50400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 218809700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 63
    }
  ],
  "location": "MyAccountsSteps.iCallMethodSelectMyAccountOptionsAndPassTheParameter(String)"
});
formatter.result({
  "duration": 21736629600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 1107642500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterLastName()"
});
formatter.result({
  "duration": 588500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterEmail()"
});
formatter.result({
  "duration": 1586600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterTelephone()"
});
formatter.result({
  "duration": 195500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterPassword()"
});
formatter.result({
  "duration": 173500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterPasswordConfirm()"
});
formatter.result({
  "duration": 53500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iSelectSubscribeYesRadioButton()"
});
formatter.result({
  "duration": 163685000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 137159200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnAfterPrivacyContinueButton()"
});
formatter.result({
  "duration": 1028902300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 22
    }
  ],
  "location": "MyAccountsSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 91763600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnAfterMessageContinueButton()"
});
formatter.result({
  "duration": 510245600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 157290900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 74
    }
  ],
  "location": "MyAccountsSteps.iCallTheMethodSelectMyAccountOptionsMethodAndPassTheParameter(String)"
});
formatter.result({
  "duration": 781530700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 32
    }
  ],
  "location": "MyAccountsSteps.verifyTheAccountLogoutText(String)"
});
formatter.result({
  "duration": 87566900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnAfterLogoutContinueButton()"
});
formatter.result({
  "duration": 760788800,
  "status": "passed"
});
formatter.after({
  "duration": 1291764700,
  "status": "passed"
});
formatter.before({
  "duration": 6753144400,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User should be able to login and logout successfully",
  "description": "",
  "id": "my-accounts-test;user-should-be-able-to-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on home page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I call method \u0027SelectMyAccountOptions\u0027 and pass the parameter \"Login\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Enter Email address",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Enter Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Verify text \"My Account\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I Click on My Account link",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I Call the method \u0027selectMyAccountOptions\u0027 method and pass the parameter \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Verify the account logout text \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Click on after logout Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 39700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 269580500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 63
    }
  ],
  "location": "MyAccountsSteps.iCallMethodSelectMyAccountOptionsAndPassTheParameter(String)"
});
formatter.result({
  "duration": 1103590100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterEmailAddress()"
});
formatter.result({
  "duration": 640834000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterLastName()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iEnterPassword()"
});
formatter.result({
  "duration": 30200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1013638900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 13
    }
  ],
  "location": "MyAccountsSteps.verifyText(String)"
});
formatter.result({
  "duration": 111523800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 136127400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 74
    }
  ],
  "location": "MyAccountsSteps.iCallTheMethodSelectMyAccountOptionsMethodAndPassTheParameter(String)"
});
formatter.result({
  "duration": 990374300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 32
    }
  ],
  "location": "MyAccountsSteps.verifyTheAccountLogoutText(String)"
});
formatter.result({
  "duration": 119061000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountsSteps.iClickOnAfterLogoutContinueButton()"
});
formatter.result({
  "duration": 754643700,
  "status": "passed"
});
formatter.after({
  "duration": 1694075600,
  "status": "passed"
});
});