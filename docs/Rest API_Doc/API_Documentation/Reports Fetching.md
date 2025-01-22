---
sidebar_position: 4
---


## GetDpHoldingData ##

**Endpoint** : GetDpHoldingData

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Client DP Holding*



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
        "segments": "<<Segments>>",
        "date": "<<Date>>" -- dd/MM/yyyyy
        "accyear": "<<Like : 2223>>"
        Note: If you do not pass accyear parameter, 
        then we find it in the latest current year database.
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "ucc": "220A2806",
        "segments": "NSDL,CDSL",
        "date": "09/05/2019",
        "accyear": "1920"
      }
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td style={{"vertical-align":"top"}}>
        ```
        {
          "curdata": [
            {
              "balance,
              "closerate",
              "compname",
              "holding",
              "idn",
              "isincd"
            }
            ]
        }
        ```
      </td>
      <td>
        **Return Sample Data:**
        ```
        {
          "curdata": [
            {
              "balance": 2,
              "closerate": 68.75,
              "compname": "TATA STEEL LIMITED 
              (FORMERLY THE TATA IRON AND STEEL COMPANY LIMITED)",
              "holding": 137.5,
              "idn": "3958518",
              "isincd": "IN9081A01010"
            },
            
            {
              "balance": 18,
              "closerate": 518.95,
              "compname": "TATA STEEL LIMITED 
              (FORMERLY THE TATA IRON AND STEEL COMPANY LIMITED)",
              "holding": 9341.1,
              "idn": "3958519",
              "isincd": "INE081A01012"
            },
            
            {
              "balance": 450,
              "closerate": 1,
              "compname": "SHREE ASHTAVINAYAK CINE VISION LIMITED",
              "holding": 450,
              "idn": "3958520",
              "isincd": "INE538H01024"
            },
            
            {
              "balance": 12,
              "closerate": 6.15,
              "compname": "RELIANCE POWER LIMITED",
              "holding": 73.8,
              "idn": "3958521",
              "isincd": "INE614G01033"
            },
            
            {
              "balance": 22,
              "closerate": 2.1,
              "compname": "VIDEOCON INDUSTRIES LTD-
              (FORMERLY VIDEOCON LEASING & 
              INDUSTRIAL FINANCE LIMITED)","holding": 46.2,
              "idn": "3958522",
              "isincd": "INE703A01011"
            }
          ]
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___


## ClientPortfolioCM ##

**Endpoint** : clientPortfolioCM

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Client Portfolio of CM*




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
        "accyear": "<<Like : 2223>>"
        Note: If you do not pass accyear parameter, 
        then we find it in the latest current year database.
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0",
        "ucc": "151A355"
      }
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td style={{"vertical-align":"top"}}
>
        ```
        {
          "pfstocksumapi": [
            {
              "buyamt"
              "buyavgrt"
              "buyqty"
              "closerate"
              "costvalue"
              "df_amount"
              "df_qty"
              "fmc_310118"
              "isin"
              "ltpl"
              "ltpl_ntax"
              "ltpl_tax"
              "mktrate"
              "mtmvalue"
              "opamt"
              "opqty"
              "sellamt"
              "sellavgrt"
              "sellqty"
              "share"
              "stock"
              "stpl"
              "sttax"
            }
          ]
        }
        ```
      </td>
      <td>
       **Return Sample  Data:**
```
{
  "pfstocksumapi": [
{
"buyamt": 0,
"buyavgrt": 0,
"buyqty": 0,
"closerate": 21058.02,
"costvalue": 105290.11,
"df_amount": 0,
"df_qty": 0,
"fmc_310118": 18875,
"isin": "INE470A01017",
"ltpl": 0,
"ltpl_ntax": 0,
"ltpl_tax": 0,
"mktrate": 20929.7,
"mtmvalue": 0,
"opamt": 105290.11,
"opqty": 5,
"sellamt": 0,
"sellavgrt": 0,
"sellqty": 0,
"share": "3MINDIA EQ",
"stock": 5,
"stpl": 0,
"sttax": 0
},
{
"buyamt": 0,
"buyavgrt": 0,
"buyqty": 0,
"closerate": 1417.04,
"costvalue": 70851.8,
"df_amount": 0,
"df_qty": 0,
"fmc_310118": 1737.9,
"isin": "INE012A01025",
"ltpl": 0,
"ltpl_ntax": 0,
"ltpl_tax": 0,
"mktrate": 1387.6,
"mtmvalue": 0,
"opamt": 70851.8,
"opqty": 50,
"sellamt": 0,
"sellavgrt": 0,
"sellqty": 0,
"share": "ACC EQ",
"stock": 50,
"stpl": 0,
"sttax": 0
},
]
}


```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___


## ClientFOpl ##

**Endpoint** : clientFOpl

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Client FO Profit and Loss*

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
        "ucc": "<<UCC>>"
        "segments":"NFO"
        "accyear": "<<Like : 2223>>"
        Note: If you do not pass accyear parameter, 
        then we find it in the latest current year database.
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0",
        "ucc": "151A355"
        "segments":"NFO"
      }
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td style={{"vertical-align":"top"}}>
      ```
        {
          "nfoplposapi": [
            {
              "avg_prm"
              "closeprm"
              "closeund"
              "netqty"
              "pl_asnexc"
              "pl_booked"
              "pl_prm"
              "pl_und"
              "pl_undrem"
              "purqty"
              "saleqty"
              "share"
              "strikerate"
              "tatalpl2"
              "totalpl1"
              "totpremium"
            }
          ]
        } 
        ```
      </td>
      <td>
        
        **Return Sample Data:**
 ```
 {
  "nfoplposapi": [
    {
      "avg_prm": 0,
      "closeprm": 0,
      "closeund": 0,
      "netqty": 0,
      "pl_asnexc": 0,
      "pl_booked": -1710.5,
      "pl_prm": 0,
      "pl_und": 0,
      "pl_undrem": "",
      "purqty": 25,
      "saleqty": 25,
      "share": "FUTIDX BANKNIFTY",
      "strikerate": 0,
      "tatalpl2": -1710.5,
      "totalpl1": -1710.5,
      "totpremium": 0
    },
    
    {
      "avg_prm": 333.2872,
      "closeprm": 0,
      "closeund": 0,
      "netqty": 1000,
      "pl_asnexc": 0,
      "pl_booked": 0,
      "pl_prm": -333287.2,
      "pl_und": -333287.2,
      "pl_undrem": "",
      "purqty": 1000,
      "saleqty": 0,
      "share": "HEXAWARE TECHNOLOGIES",
      "strikerate": 0,
      "tatalpl2": -333287.2,
      "totalpl1": -333287.2,
      "totpremium": 0
      },
      {
        "avg_prm": 212.42,
        "closeprm": 0,
        "closeund": 0,
        "netqty": 200,
        "pl_asnexc": 0,
        "pl_booked": 0,
        "pl_prm": -42484,
        "pl_und": -42484,
        "pl_undrem": "",
        "purqty": 200,
        "saleqty": 0,
        "share": "KNR CONSTRU LTD.",
        "strikerate": 0,
        "tatalpl2": -42484,
        "totalpl1": -42484,
        "totpremium": 0
        },
        {
          "avg_prm": 0,
          "closeprm": 0,
          "closeund": 0,
          "netqty": 0,
          "pl_asnexc": 0,
          "pl_booked": -30806.21,
          "pl_prm": 0,
          "pl_und": 0,
          "pl_undrem": "",
          "purqty": 75,
          "saleqty": 75,
          "share": "FUTIDX NIFTY 30Jul20",
          "strikerate": 0,
          "tatalpl2": -30806.21,
          "totalpl1": -30806.21,
          "totpremium": 0
        }
      ]
    }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___


## ClientLedgerData ##

**Endpoint** : ClientLedgerData

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Client Ledger Data with Narration*



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
        "datefrom": "dd-MM-yyyy",
        "dateto": "dd-MM-yyyy",
        "segments": "< like: NSE,BSE,NFO, ALL>",
        "ucc": "<UCC>"
        "accyear": "<<Like : 2223>>"
        Note: If you do not pass accyear parameter, 
        then we find it in the latest current year database.
      }
      ```
    </td>
      <td>
      ```
      {
      "key": "ezhDMEI5ND4MLE3YwNH0=",
      "datefrom": "17-04-2017",
      "dateto": "17-04-2020",
      "segments": "NSE",
      "ucc": "32S2824",
      "accyear": "2021"
      }
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td style={{"vertical-align":"top"}}>
        ```
        "curdata": [
          {
             "accd",
             "accddescr",
             "amtcr","amtdr",
             "branchid",
             "branchname",
             "cheqdt",
             "cheqno",
             "co",
             "idn",
             "narr",
             "p_r",
             "runbal",
             "subcode",
             "subdescr",
             "tt",
             "type",
             "vrdt",
             "vrno"
            }
          ]
          ```
      </td>
      <td>
        
        **Return Sample Data:**
 ```
 {
  "curdata": [
    {
      "accd": "62",
      "accddescr": "",
      "amtcr": 15009.04,
      "amtdr": 0,
      "branchid": "",
      "branchname": "",
      "cheqdt": "1900-01-01T00:00:00Z",
      "cheqno": "",
      "co": "",
      "idn": "0",
      "narr": "Opening Balance",
      "p_r": "",
      "runbal": 15009.04,
      "subcode": "CS00001966",
      "subdescr": "",
      "tt": "",
      "type": "A",
      "vrdt": "2017-04-17T00:00:00Z",
      "vrno": ""
      },
      {
        "accd": "62",
        "accddescr": "CLIENTS",
        "amtcr": 0,
        "amtdr": 11365,
        "branchid": "320",
        "branchname": "ANISHA BANSAL [320]",
        "cheqdt": "1900-01-01T00:00:00Z",
        "cheqno": "",
        "co": "01",
        "idn": "16853",
        "narr": "Obligation For: 2019061N [NSE] Trade Date 28/03/19",
        "p_r": "",
        "runbal": 3644.04,
        "subcode": "CS00001966",
        "subdescr": "SHAHNAZ KAMALKANT SHARMA",
        "tt": "VL",
        "type": "J",
        "vrdt": "2019-04-02T00:00:00Z",
        "vrno": "V019061"
        },
        {
          "accd": "62",
          "accddescr": "CLIENTS",
          "amtcr": 7337,
          "amtdr": 0,
          "branchid": "320",
          "branchname": "ANISHA BANSAL [320]",
          "cheqdt": "1900-01-01T00:00:00Z",
          "cheqno": "",
          "co": "01",
          "idn": "420744",
          "narr": "Obligation For: 2019088N [NSE] Trade Date 10/05/19",
          "p_r": "",
          "runbal": -37820.96,
          "subcode": "CS00001966",
          "subdescr": "SHAHNAZ KAMALKANT SHARMA",
          "tt": "VL",
          "type": "J",
          "vrdt": "2019-05-14T00:00:00Z",
          "vrno": "V019088"
        }
      ]
      }



        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>




___


## GetCdslDpTxn ##

**Endpoint** : GetCdslDpTxn

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get CDSL DP holding & transactions*


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
        "datefrom": "<<Date From>>",
        "dateto": "<<Date To>>",
        "benacnum": "<<Client Code>>" (Not Mandatory)
        ( OR    "ucc": "<<UCC>>" )
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "datefrom": "2018-05-01",
        "dateto": "2020-05-10",
        "benacnum": "00000881" ( OR  "UCC": "01P444" )
      }
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td style={{"vertical-align":"top"}}>
        ```
        [
          {
            "UCC",
            "ClientCode",
            "TxnDate",
            "ScripCode",
            "Symbol",
            "Series",
            "ScripName",
            "ISIN",
            "Qty",
            "Val",
            "AvgRate",
            "DPTxnType"
          }
        ]
        ```
      </td>
      <td>
        **Return Sample Data:**
        ```
        [
          {
            "UCC": "01P444",
            "ClientCode": "00000881",
            "TxnDate": "2019-04-01T00:00:00",
            "ScripCode": "500266",
            "Symbol": "MAHSCOOTER",
            "Series": "EQ",
            "ScripName": "MAHSCOOTER",
            "ISIN": "INE288A01013",
            "Qty": 2.000,
            "Val": 7121.600000,
            "AvgRate": 3560.800000,
            "DPTxnType": "StockOut"
          },
          {
            "UCC": "01P444",
            "ClientCode": "00000881",
            "TxnDate": "2019-04-01T00:00:00",
            "ScripCode": "526550",
            "Symbol": "CCHHL",
            "Series": "EQ",
            "ScripName": "COUNTRY CLUB HOSPITALITY 
            & HOLIDAYS LTD",
            "ISIN": "INE652F01027",
            "Qty": 500.000,
            "Val": 3400.000000,
            "AvgRate": 6.800000,
            "DPTxnType": "StockOut"
          },
          {
            "UCC": "01P444",
            "ClientCode": "00000881",
            "TxnDate": "2019-04-02T00:00:00",
            "ScripCode": "500520",
            "Symbol": "M&M",
            "Series": "EQ",
            "ScripName": "MNM",
            "ISIN": "INE101A01026",
            "Qty": 25.000,
            "Val": 16678.750000,
            "AvgRate": 667.150000,
            "DPTxnType": "StockIn"
          }
        ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>




___


## GetNsdlDpTxn ##
**Endpoint** : GetNsdlDpTxn

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get NSDL DP holding & transactions*



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
        "datefrom": "<<Date From>>",
        "dateto": "<<Date To>>",
        "benacnum": "<<Client Code>>" (Not Mandatory)
        ( OR    "ucc": "<<UCC>>" )
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "datefrom": "2018-05-01",
        "dateto": "2020-05-10",
        "benacnum": "00000881" ( OR  "UCC": "01P444" )
      }
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr style={{"vertical-align":"top"}}>
      <td>
        ```
        [
          {
            "UCC",
            "ClientCode",
            "TxnDate",
            "ScripCode",
            "Symbol",
            "Series",
            "ScripName",
            "ISIN",
            "Qty",
            "Val",
            "AvgRate",
            "DPTxnType"
          }
        ]
        ```
      </td>
      <td>
        **Return Sample Data:**
 ```
 [
  {
    "UCC": "01P444",
    "ClientCode": "00000881",
    "TxnDate": "2019-04-01T00:00:00",
    "ScripCode": "500266",
    "Symbol": "MAHSCOOTER",
    "Series": "EQ",
    "ScripName": "MAHSCOOTER",
    "ISIN": "INE288A01013",
    "Qty": 2.000,
    "Val": 7121.600000,
    "AvgRate": 3560.800000,
    "DPTxnType": "StockOut"
  },
  {
    "UCC": "01P444",
    "ClientCode": "00000881",
    "TxnDate": "2019-04-01T00:00:00",
    "ScripCode": "526550",
    "Symbol": "CCHHL",
    "Series": "EQ",
    "ScripName": "COUNTRY CLUB HOSPITALITY 
    & HOLIDAYS LTD",
    "ISIN": "INE652F01027",
    "Qty": 500.000,
    "Val": 3400.000000,
    "AvgRate": 6.800000,
    "DPTxnType": "StockOut"
  },
  {
    "UCC": "01P444",
    "ClientCode": "00000881",
    "TxnDate": "2019-04-02T00:00:00",
    "ScripCode": "500520",
    "Symbol": "M&M",
    "Series": "EQ",
    "ScripName": "MNM",
    "ISIN": "INE101A01026",
    "Qty": 25.000,
    "Val": 16678.750000,
    "AvgRate": 667.150000,
    "DPTxnType": "StockIn"
    }
    ]
    ```
      </td>
    </tr>
  </tbody>
</table>
</pre>
___
## BrokerageAnalysis ##

**Endpoint** : BrokerageAnalysis

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*RM, Client and Branch wise Brokerage Analysis*

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
"type": "Client | Branch | AP | RM | Branch-Client 
| AP-Client | RM-Client",
"segments": "<Like : NSE,BSE,NFO | ALL>",
"datefrom": "dd-MM-yyyy",
"dateto": "dd-MM-yyyy"
"accyear": "<<Like : 2223>>"
Note: If you do not pass accyear parameter, 
then we find it in the latest current year database.
}
      ```
    </td>
      <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "type": "Client",
    "segments": "ALL",
    "datefrom": "07-04-2020",
    "dateto": "20-04-2020",
    "accyear": "2021"
      }
      ```
    </td>
    </tr>

    <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**JSon Response:**</td>
    </tr>
    <tr>
      <td style={{"vertical-align":"top"}}>
        ```
        {
          "curbrkg": [
            {
              "brkg",
              "clientname",
              "ucc"
            }
            ]
        }  
      ```
      </td>
      <td>
        **Return Sample Data:**
```
{
  "curbrkg": [
    {
      "brkg": 1149.19,
      "clientname": "PRABHAT KIRAN",
      "ucc": "XPC788"
    },
    {
      "brkg": 268.95,
      "clientname": "ADITYA PODDAR",
      "ucc": "A003"
    },
    {
      "brkg": 1203.16,
      "clientname": "AJAY AGARWAL",
      "ucc": "A005"
    },
    {
      "brkg": 216,
      "clientname": "AJAY KUMAR  A",
      "ucc": "A036"
    },
    {
      "brkg": 85,
      "clientname": "AMITA AGRAWAL",
      "ucc": "A039"
    },
    {
      "brkg": 30,
      "clientname": "AMITAVA GHOSH",
      "ucc": "A129"
    },
    {
      "brkg": 1758.51,
      "clientname": "ANITA CHANDAK",
      "ucc": "A064"
    },
    {
      "brkg": 66.38,
      "clientname": "ANUP KUMAR GU",
      "ucc": "A091"
    },
    {
      "brkg": 3699.26,
      "clientname": "ANUPAM KHEMKA",
      "ucc": "A032"
    }
  ]
}
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>



___

## GetStateCodeList ##

**Endpoint** : getStateCodeList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**
*Get State Code Details | Get all state code list | Get state code search by Descr*



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
    "key": "<<RestAPI Key>>",  * mandatory 
    "cSearch": "<<Search by  descr>>",
    "cStateCd": "<<StateCode>>",
    "cGSTStateCd": "<<GSTStateCd>>",
    "cGSTStateNo": "<<GSTStateNo>>"
}
      ```
    </td>
      <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "cSearch": "West Bengal"  * Optional 
    ( If not send then show all states) 
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
        "STATECD",
        "DESCR",
        "GSTSTATECD”,
        "GSTSTATENO"
        }
      ]
        ```
      </td>
      <td>
        ```
        [
          {
            "STATECD": "WB  ",
            "DESCR": "West Bengal",
            "GSTSTATECD": "WB",
            "GSTSTATENO": "19"
          }
        ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___

