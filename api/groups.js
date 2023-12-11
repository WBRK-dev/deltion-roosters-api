module.exports = async (req, res) => {
    await req.id.check();

    rawResponse = await fetch(`https://roosters.deltion.nl/api/group`, {
        headers: {
            "Cookie": req.id.cookies
        }
    });
    results = await rawResponse.json();

    res.send(results);
}