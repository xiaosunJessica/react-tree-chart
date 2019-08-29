import React from 'react';
import TreeChart from './treeChart';
import './App.css';

const data = {
	name: 'root',
	image_url: "http://image1.ljcdn.com/usercenter/images/uc_ehr_avatar/d0503041-b947-4ecb-bdca-2c4ca6fdf490.png.375x375.png?v=1",
	children: [
		{
			name: 'children1',
			image_url: "https://static.refined-x.com/avat1.jpg"
		},
		{
			name: 'children2',
			image_url: "https://static.refined-x.com/avat2.jpg",
			mate: {
				name: 'mate',
				image_url: "https://static.refined-x.com/avat3.jpg"
			},
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
				{
					name: 'grandchild5',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				{
					name: 'grandchild6',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				{
					name: 'grandchild7',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				{
					name: 'grandchild8',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				{
					name: 'grandchild9',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				{
					name: 'grandchild10',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				{
					name: 'grandchild11',
					image_url: "https://static.refined-x.com/avat2.jpg"
				},
				// {
				// 	name: 'grandchild12',
				// 	image_url: "https://static.refined-x.com/avat2.jpg"
				// },
				// {
				// 	name: 'grandchild13',
				// 	image_url: "https://static.refined-x.com/avat2.jpg"
				// },
				// {
				// 	name: 'grandchild14',
				// 	image_url: "https://static.refined-x.com/avat2.jpg"
				// },
				// {
				// 	name: 'grandchild15',
				// 	image_url: "https://static.refined-x.com/avat2.jpg"
				// },
				// {
				// 	name: 'grandchild16',
				// 	image_url: "https://static.refined-x.com/avat2.jpg"
				// },
				// {
				// 	name: 'grandchild17',
				// 	image_url: "https://static.refined-x.com/avat2.jpg"
				// },
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
