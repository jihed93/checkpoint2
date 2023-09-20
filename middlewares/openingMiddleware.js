
const isOpen = async (req, res, next) => {
    var date = new Date(Date.now());
    var day = date.getDay();
    var hour = date.getHours();
    if (day > 5)
        res.render('message', {
            message: "we are closed today !!!"
        });
    if (hour < 9 || hour > 16)
        res.render('message', {
            message: "we are closed in this time !!!"
        });
    next();

}

module.exports = isOpen