import axios from 'axios'
export default {
  state: {
    companyUrl: '/api/company',
    loaded: false,
    company4: {},
    line1pie: {},
    line3pie: {},
    top3top: {},
    persort: {}
  },
  mutations: {
    loadNews(state) {}
  },
  actions: {
    loadData({ commit, state }, url) {
      axios({
          method: 'get',
          url: url
        })
        .then((res) => {
          if (res.status == 200) {
            state.loaded = true;



            let datas = res.data.company;

            let companydata = datas.company4.result;
            let top3 = {
              "园区注册企业": companydata.BUS00005I[0].totalEnterpriseNumber,
              "投资带动企业": companydata.INV00001I[0].investDriveEnterpriseNum,
              "周边带动企业": companydata.BUS00005O[0].totalEnterpriseNumber
            }
            state.top3top = top3;
            state.company4 = companydata;

            state.persort = companydata.BUS20004O[0];

            state.line1pie = datas.company7.result.BUS00022I[0];
            state.line3pie = datas.company7.result.BUS00016I[0];
          }
          commit('loadNews')
        })
    }
  }
}
