import Homey from 'homey';

class MoesCommunityApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MoesCommunityApp has been initialized');
  }

}

module.exports = MoesCommunityApp;
