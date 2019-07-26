const i18next = {
  use: (): any => { return i18next;},
  init: (): void => {},
  t: (key: any): any => key
}

export default i18next
