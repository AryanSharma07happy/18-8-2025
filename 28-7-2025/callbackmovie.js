let movie={
    id:1,
    moviename: 'Inception',
    type: 'Sci-Fi',
    time: '2h 28m',
}
getmovie(1, (movie) => {
    console.log(movie);
    getCinema(movie.name, (cn) => {
        console.log(cn);
        getTickets(cn.name, (tk) => {
            console.log(tk);
        });
    });
});
function getmovie(id, callback) {
    setTimeout(() => {
        console.log(id);
        callback({  
            id: 1,
            moviename: 'Inception',
            type: 'Sci-Fi',
            time: '2h 28m'
        });
    }, 3000);
}
function getCinema(name, callback) {
    setTimeout(() => {
        if(name === 'Inception') {
            callback({ id: 1, Cinemaname: 'hotstar', location: 'Downtown' });
        }
        else if(name === 'Avatar') {
            callback({ id: 2, Cinemaname: 'Cineplex', location: 'Downtown' });
        }
        else {
            callback({ id: 3, Cinemaname: 'IMAX', location: 'City Center' });
        }
    }, 3000);
    }
function getTickets(cinemaName, callback) {
    setTimeout(() => {
        if(cinemaName === 'hotstar') {
            callback({   
                   id: 1,
                   ticketsprice: 100,
                   Silver: 15 });
        }
        else if(cinemaName === 'Cineplex') {
            callback({ 
                  id: 2,
                  ticketsprice: 50,
                  gold: 20 });
        }
        else {
            callback({
                  id: 3,
                  ticketsprice: 30,
                  bronze: 25 });
        }
    }, 3000);
}
        