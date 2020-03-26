$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/swag.feature");
formatter.feature({
  "line": 1,
  "name": "Swag labs",
  "description": "",
  "id": "swag-labs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login to Swag labs with valid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TS_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens Swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Assert if the product_label is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "swag-labs;login-to-swag-labs-with-valid-credentials;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 12,
      "id": "swag-labs;login-to-swag-labs-with-valid-credentials;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ],
      "line": 13,
      "id": "swag-labs;login-to-swag-labs-with-valid-credentials;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "swag-labs;login-to-swag-labs-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login to Swag labs with valid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TS_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens Swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters valid \"standard_user\" and \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Assert if the product_label is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.the_user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 5384308727,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.the_user_opens_Swaglabs_homepage()"
});
formatter.result({
  "duration": 6619029996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 23
    },
    {
      "val": "secret_sauce",
      "offset": 43
    }
  ],
  "location": "Stepdefinition.the_user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 429060292,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_the_login_button()"
});
formatter.result({
  "duration": 53685297303,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_product_label_is_displayed()"
});
formatter.result({
  "duration": 128066282,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to Swag labs with valid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TS_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens Swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters valid \"problem_user\" and \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Assert if the product_label is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.the_user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 3659318056,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.the_user_opens_Swaglabs_homepage()"
});
formatter.result({
  "duration": 9389421260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 23
    },
    {
      "val": "secret_sauce",
      "offset": 42
    }
  ],
  "location": "Stepdefinition.the_user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 377530457,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_the_login_button()"
});
formatter.result({
  "duration": 3653145343,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_product_label_is_displayed()"
});
formatter.result({
  "duration": 141610749,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to Swag labs with valid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TS_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens Swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters valid \"performance_glitch_user\" and \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Assert if the product_label is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.the_user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 3460721406,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.the_user_opens_Swaglabs_homepage()"
});
formatter.result({
  "duration": 6621594111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 23
    },
    {
      "val": "secret_sauce",
      "offset": 53
    }
  ],
  "location": "Stepdefinition.the_user_enters_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 338600828,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_the_login_button()"
});
formatter.result({
  "duration": 27266895568,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_product_label_is_displayed()"
});
formatter.result({
  "duration": 114930551,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Login to Swag labs with invalid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user opens swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters invalid  \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user clicks the login button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Assert if the error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "swag-labs;login-to-swag-labs-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "standard",
        "secrete"
      ],
      "line": 25,
      "id": "swag-labs;login-to-swag-labs-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "problem",
        "secret_sauce"
      ],
      "line": 26,
      "id": "swag-labs;login-to-swag-labs-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Login to Swag labs with invalid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user opens swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters invalid  \"standard\" and \"secrete\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user clicks the login button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Assert if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launched_the_chrome_browser1()"
});
formatter.result({
  "duration": 3535191829,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_opens_swaglabs_homepage()"
});
formatter.result({
  "duration": 4457022246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard",
      "offset": 22
    },
    {
      "val": "secrete",
      "offset": 37
    }
  ],
  "location": "Stepdefinition.user_enters_invalid_username_and_password(String,String)"
});
formatter.result({
  "duration": 254710739,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.the_user_clicks_the_login_button()"
});
formatter.result({
  "duration": 899946387,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_error_message_is_displayed()"
});
formatter.result({
  "duration": 187256464,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login to Swag labs with invalid credentials",
  "description": "",
  "id": "swag-labs;login-to-swag-labs-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TS_02"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user opens swaglabs homepage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters invalid  \"problem\" and \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user clicks the login button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Assert if the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launched_the_chrome_browser1()"
});
formatter.result({
  "duration": 3494992520,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_opens_swaglabs_homepage()"
});
formatter.result({
  "duration": 6702559647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "problem",
      "offset": 22
    },
    {
      "val": "secret_sauce",
      "offset": 36
    }
  ],
  "location": "Stepdefinition.user_enters_invalid_username_and_password(String,String)"
});
formatter.result({
  "duration": 353944462,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.the_user_clicks_the_login_button()"
});
formatter.result({
  "duration": 986818988,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_error_message_is_displayed()"
});
formatter.result({
  "duration": 209328259,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Sorting in the order of A-Z",
  "description": "",
  "id": "swag-labs;sorting-in-the-order-of-a-z",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@TS_03"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "launching the application",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "click on Name A to Z",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "compare the first two item names",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "assert if the two names are in alpahbetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_chrome_browser1()"
});
formatter.result({
  "duration": 3644917474,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application1()"
});
formatter.result({
  "duration": 34359115559,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Name_A_to_Z()"
});
formatter.result({
  "duration": 189202945,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.compare_the_first_two_item_names()"
});
formatter.result({
  "duration": 80956481,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_two_names_are_in_alpahbetical_order()"
});
formatter.result({
  "duration": 67461520,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Sorting in the order of Z-A",
  "description": "",
  "id": "swag-labs;sorting-in-the-order-of-z-a",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@TS_04"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Launching the application",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "click on Name Z to A",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "compare the first two item names",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Assert if the two names are in alpahbetical order of Z-A",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_chrome_browser2()"
});
formatter.result({
  "duration": 3431525391,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application2()"
});
formatter.result({
  "duration": 25259558830,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Name_Z_to_A()"
});
formatter.result({
  "duration": 3213492908,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.compare_the_first_two_item_names()"
});
formatter.result({
  "duration": 95457284,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_two_names_are_in_alpahbetical_order_of_Z_A()"
});
formatter.result({
  "duration": 201871979,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Sorting in the order of low to high price",
  "description": "",
  "id": "swag-labs;sorting-in-the-order-of-low-to-high-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@TS_05"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "LAunching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "LAunching the application",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "click on Name price low to high",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "compare the first two item prices",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Assert if the two item prices are in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_chrome_browser3()"
});
formatter.result({
  "duration": 3492313089,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application3()"
});
formatter.result({
  "duration": 28375310477,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Name_price_low_to_high()"
});
formatter.result({
  "duration": 3147334275,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.compare_the_first_two_item_prices()"
});
formatter.result({
  "duration": 116384979,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_two_item_prices_are_in_ascending_order()"
});
formatter.result({
  "duration": 59983505,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Sorting in the order of high to low price",
  "description": "",
  "id": "swag-labs;sorting-in-the-order-of-high-to-low-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@TS_06"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "LAUnching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "LAUnching the application",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "click on Name price high to low",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "compare the first two item prices",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "Assert if the two item prices are in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_chrome_browser4()"
});
formatter.result({
  "duration": 3414001625,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application4()"
});
formatter.result({
  "duration": 32140176246,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Name_price_high_to_low()"
});
formatter.result({
  "duration": 3240433926,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.compare_the_first_two_item_prices()"
});
formatter.result({
  "duration": 114541134,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_two_item_prices_are_in_descending_order()"
});
formatter.result({
  "duration": 2168789644,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Adding to cart",
  "description": "",
  "id": "swag-labs;adding-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@TS_07"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "LAUNching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "LAUNching the application",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "cLick on ADD TO CART of selected item",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "Assert if the item is added in the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser5()"
});
formatter.result({
  "duration": 3492969362,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application5()"
});
formatter.result({
  "duration": 55000161804,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_ADD_TO_CART_of_selected_item()"
});
formatter.result({
  "duration": 105042377,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_item_is_added_in_the_cart()"
});
formatter.result({
  "duration": 3141416343,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Remove from cart",
  "description": "",
  "id": "swag-labs;remove-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@TS_08"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "LAUNChing the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "LAUNChing the application",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "cLick REMOVE of selected item which is carted",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Assert if the item is removed from the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser6()"
});
formatter.result({
  "duration": 3701498259,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application6()"
});
formatter.result({
  "duration": 32129407205,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_REMOVE_of_selected_item_which_is_carted()"
});
formatter.result({
  "duration": 182235097,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_item_is_removed_from_the_cart()"
});
formatter.result({
  "duration": 3225450728,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Logout of Application",
  "description": "",
  "id": "swag-labs;logout-of-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@TS_09"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "LAUNCHing the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "LAUNCHing the application",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "Click on Menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "Click on Logout button",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "Assert if the application is showing the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser7()"
});
formatter.result({
  "duration": 3428237383,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application7()"
});
formatter.result({
  "duration": 23775722957,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Menu_bar()"
});
formatter.result({
  "duration": 98075132,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_Logout_button()"
});
formatter.result({
  "duration": 1008945121,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_application_is_showing_the_login_page()"
});
formatter.result({
  "duration": 199075422,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Navigating to Saucelabs",
  "description": "",
  "id": "swag-labs;navigating-to-saucelabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@TS_10"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "LAUNCHIng the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "LAUNCHIng the application",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "CLick on menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "Click on About",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "Assert if the page is navigating to saucelabs",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser8()"
});
formatter.result({
  "duration": 3524824279,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application8()"
});
formatter.result({
  "duration": 110637534247,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_menu_bar()"
});
formatter.result({
  "duration": 138169993,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_About()"
});
formatter.result({
  "duration": 63566098862,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_the_page_is_navigating_to_saucelabs()"
});
formatter.result({
  "duration": 5580920255,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Searching Invalid information",
  "description": "",
  "id": "swag-labs;searching-invalid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 90,
      "name": "@TS_11"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "LAUNCHINg the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "LAUNCHINg the application",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "CLIck on search Symbol",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "Enter the invalid info and click Enter from keyboard",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "Assert True if it is Displaying No Results found",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser9()"
});
formatter.result({
  "duration": 3477571994,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application9()"
});
formatter.result({
  "duration": 41761930953,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_search_Symbol1()"
});
formatter.result({
  "duration": 110927102,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.enter_the_invalid_info_and_click_Enter_from_keyboard()"
});
formatter.result({
  "duration": 9967309496,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_True_if_it_is_Displaying_No_Results_found()"
});
formatter.result({
  "duration": 2793575162,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Searching valid information",
  "description": "",
  "id": "swag-labs;searching-valid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 98,
      "name": "@TS_12"
    }
  ]
});
formatter.step({
  "line": 100,
  "name": "LAUNCHING the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "LAUNCHING the application",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "click on search Symbol",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "Enter the valid info and click Enter from keyboard",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "Assert True if it is not  Displaying No Results found",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_the_browser10()"
});
formatter.result({
  "duration": 3717123844,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_the_application10()"
});
formatter.result({
  "duration": 48854325427,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_search_Symbol()"
});
formatter.result({
  "duration": 95919755,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.enter_the_valid_info_and_click_Enter_from_keyboard()"
});
formatter.result({
  "duration": 1530127596,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_True_if_it_is_not_Displaying_No_Results_found()"
});
formatter.result({
  "duration": 3495439292,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "Accepting valid mail ID format  to join",
  "description": "",
  "id": "swag-labs;accepting-valid-mail-id-format--to-join",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 106,
      "name": "@TS_13"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "LAUNCHING The browser",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "LAUNCHING The application",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "enter the valid email format  and click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "Assert if it is displaying Thank you message",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_The_browser()"
});
formatter.result({
  "duration": 3477217595,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_The_application()"
});
formatter.result({
  "duration": 42018637076,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.enter_the_valid_email_format_and_click_on_submit_button()"
});
formatter.result({
  "duration": 1119327039,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_it_is_displaying_Thank_you_message()"
});
formatter.result({
  "duration": 2256686200,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Accepting Invalid mail format ID to join",
  "description": "",
  "id": "swag-labs;accepting-invalid-mail-format-id-to-join",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 113,
      "name": "@TS_14"
    }
  ]
});
formatter.step({
  "line": 115,
  "name": "LAUNCHING THe browser",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "LAUNCHING THe application",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "enter the Invalid email format  and click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "Assert if it is displaying an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_THe_browser()"
});
formatter.result({
  "duration": 3334117400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_THe_application()"
});
formatter.result({
  "duration": 38916153381,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.enter_the_Invalid_email_format_and_click_on_submit_button()"
});
formatter.result({
  "duration": 1158364739,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_it_is_displaying_an_error_message()"
});
formatter.result({
  "duration": 2507247987,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "Switching to new window",
  "description": "",
  "id": "swag-labs;switching-to-new-window",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 120,
      "name": "@TS_15"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "LAUNCHING THE browser",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "LAUNCHING THE Application",
  "keyword": "When "
});
formatter.step({
  "line": 124,
  "name": "click on resources",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "click on selenium",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "Assert if it is Switching to the new tab",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_THE_browser()"
});
formatter.result({
  "duration": 3681989372,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_THE_Application()"
});
formatter.result({
  "duration": 60812467624,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_resources()"
});
formatter.result({
  "duration": 26565,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.click_on_selenium()"
});
formatter.result({
  "duration": 729652205,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_it_is_Switching_to_the_new_tab()"
});
formatter.result({
  "duration": 57321584,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "Displaying the copyright",
  "description": "",
  "id": "swag-labs;displaying-the-copyright",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 128,
      "name": "@TS_16"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "LAUNCHING THE Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "LAUNCHING THE APPlication",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "Assert if it is displaying the copyright in the footer section",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.launching_THE_Browser()"
});
formatter.result({
  "duration": 4231037805,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.launching_THE_APPlication()"
});
formatter.result({
  "duration": 64128842097,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.assert_if_it_is_displaying_the_copyright_in_the_footer_section()"
});
formatter.result({
  "duration": 44958650,
  "status": "passed"
});
});