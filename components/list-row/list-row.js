
// components/list-row.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
		title: {
			type: 'String',
			value: '标题'
		},
		subjects: {
			type: 'String',
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
		toDetail(ev){
			let { id } = ev.currentTarget.dataset;
			
			getApp().toDetail(id);
		}
    }
})