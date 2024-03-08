---
sidebar_position: 1
---



## GetClientDetails ##

**Endpoint** : GetClientDetails

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Basic Client Data from UCC | Get some clients details from a Date filter | Get All clientS*



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
        OR
        "dRegDateFrom": "<<yyyy-MM-dd>>"
        "isOnline" : "1"  Online client (must provide UCC)
        }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "ucc": "151A355",       OR
        "dRegDateFrom": "2019-05-01" 
        Get some clients from this date
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
            "ClientID"
            "Ucc"
            "Branchid"
            "ClientName"
            "FatherNm":"",
"Gender",
        M : Male,
        F : Female,
        N : None

"MaritalStatus",
        01 : Married,
        02 : Single,
        03 : Widow / Widower
        04 : Divorce
        
        "Address"
        "Address2",
        "Address3",
        "City"
        
        "PinCode"
        "Telephonenumber"
        "MobileNumber"
        "StateId"
        "Country",
        "Res_Address1",
        "Res_Address2",
        "Res_Address3",
        "Res_City",
        "Res_PinCode",
        "Res_Phone",
        "Res_StateId",
        "Res_Country",
        "PanNumber"
        "BirthDate"
        "dopeningDate"
        "EmailAddress"
        "ClientCat"
        "dpid"
        "dpac"
        "bankname"
        "bankaccount"
        "BankAcType",
        "BankClientName",
        "micr"
        "ifsc"
        "cStatus"
        "AnnualIncome"
        "RMCode"
        "RMName"
      }
      ]
        ```
      </td>
      <td>
        ```
        [
          {
            "ClientID": "CA00000013",
            "Ucc": "151A355 ",
            "Branchid": "SB01",
            "ClientName": "ABHIJIT MANDAL",
            "FatherNm": "ANANDI MANDAL",
            "Gender": "M   ",
            "MaritalStatus": "01  ",
            "Address": "6A WINDSOR",
            "Address2": "FLAT NO 104",
            "Address3": "WINDSOR PALACE",
            "City": "KOLKATA",
            "PinCode": " 700019   ",
            "Telephonenumber": "855225788",
            "MobileNumber": "9521452222",
            "StateId": "WB",
            "Country": "INDIA",
            "Res_Address1": "6A, WINDSOR",
            "Res_Address2": "FLAT NO D 104",
            "Res_Address3": "WINDSOR PALACE",
            "Res_City": "KOLKATA",
            "Res_PinCode": " 700019",
            "Res_Phone": "8227612",
            "Res_StateId": "WB  ",
            "Res_Country": "INDIA",
            "PanNumber": "NKTPS5229P",
            "BirthDate": "1979-12-03T00:00:00",
            "dopeningDate": "2002-01-28T00:00:00",
            "EmailAddress": "arttyuuki55@rediffmail.com",
            "ClientCat": "01",
            "dpid": "IN308555",
            "dpac": "10085555",
            "bankname": "HDFC BANK",
            "bankaccount": "008855531772",
            "BankAcType": "Savings   ",
            "BankClientName": "ABHIJIT SHAH",
            "micr": "101254453 ",
            "ifsc": "HDFC0000150",
            "cStatus": "ACTIVE",
            "AnnualIncome": "Rs. 1000000 - 2500000",
            "RMCode": null,
            "RMName": null
          }
        ]



        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___





## GetClientBankDetails ##

**Endpoint** : GetClientBankDetails

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Client Bank Details*



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
        "isOnline" : "1"  Online client (must provide UCC)
      }
      ```
    </td>
      <td>
      ```
    {
      "key": "ezhDMEI5ND4MLE3YwNH0=",
      "ucc": "151A355"
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
            "ClientID"
            "Ucc"
            "Primarybankname"
            "Primarybankaccount"
            "PrimaryBankifsc"
            "Secondarybankname1"
            "Secondarybankaccount1"
            "SecondaryBankifsc1"
            "Secondarybankname2"
            "Secondarybankaccount2"
            "SecondaryBankifsc2"
            "Secondarybankname3"
            "Secondarybankaccount3"
            "SecondaryBankifsc3"
            "Secondarybankname4"
            "Secondarybankaccount4"
            "SecondaryBankifsc4"
            }
            ]
        ```
      </td>
      <td>
        ```
        [
          {
            "ClientID": "CA00000011",
            "Ucc": "151A355",
            "Primarybankname": "HDFC BANK",
            "Primarybankaccount": "0081840000189 ",
            "PrimaryBankifsc": "HDFC0000008",
            "Secondarybankname1": "INDUSIND BANK",
            "Secondarybankaccount1": "779830706693        ",
            "SecondaryBankifsc1": "INDB0000161",
            "Secondarybankname2": "YES BANK LTD ",
            "Secondarybankaccount2": "019090100008798 ",
            "SecondaryBankifsc2": "YESB0000190",
            "Secondarybankname3": null,
            "Secondarybankaccount3": null,
            "SecondaryBankifsc3": null,
            "Secondarybankname4": null,
            "Secondarybankaccount4": null,
            "SecondaryBankifsc4": null
            }
            ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>



 
 
 
 
 ___ 

## GetClientDPDetails ##

**Endpoint** : GetClientDPDetails

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Client DP Details*



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
        "isOnline" : "1"  Online client (must provide UCC)
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "ucc": "220A2806"
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
          "ClientID"
          "Ucc"
          "PrimaryDPID"
          "PrimaryAccount"
          "PrimaryPOA"
          "SecondaryDpId1"
          "SecondaryAccount1"
          "SecondaryPOA1"
          "SecondaryDpId2"
          "SecondaryAccount2"
          "SecondaryPOA2"
          "SecondaryDpId3"
          "SecondaryAccount3"
          "SecondaryPOA3"
          }
          ]
        ```
      </td>
      <td>
        ```
        [
          {
            "ClientID": "CA00000010",
            "Ucc": "220A2806",
            "PrimaryDPID": "12079876",
            "PrimaryAccount": "00103241",
            "PrimaryPOA": true,
            "SecondaryDpId1": null,
            "SecondaryAccount1": null,
            "SecondaryPOA1": null,
            "SecondaryDpId2": null,
            "SecondaryAccount2": null,
            "SecondaryPOA2": null,
            "SecondaryDpId3": null,
            "SecondaryAccount3": null,
            "SecondaryPOA3": null
            }
            ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>



___


## GetClientLedgerBalances ##

**Endpoint** : GetClientLedgerBalances

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Client Ledger Balances*

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
        "isOnline" : "1"  Online client (must provide UCC)
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "ucc": "0955"
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
            "ClientID"
            "Ucc"
            "segment"
            "balance"
            }
        ]
        ```
      </td>
      <td>
        ```
        [
          {
            "ClientID": "CA00000011",
            "Ucc": "0955",
            "segment": "NFO ",
            "balance": 0.00
          },
          
          {
            "ClientID": "CA00000011",
            "Ucc": "0955",
            "segment": "NSE ",
            "balance": 273032.16
            },
            
          {
            "ClientID": "CA00000011",
            "Ucc": "0955",
            "segment": "BSE ",
            "balance": 0.00
          }
        ]



        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>


___


## GetClientSegmentStatus ##
**Endpoint** : GetClientSegmentStatus

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Client Segment Status*

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
        "isOnline" : "1"  Online client (must provide UCC)
      }
      ```
    </td>
    <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "ucc": "0955"
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
            "ClientID"
            "Ucc"
            "Segment"
            "status"
          }
        ]
        ```
      </td>
      <td>
      ```
      [
        {
          "ClientID": "CA00000011",
          "Ucc": "0955",
          "Segment": "BFO ",
          "status": "NotRegistered"
        },
        
      {
        "ClientID": "CA00000011",
        "Ucc": "0955",
        "Segment": "NSE ",
        "status": "Active"
      },
      
      {
        "ClientID": "CA00000011",
        "Ucc": "0955",
        "Segment": "CBFO",
        "status": "NotRegistered"
      },
      
      {
        "ClientID": "CA00000011",
        "Ucc": "0955",
        "Segment": "NMFS",
        "status": "NotRegistered"
      },
      
      {
        "ClientID": "CA00000011",
        "Ucc": "0955",
        "Segment": "MCFO",
        "status": "NotRegistered"
      },
      
      {
        "ClientID": "CA00000011",
        "Ucc": "0955",
        "Segment": "NCFO",
        "status": "Suspended"
      },
      
      {
        "ClientID": "CA00000011",
        "Ucc": "0955",
        "Segment": "ACC ",
        "status": "Closed"
      },
      
      {
        "ClientID": "CA00000011",
        "Ucc": "0955",
        "Segment": "NFO ",
        "status": "Suspended"
      },
      
      {
        "ClientID": "CA00000011",
        "Ucc": "0955",
        "Segment": "BSE ",
        "status": "Active"
      }
    
    ]
    ```
      </td>
      </tr>
  
  </tbody>
</table>
</pre>





___


 ## GetClientLast10Deposits ##
**Endpoint** : GetClientLast10Deposits

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Client Last 10 Deposits*



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
        "isOnline" : "1"  Online client (must provide UCC)
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "ucc": "179S3855"
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
            "ClientID"
            "Ucc"
            "VrNo"
            "VrDt"
            "Amount"
            "CheqNo"
            "CheqDt"
            "NARR1"
            "NARR2"
            }
        ]
        ```
      </td>
      <td>
      **Return Sample Data**
        ```
        [
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "R/00019",
            "VrDt": "2020-07-02T00:00:00",
            "Amount": 101931.00,
            "CheqNo": "TPT    ",
            "CheqDt": "2020-07-02T00:00:00",
            "NARR1": "BEING TPT RECD",
            "NARR2": ""
          },
          
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "R/00023",
            "VrDt": "2020-06-29T00:00:00",
            "Amount": 46199.00,
            "CheqNo": "TPT    ",
            "CheqDt": "2020-06-29T00:00:00",
            "NARR1": "BEING TPT RECD",
            "NARR2": ""
          },
          
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "R/00021",
            "VrDt": "2020-06-25T00:00:00",
            "Amount": 78926.00,
            "CheqNo": "TPT    ",
            "CheqDt": "2020-06-25T00:00:00",
            "NARR1": "BEING TPT RECD",
            "NARR2": ""
          
          },
          
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "R/00009",
            "VrDt": "2020-06-20T00:00:00",
            "Amount": 84169.00,
            "CheqNo": "TPT    ",
            "CheqDt": "2020-06-20T00:00:00",
            "NARR1": "BEING TPT RECD",
            "NARR2": ""
          },
          
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "R/00034",
            "VrDt": "2020-06-18T00:00:00",
            "Amount": 30733.00,
            "CheqNo": "TPT    ",
            "CheqDt": "2020-06-18T00:00:00",
            "NARR1": "BEING TPT RECD",
            "NARR2": ""
          },
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "R/00016",
            "VrDt": "2020-06-17T00:00:00",
            "Amount": 35750.00,
            "CheqNo": "TPT    ",
            "CheqDt": "2020-06-17T00:00:00",
            "NARR1": "BEING TPT RECD",
            "NARR2": ""
          },
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "R/00039",
            "VrDt": "2020-06-15T00:00:00",
            "Amount": 28851.00,
            "CheqNo": "TPT    ",
            "CheqDt": "2020-06-15T00:00:00",
            "NARR1": "BEING TPT RECD",
            "NARR2": ""
          }
          
        ]
 ```
      </td>
    </tr>
  </tbody>
</table>
</pre>







___


## GetClientLast10Withdrawals ##

**Endpoint** : GetClientLast10Withdrawals

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Client Last 10 Withdrawals*




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
        "isOnline" : "1"  Online client (must provide UCC)
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "ucc": "179S3855"
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
            "ClientID"
            "Ucc"
            "VrNo"
            "VrDt"
            "Amount"
            "CheqNo"
            "CheqDt"
            "NARR1"
            "NARR2"
          }
        ]
        ```
      </td>
      <td>
        **Return Sample Data**
        ```
        [
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "P/00013",
            "VrDt": "2020-06-03T00:00:00",
            "Amount": 83901.00,
            "CheqNo": "STP    ",
            "CheqDt": "2020-06-03T00:00:00",
            "NARR1": " transferred to a/c no. 
            50100175757268 of Hdfc Bank Ltd.
            ",
            "NARR2": "Being Amount paid to client on 03/06/20"
          },
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "P/00045",
            "VrDt": "2020-05-29T00:00:00",
            "Amount": 78902.00,
            "CheqNo": "STP    ",
            "CheqDt": "2020-05-29T00:00:00",
            "NARR1": " transferred to a/c no. 
            50100175757268 of Hdfc Bank Ltd.
            ",
            "NARR2": "Being Amount paid to client on 29/05/20"
          },
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "P/00018",
            "VrDt": "2020-05-15T00:00:00",
            "Amount": 107650.88,
            "CheqNo": "STP    ",
            "CheqDt": "2020-05-15T00:00:00",
            "NARR1": " transferred to a/c no. 
            50100175757268 of Hdfc Bank Ltd.
            ",
            "NARR2": "Being Amount paid to client on 15/05/20"
          },
          {
            "ClientID": "CV00000022",
            "Ucc": "179S3855",
            "VrNo": "P/00012",
            "VrDt": "2020-04-17T00:00:00",
            "Amount": 85983.43,
            "CheqNo": "STP    ",
            "CheqDt": "2020-04-17T00:00:00",
            "NARR1": " transferred to a/c no. 
            50100175757268 of Hdfc Bank Ltd.
            ",
            "NARR2": ""

    }

]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___

## GetKRAPhotoIdProofList ##

**Endpoint** : getKRAPhotoIdProofList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get KRAPhotoIdProofCode list | Get KRAPhotoIdProofCode search by Descr*



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
        "cSystem" : "<<CDSL OR NSDL>>",
        "cSearch": "<<Search by  descr>>"
      }
      ```
    </td>
      <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "cSystem" : "CDSL", * Optional 
    ( If not send then show CDSL data)
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
      "CODE",
      "DESCR"
    }
]
        ```
      </td>
      <td>
        
        **Return Data Sample :**
```
[
    {
      "CODE": "01    ",
      "DESCR": "PAN CARD WITH PHOTOGRAPH"
    },
    {
      "CODE": "02    ",
      "DESCR": "UID CARD "
    },
    {
      "CODE": "03    ",
      "DESCR": "Passport "
    },
    {
      "CODE": "04    ",
      "DESCR": "Driving License "
    },
    {
      "CODE": "05    ",
      "DESCR": "Voter Identity Card "
    },
    {
      "CODE": "06    ",
      "DESCR": "ID Card with photo issued by Central / 
      State Government and its Departments "
    },
    {
      "CODE": "07    ",
      "DESCR": "ID Card with photo issued by Statutory / 
      Regulatory Authorities"
    },
    {
      "CODE": "08    ",
      "DESCR": "ID Card with photo issued by 
      Public Sector Undertakings "
    },
    {
      "CODE": "09    ",
      "DESCR": "ID Card with photo issued by 
      Scheduled Commercial Banks "
    },
    {
      "CODE": "10    ",
      "DESCR": "ID Card with photo issued by 
      Public Financial Institutions "
    },
    {
      "CODE": "11    ",
      "DESCR": "ID Card with photo issued by 
      Colleges affiliated to Universities "
    },
    {
      "CODE": "12    ",
      "DESCR": "ID Card with photo issued by Professional 
      Bodies such as ICAI, ICWAI, ICSI, 
      Bar Council etc. to their Members"
    },
    {
      "CODE": "13    ",
      "DESCR": "Credit cards/Debit cards issued by Banks
    }
  ]   
```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___


## GetKRAAddressProofList ##

**Endpoint** : getKRAAddressProofList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get KRAAddressProofCode | Get KRAAddressProofCode search by Descr*



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
        "cSystem" : "<<CDSL OR NSDL>>",
        "cSearch": "<<Search by  descr>>"
      }
      ```
    </td>
      <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0="
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
      "CODE",
      "DESCR"
    }
]
        ```
      </td>
      <td>
        **Return Data Sample:**
        ```
        [
          {
            "CODE": "01",
            "DESCR": "Passport"
          },
          {
            "CODE": "02",
            "DESCR": "Driving License"
          },
          {
            "CODE": "03",
            "DESCR": "Latest Bank Passbook"
            },
            {
              "CODE": "04",
              "DESCR": "Bank Account Statement / Passbook"
            },
            {
              "CODE": "05",
              "DESCR": "Latest Demat Account Statement 
              (Should not be Older than 3 Months)"
            },
            {
              "CODE": "06",
              "DESCR": "Voter Identity Card"
            },
            {
              "CODE": "07",
              "DESCR": "Ration Card"
            },
            {
              "CODE": "08",
              "DESCR": "Registered Lease or 
              Sale Agreement of Residence"
            },
            {
              "CODE": "09",
              "DESCR": "Latest LandLine Telephone Bill 
              (Should not be Older than 3 Months)"
            },
            {
              "CODE": "10",
              "DESCR": "Latest Electricity Bill 
              (Should not be Older than 3 Months)"
              },
              {
                "CODE": "11    ",
                "DESCR": "Gas Bill 
                (Should not be Older than 3 Months)"
              },
              {
                "CODE": "12",
                "DESCR": "Registration Certificate issued 
                under Shops and Establishment"
              },
              {
                "CODE": "13",
                "DESCR": "Flat Maintenance bill 
                (Should not be Older than 3 Months)"
              },
              {
                "CODE": "14",
                "DESCR": "Insurance Copy"
              },
              {
                "CODE": "15",
                "DESCR": "Self Declaration by 
                High Court / Supreme Court Judges"
              },
              {
                "CODE": "16",
                "DESCR": "Power of Attorney given by 
                FII/sub-account to the Custodians 
                ( which are during notarized 
                and/or apostiled or consularized )"
              },
              {
                "CODE": "17",
                "DESCR": "Proof of Address issued by 
                Bank Managers of Scheduled Commercial Banks"
              },
              {
                "CODE": "18",
                "DESCR": "Proof of address issued by 
                Elected representatives to the 
                Legislature Assembly"
              },
              {
                "CODE": "19",
                "DESCR": "Proof of Address issued 
                by Parliament"
              },
              {
                "CODE": "20",
                "DESCR": "Proof of Address issued by 
                any Government / Statutory Authority"
              },
              {
                "CODE": "21",
                "DESCR": "Proof of Address issued 
                by Notary Public"
              },
              {
                "CODE": "22",
                "DESCR": "Proof of Address issued 
                by Gazetted Officer"
              },
              {
                "CODE": "23",
                "DESCR": "ID Card with address issued by 
                Central / State Government and 
                its Departments"
              },
              {
                "CODE": "24",
                "DESCR": "ID Card with address issued by 
                Statutory / Regulatory Authorities"
              },
              {
                "CODE": "25",
                "DESCR": "ID Card with address issued 
                by Public Sector Undertakings"
              },
              {
                "CODE": "26",
                "DESCR": "ID Card with address issued 
                by Scheduled Commercial Banks"
              },
              {
                "CODE": "27",
                "DESCR": "ID Card with address issued 
                by Public Financial Institution"
              },
              {
                "CODE": "28",
                "DESCR": "ID Card with address issued 
                by Colleges affiliated to Universities"
              },
              {
                "CODE": "29",
                "DESCR": "ID Card issued by Professional 
                Bodies such as ICAI, 
                ICWAI, ICSI, Bar Council etc"
              },
              {
                "CODE": "31",
                "DESCR": "UID/ Aadhaar"
              }
            ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>






___


## GetKRAStateCodeList ##
**Endpoint** : getKRAStateCodeList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get KRAStateCode | Get all KRAStateCode list | Get KRAStateCode search by Descr*



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
        "cSystem" : "<<CDSL OR NSDL>>",
        "cSearch": "<<Search by  descr>>"
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
            "CODE",
            "DESCR"
          }
        ]
        ```
      </td>
      <td>
        ```
        [
          {
            "CODE": "19",
            "DESCR": "West Bengal "
          }
        ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>




___


## GetKRAStateCityList ##

**Endpoint** : getKRAStateCityList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

* Get KRAStateCityCode list | Get KRAStateCityCode search by descr*

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
        "cSearch": "<<Search by  descr>>"
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "cSearch": "Kolkata"  * Optional 
        ( If not send then show all state city) 
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
            "KraStateCity",
            "DESCR"
          }
        ]
        ```
      </td>
      <td>
        ```
        [
          {
            "KraStateCity": "17102",
            "DESCR": "WEST BENGAL - KOLKATA"
          }
        ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>




___


## GetKRACountryCodeList ##

**Endpoint** : getKRACountryCodeList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get KRA Country Code list | Get KRA Country Code  search by descr*



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
        "cSystem" : "<<CDSL OR NSDL>>",
        "cSearch": "<<Search by  descr>>""
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "cSystem" : "NSDL", * Optional 
        ( If not send then show CDSL data) 
        "cSearch": "India "  * Optional 
        ( If not send then show all Country) 
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
            "CODE",
            "DESCR"
          }
        ]
        ```
      </td>
      <td>
        ```
        [
          {
            "CODE": "101",
            "DESCR": "India   "
          }
        ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>



___


## GetBranchesList ##

**Endpoint** : getBranchesList

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get Branches Details | Get all Branch Id list | Get Branch search by Descr, BranchId, Pin, City*

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
        "cSearch": "<<Search by  BranchName>>",
        "cBranchId": "<<Search by  BranchId>>",
        "cPin": "<<Search by  Pin>>",
        "cCity": "<<Search by  City>>",
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "cSearch": "INDORE "  * Optional 
        ( If not send then show all Branch) 
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
            "BranchId",
            "BranchName",
            "Status",
            "Address1",
            "Address2",
            "Address3",
            "CITY",
            "Pin"
          }
        ]
        ```
      </td>
      <td>
        ```
        [
          {
            "BranchId": "001 ",
             "BranchName": "HNI BHATTER SIR [001]    ",
             "Status": "ONLINE ",
             "Address1": "202-A BLOCK,SILVER MALL 8-A, 
             R.N.T. MARG INDORE",
             "Address2": "                            ",
             "Address3": "",
             "CITY": "INDORE",
             "Pin": "452001 "
            },
            {
              "BranchId": "006 ",
              "BranchName": "YOGESH MUNDRA [ZY006]",
              "Status": "       ",
              "Address1": "202-A BLOCK,SILVER MALL 
              8-A, R.N.T. MARG INDORE",
              "Address2": "-452001",
              "Address3": "",
              "CITY": "INDORE",
              "Pin": "452001 "
            }
          ]


        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>






___


## GetUCCSUBCDbyMobile ##

**Endpoint** : getUCCSUBCDbyMobile

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get UCC and SUBCD  search by Mobile*



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
        "cMobile": "<<Search by  Mobile>>",
        "OnlineOnly": "1"
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "cMobile": "7338789003",  * Optional 
        ( If not send then get all records 
        which are not have primary mobile)
        "OnlineOnly": "1"  * Optional 
        ( For ignore Offline Clients sent value 1)
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
            "UCC",
            "SUBCD",
            "ClientName",
            "OfflineClient": (false | true),
            "ClientStatus":  ("ACTIVE" | "INACTIVE" ),
            "Mobile":  (Primary Mobile)
            "MobileSec1": (Secondary Mobile 1),
            "MobileSec2": (Secondary Mobile 2)
          }
        ]
        ```
      </td>
      <td>
        ```
        [
          {
            "UCC": "99024364",
            "SUBCD": "C.00000002",
            "ClientName": "HARISH MALLYA",
            "OfflineClient": false,
            "ClientStatus": "ACTIVE",
            "Mobile": "7338789003",
            "MobileSec1": "",
            "MobileSec2": ""
          }
        ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>





___


## GetUCCSUBCDbyEmail ##

**Endpoint** : getUCCSUBCDbyEmail

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Get UCC and SUBCD  search by Email*

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
        "cMobile": "<<Search by  Mobile>>",
        "OnlineOnly": "1"
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "cEmail": "rajnisirsa115@gmail.com",  * Optional 
        ( If not send then get all records 
        which are don't have primary email)
        "OnlineOnly": "1"  * Optional 
        ( For ignore Offline Clients sent value 1)
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
            "UCC",
            "SUBCD",
            "ClientName",
            "OfflineClient": (false | true),
            "ClientStatus":  ("ACTIVE" | "INACTIVE" ),
            "Email":  (Primary Email)
            "EmailStat": (Like: Me, Family)
          }
        ]
        ```
      </td>
      <td>
        ```
        [
          {
            "UCC": "99028380",
            "SUBCD": "C.00000004",
            "ClientName": ".  BABLI",
            "OfflineClient": false,
            "ClientStatus": "ACTIVE",
            "Email": "rajnisirsa115@gmail.com",
            "EmailStat": "Me" ( If value is blank its 
            mean it's also Me/Self)
          }
        ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>
___
## GetFirstLastTradedDateSegmentWise ##
**Endpoint** : GetFirstLastTradedDateSegmentWise

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*To return the First and Last traded date in each segment for a particular UCC or search by multiple UCC*

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
        "UCC": "<<UCC>>",  OR      "SUBCD"

                      OR 
        "UCCList": ["<<UCC>>","<<UCC>>"]
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "UCC": "A109",     OR  "SUBCD": "CA00000708"

                    OR
        "UCCList":  ["A109","A135","A98","A37","A93"]
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
        [
          {
            "SUBCD",
            "UCC",
            "ClientName",
            "BranchID",
            "FirstTradeDate",
            "LastTradeDate",
            "Segment"
          }
        ]
        ```
      </td>
      <td>
        ```
        [
          {
            "SUBCD": "CA00000005",
            "UCC": "A109 ",
            "ClientName": "ABHIJIT GHOSH",
            "BranchID": "EB01",
            "FirstTradeDate": "2021-01-25T00:00:00",
            "LastTradeDate": "2021-01-25T00:00:00",
            "Segment": "BSE "
          },
          {
            "SUBCD": "CA00000005",
            "UCC": "A109      ",
            "ClientName": "ABHIJIT GHOSH",
            "BranchID": "EB01",
            "FirstTradeDate": "2021-01-07T00:00:00",
            "LastTradeDate": "2021-08-20T00:00:00",
            "Segment": "NSE "
          }
        ]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___
## getClientNomineeCM_old
**Endpoint** : getClientNomineeCM_old

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**
*(Obsolete in SharePro no need to use now)*  
Client’s get Client Nominee details linked to the trading account
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
    "key": "<<RestAPI Key>>",  * mandatory 
    "UCC": "<<UCC>>"   OR    "SUBCD"  * mandatory 
    }
      ```
    </td>
      <td>
      ```
    {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "UCC": "Z999"
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
    "UCC": "<<UCC>>",
    "SUBCD",
    "NomineeNm": "<<char(40)>>", Nominee Name
    "NomineeRel" : "<<char(40)>>", Nominee Relation
    "NomineeAdd1" : "<<char(40)>>",
    "NomineeAdd2" :  "<<char(40)>>",
    "NomineeAdhar" : "<<char(12)>>",
    "NomineeCity" : "<<char(20)>>",
    "NomineeEmail" : "<<char(40)>>",
    "NomineePan" : "<<char(10)>>",
    "NomineePhone" : "<<char(20)>>",
    "NomineePin" : "<<char(20)>>"
    }
    ]
        ```
      </td>
      <td>
        ```
    [
    {

    "UCC": "Z999",
    "SUBCD": "C997254753",
    "NomineeNm": "KAVITA HP SEN",
    "NomineeRel": "Wife",
    "NomineeAdd1": "15/12, Dr SEN Road",
    "NomineeAdd2": "GolPark",
    "NomineeAdhar": "529874145551",
    "NomineeCity": "Kolkata",
    "NomineeEmail": "kavita@abc.com",
    "NomineePan": "BVIPP6925V",
    "NomineePhone": "9855558252",
    "NomineePin": "700019"
    }

]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>
___
## getClientNomineeCM
**Endpoint** : getClientNomineeCM

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Client’s get Client Nominees details linked to the trading account
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
    "key": "<<RestAPI Key>>",  * mandatory 
    "UCC": "<<UCC>>"      OR      "SUBCD"  * mandatory 
    }
      ```
    </td>
    <td>
      ```
   {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "UCC": "Z999"
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
    "UCC": "<<UCC>>",
    "SUBCD",
    "EffectDate": "<<yyyy-MM-dd>>",
    "NomineeNo": "<<1 to 3>>",
    "Prefix": <<MR, MRS, etc>>>,
    "Descr": "<<Nominee Name>>",
    "Percent": "<<Nominee percentage>>", Like : “50.00”
    "Relation": "<<Nominee Relation>>",  Like :”Son”
    "Add1",
    "Add2",
    "Add3",
    "City",
    "Pincode",
    "State",    (West Bengal : WB) Please refer to 
    getStateCodeList call to get a list of States with the broker.
    "Country",   Like : "IN" OR “India”
    "Mobile",
    "Phone",
    "Email",
    "IdType": "<<ID PROOF>>",
        "D" : Driving License,
        "F" : NREGA Job Card,
        "Z" : Others,
        "C" : PAN,
        "A" : Passport,
        "S02" : Simple/SimplifiedID issued by a Gazetted Officer,
        "S01" : SSId Issued by CG/SG/SB/RA/PSU/SCB/PFI,
        "E" : UID / AADHAR,
        "B" : Voter Identity Card

    "IdNumber": "<<ID PROOF No>>",  Like : for AADHAR its UID
    "IsMinor": "1: yes, 0: No", ( default 0)
    "MinorDOB": "<<yyyy-MM-dd>>",
    "GdPrefix": "<<MR, MRS, etc>>>",
    "GdDescr": <<Nominee’s Guardian Name>>,
    "GdRelation": "Guardian Relation with Nominee", like : “Mother”
    "GdAdd1",
    "GdAdd2",
    "GdAdd3",
    "GdCity",
    "GdPincode",
    "GdState",
    "GdCountry",
    "GdMobile",
    "GdPhone",
    "GdEmail",
    "GdIdType":"<<ID PROOF>>", same as IdType
    "GdIdNumber": "<<ID PROOF No>>",  Like : for AADHAR its UID
  }
  {
      Continue for multiple nominees ……………..
  }
]
        ```
      </td>
      <td>
        ```
        [

    {

        "SUBCD": "CLA0000013",
        "UCC": "A008",
        "EffectDate": "2022-02-22T00:00:00",
        "NomineeNo": "1",
        "Prefix": "",
        "Descr": "Rahul Sen",
        "Percent": 50.00,
        "Relation": "Son",
        "Add1": "15/12, Dr SEN Road",
        "Add2": "GolPark",
        "Add3": "Jadavpur",
        "City": "Kolkata",
        "Pincode": "700019",
        "State": "WB",
        "Country": "IN",
        "Mobile": "9038931048",
        "Phone": "1234567",
        "Email": "rahulkav@abc.com",
        "IdType": "E",
        "IdNumber": "529874145667",
        "IsMinor": "1",
        "MinorDOB": "2012-02-25T00:00:00",
        "GdPrefix": "MRS",
        "GdDescr": "KAVITA HP SEN",
        "GdRelation": "Mother",
        "GdAdd1": "15/12, Dr SEN Road",
        "GdAdd2": "GolPark",
        "GdAdd3": "Jadavpur",
        "GdCity": "Kolkata",
        "GdPincode": "700019",
        "GdState": "WB",
        "GdCountry": "IN",
        "GdMobile": "9855558252",
        "GdPhone": "75544",
        "GdEmail": "kavita@abc.com",
        "GdIdType": "E",
        "GdIdNumber": "529874145551"
    }
]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___

## getClientNomineeCM2
**Endpoint** : getClientNomineeCM2

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Client’s get Client Nominees details linked to the trading account with Optout
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
    "key": "<<RestAPI Key>>",  * mandatory 
    "UCC": "<<UCC>>"  OR   "SUBCD"  * mandatory 
}
      ```
    </td>
    <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "UCC": "Z999"
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
        "nomOptOutDt": "yyyy-MM-dd",
        "nominees": [
        {  
        "UCC": "<<UCC>>",
        "SUBCD",
        "EffectDate": "<<yyyy-MM-dd>>",
        "NomineeNo": "<<1 to 3>>",
        "Prefix": <<MR, MRS, etc>>>,
        "Descr": "<<Nominee Name>>",
        "Percent": "<<Nominee percentage>>", Like : “50.00”
        "Relation": "<<Nominee Relation>>",  Like :”Son”
        "Add1",
        "Add2",
        "Add3",
        "City",
        "Pincode",
        "State",    (West Bengal : WB) Please refer to getStateCodeList 
        call to get a list of States with the broker.
        "Country",  Like : "IN" OR “India”
        "Mobile",
        "Phone",
        "Email",
        "IdType": "<<ID PROOF>>",
            "D" : Driving License,
            "F" : NREGA Job Card,
            "Z" : Others,
            "C" : PAN,
            "A" : Passport,
            "S02" : Simple/SimplifiedID issued by a Gazetted Officer,
            "S01" : SSId Issued by CG/SG/SB/RA/PSU/SCB/PFI,
            "E" : UID / AADHAR,
            "B" : Voter Identity Card
    "IdNumber": "<<ID PROOF No>>",  Like : for AADHAR its UID
    "IsMinor": "1: yes, 0: No", ( default 0)
    "MinorDOB": "<<yyyy-MM-dd>>",
    "GdPrefix": "<<MR, MRS, etc>>>",
    "GdDescr": <<Nominee’s Guardian Name>>,
    "GdRelation": "Guardian Relation with Nominee", like : “Mother”
    "GdAdd1",
    "GdAdd2",
    "GdAdd3",
    "GdCity",
    "GdPincode",
    "GdState",
    "GdCountry",
    "GdMobile",
    "GdPhone",
    "GdEmail",
    "GdIdType":"<<ID PROOF>>", same as IdType
    "GdIdNumber": "<<ID PROOF No>>",  Like : for AADHAR its UID
}
{
    Continue for multiple nominees ……………..

}

]
}
    ```
      </td>
      <td>
        ```
        {
    "nomOptOutDt": "2023-07-15",
    "nominees": [
        {
            "SUBCD": "CP00000413",
            "UCC": "34239",
            "EffectDate": "2023-06-27T00:00:00",
            "NomineeNo": "1",
            "Prefix": "",
            "Descr": "yuvan G",
            "Percent": 100.00,
            "Relation": "spouse",
            "Add1": "No 67, abcd nagar",
            "Add2": "Nugabakam",
            "Add3": "",
            "City": "vellore",
            "Pincode": "123456",
            "State": "TN",
            "Country": "IN",
            "Mobile": "8072963716",
            "Phone": "",
            "Email": "yuvanraja8129@gmail.com",
            "IdType": "C",
            "IdNumber": "BGMPY7612R",
            "IsMinor": "0",
            "MinorDOB": "1900-01-01T00:00:00",
            "GdPrefix": "",
            "GdDescr": "",
            "GdRelation": "",
            "GdAdd1": "",
            "GdAdd2": "",
            "GdAdd3": "",
            "GdCity": "",
            "GdPincode": "",
            "GdState": "",
            "GdCountry": "",
            "GdMobile": "",
            "GdPhone": "",
            "GdEmail": "",
            "GdIdType": "",
            "GdIdNumber": ""
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

## getClientNomineeCDSL
**Endpoint** : getClientNomineeCDSL

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Client’s get Client Nominee details linked to the CDSL account
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
            "key": "<<RestAPI Key>>",  * mandatory 
    "BoCode": "<<BO Code>>"  * mandatory 
                   OR  UCC  |  SUBCD  | BenAcNum
    "CompanyId": "<<Company Code>>"
}
SharePro Company Code of CDSL. A broker may have 
multiple CDSL Depository Licenses. 
If value is not passed, the call picks up 
the first available CDSL segment in SharePro.
         ```
    </td>
      <td>
      ```
{  
    "key": "<<RestAPI Key>>",  * mandatory 
    "UCC": "<<UCC>>"      OR      "SUBCD"  * mandatory 
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
    "bodetails": {
    "message": "BO Details",
    "bodetails": [
        {
        "CompanyId",
        "BranchID",
        "BoCode",
        "FirstName",
        "MidName",
        "LastName",
        "UCC":,
        "BenAcNum",
        "PAN"
            }
        ]
    },
    "nomineedetails": {
    "message": "Nominee Details and Minor Nominee Guardian Details",
    "nominees": [   // Nominee List
            {
            "NomineeNo", (01 to 03)
            "FirstName",
            "MidName",
            "LastName",
            "Title",
            "Suffix",
            "FatherNm", (Father Name)
            "Addr1",
            "Addr2",
            "Addr3",
            "City",
            "State",    Please refer to getStateCodeList call to get 
            a list of States with the broker.
            "Country",
            "pCntrycd",
            "pStatecd", Please refer to getStateCodeList call
             to get a list of States with the broker.
            "PinCode",
            "Mobile",
            "Fax",
            "Pan",
            "ITCircle", (IT Circle / Word / District)
            "Email",
            "MinorFlag",  (“Y” - Yes, “N” - No | If Yes then need look in 
            minornomineesguardian with NomineeNo)
            "MinorDOB",   ( Minor Date of Birth )
            "Relation", "01" : Spouse ,
                "02" : Son,
                "03" : Daughter,
                "04" : Father,
                "05" : Mother,
                "06" : Brother,
                "07" : Sister,
                "08" : Grand-Son,
                "09" : Granddaughter,
                "10" : Grandfather,
                "11" : Grandmother,
                "12" : Not Provided,
                "13" : Others
                "SharePer":   (Nominee Share %)
                "ResSecFlag": (Residual Security flag “Y” - Yes, “N” - No)
            }
        ],
        "minornomineesguardian": [ // Minor Nominee Guardian List
            {
                "NomineeNo", (01 to 03 link with Nominee List)
                "FirstName",
                "MidName",
                "LastName",
                "Title",
                "Suffix",
                "FatherNm", (Father Name)
                "Addr1",
                "Addr2",
                "Addr3",
                "City",
                "State",  Please refer to getStateCodeList call to 
                get a list of States with the broker.
                "Country",
               "pCntrycd",
                "pStatecd",  Please refer to getStateCodeList call 
                to get a list of States with the broker.
                "PinCode",
                "Mobile",
                "Fax",
                "Pan",
                "ITCircle",
                "Email",
                "MinorFlag" : (“Y” - Yes, “N” - No)  
                "MinorDOB",
                "Relation", "01" : Spouse ,
                  "02" : Son,
                  "03" : Daughter,
                  "04" : Father,
                  "05" : Mother,
                  "06" : Brother,
                  "07" : Sister,
                  "08" : Grand-Son,
                  "09" : Granddaughter,
                  "10" : Grandfather,
                  "11" : Grandmother,
                  "12" : Not Provided,
                  "13" : Others
            }
        ]
    }
}
        ```
      </td>
      <td>
        ```
        {
    "bodetails": {
        "message": "BO Details",
        "bodetails": [
            {
                "CompanyId": "06",
                "BranchID": "440",
                "BoCode": "CM00000003",
                "FirstName": "MAHESH",
                "MidName": "",
                "LastName": "RAWAT",
                "UCC": "",
                "BenAcNum": "1204330000175862",
                "PAN": "AEMPR5611Q"
            }
        ]
    },
    "nomineedetails": {
        "message": "Nominee Details and Minor Nominee Guardian Details",
        "nominees": [
            {
                "NomineeNo": "01",
                "FirstName": "NIRMALA",
                "MidName": "",
                "LastName": "RAWAT",
                "Title": "MRS",
                "Suffix": "",
                "FatherNm": "",
                "Addr1": "MIG-50 NEAR GOWSHALA PRIYADARSHINI",
                "Addr2": "NAGAR",
                "Addr3": "",
                "City": "HOSHANGABAD",
                "State": "",
                "Country": "",
                "pCntrycd": "IN",
                "pStatecd": "IN-WB",
                "PinCode": "461111",
                "Mobile": "",
                "Fax": "",
                "Pan": "",
                "ITCircle": "",
                "Email": "",
                "MinorFlag": "Y",
                "MinorDOB": "Jan  1 1900 12:00AM",
                "Relation": "01",
                "SharePer": "100.00",
                "ResSecFlag": "Y"
            }
        ],
        "minornomineesguardian": [
             {
                "NomineeNo": "01",
                "FirstName": "ABhishek",
                "MidName": "",
                "LastName": "Das",
                "Title": "MR",
                "Suffix": "",
                "FatherNm": "",
                "Addr1": "15/36, Pannashree",
                "Addr2": "",
                "Addr3": "",
                "City": "KOLKATA",
                "State": "",
                "Country": "",
                "pCntrycd": "IN",
                "pStatecd": "IN-WB",
                "PinCode": "700036",
                "Mobile": "",
                "Fax": "",
                "Pan": "",
                "ITCircle": "",
                "Email": "",
                "MinorFlag": "N",
                "MinorDOB": "Jan  1 1900 12:00AM",
                "Relation": "01"
           }
        ]
    }
}
       ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___
## getClientDetailsCDSL
**Endpoint** : getClientDetailsCDSL

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Client’s get besic Client details linked to the CDSL BO pending account
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
     "key": "<<RestAPI Key>>",  * mandatory 
    "BoCode": "<<BO Code>>"  * mandatory 
                   OR  UCC  |  SUBCD | BenAcNum
    "CompanyId": "<<Company Code>>" SharePro Company Code of CDSL. 
    A broker may have multiple CDSL Depository Licenses. 
    If value is not passed, the call picks up the first 
    available CDSL segment in SharePro.
}
      ```
    </td>
      <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "BoCode": "CM00000021"
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

    "success": 1,
    "ClientDetails": [
        {
            "CompanyId",
            "BranchID",
            "BoCode",
            "UCC",
            "BenAcNum",
            "PAN",
            "FirstName",
            "MidName",
            "LastName",
            "Title",
            "Suffix",
            "Mobile",
            "secMobile",
            "Email",
            "secEmail",
            "Fax",
            "PAN1",
            "Addr1",
            "Addr2",
            "Addr3",
            "City",
            "State",
            "Country",
            "Pincode",
            "ITCircle",
            "ProductNo",
            "DPIntRefNo",
            "DOB",
            "Gender",
            "Occupation",
            "GeoCode",
            "Education",
            "IncomeCode",
            "NationCode":,
            "LanguageCode",
            "Staff_Relative",
            "StaffCode",
            "Category",
            "SettPlanFlag",
            "TaxDeduction",
            "GroupCode",
            "ConfWaivedFlag",
            "StmntCycle",
            "POAId",
            "POARegNo",
            "POASetupDate",
            "POAOptr",
            "GPABPA",
            "POAFromDate",
            "POAToDate",
            "POARemarks",
            "POAPurposeCode",
            "ECSFlag",
            "PerAddr1",
            "PerAddr2",
            "PerAddr3",
            "PerCity",
            "PerCountry",
            "PerPin",
            "PerState",
            "PerMobile1",
            "PerMobile2",
            "PerEmail",
            "AnnualReport",
            "EmailRTA",
            "PledgeInd",
            "BSDA",
            "RGESSFlag",
            "ClrngCorpId",
            "ClrngMemberId",
            "StkExchngId",
            "TradingId",
            "SebiRegNo",
            "EmailStmntFlag",
            "CasMode",
            "DisabilityFlag",
            "CasDepository",
            "Aadhaar",
            "DepAllowFlag",
            "DepRelation",
            "DepDeclFlag",
            "POAType",
            "FmlyAccFlag",
            "SubStatus",
            "RMCode",
            "GSTIN",
            "GSTRegDate",
            "StateCd",
            "Mother",
            "ShMother",
            "ThMother",
            "ChargeCd",
            "CitySeqNo",
            "FHUIDFLAG",
            "InstraId",
            "PanFlag",
            "gstINSTATECD",
            "PgstINSTATECD",
            "AddUser"
        }
    ]
}
        ```
      </td>
      <td>
        ```
        {

    "success": 1,

    "ClientDetails": [

        {
            "CompanyId": "06",
            "BranchID": "HO",
            "BoCode": "CM00000021",
            "UCC": "SSL0012",
            "BenAcNum": "",
            "PAN": "ARFPM9512K",
            "FirstName": "MITHUN5",
            "MidName": "",
            "LastName": "ANUSHA TE",
            "Title": "Mr",
            "Suffix": "Mr",
            "Mobile": "8095555590",
            "secMobile": "8095555591",
            "Email": "MNUSHAM010@GMAIL.COM",
            "secEmail": "",
            "Fax": "",
            "PAN1": "ARFPM9512K",
            "Addr1": "W/O: DHARMARAJ H,# E-101 MANTR",
            "Addr2": "ATTA MAIN ROAD,AREKERE,BANGALO",
            "Addr3": "KARNATAKA,560076",
            "City": "BENGALURU",
            "State": "KARNATAKA",
          "Country": "India",
            "Pincode": "560076",
            "ITCircle": "",
            "ProductNo": "01",
            "DPIntRefNo": "5545552",
            "DOB": "Jun  5 1982 12:00AM",
            "Gender": "F",
            "Occupation": "PV",
            "GeoCode": "M",
            "Education": "08",
            "IncomeCode": "8",
           "NationCode": "01",
            "LanguageCode": "3",
            "Staff_Relative": "N",
            "StaffCode": "",
            "Category": "01",
            "SettPlanFlag": "Y",
            "TaxDeduction": "2",
            "GroupCode": "",
            "ConfWaivedFlag": "Y",
            "StmntCycle": "EM",
            "POAId": "2209370000000013",
            "POARegNo": "22093700",
            "POASetupDate": "Nov 23 2021 12:00AM",
            "POAOptr": "Y",
            "GPABPA": "G",
            "POAFromDate": "Nov 23 2021 12:00AM",
           "POAToDate": "Jan  1 1900 12:00AM",
            "POARemarks": "",
            "POAPurposeCode": "4",
            "ECSFlag": "Y",
            "PerAddr1": "W/O DHARMARAJ H,# E-101 MANTRI",
            "PerAddr2": "ATTA MAIN ROAD,AREKERE,BANGALO",
            "PerAddr3": "KARNATAKA,560076",
            "PerCity": "BENGALURU",
            "PerCountry": "India",
            "PerPin": "560076",
            "PerState": "KARNATAKA",
            "PerMobile1": "8095555590",
            "PerMobile2": "",
            "PerEmail": "ANUSHAM009@GMAIL.COM",
            "AnnualReport": "3",
            "EmailRTA": "Y",
            "PledgeInd": "Y",
            "BSDA": "N",
            "RGESSFlag": "N",
            "ClrngCorpId": "00",
            "ClrngMemberId": "",
            "StkExchngId": "11",
            "TradingId": "",
            "SebiRegNo": "",
            "EmailStmntFlag": "Y",
            "CasMode": "",
            "DisabilityFlag": "N",
            "CasDepository": "",
            "Aadhaar": "975845014133",
            "DepAllowFlag": "N",
            "DepRelation": "",
           "DepDeclFlag": "N",
            "POAType": "R",
            "FmlyAccFlag": "N",
           "SubStatus": "0003",
           "RMCode": "",
            "GSTIN": "",
            "GSTRegDate": "Jan  1 1900 12:00AM",
            "StateCd": "KNTK",
            "Mother": "K. SEETHALEKSHMI",
            "ShMother": "",
            "ThMother": "",
            "ChargeCd": "",
            "CitySeqNo": "01",
            "FHUIDFLAG": "2",
            "InstraId": "2555845",
            "PanFlag": "1",
            "gstINSTATECD": "IN-KA",
            "PgstINSTATECD": "IN-KA",
            "AddUser": "RAPI"
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
## getClientRegStatus
**Endpoint** : getClientRegStatus

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Checks whether the Client status is Active or not. Search by UCC or SUBCD or PAN no
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
                   OR
    "SUBCD":  "<<SUBCD>>"
                   OR
    "PAN":        "<<PAN>>"
    "OnlineOnly": "<<1:Online, 0 :Offline>>"
* Optional ( For ignore Offline Clients sent value 1)
}
     ```
    </td>
      <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "UCC": "CA009",
                  OR
    "SUBCD": "CA00000001",
                  OR
    "PAN": "AAICA0430D"
*  PAN Can be returned multiple records if Closed clients have the same PAN no..
    "OnlineOnly": "1"
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
        "UCC",
        "SUBCD",
        "PAN",
        "Name",
        "OfflineClient": (false | true),
        "RegStatus":  "ACTIVE",
         RegStatus status
—-----------------------------------    
       ACTIVE
       CLOSED
       SUSPENDED
       UNREGISTERED
    }
]
        ```
      </td>
      <td>
        ```
        [
    {
        "UCC": "A301",
        "SUBCD": "CLA0000311",
        "PAN": "AAICA0430D",
        "Name": "ASPOLIGHT DAS",
        "OfflineClient": false,
        "RegStatus": "ACTIVE"
    }
]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___
## getDocument
**Endpoint** : getDocument

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
The API will fetch PDF files from various sources and return to the calling program. 
The PDF/Image will be returned in Base64 format.

**CONTRACT**: It will search for the contract note of the Client, trade date and segment.

**KYC**: Will fetch the PDF/Image for the Client and Category

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
                   OR
    "SUBCD":  "<<SUBCD>>",
    "documentType":  – CONTRACT, KYC,
    "DateFrom" , – Filter date of the document
    "DateTo" ,   – Filter date of the document
    "Segment": ,
    "Category":
}
      ```
    </td>
    <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "UCC": "A071",
    "documentType": "CONTRACT"
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
        "documentType" -- CONTRACT, KYC,
        "UCC",
        "SUBCD",
        "Category",
        "Date", -- Upload Date Time -- Like (2/23/2022 3:36:09 PM)
        "FileName", -- Like (CONTRACT_A071_NSE_20211102_16855.PDF)
        "FileData": "<<PDF/Image will be returned in Base64 format.>>"
    }
]
        ```
      </td>
      <td>
        ```
[
    {
        "documentType": "CONTRACT",
        "UCC": "A071",
        "SUBCD": "CLA0000071",
        "Category": "Contract",
        "Date": "2/23/2022 3:36:09 PM",
        "FileName": "CONTRACT_A071_NSE_20211102_16855.PDF",
        "FileData": "JVBERi0xLjQKJeLjz9MwCg=="
    }
]
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>


___





