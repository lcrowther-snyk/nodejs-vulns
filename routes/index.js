
exports.index = function (req, res, next) {
    console.log(JSON.stringify(req.query));
    return res.render("index.dust",
        {
            title: 'Go ahead Hack M3!',
            subhead: 'Find the flag',
        });
};


