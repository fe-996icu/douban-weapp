const { toString } = Object.prototype;

/**获取原生数据类型 */
export function toRawType(value) {
	return _toString.call(value).slice(8, -1)
}

/**wx.showModal() 弹出日志输出 */
export function log(...rest){
	if(rest.length === 1){
		[rest] = rest;
	}else if(rest.length === 0){
		rest = '';
	}

	wx.showModal({
		title: '输出',
		content: JSON.stringify(rest),
	});

	console.log('---showModal:', rest);
}
