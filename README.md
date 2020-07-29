Instructions
============

Okay, this week I'd like you to use the Nunjucks templating system, to serve up some html.

Essentially, create a new route in the provided app.js, and use it to preprocess a response with Nunjucks, before serving that HTML up to the user.

Use the attached data.json as a data source.

Stretch Exercise 1
------------------

API Access. See the resources below for an example of calling a REST API.

Create a new route which calls riker.bencollier.info and surfaces that content in a Nunjucks template. Feel free to add appropriate formatting to your template.

Stretch Exercise 2
------------------

Collate calls to riker.bencollier.info in a data source - a database?

Create a new endpoint which returns a log of all responses from the endpoint API.


Resources
---------

Nunjucks: 

https://mozilla.github.io/nunjucks/getting-started.html

See the example in the answer to this StackOverflow question as a very basic way of using Nunjucks quickly:

https://stackoverflow.com/questions/30978722/simplest-possible-node-js-nunjucks-example

This is a better example of using Nunjucks to poke data into templates:

https://riptutorial.com/node-js/example/20689/nunjucks

JSON Quick Reference (As requested!):

https://www.w3schools.com/jsreF/jsref_obj_json.asp

API Access from Node:

https://www.rapiddg.com/article/calling-rest-api-nodejs-script