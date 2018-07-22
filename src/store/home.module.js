import {
    PackageService
} from '../common/api.service'

import {
    FETCH_PACKAGE
} from './actions.type'

import {
    FETCH_START,
    SET_PACKAGE
} from './mutations.type'

const state = {
  npmPackage: {},
  isLoading: true,
  packageName: '',
  packageVersion: ''
}

const getters = {
  packageName (state) {
    return state.packageName
  },
  packageVersion (state) {
    return state.packageVersion
  },
  npmPackage (state) {
    return state.npmPackage
  },
  isLoading (state) {
    return state.isLoading
  }
}

const actions = {
  [FETCH_PACKAGE] ({ commit }, params) {
    commit(FETCH_START)
    return PackageService.get(params.name, params.version)
        .then(({ data }) => {
          commit(SET_PACKAGE, data)
        })
        .catch((error) => {
          throw new Error(error)
        })
  }
}

const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  },
  [SET_PACKAGE] (state, data) {
    state.npmPackage = data
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
