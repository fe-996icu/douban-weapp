/**失败回调*/
function failCallback({ error, reject, url }) {
	wx.hideLoading();

	// 错误提示
	wx.showToast({
		title: '获取数据失败！！！',
		image: '/images/icon/error.png',
		duration: 2000
	});

	// try{
	// 	reject(error);
	// }catch(err){
	// 	console.log(err);
	// }

	console.error(`调用接口出错：${url}`, error);
}

export default function(url='', data={}){
	// 提示加载中
	wx.showLoading({
		title: '玩命加载中...',
		mask: true
	});

	return new Promise((resolve, reject)=>{
		wx.request({
			url: url,
			method: 'get',
			data: data,
			dataType: 'json',
			header: {
				'Content-Type': 'json'
			},
			success(res){
				// 200~300之间状态码，成功
				if(/^(2|3)\d{2}$/.test(res.statusCode)){
					wx.hideLoading();

					resolve(res.data);
				}else{
					// 调用失败回调
					failCallback({
						error: res,
						reject,
						url
					});
				}
			},
			fail: err=>failCallback({
				error: err,
				reject,
				url
			})
		})
	});
}