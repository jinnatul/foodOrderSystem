module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {

		res.render('index.html'); // load the index.ejs file

	});

	app.get('/UserType', function(req, res) {

		res.render('UserType'); // load the userTYpe.ejs file

	});

	app.get('/User_admin', function(req, res) {

		res.render('Admin_login'); // load the Admin_login.ejs file

	});

	app.get('/User_customer', function(req, res) {

		res.render('User_login'); // load the User_login.ejs file

	});

	app.get('/User_info_admin', function(req, res) {

		res.render('User_info_admin'); // load the User_info_admin.ejs file

	});

	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form Admin
	app.get('/Admin_login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('Admin_login.ejs', { message: req.flash('loginMessage') });

	});

	// show the login form User
	app.get('/User_login', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('User_login.ejs', { message: req.flash('loginMessage') });

	});
   
	app.engine('html', require('ejs').renderFile);
	app.get('/userpanel', function(req, res) {

		res.render('user_panel.html'); // load the index.ejs file

	});
	
	// process the login form Admin
	app.post('/Admin_login', passport.authenticate('local-loginAdmin', {
		successRedirect : '/admin.html', // redirect to the secure profile section
		failureRedirect : '/Admin_login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// process the login form User
	app.post('/User_login', passport.authenticate('local-loginUser', {
		successRedirect : '/userpanel', // redirect to the secure profile section
		failureRedirect : '/User_login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form Admin
	app.get('/Admin_signup', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('Admin_signup.ejs', { message: req.flash('signupMessage') });

	});

	// show the signup form User
	app.get('/User_signup', function(req, res) {

		// render the page and pass in any flash data if it exists
		res.render('User_signup.ejs', { message: req.flash('signupMessage') });

	});

	// process the signup form Admin
	app.post('/Admin_signup', passport.authenticate('local-signupAdmin', {
		successRedirect : '/Admin_login', // redirect to the secure profile section
		failureRedirect : '/Admin_signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// process the signup form User
	app.post('/User_signup', passport.authenticate('local-signupUser', {
		successRedirect : '/User_login', // redirect to the secure profile section
		failureRedirect : '/User_signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/userpanel', isLoggedIn, function(req, res) {

		res.render('user_panel.html', {
			user : req.user // get the user out of session and pass to template
		});

	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/Admin_logout', function(req, res) {

		req.logout();
		res.redirect('/Admin_login');

	});

	app.get('/User_logout', function(req, res) {

		req.logout();
		res.redirect('/User_login');

	});

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/Admin_login');

}