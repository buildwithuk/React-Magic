import Constants from './Constants.json';

class Service {


}

Service.prototype.fetchUsers = function(number) {

    let url = Constants.api_url + "?results=" + number;
    return fetch(url);
}

export default Service;