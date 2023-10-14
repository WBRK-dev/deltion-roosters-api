module.exports = async (req, res) => {
    let resp = {};

    date = new Date(req.query.date);

    resp.date = date;
    resp.ext_date = date.toString();

    resp.zone = date.getTimezoneOffset();

    resp.weekday = date.getDay();

    res.send(resp);
}