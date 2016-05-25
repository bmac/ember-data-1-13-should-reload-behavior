import Ember from 'ember';
import ShouldReloadMixin from 'ember-data-1-13-should-reload-behavior/mixins/should-reload';
import { module, test } from 'qunit';

module('Unit | Mixin | should reload');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShouldReloadObject = Ember.Object.extend(ShouldReloadMixin);
  let subject = ShouldReloadObject.create();
  assert.ok(subject);
});


test('shouldReloadAll should always return true', function(assert) {
  let ShouldReloadObject = Ember.Object.extend(ShouldReloadMixin);
  let subject = ShouldReloadObject.create();
  assert.equal(subject.shouldReloadAll(), true);
});


test('shouldBackgroundReloadRecord should always return false', function(assert) {
  let ShouldReloadObject = Ember.Object.extend(ShouldReloadMixin);
  let subject = ShouldReloadObject.create();
  assert.equal(subject.shouldBackgroundReloadRecord(), false);
});
