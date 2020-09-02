const state = {
  localRepos: [],
  test: 'test'
}
const mutations = {
  INITLOCALPATH (state, value) {
    console.log(state.test, '11234124124214', value)
    this.state.localRepos = []
  }
}
const actions = {

}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
