/* eslint-disable import/no-extraneous-dependencies  */
import { When, Given, Then } from 'cucumber'
import { page } from '../pages/page'

var price;

Given('Ingreso a la pantalla de home de SODIMAC', async () => {
  await page.home.navigate()
})

When('Ingreso los datos de la busqueda referida a {string}', async text => {
  await page.home.stepSearch(text);
  price = await page.search.stepSearch(text);
})

Then('valido que los precios son iguales', async () => {
  await page.product.equalPrice(price);
})

