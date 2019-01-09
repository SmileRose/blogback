import axios from 'axios'
export default {
	state: {
		economyUrl: '/api/economy',
		topData: [],
	},
	mutations: {
		loadNews(state) {}
	},
	actions: {
		loadEco({
			commit, state
		}, url) {
			axios({
				method: 'get',
				url: url
			})
			.then((res) => {
				if (res.status == 200) {
					let datas = res.data.economy;
					state.topData = datas.enonomy1.result;
				} else {
					console.log('error')
				}
				commit('loadNews')
			})
		}
	}
}
