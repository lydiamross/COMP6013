exports.home = (req, res) => res.render('home');

exports.about = (req, res) => res.render('about');

exports.topic = (req, res) => res.render('topic');

exports.account = (req, res) => res.render('account');

exports.notFound = (req, res) => res.status(404).render('404');

// eslint-disable-next-line no-unused-vars
exports.serverError = (err, req, res, next) => res.status(500).render('500');
