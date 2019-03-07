// components/swiper-banner/swiper-banner.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		list: {
			type: Array,
			value: []
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		swiperTap(ev) {
			let { id } = ev.target.dataset;

			// 跳转到详情页
			getApp().toDetail(id);
		}
	}
})
