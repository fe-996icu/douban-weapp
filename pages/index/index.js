// 从app.js中获取能力
const { regeneratorRuntime, log, douban, environment } = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
		/**swiper组件所用资源（上映 - 前10张图） */
		bannerList: [],
		inTheaters: [],
		top250: []
    },

	/**获取页面数据并渲染 */
	async renderPageData(){
		// 获取调用api方法
		let { getTheatersList, getNewMovieList, getComingSoonList, getTop250List } = douban;
		let all = [
			getTheatersList(),
			getNewMovieList(),
			getComingSoonList(),
			getTop250List()
		];

		var [inTheaters, newMovie, comingSoon, top250List] = await Promise.all(all);

		// log(inTheaters);

		this.setData({
			bannerList: inTheaters.subjects.slice(0, 8),
			inTheaters: inTheaters,
			newMovie,
			comingSoon,
			top250: top250List
		});
	},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function(options){
		this.renderPageData();
	},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
		if(environment.useMockData){
			this.renderPageData();
		}
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})