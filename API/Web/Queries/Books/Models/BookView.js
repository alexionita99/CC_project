class BookView {
    constructor (entry) {
        this.origin = entry.origin;
        this.destination = entry.destination;
        this.distance = entry.distance;
        this.airline = entry.airline;
        this.aircraft = entry.aircraft;
        this.registration = entry.registration;
        this.seat = entry.seat;
        this.flightday = entry.flightday;
    }
}

module.exports = {
    BookView
}