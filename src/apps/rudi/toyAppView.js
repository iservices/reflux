import Flux from 'flux-angular2';
import ToyListView from './toyListView';
import ToyAddView from './toyAddView';
import ToyReducer from './toyReducer';

@Flux.View.component({
  selector: 'ToyAppView',
  template: (`<div>
    <ToyAddView></ToyAddView>
    <div>Size: <span id="toySize">{{state.toys.length}}</span></div>
    <ToyListView [state]="state.toys"></ToyListView>
  </div>`),
  directives: [ToyAddView, ToyListView]
})
export default class ToyAppView extends Flux.AppView {

  constructor() {
    super();
    this.toyReducer = new ToyReducer({ initialState: this.props.toys });
  }

  reduce(state, action) {
    return {
      toys: this.toyReducer.reduce(state.toys, action)
    };
  }

  initialState() {
    return {
      toys: this.toyReducer.initialState()
    };
  }
}

Flux.Page.bootstrap(ToyAppView);
