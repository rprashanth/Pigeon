var app = {
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        homePage()
    }
};
app.bindEvents();

var homePage = function() {
    var textbox = React.createElement(TextBox) // from components/textbox.js
    ReactDOM.render(textbox, 
        document.getElementById('removable'))
}