$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bookinventory.integration/BookInventoryIntegrationTest.feature");
formatter.feature({
  "line": 2,
  "name": "Example Resource Integration Test",
  "description": "",
  "id": "example-resource-integration-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@restApiIntegration"
    }
  ]
});
formatter.before({
  "duration": 4998913547,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "create a book",
  "description": "",
  "id": "example-resource-integration-test;create-a-book",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the web context is set",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the db is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the isbn gateway is mocked to success",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "client request POST /api/books with json data:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 9,
    "value": "{\"isbn\":null,\"title\":\"my book\",\"author\":\"me\"}"
  }
});
formatter.step({
  "line": 12,
  "name": "the response code should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the following header should present \"Location\" with value \"http://localhost/api/books/isbn1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonRestCallStepDefs.givenServerIsUpAndRunning()"
});
formatter.result({
  "duration": 131298597,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.clearDb()"
});
formatter.result({
  "duration": 147202192,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.isbnGatewayIsMockedToSuccessResponse()"
});
formatter.result({
  "duration": 4633469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/books",
      "offset": 20
    }
  ],
  "location": "CommonRestCallStepDefs.performPostOnResourceUriWithJsonData(String,String)"
});
formatter.result({
  "duration": 220482325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 28
    }
  ],
  "location": "CommonRestCallStepDefs.checkResponse(int)"
});
formatter.result({
  "duration": 2692348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 37
    },
    {
      "val": "http://localhost/api/books/isbn1234",
      "offset": 59
    }
  ],
  "location": "CommonRestCallStepDefs.checkHeaderPresenceWithValue(String,String)"
});
formatter.result({
  "duration": 1470058,
  "status": "passed"
});
formatter.before({
  "duration": 2418097,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "create a book gateway error",
  "description": "",
  "id": "example-resource-integration-test;create-a-book-gateway-error",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "the web context is set",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the db is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the isbn gateway is mocked to error",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "client request POST /api/books with json data:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 20,
    "value": "{\"isbn\":null,\"title\":\"my book\",\"author\":\"me\"}"
  }
});
formatter.step({
  "line": 23,
  "name": "the response code should be 500",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the result json should be:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 25,
    "value": "{\"errorCode\":\"GENERAL_GATEWAY_ERROR\",\"errorMessage\":\"Internal Server Error\",\"params\":{\"statusText\":\"Internal Server Error\",\"message\":\"500 Internal Server Error\"}}"
  }
});
formatter.match({
  "location": "CommonRestCallStepDefs.givenServerIsUpAndRunning()"
});
formatter.result({
  "duration": 11171588,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.clearDb()"
});
formatter.result({
  "duration": 10641134,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.isbnGatewayIsMockedToErrorResponse()"
});
formatter.result({
  "duration": 47174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/books",
      "offset": 20
    }
  ],
  "location": "CommonRestCallStepDefs.performPostOnResourceUriWithJsonData(String,String)"
});
formatter.result({
  "duration": 24142585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 28
    }
  ],
  "location": "CommonRestCallStepDefs.checkResponse(int)"
});
formatter.result({
  "duration": 75038,
  "status": "passed"
});
formatter.match({
  "location": "CommonRestCallStepDefs.checkResponseJsonMatch(String)"
});
formatter.result({
  "duration": 8094542,
  "status": "passed"
});
formatter.before({
  "duration": 3222179,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "find by isbn",
  "description": "",
  "id": "example-resource-integration-test;find-by-isbn",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "the web context is set",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the db is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the following books exist:",
  "rows": [
    {
      "cells": [
        "isbn",
        "title",
        "author"
      ],
      "line": 33
    },
    {
      "cells": [
        "isbn1234",
        "Hamlet",
        "William Shakespeare"
      ],
      "line": 34
    },
    {
      "cells": [
        "isbn1235",
        "Romeo and Juliet",
        "William Shakespeare"
      ],
      "line": 35
    },
    {
      "cells": [
        "isbn1236",
        "To Kill a Mockingbird",
        "Harper lee"
      ],
      "line": 36
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "client request GET /api/books/isbn1236",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "the result json should be:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 40,
    "value": "{\"isbn\":\"isbn1236\",\"title\":\"To Kill a Mockingbird\",\"author\":\"Harper lee\"}"
  }
});
formatter.match({
  "location": "CommonRestCallStepDefs.givenServerIsUpAndRunning()"
});
formatter.result({
  "duration": 6066655,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.clearDb()"
});
formatter.result({
  "duration": 1392670,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.createBooks(DataTable)"
});
formatter.result({
  "duration": 15100190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/books/isbn1236",
      "offset": 19
    }
  ],
  "location": "CommonRestCallStepDefs.performGetOnResourceUri(String)"
});
formatter.result({
  "duration": 9669583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "CommonRestCallStepDefs.checkResponse(int)"
});
formatter.result({
  "duration": 69960,
  "status": "passed"
});
formatter.match({
  "location": "CommonRestCallStepDefs.checkResponseJsonMatch(String)"
});
formatter.result({
  "duration": 82462,
  "status": "passed"
});
formatter.before({
  "duration": 4460213,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "find by isbn -\u003e no result",
  "description": "",
  "id": "example-resource-integration-test;find-by-isbn--\u003e-no-result",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "the web context is set",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the db is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "client request GET /api/books/not-existing-isbn",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the response code should be 404",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "the result json should be:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 50,
    "value": "{\"errorCode\":\"BOOK_NOT_FOUND\",\"errorMessage\":\"The book was not found.\",\"params\":{\"isbn\":\"not-existing-isbn\"}}"
  }
});
formatter.match({
  "location": "CommonRestCallStepDefs.givenServerIsUpAndRunning()"
});
formatter.result({
  "duration": 8375329,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.clearDb()"
});
formatter.result({
  "duration": 3750797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/books/not-existing-isbn",
      "offset": 19
    }
  ],
  "location": "CommonRestCallStepDefs.performGetOnResourceUri(String)"
});
formatter.result({
  "duration": 6203909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 28
    }
  ],
  "location": "CommonRestCallStepDefs.checkResponse(int)"
});
formatter.result({
  "duration": 91145,
  "status": "passed"
});
formatter.match({
  "location": "CommonRestCallStepDefs.checkResponseJsonMatch(String)"
});
formatter.result({
  "duration": 201116,
  "status": "passed"
});
formatter.before({
  "duration": 2477383,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "find by author",
  "description": "",
  "id": "example-resource-integration-test;find-by-author",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "the web context is set",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "the db is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "the following books exist:",
  "rows": [
    {
      "cells": [
        "isbn",
        "title",
        "author"
      ],
      "line": 58
    },
    {
      "cells": [
        "isbn1234",
        "Hamlet",
        "William Shakespeare"
      ],
      "line": 59
    },
    {
      "cells": [
        "isbn1235",
        "Romeo and Juliet",
        "William Shakespeare"
      ],
      "line": 60
    },
    {
      "cells": [
        "isbn1236",
        "To Kill a Mockingbird",
        "Harper lee"
      ],
      "line": 61
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "client request GET /api/books?author\u003dWilliam%20Shakespeare",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "the result json should be:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 65,
    "value": "[{\"isbn\":\"isbn1234\",\"title\":\"Hamlet\",\"author\":\"William Shakespeare\"},\n {\"isbn\":\"isbn1235\",\"title\":\"Romeo and Juliet\",\"author\":\"William Shakespeare\"}]"
  }
});
formatter.match({
  "location": "CommonRestCallStepDefs.givenServerIsUpAndRunning()"
});
formatter.result({
  "duration": 5695346,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.clearDb()"
});
formatter.result({
  "duration": 1339083,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.createBooks(DataTable)"
});
formatter.result({
  "duration": 4993987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/books?author\u003dWilliam%20Shakespeare",
      "offset": 19
    }
  ],
  "location": "CommonRestCallStepDefs.performGetOnResourceUri(String)"
});
formatter.result({
  "duration": 21786254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "CommonRestCallStepDefs.checkResponse(int)"
});
formatter.result({
  "duration": 98370,
  "status": "passed"
});
formatter.match({
  "location": "CommonRestCallStepDefs.checkResponseJsonMatch(String)"
});
formatter.result({
  "duration": 562848,
  "status": "passed"
});
formatter.before({
  "duration": 2999661,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "find by title",
  "description": "",
  "id": "example-resource-integration-test;find-by-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 71,
  "name": "the web context is set",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "the db is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 73,
  "name": "the following books exist:",
  "rows": [
    {
      "cells": [
        "isbn",
        "title",
        "author"
      ],
      "line": 74
    },
    {
      "cells": [
        "isbn1234",
        "Hamlet",
        "William Shakespeare"
      ],
      "line": 75
    },
    {
      "cells": [
        "isbn1235",
        "Romeo and Juliet",
        "William Shakespeare"
      ],
      "line": 76
    },
    {
      "cells": [
        "isbn1236",
        "To Kill a Mockingbird",
        "Harper lee"
      ],
      "line": 77
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "client request GET /api/books?title\u003dRomeo%20and%20Juliet",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "the result json should be:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 81,
    "value": "[{\"isbn\":\"isbn1235\",\"title\":\"Romeo and Juliet\",\"author\":\"William Shakespeare\"}]"
  }
});
formatter.match({
  "location": "CommonRestCallStepDefs.givenServerIsUpAndRunning()"
});
formatter.result({
  "duration": 51915992,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.clearDb()"
});
formatter.result({
  "duration": 5215743,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.createBooks(DataTable)"
});
formatter.result({
  "duration": 3841985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/books?title\u003dRomeo%20and%20Juliet",
      "offset": 19
    }
  ],
  "location": "CommonRestCallStepDefs.performGetOnResourceUri(String)"
});
formatter.result({
  "duration": 7111817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "CommonRestCallStepDefs.checkResponse(int)"
});
formatter.result({
  "duration": 77280,
  "status": "passed"
});
formatter.match({
  "location": "CommonRestCallStepDefs.checkResponseJsonMatch(String)"
});
formatter.result({
  "duration": 115252,
  "status": "passed"
});
formatter.before({
  "duration": 1316430,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "find all",
  "description": "",
  "id": "example-resource-integration-test;find-all",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 86,
  "name": "the web context is set",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "the db is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 88,
  "name": "the following books exist:",
  "rows": [
    {
      "cells": [
        "isbn",
        "title",
        "author"
      ],
      "line": 89
    },
    {
      "cells": [
        "isbn1234",
        "Hamlet",
        "William Shakespeare"
      ],
      "line": 90
    },
    {
      "cells": [
        "isbn1235",
        "Romeo and Juliet",
        "William Shakespeare"
      ],
      "line": 91
    },
    {
      "cells": [
        "isbn1236",
        "To Kill a Mockingbird",
        "Harper lee"
      ],
      "line": 92
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "client request GET /api/books",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "the result json should be:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 96,
    "value": "[{\"isbn\":\"isbn1234\", \"title\":\"Hamlet\",\"author\":\"William Shakespeare\"},\n {\"isbn\":\"isbn1235\", \"title\":\"Romeo and Juliet\",\"author\":\"William Shakespeare\"},\n {\"isbn\":\"isbn1236\", \"title\":\"To Kill a Mockingbird\",\"author\":\"Harper lee\"}]"
  }
});
formatter.match({
  "location": "CommonRestCallStepDefs.givenServerIsUpAndRunning()"
});
formatter.result({
  "duration": 5271574,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.clearDb()"
});
formatter.result({
  "duration": 4168325,
  "status": "passed"
});
formatter.match({
  "location": "BookInventoryStepDefs.createBooks(DataTable)"
});
formatter.result({
  "duration": 4077336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/books",
      "offset": 19
    }
  ],
  "location": "CommonRestCallStepDefs.performGetOnResourceUri(String)"
});
formatter.result({
  "duration": 6193100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "CommonRestCallStepDefs.checkResponse(int)"
});
formatter.result({
  "duration": 82743,
  "status": "passed"
});
formatter.match({
  "location": "CommonRestCallStepDefs.checkResponseJsonMatch(String)"
});
formatter.result({
  "duration": 174958,
  "status": "passed"
});
});