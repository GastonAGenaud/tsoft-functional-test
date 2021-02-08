/* eslint-disable import/no-extraneous-dependencies  */
import { When, Given, Then } from 'cucumber'
import { page } from '../pages/page'
import { ClientFunction } from 'testcafe';
import { testController } from '../support/world'



Given('Ingreso a la pantalla de mi negocio', async () => {
  await page.nongmb.navigate()
})

When('Ingreso los datos del local {string}', async text => {
  const scrollToElement = ClientFunction((selector, offsetX, offsetY) => {
    const element = selector();
    
      if (element && element.scrollIntoView) element.scrollIntoView();
      // eslint-disable-next-line no-void
      else if (offsetX !== void 0 && offsetY !== void 0) window.scrollBy(offsetX, offsetY);
    }).with({ boundTestRun: testController });
    const scrollBy = ClientFunction((x, y) => {
    window.scrollBy(x, y);
    }).with({ boundTestRun: testController });
    
  await scrollToElement(page.nongmb.reportButton(), 250, 0);
 	await scrollBy(2000, 0);
  await page.nongmb.reportTest(text);
})

Then('retorna la pagina de solicitud de reporte', async () => {
  await page.nongmb.navigateReport();
})

