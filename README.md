# Ember-data-1-13-should-reload-behavior

This mixin can be used with Ember Data v1.13 to silence the deprecations warnings from `shouldReloadAll` and `shouldBackbroundReloadRecord`. It can also be used with Ember Data v2.x to opt into the old v1.13 behaviors around loading records from the cache. If you would like to use the v2.x behavior in Ember Data v1.13 please check out the [ember-data-2-x-should-reload-behavior addon](https://github.com/bmac/ember-data-2-x-should-reload-behavior/).

| Action | v1.13 | v2.x | ember-data-1-13-should-reload-behavior |
| ------ | ----- | ---- | -------------------------------------- |
| `store.findRecord('post', 1)` where a post with id of one is not in the cache | Ember Data will issue an new adapter request for a post with an id of 1. | Ember Data will issue an new adapter request for a post with an id of 1. (Same behavior as v1.13) | N/A |
| `store.findRecord('post', 1)` where a post with id of 1 is in the cache | Ember Data will return the record from the cache and never issue another request for this record. | Ember Data will return the record from the cache and start a new background request to ensure the data is up to date | Ember Data will return the record from the cache and never issue another request for this record. |
| `store.findAll('post') with no post records in the cache | Ember Data will issue a new adapter request for all the post records. | Ember Data will issue a new adapter request for all the post records. (Same behavior as v1.13) | N/A |
| `store.findAll('post') with at least 1 post records in the cache | Ember Data will issue a new adapter request for all the post records. | Ember Data will resolve the promise with all of the known post records and issue a request in the background for all the post records. | Ember Data will issue a new adapter request for all the post records. |



## Requirements
* Ember >= 1.13.0
* Ember Data >= 1.13.0
* Ember CLI

## Installing

* ember-cli >= 0.2.3 `ember install ember-data-1-13-should-reload-behavior`

## Upgrading

Please clear `node_modules` and `bower_components` before reporting issues after upgrading.

## Usage

```js
// app/adapters/application.js
import DS from 'ember-data';
import ShouldReloadMixin from 'ember-data-1-13-should-reload-behavior/mixins/should-reload';

// Also works with DS.RESTAdapter
export default DS.JSONAPIAdapter.extend(ShouldReloadMixin, {
  // Include your other customizations here ...
});
```

## Development

* `git clone` this repository
* `npm install`
* `bower install`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
