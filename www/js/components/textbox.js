var TextBox = React.createClass({displayName:'TextBox',
	// getInitialState: function() {
	// 	return
	// },
	componentDidMount: function (){
		console.log(90)
	},
	_onClick: function() {
		console.log('here')
	},
	render: function(){
		return(
			React.createElement('div', {className: 'container'},
				React.createElement('div', {className: 'row'},
					React.createElement('div', {className: 'col-sm-4'},
						React.createElement('div', {id: 'upload'},
							React.createElement('h3', null, 'Select Files to Upload')
						)
					),
				React.createElement('div', {className: 'col-sm-4'},
					React.createElement('input', {type: 'file', multiple: 'multiple', name: 'file'})
					)
				),
				React.createElement('div', {className: 'row'},
					React.createElement('div', {className: 'col-sm-4'},
						React.createElement('input', {type: 'submit', className: 'uploadBtn', value: 'upload', onClick: this._onClick})
					)
				)
			)
		)
	}
	
})