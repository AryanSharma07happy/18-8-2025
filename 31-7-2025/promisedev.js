let developer = {
    id: 1,
    repoid: 101,  
    name: 'Rakesh',
    mobNo: 9876543210
}

function getDeveloper(id,) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(id);
            resolve({
                id: 1,
                repoid: 101,
                name: 'Rakesh',
                mobNo: 9876543210
            });
        }, 3000);
    });
   
}
function getRepo(repoid) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['R1', 'R2', 'R3']);
        }, 3000);
    });
}
function getCommits(repoid) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['C1', 'C2', 'C3']);
        }, 3000);
    });
}
getDeveloper(1).then((developer) => {
    console.log(developer);
    return getRepo(developer.repoid);
}).then((repos) => {
    console.log(repos);
    return getCommits(repos[1]);
}).then((commits) => {
    console.log(commits);
});