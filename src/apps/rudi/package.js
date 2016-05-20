import ToyAppView from './toyAppView';

// Define the page that will be rendered for this app.
export default {
  /**
   * The entry point for the application.
   */
  app: './toyAppView.js',

  /**
   * Get the page to render on the server.
   * @return {Object} An object that represents the page.  This includes the view for the page and properties for the view.
   */
  getPage: () => {
    return new Promise((resolve) => {
      resolve({
        view: ToyAppView,
        props: { toys: [] }
      });
    });
  }
};
