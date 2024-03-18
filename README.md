<div align="left">

[![Visit Brex](./header.png)](https://brex.com)

# [Brex](https://brex.com)<a id="brex"></a>


The Expenses API allows you to manage accounting and expenses information.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`brexexpenses.cardExpenses.getById`](#brexexpensescardexpensesgetbyid)
  * [`brexexpenses.cardExpenses.list`](#brexexpensescardexpenseslist)
  * [`brexexpenses.cardExpenses.updateExpense`](#brexexpensescardexpensesupdateexpense)
  * [`brexexpenses.receiptMatch.createNewReceiptMatch`](#brexexpensesreceiptmatchcreatenewreceiptmatch)
  * [`brexexpenses.receiptUpload.createNewReceipt`](#brexexpensesreceiptuploadcreatenewreceipt)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Brex&serviceName=Expenses&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { BrexExpenses } from "brex-expenses-typescript-sdk";

const brexexpenses = new BrexExpenses({
  // Defining the base path is optional and defaults to https://platform.brexapis.com
  // basePath: "https://platform.brexapis.com",
});

const getByIdResponse = await brexexpenses.cardExpenses.getById({
  expenseId: "expenseId_example",
});

console.log(getByIdResponse);
```

## Reference<a id="reference"></a>


### `brexexpenses.cardExpenses.getById`<a id="brexexpensescardexpensesgetbyid"></a>

Get an expense by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await brexexpenses.cardExpenses.getById({
  expenseId: "expenseId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseId: `string`<a id="expenseid-string"></a>

##### expand: `string`[]<a id="expand-string"></a>

Get additional details for the expense, e.g. merchant mcc code, by passing in `expand[]=merchant`. Query parameters include `location`, `department`, `merchant`, `receipts.download_uris`, `user`, `budget` and `payment`.

#### 🔄 Return<a id="🔄-return"></a>

[ExpandableExpense](./models/expandable-expense.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/card/{expense_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexexpenses.cardExpenses.list`<a id="brexexpensescardexpenseslist"></a>

List expenses under the same account. Admin and bookkeeper have access to any expense, and regular users can only access their own.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await brexexpenses.cardExpenses.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expand: `string`[]<a id="expand-string"></a>

Get additional details for the expense, e.g. merchant mcc code, by passing in `expand[]=merchant`. Query parameters include `location`, `department`, `merchant`, `receipts.download_uris`, `user`, `budget` and `payment`.

##### userId: `string`[]<a id="userid-string"></a>

Get expenses belong to provided user(s).

##### parentExpenseId: `string`[]<a id="parentexpenseid-string"></a>

Get itemized expenses belong to provided parent expenses ID(s).

##### budgetId: `string`[]<a id="budgetid-string"></a>

##### status: [`ExpenseStatus`](./models/expense-status.ts)[]<a id="status-expensestatusmodelsexpense-statusts"></a>

##### paymentStatus: [`ExpensePaymentStatus`](./models/expense-payment-status.ts)[]<a id="paymentstatus-expensepaymentstatusmodelsexpense-payment-statusts"></a>

##### purchasedAtStart: `string`<a id="purchasedatstart-string"></a>

 Shows only expenses with a `purchased_at` on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6), e.g. 2022-11-12T23:59:59.999 

##### purchasedAtEnd: `string`<a id="purchasedatend-string"></a>

 Shows only expenses with a `purchased_at` on or before this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6), e.g. 2022-11-12T23:59:59.999 

##### cursor: `string`<a id="cursor-string"></a>

 The cursor to use for pagination. This is the `next_cursor` value returned from the previous response. 

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageExpandableExpense](./models/page-expandable-expense.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/card` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexexpenses.cardExpenses.updateExpense`<a id="brexexpensescardexpensesupdateexpense"></a>

Update an expense. Admin and bookkeeper have access to any expense, and regular users can only access their own.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExpenseResponse = await brexexpenses.cardExpenses.updateExpense({
  expenseId: "expenseId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseId: `string`<a id="expenseid-string"></a>

##### memo: `string`<a id="memo-string"></a>

Expense memo.

#### 🔄 Return<a id="🔄-return"></a>

[Expense](./models/expense.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/card/{expense_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexexpenses.receiptMatch.createNewReceiptMatch`<a id="brexexpensesreceiptmatchcreatenewreceiptmatch"></a>


The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.

Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they're available for your language to upload these files.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewReceiptMatchResponse =
  await brexexpenses.receiptMatch.createNewReceiptMatch({
    receipt_name: "receipt_name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### receipt_name: `string`<a id="receipt_name-string"></a>

The name of the receipt (with the file extension). It will be used in the matching result email.

#### 🔄 Return<a id="🔄-return"></a>

[CreateAsyncFileUploadResponse](./models/create-async-file-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/card/receipt_match` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexexpenses.receiptUpload.createNewReceipt`<a id="brexexpensesreceiptuploadcreatenewreceipt"></a>


The `uri` will be a pre-signed S3 URL allowing you to upload the receipt securely. This URL can only be used for a `PUT` operation and expires 30 minutes after its creation. Once your upload is complete, we will try to match the receipt with existing expenses.

Refer to these [docs](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html) on how to upload to this pre-signed S3 URL. We highly recommend using one of AWS SDKs if they're available for your language to upload these files.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewReceiptResponse =
  await brexexpenses.receiptUpload.createNewReceipt({
    expenseId: "expenseId_example",
    receipt_name: "receipt_name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### receipt_name: `string`<a id="receipt_name-string"></a>

The name of the receipt (with the file extension).

##### expenseId: `string`<a id="expenseid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CreateAsyncFileUploadResponse](./models/create-async-file-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/card/{expense_id}/receipt_upload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
