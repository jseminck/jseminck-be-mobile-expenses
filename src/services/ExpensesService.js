import _ from 'lodash';

const BASE_URL = 'http://expenses.jseminck.be/api/expenses';

class ExpensesService {
    setToken(token) {
        this.token = token;
    }

    getExpenses(year, month) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${BASE_URL}?year=${year}&month=${month}&token=${this.token}`);
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
                const response = await fetch(`${BASE_URL}balabla?token=${this.token}`, {
                    method: 'POST',
                    body: JSON.stringify(expense),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                });

                if (response.status < 200 || response.status >= 300) {
                    throw 'Save failed';
                }

                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }

    deleteExpense(id) {
        return new Promise(async (resolve, reject) => {
            try {
                await fetch(`${BASE_URL}/${id}?token=${this.token}`, {
                    method: 'DELETE',
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