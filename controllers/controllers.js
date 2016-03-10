module.exports = {
	mainPage: function(req, res) {
		res.render('index', { title: 'Express' });
	},
	getRegister(req, res) {
		res.send('register page');
	},
	postRegister(req, res) {
		console.log(register);
	},
	session: function(req, res, next) {
		var sess = req.session
	  	if (sess.views) {
		    sess.views++
		    res.setHeader('Content-Type', 'text/html')
		    res.write('<p>views: ' + sess.views + '</p>')
		    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
		    res.end()
	  	} else {
		    sess.views = 1
		    res.end('welcome to the session demo. refresh!')
  		}
	}
}