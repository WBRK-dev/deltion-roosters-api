function convertDate(num) {
    if (String(num).length === 1) {
        return `0${num}`;
    } else {
        return num;
    }
}

module.exports = async (req, res) => {
    week = req.query.week || 0;
    group = req.query.group || "SD1A";

    let currentDate = req.query.clientDate;

    if (currentDate) {
        currentDate = currentDate.split("-");
        currentDate = new Date(`${currentDate[1]} ${currentDate[2]} ${currentDate[0]}`);
    } else {
        currentDate = new Date();
    }

    firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - (currentDate.getDay() - 1)); 
    lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1 + (7 - currentDate.getDay())); 

    start = `${firstDate.getFullYear()}${convertDate(firstDate.getMonth())}${convertDate(firstDate.getDate())}`;
    end = `${lastDate.getFullYear()}${convertDate(lastDate.getMonth())}${convertDate(lastDate.getDate())}`;
    rawResponse = await fetch(`https://roosters.deltion.nl/api/roster?group=${group}&start=${start}&end=${end}`, {
        headers: {
            "Cookie": "DeltionID=roOj7F2rM7bMLYQiLCN4BnKZMI; srv_id=bc3b78c10f83c8180c12bf8ae1db256d"
        }
    });
    results = await rawResponse.json();

    res.send(results);
}