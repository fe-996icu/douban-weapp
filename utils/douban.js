// 获取所有本地api数据
import { comingSoon, inTheaters, newMovie, top250, usBox, info, weekly } from '../mockdata/index';

import fetch from './fetch'

const domain = 'https://douban.uieee.com/v2/movie';
// const domain = 'https://api.douban.com/v2/movie';
// const domain = 'http://localhost/v2/movie';

/**是否使用mock数据 */
function isMockData(){
	return getApp().environment.useMockData;
}

/**延迟获取数据时间 */
const delay_time = 200;

/**获取“正在上映”电影列表 */
export function getTheatersList(){
	if(!isMockData()){
		return fetch(domain +'/in_theaters').then(res=>{
			return res;
		});
	}else{
		return new Promise(resolve => setTimeout(() => resolve(inTheaters), delay_time));
	}
}

/**top250列表 */
export function getTop250List(){
	if (!isMockData()) {
		return fetch(domain + '/top250').then(res=>{
			return res;
		});
	}else{
		return new Promise(resolve => setTimeout(() => resolve(top250), delay_time));
	}
}

/**新片榜-列表 */
export function getNewMovieList() {
	if(!isMockData()){
		return fetch(domain + '/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a').then(res => {
			return res;
		});
	}else{
		return new Promise(resolve => setTimeout(() => resolve(newMovie), delay_time));
	}
}

/**即将上映-列表 */
export function getComingSoonList() {
	if(!isMockData()){
		return fetch(domain + '/coming_soon').then(res => {
			return res;
		});
	}else{
		return new Promise(resolve => setTimeout(() => resolve(comingSoon), delay_time));	
	}
}

/**北美票房榜-列表 */
export function getUsBoxList() {
	if(!isMockData()){
		return fetch(domain + '/us_box').then(res => {
			return res;
		});
	}else{
		return new Promise(resolve => setTimeout(() => resolve(usBox), delay_time));
	}
}
/**周票房榜单-列表 */
export function getWeeklyList(){
	if(!isMockData()){
		return fetch(domain + '/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a').then(res => {
			return res;
		});
	}else{
		return new Promise(resolve => setTimeout(() => resolve(weekly), delay_time));
	}
}

/**通过电影id获取电影详细信息 */
export function getMovieInfoById(id=''){
	if(!isMockData()){
		return fetch(`${domain}/${id}`).then(res=>{
			// 多个上映时间进行折行显示
			res.attrs.pubdate = res.attrs.pubdate.join('\n');

			// 作者信息处理
			res.author = res.author.map(v => v.name).join(',');

			return res;
		});
	}else{
		return new Promise(resolve => setTimeout(()=>{
			// 多个上映时间进行折行显示
			info.attrs.pubdate = info.attrs.pubdate.join('\n');
			// 作者信息处理
			info.author = info.author.map(v=>v.name).join(',');

			resolve(info)
		}, delay_time));	
	}
}