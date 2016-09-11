var TextBox = React.createClass({displayName:'TextBox',
	render: function(){
		return(
			React.createElement('div', {className: 'uploadFile'},
				React.createElement('input', {type: 'file', multiple: 'multiple', name: 'file'}))
			)
	}
	
})