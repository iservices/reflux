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
   * TODO: get data from API
   */
  getPage: () => {
    return new Promise((resolve) => {
      resolve({
        view: ToyAppView,
        // props: { toys: [{ id: 1, sport: 'skiing', category: 'boot' }, { id: 2, sport: 'skiing', category: 'pole' }] }
        props: { toys: [] }
      });
    });
  }
};
