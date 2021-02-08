import { testController } from '../support/world'
import { select } from '../support/utils'
import { page } from '../pages/page'

export class Product {
  constructor () {
    this.url = `https://www.sodimac.cl/sodimac-cl/product/72470X/Pintura-latex-habitacional-blanco-1-4-gl/72470X`
    
  }
  
  firstProduct  () {
    return select('div.jsx-4129468047:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)').innerText
  }

  async equalPrice (price) {
    await testController
      .expect(this.firstProduct()).eql(price)

  }

}
