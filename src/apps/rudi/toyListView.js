import Flux from 'flux-angular2';

/**
 * This is the view for displaying a list of questions.
 */
@Flux.View.component({
  selector: 'ToyListView',
  /* template: (`<div>
    <div *ngFor="let toy of state">
      <b><span id="toySportOut{{toy.id}}">{{toy.sport}}</span></b> -
         <span id="toyCategoryOut{{toy.id}}">{{toy.category}}</span>
    </div>
  </div>`), */
  template: (`
    <div>
      <div *ngFor="let toy of state">
        Id: {{toy.id}}<br/>
        Sport: {{toy.sport}}<br/>
        Category: {{toy.category}}
        <hr/>
      </div>
    </div>`),
  inputs: ['state']
})
export default class ToyListView extends Flux.View {
}
