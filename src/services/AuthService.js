import {AsyncStorage} from 'react-native';
import config from './../config';

const tokenKey = 'token';

class AuthService {
    /**
     *
     * @returns {Promise}
     */
    getToken() {
        return new Promise(async (resolve, reject) => {
            try {
                const values = await AsyncStorage.multiGet([tokenKey]);

                if (!values) {
                    throw 'Caching issue';
                }

                // Transforms [[key1, value1], [key2, value2]] to {key1: value1, key2: value2}
                const data = values.reduce((data, keyValueArr) => {
                    return Object.assign(data, {[keyValueArr[0]]: keyValueArr[1]});
                }, {});


                if (!data[tokenKey] || data[tokenKey] === '') {
                    throw 'Caching issue';
                }

                const token = data[tokenKey];
                const verifyResponse = await fetch(`https://pacific-refuge-84094.herokuapp.com/api/login/verify?token=${token}`);
                const verifyJson = await verifyResponse.json();

                if (!verifyJson.success) {
                    throw 'Token is invalid, please re-login';
                }

                return resolve(token);
            } catch (err) {
                reject();
            }
        });
    }

    /**
     * Login to Github, using basic Authorization.
     *
     * Encodes the user name and password to base65, and then sends
     * a GET request to Github API using that data.
     *
     * Returns a fetch promise.
     *
     * @param {String} username
     * @param {String} password
     * @returns {Promise} contains token
     */
    login(username, password) {
        return new Promise(async (resolve, reject) => {
            // Use pre-created data to skip login credentials.
            if (config.testUser) {
                username = config.testUser.username;
                password = config.testUser.password;
            }

            try {
                const response = await fetch('https://pacific-refuge-84094.herokuapp.com/api/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                });

                if (response.status === 401) {
                    throw 'Bad credentials';
                }
                else if ( response.status < 200 || response.status >= 300) {
                    throw 'Unexpected error';
                }

                const json = await response.json();
                const token = json.token;

                await AsyncStorage.multiSet([
                    [tokenKey, token]
                ]);

                resolve(token);
            } catch(err) {
                reject(err);
            }
        });
    }

    /**
     * For some reason. using AsyncStorage.multiRemove and clear did not work, so overriding
     * the values to be empty strings instead as a workaround...
     *
     * @returns {Promise}
     */
    logout() {
        return new Promise(async (resolve, reject) => {
            try {
                await AsyncStorage.clear();
                resolve();
            } catch(err) {
                reject(err);
            }
        });
    }
}

export default new AuthService();