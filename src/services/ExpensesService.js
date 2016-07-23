import _ from 'lodash';

const BASE_URL = "http://calm-reef-93989.herokuapp.com/api/expenses";

class ExpensesService {
    getExpenses(token) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${BASE_URL}?year=2016&month=5&token=${token}`);
                const json = await response.json();

                resolve(_.orderBy(json, 'purchase_date', 'desc'));
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default new ExpensesService();