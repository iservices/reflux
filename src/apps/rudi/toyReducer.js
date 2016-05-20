import Flux from 'flux-angular2';

export default class ToyReducer extends Flux.Reducer {

  constructor(opts) {
    super(opts);
    this.mToyIdNext = 0;
  }

  actionAddToy(state, action) {
    return [...state, {
      id: ++this.mToyIdNext,
      sport: action.sport,
      category: action.category
    }];
  }
}
