const BASE_URL = "http://calm-reef-93989.herokuapp.com/api/expenses";

class ExpensesService {
    getExpenses(token) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${BASE_URL}?year=2016&month=5&token=${token}`);
                console.log("response", response);
                const json = await response.json();
                resolve(json);
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default new ExpensesService();