import 'bootstrap/dist/css/bootstrap.css'

const url = "http://localhost:8080/jpareststarter/api/person/all";
allPersons();
function allPersons() {
    document.getElementById("tb").value = "";
    fetch(url)
        .then(res => fetchWithErrorCheck(res))
        .then((data) => {
            const trs = data.all.map(user => {
                return `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.email}</td></tr>`
            });
            const trStr = trs.join("");
            document.getElementById("tb").innerHTML = trStr;
        })

document.getElementById("getByHobby").onclick = () => {
    const hobby = document.getElementById("getHobby").value;
    fetch(`${"http://localhost:8080/jpareststarter/api/hobby"}/${hobby}`)
    .then(res => fetchWithErrorCheck(res))
    .then(function (data) {
        const pRows = data.map((person) => {
        return `<tr>
        <td>${person.id}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.email}</td>
        <td>${hobby}</td>
        </tr>`
        });
        const trStr = pRows.join("");
        document.getElementById("tb").innerHTML = trStr;
    })        
}
allCityInfo();
function allCityInfo() {
document.getElementById("tbZip").value = "";
fetch("http://localhost:8080/jpareststarter/api/cityinfo/all")
.then(res => fetchWithErrorCheck(res))
.then(function (data) {
    const trs = data.map(zips => {
        console.log(zips)
        return `<tr>
        <td>${zips.zipcode}</td>
        <td>${zips.city}</td>
        </tr>`
    });
    
    const trStr = trs.join(" ");
    document.getElementById("tbZip").innerHTML = trStr;
})
}

    function fetchWithErrorCheck(res) {
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() });
        }
        return res.json();
    }
}