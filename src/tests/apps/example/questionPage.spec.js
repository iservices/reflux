/* eslint-env node, mocha */
import * as assert from 'assert';
import PageBuilder from 'flux-angular2/lib/local/pageBuilder';
import ExampleView from '../../../apps/example/questionAppView';

/**
 * Tests for the example application.
 */
describe('/src/apps/example', function () {
  /**
   * Simple test of the inital page render.
   */
  it('should render as expected and respond dynamically to input.', function (done) {
    PageBuilder.test({
      view: ExampleView,
      props: { questions: [] },
      action: {
        // check for new state after question is added
        addQuestion: () => {
          // updated values
          const newSize = document.getElementById('size');
          const newQuestionSubjectOut = document.getElementById('questionSubjectOut1');
          const newQuestionBodyOut = document.getElementById('questionBodyOut1');

          // validate elements
          assert.ok(newSize, 'could not find updated size div element');
          assert.ok(newQuestionSubjectOut, 'could not find question subject output.');
          assert.ok(newQuestionBodyOut, 'could not find question body output.');

          // check new values
          assert.equal(newSize.innerHTML, 'Size: 1', 'updated size is incorrect.');
          assert.equal(newQuestionSubjectOut.innerHTML, 'Test Subject', 'updated question subject is incorrect.');
          assert.equal(newQuestionBodyOut.innerHTML, 'Test Body', 'updated question body is incorrect.');

          done();
        }
      }
    })
    .then(() => {
      // get needed elements
      const size = document.getElementById('size');
      const questionSubjectIn = document.getElementById('questionSubjectIn');
      const questionBodyIn = document.getElementById('questionBodyIn');
      const questionCreate = document.getElementById('questionCreate');
      const questionSubjectOut = document.getElementById('questionSubjectOut1');
      const questionBodyOut = document.getElementById('questionBodyOut1');

      // validate elements
      assert.ok(size, 'could not find size div element');
      assert.ok(questionSubjectIn, 'could not find question subject input.');
      assert.ok(questionBodyIn, 'could not find question body input.');
      assert.ok(questionCreate, 'could not find create button');
      assert.ok(!questionSubjectOut, 'question subject exists when it should not.');
      assert.ok(!questionBodyOut, 'question body exists when it should not.');

      // check initial size
      assert.equal(size.innerHTML, 'Size: 0', 'size is not the correct value.');

      // create a new question
      questionSubjectIn.value = 'Test Subject';
      questionSubjectIn.dispatchEvent(new Event('change'));
      questionBodyIn.value = 'Test Body';
      questionBodyIn.dispatchEvent(new Event('change'));
      questionCreate.dispatchEvent(new Event('click'));
    });
  });
});
