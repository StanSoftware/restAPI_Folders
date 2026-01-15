---
sidebar_position: 5
---


## ClientCredentialCheck ##

**Endpoint** : ClientCredentialCheck

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Checks Client Credential UCC and Password combination match or not*
  


<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
    <tr>
      <th>Data </th>
      <th>UAT Sample</th>
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
        "ucc": "<<UCC>>",
        "pwd": "<<Password>>"
        }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "ucc": "151A355",
        "pwd": "923288"
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
          "success": <<1:Success, 0: Failure>>,
          "message":”<<Message>>"
          }
        ```
      </td>
      <td>
        ```
        {
          "success": 1,
          "message": "Client Credential match"
          }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>




___

## ClientUpdatePwd ##

**Endpoint** : ClientUpdatePwd

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Updates the WEB password of a Client*



<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
    <tr>
      <th>Data </th>
      <th>UAT Sample</th>
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
        {
          "key": "<<RestAPI Key>>",
          "cUCC": "<<UCC>>",
          "cOldPwd": "<<Old Password>>",
          "cOldPwd": "<<New Password>>"
          }
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "cUCC": "151A355",
        "cOldPwd": "923288",
        "cNewPwd": "Ab44"
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
          "success": <<1:Success, 0: Failure>>,
          "message":”<<Message>>"
        }
        ```
      </td>
      <td>
        ```
        {
          "success": 1,
          "message": "Password updated Successfully"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___
## AddOnlineReceipt ##

**Endpoint** : AddOnlineReceipt

**Method** : **POST** or **GET** |  Send raw **Json** data in **Body**

*Add a Journal Voucher into the SharePro*
<table>
<tr>
<td>

**Request Data**
___
```
key                <<RestAPI Key>>
gateway     char(10)                        -- RAZOR, ATOM
ucc             char(10)                  -- UCC is compulsory
system       char(10)                  -- System is compulsory (Like NSE, NFO)
bankacno   char(20)                         -- Bankacno is compulsory
amount       Numeric(12,2)        = 0.00         -- minimum amount should be 0.01
narrcr          varchar(MAX)         -- Like ( Online Payment from A/c : 11427925330 in 
                                              STATE BANK OF INDIA
                                              Bank Ref : IGAIKKYZD8 )
narrdr          varchar(MAX)        -- Like ( Online Payment from ASHOK KUMAR CHOUDHARY [XR626]
                                    from A/c : 11427925330 in STATE BANK OF INDIA
                                  Bank Ref : IGAIKKYZD8   Gateway Ref : 300078282049)
* If not exist then need to create account head 2RAZOR, 2ATOM in SharePro for Payment gateway
```
</td>
</tr>
</table>

<table>
<tr>
<td>
**Request Sample (JSon Data)**
___
```
{
  "key": "ezhDMEI5ND4MLE3YwNH0=",
  "gateway": "RAZOR",
  "ucc": "151A355",
  "system": "NSE",
  "bankacno": "001104000322218",
  "amount": "100.00",
  "narrcr": "Online Payment from A/c : 001104000322218 in IDBI BANK  Bank Ref : IGAIKKYZD8",
  "narrdr": "Online Payment from A.K. ZAHID ANSARI [151A355]   from A/c : 11427925330 in IDBI 
  BANK
          Bank Ref : IGAIKKYZD8   Gateway Ref : 300078282049"
}
```
</td>
</tr>
</table>

<pre language="html">
<table>
 
  <thead>
    <tr>
      <th>Return JSon Response: </th>
      <th>Sample</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
         **Return Data:**
         ```
         {
          "success": <<1:Success, 0: Failure>>,
          "message":”<<Message>>"
        }
```
      </td>
      <td>
      ```
      {
        "success": 1,
        "message": "Online Receipt Added Successfully in SharePro"
      }
```
</td>
      
    </tr>
    <tr>
      
    </tr>
  </tbody>
</table>
</pre>



___

## AddPaymentRequest ##
**Endpoint** : AddPaymentRequest

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**
 
 ***Add/Update a Payment Request into the SharePro*** 
 <table>
 <tr>
 <td>
 **Request Data**
 ___
 ```
 key                    <<RestAPI Key>>
segment     char(10)     -- SEC, COM
ucc             char(10)                  -- UCC is compulsory
bankacno   char(20)  optional   -- Bankacno ( If bankacno not send then 
                                  automatic insert Primary Bank )
amount       Numeric               -- minimum amount should be 1 (Like : 100)
pendingUpdateNotAllow  char(1)  optional  – 1 : Pending record update not allow, 0: allow

Note : In case of any pending record is found, 
and you want to not allow update pending 
record then you should pass "pendingUpdateNotAllow" : "1"
```
</td>
</tr>
</table>
<table>
<tr>
<td>
**Request Sample (JSon Data)**
```
{
  "key": "ezhDMEI5ND4MLE3YwNH0=",
  "segment": "SEC",
  "ucc" : "151A355",
  "amount" : "10000",
  "bankacno" : "001104000322218"  -- Bankacno is optional 
  ( If not send then automatic insert Primary bankacno )
}
```
</td>
</tr>
</table>

<pre language="html">
<table>
  
  <thead>
    <tr>
      <th>Return JSon Response: </th>
      <th>Sample</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{"vertical-align":"top"}}>
         **Return Data:**
         ```
{
  "success": <<1:Success, 0: Failure>>,
  "message":”<<Message>>"
}
```
      </td>
      <td>
      In case no pending record found ( Added)
      ```
----------------------
{
  "success": 1,
  "message": "Payment Request Added 
  Successfully in SharePro"
}
In case pending record found (Updated)
----------------------
{
   "success": 1,
    "message": "Pending Payment Request 
    Updated Successfully in SharePro"
}
```
</td>
     
    </tr>
    <tr>
      
    </tr>
  </tbody>
</table>
</pre>



___

## SetPrimaryBank ##

**Endpoint** : SetPrimaryBank

**Method** : **POST** or **GET**  |  Send raw **Json** data in **Body**

*Set Primary Bank Account, if client has 2 or more bank accounts linked to the trading account*

<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
    <tr>
      <th>Data </th>
      <th>UAT Sample</th>
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
        "UCC": "<<UCC>>",    OR      "SUBCD"
        "Acno": "<< Bank Account No.>>"
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "UCC": "9905420",    OR  "SUBCD": "C.00000011"
        "Acno": "785528554"
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
          "success": <<1:Success, 0: Failure>>,
          "message":”<<Message>>"
        }
        ```
      </td>
      <td>
        ```
        {
          "success": 1,
          "message": "Primary Bank 
          Account updated Successfully"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>



___


## SetPrimaryDP ##

**Endpoint** : SetPrimaryDP

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*To set a DP account a primary, if the client has 2 or more DP accounts linked to the trading account*

<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
    <tr>
      <th>Data </th>
      <th>UAT Sample</th>
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
        "UCC": "<<UCC>>",    OR      "SUBCD"
        "ClientID": "<< DP ClientID (BenAcNum)>>"
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "UCC": "FRRV0T11",    OR  "SUBCD": "C.00000012"
        "ClientID": "10246201"
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
          "success": <<1:Success, 0: Failure>>,
          "message":”<<Message>>"
        }
        ```
      </td>
      <td>
        ```
        {
          "success": 1,
          "message": "Primary DP updated Successfully"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>



___


## ClientUCCCheckList
**Endpoint** : ClientUCCCheckList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Checks whether the given Client UCC exists or not. Check multiple UCC at a time
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
    "UCCList": ["<<UCC>>","<<UCC>>"]
        }
      ```
    </td>
      <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "UCCList": ["GB01G001","ZP01H587","A1224","ZP01M874,A12888"]
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
        [
    {
        "UCC": "UCC",
        "success": <<1:Success, 0: Failure>>,
        "message": "<<Message>>"
    },
]
        ```
      </td>
      <td>
        ```
        [
    {
        "UCC": "GB01G001",
        "success": 1,
        "message": "UCC exists"
    },
    {
        "UCC": "ZP01H587",
        "success": 1,
        "message": "UCC exists"
    },
    {
        "UCC": "A1224",
        "success": 1,
        "message": "UCC exists"
    },
    {
        "UCC": "ZP01M874",
        "success": 1,
        "message": "UCC exists"
    },
    {
        "UCC": "A12888",
        "success": 0,
        "message": "UCC does not exist"
    }
]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___


## GenerateCashBankVoucher
**Endpoint** : GenerateCashBankVoucher

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Generate Cash Bank Voucher in SharePro (PayIn / PayOut)
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
    "UCC":       "<<UCC>>"
    "Segment", – ( Like : NSE)
    "TT",   -- Cash/Bank A/c (Like :HC)
    "PR",  -- Type ( Payment: P, Received: R )
    "Vrdt",  – Voucher Date - dd/MM/yyyy ( Like : 16/02/2022)
    "Narr",       – Narration for Cash Voucher
    "LineNarr", – Line Narration for Cash Voucher
    "Amount",  – Amount with paisa (Like 5000.12)
    "AcNo",  – Bank Account number.
    "CheqNo",  – Cheque number
    "CheqDt" – Cheque Date-  dd/MM/yyyy ( Like : 16/02/2022)
    "ACCD",  – ACCD (ACCD & SubCode mandatory only for sub broker)
    "SubCode",  – SubCode (ACCD & SubCode mandatory only for sub broker)
    "BranchId",  –BranchId (default is 'HO')
    "BankRef",  – Bank reference number / Transaction reference number
}
      ```
    </td>
      <td>
      ```
    {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "Segment": "NSE",
    "TT": "HC",
    "PR": "P",
    "Vrdt": "14/02/2022",
    "Narr": "Bening check paid",
    "LineNarr": "Line Narr check paid",
    "UCC": "A407",
    "Amount": 800.00,
    "AcNo": "2345000101411464",
    "CheqNo": "24681015",
    "CheqDt": "14/02/2022",
    "BankRef": "303100109572403174"
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
            "success": <<1:Success, 0: Failure>>,
            "message":”<<Message>>"
        }
        ```
      </td>
      <td>
        ```
        {
            "success": 1,
            "message": "Cash Bank Voucher generated successfully in SharePro"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___

## generateOnlineJV
**Endpoint** : generateOnlineJV

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  

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
   "key"          : API Key   (𝗺𝗮𝗻𝗱𝗮𝘁𝗼𝗿𝘆)
   "gateway"      : Payment gateway like RAZOR, ATOM  (𝗺𝗮𝗻𝗱𝗮𝘁𝗼𝗿𝘆) 
   "ucc"          : Client Id
   "system"       : System - Segment like NSE, BSE
   "dateTime"     : dateTime of funds transfer. Format: "dd/MM/yyyy hh:mm:ss"
   "amount"       : Funds transferred amount. like 100.50  (𝗺𝗮𝗻𝗱𝗮𝘁𝗼𝗿𝘆) 
   "merchantRefNo": Merchant Transaction Reference Number.
   "gatewayRefNo" : Payment Gateway Reference Number. 
   "bankRefNo"    : Bank Reference Number.  (𝗺𝗮𝗻𝗱𝗮𝘁𝗼𝗿𝘆) 
   "upiId"        : UPI Id from which funds transferred. Available only for UPI funds transfer. Like: testupi@upibank
   "fromAccNo"    : Account No from which funds transferred.  (𝗺𝗮𝗻𝗱𝗮𝘁𝗼𝗿𝘆) 
   "toAccNo"      : Account No to which funds transferred.
   "payMode"      : Payment mode like : Debit Card, Net Banking, UPI 
}
      ```
    </td>
      <td>
      ```
{
    "key"          : "ezhDMEI5ND4MLE3YwNH0=",
    "gateway"      : "ATOM",
    "ucc"          : "54483",
    "system"       : "NSE",
    "dateTime"     : "19/02/2025 11:26:45",
    "amount"       : "100.00",
    "merchantRefNo": "",
    "gatewayRefNo" : "",
    "bankRefNo"    : "UTR12587845124",
    "upiId"        : "",
    "fromAccNo"    : "030501502985",
    "toAccNo"      : "",
    "payMode"      : "Net Banking"
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
          "success": <<1:Success, 0: Failure>>,
          "message":”<<Message>>"
        }
        ```
      </td>
      <td>
        ```
        {
    "success": 1,
    "message": "Data save Successfully in SharePro"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___


## Arbitrage summary
**Endpoint** : ArbitrageSum

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  

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
    "ucc": "<<UCC>>",
    “datefrom": "<<dd/MM/yyyy>>",
    “datefrom": "<<dd/MM/yyyy>>",

}
      ```
    </td>
      <td>
      ```
{

    "key": "ezM4MEQyQTJBLUE0Q0ItNDY2OS05QjgwLTQxMjZDNTFBOEMyQn0=",
    "ucc": "JOB2",
    "datefrom": "03/04/2025",
    "dateto": "10/04/2025"
}
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Return_Data::**</td>
    </tr>
    <tr>
      <td>
        ```
       {
    "clientmtm": [
        {
            "bcofut":"<<bcofut>>",
            "bcoopt":"<<bcoopt>>",
            "cdsfut":"<<cdsfut>>",
            "cdsopt":"<<cdsopt>>",
            "chrgsbco":"<<chrgsbco>>",
            "chrgscds":"<<chrgscds>>",
            "chrgseq":"<<chrgseq>>",
            "chrgsfo":"<<chrgsfo>>",
            "chrgsmcf":"<<chrgsmcf>>",
            "chrgsncf":"<<chrgsncf>>",
            "chrgsnco":"<<chrgsnco>>",
            "eqeq":"<<eqeq>>",
            "exmrgnbco":"<<exmrgnbco>>",
            "exmrgncds":"<<exmrgncds>>",
            "exmrgneq":"<<exmrgneq>>",
            "exmrgnfo":"<<exmrgnfo>>",
            "exmrgnmcf":"<<exmrgnmcf>>",
            "exmrgnncf":"<<exmrgnncf>>",
            "exmrgnnco":"<<exmrgnnco>>",
            "foeq":"<<foeq>>",
            "fofut":"<<fofut>>",
            "foopt":"<<foopt>>",
            "mcffut":"<<mcffut>>",
            "mcfopt":"<<mcfopt>>",
            "ncffut":"<<ncffut>>",
            "ncfopt":"<<ncfopt>>",
            "ncofut":"<<ncofut>>",
            "ncoopt":"<<ncoopt>>",
            "netchrgs":"<<netchrgs>>",
            "netexmrgn":"<<netexmrgn>>",
            "netmtm":"<<netmtm>>",
            "netpl":"<<netpl>>",
            "netrecpay":"<<netrecpay>>",
            "netsmrgn":"<<netsmrgn>>",
            "netto":"<<netto>>",
            "smrgnbco":"<<smrgnbco>>",
            "smrgncds":"<<smrgncds>>",
            "smrgneq":"<<smrgneq>>",
            "smrgnfo":"<<smrgnfo>>",
            "smrgnmcf":"<<smrgnmcf>>",
            "smrgnncf":"<<smrgnncf>>",
            "smrgnnco":"<<smrgnnco>>",
            "subcd":"<<subcd>>",
            "tobco":"<<tobco>>",
            "tocds":"<<tocds>>",
            "toeq":"<<toeq>>",
            "tofo":"<<tofo>>",
            "tomcf":"<<tomcf>>",
            "toncf":"<<toncf>>",
            "tonco":"<<tonco>>",
            "trdt": "<<trdt>>"
        },
        …………..
    ]
}
 

        ```
      </td>
      <td>
        ```
      {

    "clientmtm": [

        {
            "bcofut": 0,
            "bcoopt": 0,
            "cdsfut": 0,
            "cdsopt": 0,
            "chrgsbco": 0,
            "chrgscds": 0,
            "chrgseq": 0,
            "chrgsfo": 0,
            "chrgsmcf": 0,
            "chrgsncf": 0,
            "chrgsnco": 0,
            "eqeq": 0,
            "exmrgnbco": 0,
            "exmrgncds": 0,
            "exmrgneq": 0,
            "exmrgnfo": 0,
            "exmrgnmcf": 0,
            "exmrgnncf": 0,
            "exmrgnnco": 0,
            "foeq": 0,
            "fofut": 0,
            "foopt": 0,
            "mcffut": 0,
            "mcfopt": 0,
            "ncffut": 0,
            "ncfopt": 0,
            "ncofut": 0,
            "ncoopt": 0,
            "netchrgs": 0,
            "netexmrgn": 0,
            "netmtm": 0,
            "netpl": 0,
            "netrecpay": 0,
            "netsmrgn": 0,
            "netto": 0,
            "smrgnbco": 0,
            "smrgncds": 0,
            "smrgneq": 0,
            "smrgnfo": 0,
            "smrgnmcf": 0,
            "smrgnncf": 0,
            "smrgnnco": 0,
            "subcd": "CA00000001",
            "tobco": 0,
            "tocds": 0,
            "toeq": 0,
            "tofo": 0,
            "tomcf": 0,
            "toncf": 0,
            "tonco": 0,
            "trdt": "2025-04-02T18:30:00Z"
        },
        …………..
    ]
}
   ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___