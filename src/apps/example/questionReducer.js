import Flux from 'flux-angular2';

/**
 * A reducer that is used to add new questions to the application state in response to an action.
 */
export default class QuestionReducer extends Flux.Reducer {
  /**
   * @constructor
   * @param {Object} opts - Options passed to the super class.
   */
  constructor(opts) {
    super(opts);
    this.mQuestionIdNext = 0;
  }

  /**
   * Create a new state in response to an action with action.type === 'addAction' being dispatched.
   * @param {Object} state - The current state of the application.  Always treat this object as immutable.
   * @param {Object} action - The action to perform on the state.
   * @return {Object} The new state of the application after processing the given action.
   */
  actionAddQuestion(state, action) {
    // state is expected to be an array of existing questions.
    // since state is treated as immutable we return a new array instance
    // instead of pushing the new question onto the existing array.
    return [...state, {
      id: ++this.mQuestionIdNext,
      subject: action.subject,
      body: action.body
    }];
  }
}
