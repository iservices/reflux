import QuestionAppView from './questionAppView';

// Define the page that will be rendered for this app.
export default {
  /**
   * The entry point for the application.
   */
  app: './questionAppView.js',

  /**
   * Get the page to render on the server.
   * @return {Object} An object that represents the page.  This includes the view for the page and properties for the view.
   */
  getPage: () => {
    return new Promise((resolve) => {
      resolve({
        view: QuestionAppView,
        props: { questions: [] }
      });
    });
  }
};
