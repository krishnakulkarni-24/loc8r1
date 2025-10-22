module.exports.index=function(req,res){
    res.render('index', { title: 'Eeshanth Reyhanth' });
};

module.exports.signin=function(req,res){
    res.render('signin', { title: 'Sign In' });
};

module.exports.doSignin=function(req,res){
    const { username, password } = req.body;
    console.log('Login attempt:', username);
    // TODO: Add actual authentication logic with MongoDB
    // For now, redirect to home page
    res.redirect('/?login=success&user=' + username);
};

module.exports.register=function(req,res){
    res.render('register', { title: 'Register' });
};

module.exports.doRegister=function(req,res){
    const { username, email, password, confirmPassword } = req.body;
    console.log('Registration attempt:', username, email);
    
    if (password !== confirmPassword) {
        return res.redirect('/register?error=password_mismatch');
    }
    
    // TODO: Add actual user creation logic with MongoDB
    // For now, redirect to signin page
    res.redirect('/signin?registered=success');
};

module.exports.review=function(req,res){
    res.render('review', { title: 'Eeshanth Reyhanth' });
};