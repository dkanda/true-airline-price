const configuration = {};

if (process.env.NODE_ENV === 'production') {
    configuration.apiUrl = 'http://react-kayak-erthr.c9users.io:8080/api';
} else {
    configuration.apiUrl = 'http://react-kayak-erthr.c9users.io:8080/api';
}

export default configuration;