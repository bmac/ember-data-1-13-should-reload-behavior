import Ember from 'ember';

export default Ember.Mixin.create({
  shouldReloadAll: function(/* store, snapshotRecordArray */) {
    return true;
  },

  shouldBackgroundReloadRecord: function(/* store, snapshot */) {
    return false;
  },
});
