import React, { Component } from 'react';

const addKey = (obj, idx) => {
	if (!obj) return
	if (obj.children && obj.children.length) {
		obj.children.map((c, _idx) => {
			return addKey(c, `${idx}-${_idx}`)
		})
	}
	return {
		key: idx,
		...obj
	}
}

export default class  extends Component {
	constructor(props) {
		super(props);
		this.state = {
			treeData: addKey(props.treeData, 0)
		}
	}
	onClickNode = (type, data) => {

	}

	onToggleExtend = (data) => {
		const { treeData } = this.state;
		const recursionTree = (obj) => {
			if (obj.key === data.key) {
				obj.extend = !obj.extend;
			} else if (obj.children && obj.children.length) {
				obj.children.map((c) => {
					return recursionTree(c)
				})
			}
			return obj
		}
		const _treeData = addKey(recursionTree(treeData))
		this.setState({
			treeData: _treeData
		})
		// treeData.extend = !treeData.extend;
    // this.setState({
		// 	treeData
		// })
	}

	renderTree = (treeData, cls) => {
		console.info(treeData, '------treeData', treeData.children && treeData.extend)
		if (!treeData || treeData.length) return null
		return (
			<table className={cls} key={treeData.key}>
				<tr>
					<td 
						colSpan={treeData.children ? treeData.children.length * 2 : 1}
						className={`${treeData.children ? 'parentLevel' : ''} ${treeData.children && treeData.extend ? 'extend' : ''}`}>
							<div className='node'>
								<div className="person" onClick={() => this.onClickNode('click-node', treeData)}>
									<div className="avat">
										<img src={treeData.image_url} alt="" />
									</div>
									<div className="name">{treeData.name}</div>
								</div>
							</div>
							{
								!!treeData.children &&
								<div className="extend_handle" onClick={ () => this.onToggleExtend(treeData)}></div>
							}
						</td>
				</tr>
				{
					treeData.children && treeData.extend && 
					<tr>
						{
							 treeData.children.map((children, index) => {
								return (
									<td key={index} colSpan="2" className="childLevel">
										{
											this.renderTree(children, '')
										}
									</td>
								)
							 })
						}
					</tr>
				}
			</table>
		)
	}
	render() {
		const { treeData } = this.state;
		console.info('----render----', treeData)
		return this.renderTree(treeData, '')
		// return this.renderTree(treeData, 'landscape')
	}
}
