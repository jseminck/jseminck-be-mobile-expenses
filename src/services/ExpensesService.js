import _ from 'lodash';
import moment from 'moment';

const BASE_URL = 'http://expenses.jseminck.be/api/expenses';

class ExpensesService {
    setToken(token) {
        this.token = token;
    }

    getExpenses() {
        return new Promise(async (resolve, reject) => {
            const currentYear = moment().year();
            const currentMonth = moment().month() + 1; // 0-based

            try {
                const response = await fetch(`${BASE_URL}?year=${currentYear}&month=${currentMonth}&token=${this.token}`);
                const json = await response.json();

                resolve(_.orderBy(json, 'purchase_date', 'desc'));
            } catch (err) {
                reject(err);
            }
        });
    }

    saveExpense(expense) {
        return new Promise(async (resolve, reject) => {
            try {
                await fetch(`${BASE_URL}?token=${this.token}`, {
                    method: 'POST',
                    body: JSON.stringify(expense),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                });

                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default new ExpensesService();