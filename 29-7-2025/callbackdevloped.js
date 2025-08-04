let developer = {
    id: 1,
    repoid: 101,  
    name: 'Rakesh',
    mobNo: 9876543210
}
getDeveloper(1, (developer) => {
    console.log(developer);
    getRepo(developer.repoid, (repo) => {
        console.log(repo);
        getCommits(repo [1], (commits) => {
            console.log(commits);
        });
    })
});
function getDeveloper(id, callback) {
    setTimeout(() => {
        console.log(id);
        callback({
            id: 1,
            repoid: 101,
            name: 'Rakesh',
            mobNo: 9876543210
        });
    }, 3000);
}
function getRepo(repoid, callback) {
    setTimeout(() => {
         callback(['R1', 'R2', 'R3']);
    }, 3000);
}
function getCommits(repoid, callback) {
    setTimeout(() => {
        callback(['C1', 'C2', 'C3']);
    }, 3000);   
}