const baseUrl = 'https://finance.yahoo.com/quote/';

const data = async function (ticker) {
    return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${ticker}`, {
                    method: 'GET'
                });
                // console.log(response);
                const body = (await response.text())
//                 let price = body.split(`"${ticker}":{"sourceInterval"`)[1]
//                     .split('regularMarketPrice')[1]
//                     .split('fmt":"')[1]
//                     .split('"')[0];

                let price = body.split(`"${ticker}"`)[3].split("value=")[1].split('"')[1];
                price = parseFloat(price.replace(',', ''));

                const currencyMatch = body.match(/Currency in ([A-Za-z]{3})/);
                let currency = null;
                if (currencyMatch) {
                    currency = currencyMatch[1];
                }

                resolve({
                    currency,
                    price,
                });
            } catch (err) {
                reject(err);
            }
        });
};

// data("AAPL").then(res => console.log(res)).catch(err => console.log(err));
exports.data = data
