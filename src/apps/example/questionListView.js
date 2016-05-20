import Flux from 'flux-angular2';

/**
 * This is the view for displaying a list of questions.
 */
@Flux.View.component({
  selector: 'QuestionListView',
  template: (`<div>
    <div *ngFor="let question of state">
      <b><span id="questionSubjectOut{{question.id}}">{{question.subject}}</span></b> -
         <span id="questionBodyOut{{question.id}}">{{question.body}}</span>
    </div>
  </div>`),
  inputs: ['state']
})
export default class QuestionListView extends Flux.View {
}
