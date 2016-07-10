class AwsService {
    getServers(token) {
        return new Promise(async (resolve, reject) => {
            try {
                const awsResponse = await fetch(`http://powerful-meadow-99607.herokuapp.com/api/aws?token=${token}`);
                const awsJson = await awsResponse.json();
                resolve(awsJson);
            } catch (err) {
                reject(err);
            }
        });
    }

    start(id, token) {
        return new Promise(async (resolve, reject) => {
            try {
                const awsResponse = await fetch(`http://powerful-meadow-99607.herokuapp.com/api/aws/start?token=${token}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id
                    })
                });
                const awsJson = await awsResponse.json();
                resolve(awsJson);
            } catch (err) {
                reject(err);
            }
        });
    }

    stop(id, token) {
        return new Promise(async (resolve, reject) => {
            try {
                const awsResponse = await fetch(`http://powerful-meadow-99607.herokuapp.com/api/aws/stop?token=${token}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id
                    })
                });
                const awsJson = await awsResponse.json();
                console.log("STOP awsResponse", awsResponse);
                resolve(awsJson);
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default new AwsService();