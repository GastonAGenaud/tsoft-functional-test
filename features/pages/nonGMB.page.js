import { testController } from '../support/world'
import { select } from '../support/utils'
import { ClientFunction } from 'testcafe';

const scrollToElement = ClientFunction((selector, offsetX, offsetY) => {
  const element = selector();
  
  	if (element && element.scrollIntoView) element.scrollIntoView();
  	// eslint-disable-next-line no-void
  	else if (offsetX !== void 0 && offsetY !== void 0) window.scrollBy(offsetX, offsetY);
  }).with({ boundTestRun: testController });
  const scrollBy = ClientFunction((x, y) => {
  window.scrollBy(x, y);
  }).with({ boundTestRun: testController });

export class nonGMB {
  constructor () {
    this.url = `https://dev.minegocio.searchmas.es/`
    
  }
  
  accessGMB  () {
    return select('button.mx-auto > span:nth-child(1)')
  }

  localname () {
    return select('div.sm\\:w-1\\/2:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)')
  }

  stateField () {
    return select('div.sm\\:w-1\\/2:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)')
  }

  streetField () {
    return select('div.sm\\:w-1\\/2:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)');
  }

  postalcodeField () {
    return select('div.sm\\:w-1\\/2:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)')
  }

  cityField () {
    return select('.pl-8 > div:nth-child(2) > input:nth-child(1)')
  }

  contryField () {
    return select  ('.MuiSelect-root')
  }

  contryOption () {
    const option = this.contryField().find('option');
    return option
  }

  keywordField () {
    return select  ('div.MuiFormControl-root:nth-child(3) > div:nth-child(2) > input:nth-child(1)')
  }

  keyAdd () {
    return select ('.icon-plus')
  }

  keyDelete () {
    return select ('.MuiChip-deleteIcon > path:nth-child(1)')
  }
  reportButton () {
    return select ('div.w-7\\/12:nth-child(3) > button:nth-child(1) > span:nth-child(1)').addCustomMethods({
      scroll: (el) => {
          el.scrollIntoView();
      }
  });
  }

  getSearchMas () {
    return select ('.MuiButton-containedSecondary > span:nth-child(1)')
  }
  testScroll () {
    return select ('p.text-xl:nth-child(1)').addCustomMethods({
      scroll: (el) => {
          el.scrollIntoView();
      }
  });
  }
  async navigate () {
    await testController.navigateTo(this.url)
  }

  async navigateGetSearchMas () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('https://searchmas.es/inscripcion-demo-gratis');
  }
  async navigateReport () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('https://dev.minegocio.searchmas.es/result');
  }
  
  async reportTest (text) {
    
    await testController
      .click(this.localname())
      .typeText(this.localname(), text, { paste: true })
      .click(this.streetField())
      .typeText(this.streetField(), 'Tristán Malbrán 4213', { paste: true })
      .click(this.postalcodeField())
      .typeText(this.postalcodeField(), '5009', { paste: true })
      .click(this.cityField())
      .typeText(this.cityField(), 'Cordoba', { paste: true })
      .click(this.stateField())
      .typeText(this.stateField(), 'Cordoba', { paste: true })
      .click(this.contryField())
      .click(this.contryOption().withText('Argentina'))
      .click(this.keywordField())
      .typeText(this.keywordField(), 'NaN Software Development', { paste: true })
      .click(this.keyAdd())
      .click(this.reportButton())

  }

}
