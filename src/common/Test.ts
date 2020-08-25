export default class Test {
  constructor (str: string) {
    this.msg(str)
  }

  private msg (msg: string): void {
    console.log('----', msg)
  }
}
