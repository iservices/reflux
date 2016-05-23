import Flux from 'flux-angular2';
import ToyListView from './toyListView';
import ToyAddView from './toyAddView';
import ToyReducer from './toyReducer';

@Flux.View.component({
  selector: 'ToyAppView',
  template: (`<div>
    <ToyAddView></ToyAddView>
    <div>Size: <span id="toySize">{{state.toys.length}}</span></div>
    <hr/>
    <ToyListView [state]="state.toys"></ToyListView>
  </div>`),
  directives: [ToyAddView, ToyListView]
})
export default class ToyAppView extends Flux.AppView {

  constructor() {
    super();
    console.log('in constructor');
    this.toyReducer = new ToyReducer({ initialState: this.props.toys });
  }

  reduce(state, action) {
    console.log('in reduce');
    return {
      toys: this.toyReducer.reduce(state.toys, action)
    };
  }

  initialState() {
    console.log('in initialState');
    return {
      toys: this.toyReducer.initialState()
    };
  }

  onLoad() {
    console.log('in onLoad');
    Flux.Page.current.request({
      method: 'GET',
      url: 'https://unum-cwp-dev0-tscilipoti-api.herokuapp.com/api/Toy/'
    }).then(result => {
      console.log(result);
      this.toyReducer.state = result;
    });
  }
}

Flux.Page.bootstrap(ToyAppView);
