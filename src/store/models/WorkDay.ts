import { Model } from '@vuex-orm/core';

export default class WorkDay extends Model {
  // This is the name used as module name of the Vuex Store.
  public static entity = 'worklog';
  public static primaryKey = 'date';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  public static fields() {
    return {
      date: this.attr(''),
      hours: this.number(0).nullable(),
    };
  }
}
