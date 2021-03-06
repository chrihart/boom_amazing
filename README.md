## Boom Amazing...

... is a web application that allows you to zoom/rotate/pan around in an image, record the different positions and then replay those for a presentation.

The image can be either a pixel based format e.g. png/gif/jpg or an svg file.

Boom Amazing uses CouchDB to store its data and CouchApp to upload itself into CouchDB. (Since CouchDB has a built-in web server everything is served directly by CouchDB)

## Running it

* Install CouchDB
* Install CouchApp (requires Python)
* Clone the Boom Amazing Repo
* push the app to a CouchDB database by changing to the checkout and running `couchapp push`
* create an empty document in the boom\_amazing database and upload your svg/png/gif file, for example using Futon (http://localhost:5984/_utils)
* Go to http://localhost:5984/your\_db/boom\_amazing/\_design/boom_amazing/index.html
* Choose your presentation from the dropdown in the toolbar
* Start moving around, click save to record a position ("add a slide")
  * hold down \[alt\] and move the mouse up/down to zoom
  * hold down \[ctrl\] and move the mouse left/right to rotate
* Replay the saved positions by clicking the next/previous links in the toolbar at the top
* Hack the code, add something awesome, share it on GitHub

## URLs

* http://github.com/langalex/boom_amazing

## pixel vs. svg presentations
* pixel images make it easier to embed photos, better performance, but you can see the pixels at some point
* svg can zoom in infinitely, but performance problems with more complex presentations
* creating svg files on the mac is a pain, so i added pixels

## Contact

Alexander Lang
alex@upstre.am
http://twitter.com/langalex

## Disclaimer

Currently this only runs on relatively new Webkit version that support the webkit-transform and webkit-transform-origin CSS properties.

## Ideas

* use the browser's LocalStorage instead/in addition to CouchDB so this could run on e.g. iPads
* use jQTouch or similar to support gestures for zoom/rotate instead of holding down keys