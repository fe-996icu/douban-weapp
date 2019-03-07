// pages/detail/detail.js

import info from '../../mockdata/info.js'


const { douban, regeneratorRuntime, log } = getApp();


Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// ...info
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function({ id }) {

		// let info2 = JSON.parse(JSON.stringify(info));

		// // 多个上映时间进行折行显示
		// info2.attrs.pubdate = info2.attrs.pubdate.join('\n');
		// // 作者信息处理
		// info2.author = info2.author.map(v=>v.name).join(',');

		// this.setData(info2);
		
		let data = await douban.getMovieInfoById(id);
		this.setData(data);
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		// getApp().douban.getTheatersList().then(v=>{
		// 	console.log(v,'.............');
		// });
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})