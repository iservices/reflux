import Flux from 'flux-angular2';
import QuestionListView from './questionListView';
import QuestionAddView from './questionAddView';
import QuestionReducer from './questionReducer';

/**
 * The view for this app.
 */
@Flux.View.component({
  selector: 'QuestionAppView',
  template: (`<div>
    <QuestionAddView></QuestionAddView>
    <div id="size">Size: {{state.questions.length}}</div>
    <QuestionListView [state]="state.questions"></QuestionListView>
  </div>`),
  directives: [QuestionAddView, QuestionListView]
})
export default class QuestionAppView extends Flux.AppView {

  /**
   * @constructor
   */
  constructor() {
    super();
    this.questionReducer = new QuestionReducer({ initialState: this.props.questions });
  }

  /**
   * This function is executed by the page in response to an action that has been dispatched.
   * @param {Object} state - The current state of the application.  Always treat this object as immutable.
   * @param {Object} action - The action to perform on the state.
   * @return {Object} The new state of the application after processing the given action.
   */
  reduce(state, action) {
    return {
      questions: this.questionReducer.reduce(state.questions, action)
    };
  }

  /**
   * Get the initial state of of the application.
   * @return {Object} The initial state of the application.
   */
  initialState() {
    return {
      questions: this.questionReducer.initialState()
    };
  }
}

Flux.Page.bootstrap(QuestionAppView);
