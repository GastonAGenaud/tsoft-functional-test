import { testController } from '../support/world'
import { select } from '../support/utils'
import { ClientFunction } from 'testcafe';


export class Home {
  constructor () {
    this.url = `https://www.sodimac.cl/sodimac-cl/`
    
  }
  
  searchBox  () {
    return select('.DesktopSearchBar-module_searchbox-input__HXYgR')
  }
  searchButton () {
    return select ('.DesktopSearchBar-module_lens-icon__2x7d_')
  }

  async navigate () {
    await testController.navigateTo(this.url)
  }

  async navegateSearch (text) {
    const url = text;
    url.replace(/\s/g, '%20');

    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('https://www.sodimac.cl/sodimac-cl/search?Ntt='+url);
  }

  async stepSearch (text) {
    
    await testController
      .click(this.searchBox())
      .typeText(this.searchBox(), text, { paste: true })
      .click(this.searchButton())
  }

}
