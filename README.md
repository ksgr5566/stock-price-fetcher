## Usage example
<br>

```
const spf = require("stock-price-fetcher")
const data = await spf.data('AAPL'); // param should be a valid yahoo finance ticker
console.log(data) // { currency: 'USD', price: 148.11 }
```

Note: Node version 18 required.
