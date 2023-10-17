module.exports = async (req, res) => {
    rawResponse = await fetch(`https://roosters.deltion.nl/api/group`, {
        headers: {
            "Cookie": "DeltionID=roOj7F2rM7bMLYQiLCN4BnKZMI; srv_id=bc3b78c10f83c8180c12bf8ae1db256d"
        }
    });
    results = await rawResponse.json();

    res.send(results);
}