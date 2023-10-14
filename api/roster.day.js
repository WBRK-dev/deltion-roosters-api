function convertDate(num) {
    if (String(num).length === 1) {
        return `0${num}`;
    } else {
        return num;
    }
}

module.exports = async (req, res) => {
    day = Number(req.query.day) || 0;
    group = req.query.group;
    
    currentDate = new Date();

    firstDate = new Date(currentDate.getFullYear(), (currentDate.getMonth() + 1), (currentDate.getDate() + day)); 
    lastDate = new Date(currentDate.getFullYear(), (currentDate.getMonth() + 1), (firstDate.getDate() + 1)); 

    start = `${firstDate.getFullYear()}${convertDate(firstDate.getMonth())}${convertDate(firstDate.getDate())}`;
    end = `${lastDate.getFullYear()}${convertDate(lastDate.getMonth())}${convertDate(lastDate.getDate())}`;
    rawResponse = await fetch(`https://roosters.deltion.nl/api/roster?group=${group}&start=${start}&end=${end}`, {
        headers: {
            "Cookie": "DeltionID=roOj7F2rM7bMLYQiLCN4BnKZMI; srv_id=bc3b78c10f83c8180c12bf8ae1db256d"
        }
    });
    results = await rawResponse.json();

    results.calculated_time = currentDate;
    results.calculated_date = `${start}-${end}`;

    res.send(results);
}