import React from 'react';
import TreeChart from './treeChart';
import './App.css';

const data = {
	orgName: '效率工程线',
	list: [{
		avatar: "http://image1.ljcdn.com/usercenter/images/uc_ehr_avatar/d0503041-b947-4ecb-bdca-2c4ca6fdf490.png.375x375.png?v=1",
		name: '林外',
		position: '前端研发工程师'
	}],
	children: [
		{
			
			orgName: '采购中心',
			image_url: "https://static.refined-x.com/avat2.jpg",
			list: [],
			children: [
				{
					name: 'grandchild',
					image_url: "https://static.refined-x.com/avat.jpg"
				},
				{
					name: 'grandchild2',
					image_url: "https://static.refined-x.com/avat1.jpg"
				},
				{
					name: 'grandchild3',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				{
					name: 'grandchild4',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
			]
		},
		{
			name: 'children3',
			orgName: '司南产品技术中心',
			image_url: "https://static.refined-x.com/avat2.jpg",
			children: [
				[{
					name: 'grandchild',
					image_url: "https://static.refined-x.com/avat.jpg",
					children: [{
						name: 'grandchild2',
						image_url: "https://static.refined-x.com/avat1.jpg"
					}]
				},
				{
					name: 'grandchild2',
					image_url: "https://static.refined-x.com/avat1.jpg"
				}],
				{
					name: 'grandchild3',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				{
					name: 'grandchild4',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
			]
		}
	]
}

function App() {
  return (
    <div className="App">
      <label>切换为横向</label>
			<TreeChart treeData={data} className={'landscape'} />
    </div>
  );
}

export default App;
