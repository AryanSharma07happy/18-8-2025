let movie={
    id:1,
    name: 'Commando',
    type: 'Action',
    time: '126 min'
}
getMovie(1, (movie) => {
    console.log(movie);
    getCinema(movie.name, (cinemaNames) => {
        console.log(cinemaNames);
        getTickets(cinemaNames [0], (tickets) => {
            console.log(tickets);
        });
    });
});
function getMovie(id,callback) {
    setTimeout(() => {
        callback({  
            id: 1,
            name: 'Commando',
            type: 'Action',
            time: '126 min'
        });
    }, 3000);
}
  
function getCinema(movieName, callback) {
    setTimeout(() => {
        let cinemaNames=['Regal','Maya cinplex','WaveCinema'];
        callback(cinemaNames);
    }, 3000);
}
function getTickets(cinemaName, callback) {
    setTimeout(()=>{
        let tickets={
            gold:250,
            premium: 200,
            silver: 150
        }
        callback(tickets);
    }
, 4000);
}

        