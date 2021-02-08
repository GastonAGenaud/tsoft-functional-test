import { testController } from './world'

import { Selector } from 'testcafe'

export function select (selector) {
  // You can overwrite selector options by using the selector's "with" function
  // In this case, we make a variable holding the test controller reference
  // available to the selector scope under the name "testController"
  return Selector(selector).with({ boundTestRun: testController })
}

export function selectByDataHook (selector) {
  return Selector(`[data-hook="${selector}"]`).with({
    boundTestRun: testController
  })
}

export function selectByStartWithDataHook (selector) {
  return Selector(`[data-hook^="${selector}"]`).with({
    boundTestRun: testController
  })
}
