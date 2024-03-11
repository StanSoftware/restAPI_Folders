---
sidebar_position: 6
---


## ap_getStatus
**Endpoint** : ap_getStatus

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Returns the registration status of an AP
<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
  <tr>
  <th> Data </th>
  <th> UAT Sample </th>
  </tr>
 </thead>

  <tbody>
    <tr>
      <td colspan="2">**JSon Request:**</td>
    </tr>
    <tr>
    <td>
      ```
{
   "key": "<<RestAPI Key>>",
   “apcode”: <<SharePro AP code>>,
       or
   “shortcode”: <<shortcode of AP>>[optional]
}
      ```
    </td>
    <td>
      ```
{
"key": "ezhDMEI5ND4MLE3YwNH0=",
"apcode":"285",
"shortcode":""   // OR "DEMO1"
}
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td>
        ```
{
      "apcode" : “<<apcode>>”,,
      "status" : “<<status>>”
}

Status Values:
ACTIVE, CLOSED, SUSPENDED, UNREGISTERED
        ```
      </td>
      <td>
        ```
{
    "apcode": "285",
    "status": "ACTIVE"
}
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

## ap_getClientsList
**Endpoint** : ap_getClientsList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Returns the list of clients registered with this AP
<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
  <tr>
  <th> Data </th>
  <th> UAT Sample </th>
  </tr>
 </thead>

  <tbody>
    <tr>
      <td colspan="2">**JSon Request:**</td>
    </tr>
    <tr>
    <td>
      ```
[{
    "key": "<<RestAPI Key>>",
    “apcode”: <<SharePro AP code>>,
       or
    “shortcode”: <<shortcode of AP>>[optional]
}]
      ```
    </td>
    <td>
      ```
{
"key": "ezhDMEI5ND4MLE3YwNH0=",
"apcode":"285",
"shortcode":""   // or "DEMO1"
}
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
    <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
    <td>
        ```
[{“apcode”: <<apcode>>,
 “shortcode” :”<<shortcode>>”,
 “ucc” : “<<ucc>>”,
 “clientname” : “<<Client Name>>,
 “phone”: “<<phone”>>,
 “emailID” : “<<emailId>>”,
 “pan”: “<<Clients PAN>>”
}]
        ```
      </td>
      <td>
        ```
  [
    {
        "apcode": "285  ",
        "ucc": "285A2882",
        "clientname": "JAMEER SINGH BUTULA",
        "mobile": "9830077819",
        "mobile2": "",
        "mobile3": "",
        "email": "285a2882@standardbroking.co.in",
        "email2": "",
        "email3": "",
        "pan": "PAN3120",
        "subcd": "CA00001999"
    },
    {
        "apcode": "285  ",
        "ucc": "285A1935",
        "clientname": "LOVELESH SHANKAR AGRAWAL HUF",
        "mobile": "9830001111",
        "mobile2": "",
        "mobile3": "",
        "email": "285a1935@standardbroking.co.in",
        "email2": "",
        "email3": "",
        "pan": "PAN4120",
        "subcd": "CA00002602"
    }
]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___

## ap_getCommission
**Endpoint** : ap_getCommission

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Returns the accrued brokerage and commission for an AP within the passed period
<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
  <tr>
  <th> Data </th>
  <th> UAT Sample </th>
  </tr>
 </thead>

  <tbody>
    <tr>
      <td colspan="2">**JSon Request:**</td>
    </tr>
    <tr>
    <td>
      ```
{
"key": "<<apiKey>>",
"apcode":"<<apcode>>",  // or "shortcode"
"datefrom":"<<yyyymmdd>>",
"dateto":"<<yyyymmdd>>",
"type":"summary"  // "detailed"
}
      ```
    </td>
    <td>
      ```
{
"key": "ezhDMEI5ND4MLE3YwNH0=",
"apcode":"010",  // or "shortcode":"DEMO1"
"datefrom":"20190401",
"dateto":"20190430",
"type":"summary"  // "detailed"
}
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td>
        ```
[{“apcode”: <<apcode>>,
 “shortcode” :”<<shortcode>>”,
 “ucc” : “<<ucc>>”,
 “clientname” : “<<Client Name>>,
 “phone”: “<<phone”>>,
 “emailID” : “<<emailId>>”,
 “pan”: “<<Clients PAN>>”
}]
        ```
      </td>
      <td>
        ```
[
    {
        "apcode": "010",
        "shortcode": "",
        "date": "2019-04-01T00:00:00",
        "brokerage_generated": 1164600.00000,
        "commission_accrued": 4975.3681000
    },
    {
        "apcode": "010",
        "shortcode": "",
        "date": "2019-04-02T00:00:00",
        "brokerage_generated": 1575420.00000,
        "commission_accrued": 3775.3578000
    }
]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___

## ap_getLedger
**Endpoint** : ap_getLedger

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Returns the Accounting Ledger for an AP within the passed period
<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
  <tr>
  <th> Data </th>
  <th> UAT Sample </th>
  </tr>
 </thead>

  <tbody>
    <tr>
      <td colspan="2">**JSon Request:**</td>
    </tr>
    <tr>
    <td>
      ```
{
"key": "<<apiKey>>",
"apcode":"<<apcode>>",  // or "shortcode"
"datefrom":"<<yyyymmdd>>",
"dateto":"<<yyyymmdd>>",
}
      ```
    </td>
      <td>
      ```
{
"key": "ezhDMEI5ND4MLE3YwNH0=",
"apcode":"010",  // or "shortcode":"DEMO2"
"datefrom":"20190401",
"dateto":"20190430"
}
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td>
        ```
[{“apcode”: <<apcode>>,
 “shortcode” :”<<shortcode>>”,
 “ucc” : “<<ucc>>”,
 “clientname” : “<<Client Name>>,
 “phone”: “<<phone”>>,
 “emailID” : “<<emailId>>”,
 “pan”: “<<Clients PAN>>”
}] 
        ```
      </td>
      <td>
        ```
[
    {
        "apcode": "010",
        "shortcode": "",
        "date": "2019-04-01T00:00:00",
        "brokerage_generated": 1164600.00000,
        "commission_accrued": 4975.3681000
    },
    {
        "apcode": "010",
        "shortcode": "",
        "date": "2019-04-02T00:00:00",
        "brokerage_generated": 1575420.00000,
        "commission_accrued": 3775.3578000
    }
]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___

## ap_registerClients
**Endpoint** : ap_registerClients

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Returns the Accounting Ledger for an AP within the passed period
<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
  <tr>
  <th> Data </th>
  <th> UAT Sample </th>
  </tr>
 </thead>

  <tbody>
    <tr>
      <td colspan="2">**JSon Request:**</td>
    </tr>
    <tr>
    <td>
      ```
{
"key": "<<apiKey>>",
“ucc”: <<ucc>>,
"oldapcode":"<<oldapcode>>",  
"newapcode":"<<newapcode>>"
}
      ```
    </td>
    <td>
      ```
{
  "key": "ezhDMEI5ND4MLE3YwNH0=",
  "ucc":"51649",
  "oldAPcode": "BP-27",
  "newAPcode": "BP-28"
}
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td>
        ```
{“success” :”1”,
 “message” : "Client register successfully with this apcode [<<apcode>>]"
}
        ```
      </td>
      <td>
        ```
{ “success” :”1”,
 “message” : "Client register successfully with this apcode BP-28"
}
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

____

