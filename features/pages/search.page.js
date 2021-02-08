import { testController } from '../support/world'
import { select } from '../support/utils'


export class Search {
  constructor () {
    this.url = `https://www.sodimac.cl/sodimac-cl/search?Ntt=pintura%20blanca`
    
  }
  
  firstProduct () {
    return  select ('div.product-wrapper:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
  }
  firstPriceProduct  () {
    return select('div.product-wrapper:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').innerText
  }
  
  async navegateToProduct () {

    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('https://www.sodimac.cl/sodimac-cl/product/72470X/Pintura-latex-habitacional-blanco-1-4-gl/72470X');
  }
  async priceProduct () {
    const price = this.firstPriceProduct();
    return price;
  }
  async stepSearch () {
    const price = await this.priceProduct();
    await testController
      .click(this.firstProduct());
      return price;
  }

}
