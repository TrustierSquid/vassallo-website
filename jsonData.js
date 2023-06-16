
function getdata(){
    fetch("names.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

getdata()