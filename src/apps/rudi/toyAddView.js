import Flux from 'flux-angular2';

@Flux.View.component({
  selector: 'ToyAddView',
  template: (`<div>
    <form>
      <input id="toySportIn" [value]="data.sport" (change)="data.sport = $event.target.value" type="text" placeholder="sport for toy" />
      <input id="toyCategoryIn" [value]="data.category" (change)="data.category = $event.target.value" type="text" placeholder="category of toy" />
      <button id="toyCreate" type="button" (click)="handleClick()">Create</button>
    </form>
  </div>`)
})
export default class ToyAddView extends Flux.View {

  constructor() {
    super();

    // initialize the local state for this view
    this.data.sport = '';
    this.data.category = '';
  }

  handleClick() {
    // dispatch an addQuestion event
    this.dispatch({
      type: 'addToy',
      sport: this.data.sport,
      category: this.data.category
    });

    // clear out inputs after creating question
    this.data.sport = '';
    this.data.category = '';
  }
}
