var TextBox = React.createClass({displayName:'TextBox',
	// getInitialState: function() {
	// 	return
	// },
	componentDidMount: function (){
		console.log(90)
	},
	_onClick: function() {
		console.log('here')
		var fileArray = []
		var fileList = document.getElementById('file')
		console.log(fileList.files)

		if ('files' in fileList){
			
			for(i = 0; i < fileList.files.length ;i++){
				var file = {}
				file['fileName'] = fileList['files'][i]['name']
				file['fileSize'] = fileList['files'][i]['size']
				file['fileType'] = fileList['files'][i]['type']

				fileArray.push(file)
			}
		}
		console.log(fileArray)
		// use cordovas window.requestFileSystem method to get the local file system
		//get the file names and use cordova's file tranfer methods
		// send files to server
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
					React.createElement('input', {id: 'file', type: 'file', multiple: 'multiple', name: 'file'})
					)
				),
				React.createElement('div', {className: 'row'},
					React.createElement('div', {className: 'col-sm-4'},
						React.createElement('button', {type: 'button', className: 'btn btn-default', value: 'upload', onClick: this._onClick},
							React.createElement('span', {className: 'glyphicon glyphicon-upload'}))
					)
				)
			)
		)
	}
	
})