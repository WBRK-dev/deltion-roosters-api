module.exports = async (req, res) => {
    let resp = {};

    date = new Date(req.query.date);

    resp.date = date;

    resp.zone = date.getTimezoneOffset();

    res.send(resp);
}