module.exports = (req, res, next) => {
    req.id = {};
    req.id.cookies = "";
    req.id.lastget = new Date();
    req.id.get = async () => {
        req.id.cookies = (await fetch("https://roosters.deltion.nl/")).headers.getSetCookie();
        req.id.lastget = new Date();
    }
    req.id.check = () => {
        if ((new Date()) - req.id.lastget > 3600000) {req.id.get()}
    }
    req.id.get();
    next();
}