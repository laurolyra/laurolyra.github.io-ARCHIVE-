const assert = require('assert');
const hyundaiHB20 = {'sku': 'hyundai', 'name': 'hb20', 'salePrice': '350'}
const hyundaiHB20s = {'sku': 'hyundai', 'name': 'hb20', 'salePrice': '350'}
assert.ok(JSON.stringify(hyundaiHB20) == JSON.stringify(hyundaiHB20s))
