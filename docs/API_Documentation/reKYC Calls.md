---
sidebar_position: 3
---


## AddBankAccount ##

**Endpoint** : AddBankAccount

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Add new Bank Account for Client in Sharepro*


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
        "UCC": "<<UCC>>",      OR      "SUBCD"
        "ClientName": "<<Client Name>> varchar(40)",
        "IFSC": "<<IFSC Code>>",
        "MICR": "<<MICR No>>",  [optional]
        "AcType": "<<Savings, Current, PIS A/c, Others>>",
        "Acno": "<< Bank Account No. [char](20)>>",
        "bIsPrimary": "<<1:Primary, 0: Secondary>>"
        "bIsDeleteOldAc", Delete old account? 1:Yes
        "OldAcno": <<Delete Old Bank Account number.>>
        Note: If you do not send OldAcno along with 
        bIsDeleteOldAc then it will delete the current 
        primary bank and insert your requested bank.
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "UCC": "9905420", OR  "SUBCD": "C.00000011"
        "ClientName": "Ritu Ritu",
        "IFSC": "SBIN0004514",
        "MICR": "762002012",
        "AcType": "Savings",
        "Acno": "785528554",
        "bIsPrimary": "1",
        "bIsDeleteOldAc": "1",  * For Delete old account
        "OldAcno": "785528553"  * Delete this account
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
          "message": "Primary Bank Account 
          inserted Successfully"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___

## UpdateMobile ##

**Endpoint** : updateMobile

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Client’s Update Primary and Secondary Mobile number linked to the trading account*


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
        "UCC": "<<UCC>>",    OR      "SUBCD"  * mandatory 
        "Mobile": "<<Primary  Mobile>>",  
        "MobileSec1": "<<Secondary  Mobile1>>",
        "MobileSec2": "<<Secondary  Mobile2>>",
        "MobileFmlyFlag": "<<0:Me, 1:Family, 
        Ignore for not want change>>",
        "MobileSec1FmlyFlag": "<<0:Me, 1:Family, 
        Ignore for not want change>>",
        "MobileSec2FmlyFlag": "<<0:Me, 1:Family, 
        Ignore for not want change>>",
        "OldMobile": "<<Validate with any Old Mobile>>",
        "CheckMobAlreadyExists": 
        "<<Search whether mobile is mapped?>>"
        Note: Need to provide Mobile , MobileSec1 , 
        MobileSec2, pass minimum one parameter. * mandatory
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "SUBCD": "CB00000010", Or  "UCC": "23B625"
        "MobileFmlyFlag": "0",  Ignore for not update
        "Mobile": "7338789001",
        "OldMobile": "7338789002",
        "CheckMobAlreadyExists": "1"
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
          "message": "Mobile number updated Successfully"
        }
        ```
      </td>
      </tr>
      <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">*Mobile number already exists Error*
      **Return Data:**</td>
    </tr>
    <tr>
      <td>
        ```
        {
          "success": 0,
          "message": {
            "message": "Primary Mobile 
            number already exists!",
            "tblSearchMobile": [
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
      }
    }
        ```
      </td>
      <td>
        ```
        {
          "success": 0,
          "message": {
          "message": "Primary Mobile
          number already exists!",
          "tblSearchMobile": [
        {
          "UCC": "23B625",
          "SUBCD": "CB00000010",
          "ClientName": "RAJESH JAIN",
          "OfflineClient": false,
          "ClientStatus": "INACTIVE",
          "Mobile": "7338789003",
          "MobileSec1": "7338789002",
          "MobileSec2": "7338789001"
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


## UpdateEmail ##

**Endpoint** : updateEmail

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Client’s Update Email id linked to the trading account*



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
        "UCC": "<<UCC>>",    OR      "SUBCD"  * mandatory 
        "Email": "<<Primary  Email>>",   * mandatory
        "EmailFmlyFlag": "<<0:Me, 1:Family, 
        Ignore for not want change>>",
        "OldEmail": "<<Validate with any Old Email>>",
        "CheckEmailAlreadyExists": 
        "<<Search whether email id is mapped?>"
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "UCC": "23B625", Or "SUBCD": "CB00000010"
        "Email": "rajnisirsa115@gmail.com",
        "EmailFmlyFlag": "0",  Ignore for not update
        "CheckEmailAlreadyExists": "1",
        "OldEmail": "rajnisirsa15515@gmail.com"
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
          "message": "Email updated Successfully"
        }
        ```
      </td>
    </tr>
   <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">*Email already exists Error*
      **Return Data:**</td>
    </tr>
    <tr>
      <td>
        ```
        {
          "success": 0,
          "message": {
            "message": "Email already exists!",
            "tblSearchMobile": [
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

    }

}
        ```
      </td>
      <td>
        ```
        {
          "success": 0,
          "message": {
            "message": "Email already exists!",
            "tblSearchEmail": [
               {
                "UCC": "23B625",
                "SUBCD": "CB00000010",
                "ClientName": "RAJESH JAIN",
                "OfflineClient": false,
                "ClientStatus": "INACTIVE",
                "Email": "rajnisirsa115@gmail.com",
                "EmailStat": ""
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


## UpdateClientAddress ##

**Endpoint** : updateClientAddress

**Method** : **POST or GET**   |  Send raw **Json** data in **Body**

*Client’s Update Address linked to the trading account*

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
        "UCC": "<<UCC>>",  OR      "SUBCD"  * mandatory 
        Note : Please provide Current Address 
        or Residential Address or Both
Current Address
-------------------------------------
"cAdd1": "<<varchar(50)>>", * mandatory
"cAdd2": "<<varchar(50)>>",
"cAdd3": "<<varchar(50)>>",
"cCity": "<<char(25)>>",
"cPin": "<<char(10)>>",
"cStateCd": "<<char(4)>>",   * mandatory
"cCountry": "<<varchar(35)  -- India>>",
"cPhone": "<<varchar(40)>>",
"cFax": "<<char(20)>>",

Residential Address
-----------------------------------
"cResAdd1": "<<varchar(50)>>", * mandatory
"cResAdd2": "<<varchar(50)>>",
"cResAdd3": "<<varchar(50)>>",
"cResCity": "<<char(25)>>",
"cResPin": "<<char(7)>>",
"cResStateCd": "<<char(4)>>",  * mandatory
"cResCountry": "<<char(20)  -- India>>",
"cResPhone": "<<char(20)>>",
"cResFax": "<<char(20)>>"
}
      ```
    </td>
      <td style={{"vertical-align":"top"}}>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "UCC": "23B625",
        "cAdd1": "ABC Road, NEAR KAVITA",
        "cAdd2": "Nimka",
        "cAdd3": "Arsi Nagar",
        "cCity": "INDORE",
        "cPin": "490006",
        "cStateCd": "MP",
        "cCountry": "India"
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
          "message": "Client Address updated Successfully"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>
___
## updateClientNomineeCM
**Endpoint** : updateClientNomineeCM

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Client’s Update Client Nominee linked to the trading account
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
        "key": "<<RestAPI Key>>", * mandatory 
        "UCC": "<<UCC>>", OR "SUBCD"  * mandatory 
        "EffectDate": "<<yyyy-MM-dd>>", datetime
        "NomineeNo": "<<1 to 3>>", Like: for 1st Nominee pass 1
        "Prefix": <<MR, MRS, etc>>>, varchar(5)
        "Descr": "<<Nominee Name>>", varchar(50) * mandatory
        "Percent": "<<Nominee percentage>>", numeric(5,2) Like : “50.00”
        "Relation": "<<Nominee Relation>>", varchar(50) Like :”Son”
        "Add1" , varchar(50) * mandatory
        "Add2" , varchar(50)
        "Add3",  varchar(50)
        "City",  varchar(50)
        "Pincode",
        "State", (West Bengal : WB) 
        Please refer to getStateCodeList call 
        to get a list of States with the broker. 
        (pass STATECD ) varchar(50)  * mandatory

        "Country", Like : "IN" OR “India”  varchar(50) * mandatory
        "Mobile",
        "Phone",
        "Email", varchar(50)

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

    "IdNumber": "<<ID PROOF No>>", varchar(30) Like : for AADHAR its UID
    "IsMinor": "1: yes, 0: No", ( default 0)
    "MinorDOB": "<<yyyy-MM-dd>>",
    "GdPrefix": "<<MR, MRS, etc>>>",
    "GdDescr": <<Nominee’s Guardian Name>>,
    "GdRelation": "Guardian Relation with Nominee", like : “Mother”
    "GdAdd1",  varchar(50)
    "GdAdd2",  varchar(50)
    "GdAdd3",  varchar(50)
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
 ```
    </td>
      <td>
      ```
    { 
        "key": "ezhDMEI5ND4MLE3YwNH0=",
    "UCC": "A008",
    "EffectDate": "2022-02-22",
    "NomineeNo": "1",
    "Prefix": "MR",
    "Descr": "Rahul Sen",
    "Percent": "50.00",
    "Relation": "Son",
    "Add1": "15/12, Dr SEN Road",
    "Add2": "GolPark",
    "Add3": "Jadavpur",
    "City": "Kolkata",
    "Pincode": "700019",
    "State": "WB",
    "Country": "India",
    "Mobile": "9038931048",
    "Phone": "1234567",
    "Email": "rahulkav@abc.com",
    "IdType": "E",
    "IdNumber": "529874145667",
    "IsMinor": "1",
    "MinorDOB": "2012-02-25",
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
        "message": "Client Nomine information updated Successfully"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

**Client’s nomination Opt Out to the trading account**

<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
  </thead>

  <tbody>
    <tr>
      <td colspan="2">**JSon Request:**</td>
    </tr>
    <tr>
    <td>
      ```
    {  
    "key": "<<RestAPI Key>>", * mandatory 
    "UCC": "<<UCC>>", OR "SUBCD"  * mandatory 
    "IsNomOptOut": "1”
    }
      ```
    </td>
    <td>
      ```
    {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "UCC": "354239",
    "IsNomOptOut": "1"
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
        "message": "Client nomination Opt Out successfully done"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>
____
## updateClientNomineeCDSL

**Endpoint** : updateClientNomineeCDSL

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Client’s Update Client Nominee linked to the CDSL BO pending account
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

         "CompanyId": "<<Company Code>>" SharePro Company Code of CDSL. 
         A broker may have multiple CDSL Depository Licenses. If value is not passed,
          the call picks up the first available CDSL segment in SharePro.
      
      Nominee Details

    "NomineeNo": "<<01 to 03>>", * mandatory 
    "FirstName", * mandatory 
    "MidName":,
    "LastName", * mandatory 
    "Title",
    "Suffix",
    "FatherNm",
    "Addr1", * mandatory 
    "Addr2",
    "Addr3",
    "City",
    "PinCode", * mandatory 
    "State", * mandatory 
    "GSTStateCode",     (West Bengal : WB) Please refer 
    to getStateCodeList 
    call to get a list of States with the broker.
    "Country",    (Like: India) * mandatory 
    "pCntrycd",  (For India : IN )
    "Mobile",
    "Fax",
    "Pan",
    "ITCircle",  (IT Circle / Ward / District)
    "Email",
    "MinorFlag", (“Y” - Yes, “N” - No | If Yes then need to pass
     minor nominee guardian details)
    "MinorDOB",    (Minor Date of Birth)
    "Relation",   "01" : Spouse ,
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
    "SharePer",
    "ResSecFlag"

    **Minor Nominee Guardian Details**
    If MinorFlag send “Y”: Yes then need to 
    pass Minor Nominee Guardian details
    "gFirstName", * mandatory 
    "gMidName":,
    "gLastName", * mandatory 
    "gTitle",
    "gSuffix",
    "gFatherNm",
    "gAddr1", * mandatory 
    "gAddr2",
    "gAddr3",
    "gCity",
    "gPinCode", * mandatory 
    "gState", * mandatory 
    "gGSTStateCode",     (West Bengal : WB) Please refer to 
    getStateCodeList call to get a list of States with the broker.
    "gCountry",    (Like: India) * mandatory 
    "gpCntrycd",  (For India : IN )
    "gMobile",
    "gFax",
    "gPan",
    "gITCircle",  (IT Circle / Ward / District)
    "gEmail",
    "gMinorFlag", (“Y” - Yes, “N” - No)
    "gMinorDOB",    
    "gRelation",  "01" : Spouse ,
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
```
    </td>
    <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "BoCode": "CM00000021",
    "NomineeNo": "01",
    "FirstName": "Partha",
    "MidName": "",
    "LastName": "Jana",
    "Title": "",
    "Suffix": "",
    "FatherNm": "GD",
    "Addr1": "17/80",
    "Addr2": "Garia",
    "Addr3": "Boubagan",
    "City": "Kolkata",
    "PinCode": "700084",
    "State": "West Bengal",
    "Country": "India",
    "Mobile": "8545054652",
    "Fax": "",
    "Pan": "",
    "ITCircle": "Garia",
    "Email": "mithun@abc.com",
    "MinorFlag": "N",
    "MinorDOB": "",
    "Relation": "02",
    "SharePer": "100",
    "ResSecFlag": ""
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
            "message": "CDSL Client Nominee updated Successfully"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___

## updateEmailCDSL
**Endpoint** : updateEmailCDSL

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Client’s Update Email id linked to the CDSL BO pending account   
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
    "CompanyId": "<<Company Code>>" SharePro Company Code of CDSL. 
    A broker may have multiple CDSL Depository Licenses. If value is not passed,
     the call picks up the first available CDSL segment in SharePro.
    "Email": "<<Primary  Email>>",   * mandatory
    "OldEmail": "<<Validate with any Old Email>>",
    "secEmail": "<<Secondary Email>>",
    "pEmail": "<<Permanent Address Email>>",
    "CheckEmailAlreadyExists": "<<Search whether email id is mapped?>"
    }
      ```
    </td>
    <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "BoCode": "CM00000021",
    "Email": "MNUSHAM010@GMAIL.COM",
    "secEmail": "ANUSHAM009@GMAIL.COM",
    "CheckEmailAlreadyExists": "1"
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
            "message": "Email updated Successfully"
        }
        ```
      </td>
    </tr>

        <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**Email already exists Error**</td>
    </tr>
    <tr>
      <td>
        ```
        {
    "success": 0,
    "message": {
        "message": "Email already exists!",
        "searchEmailResult": [
            {
                "CompanyId"
                "BranchID"
                "BoCode"
                "UCC"
                "BenAcNum"
                "PAN"
                "FirstName"
                "MidName"
                "LastName"
                "Email"
                "secEmail"
                "pEmail"
            }
        ]
    }
}
        ```
      </td>
      <td>
        ```
        {
    "success": 0,
    "message": {
        "message": "Email already exists!",
        "searchEmailResult": [
            {
                "CompanyId": "05",
                "BranchID": "HO",
                "BoCode": "CA00000014",
                "UCC": "SSL0008",
                "BenAcNum": "",
                "PAN": "ARFPM9512K",
                "FirstName": "ANUSHA",
                "MidName": "",
                "LastName": "MOORTHY",
                "Email": "ANUSHAM009@GMAIL.COM",
                "secEmail": "",
                "pEmail": "ANUSHAM009@GMAIL.COM"
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

## updateMobileCDSL
**Endpoint** : updateMobileCDSL

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Client’s Update Email id linked to the CDSL BO pending account
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
     If value is not passed, the call picks up the 
     first available CDSL segment in SharePro.

    "Mobile": "<<Primary  Mobile>>",   * mandatory
    "OldMobile": "<<Validate with any Old Mobile>>",
    "secMobile": "<<Secondary Mobile>>",
    "CheckMobileAlreadyExists": "<<Search whether Mobile is mapped?>"
}
      ```
    </td>
      <td>
      ```
      {
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "BoCode": "CM00000021",
    "Mobile": "8095555590",
    "secMobile": "8095555591",
    "CheckMobileAlreadyExists": "1"
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
            "message": "Mobile updated Successfully"
        }
        ```
      </td>
    </tr>

        <tr  style={{"height":"20px","padding":"10px"}}>
      <td colspan="2">**Mobile already exists Error**</td>
    </tr>
    <tr>
      <td>
        ```
        {
    "success": 0,
    "message": {
        "message": "Mobile already exists!",
        "searchMobileResult": [
            {
                "CompanyId"
                "BranchID"
                "BoCode"
                "UCC"
                "BenAcNum"
                "PAN"
                "FirstName"
                "MidName"
                "LastName"
                "Mobile"
                "secMobile"
            }
        ]
    }
}
        ```
      </td>
      <td>
        ```
        {
    "success": 0,
    "message": {
         "message": "Mobile already exists!",
        "searchMobileResult": [
            {
                "CompanyId": "05",
                "BranchID": "HO",
                "BoCode": "CA00000014",
                "UCC": "SSL0008",
                "BenAcNum": "",
                "PAN": "ARFPM9512K",
                "FirstName": "ANUSHA",
                "MidName": "",
                "LastName": "MOORTHY",
                "Mobile": "8095555590",
                "secMobile": ""
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
## updateIncomeRange
**Endpoint** : updateIncomeRange

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  
Update client’s income range in Trading, NSDL and CDSL
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
    "UCC":    |  "SUBCD"
              OR
    "BenAcNum",   "DPID",
    * "incomeRange":  "1" - UpTo 1 Lakhs,
                      "6" - 1 Lakhs To 5 Lakhs,
                      "7" - 5 Lakhs To 10 Lakhs,
                      "8" - 10 Lakhs To 25 Lakhs,
                      "9" - Above 25 Lakhs,
                      "10" - 25 Lakhs To 1 Crore,
                      "11" - Above 1 Crore
    "financialYearDescr"     (Like : 2022-2023)
    "Networth"               numeric(16, 2)
    "networthDt"             datetime (yyyy-mm-dd)
}
      ```
    </td>
    <td>
      ```
{
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "UCC": "27218",
    "incomeRange":"8",
    "financialYearDescr": "2022-2023",
    "networth": "2500000",
    "networthDt": "2023-03-31"
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
    "success"
    "message"
}
        ```
      </td>
      <td>
        ```
{
    "success": 1,
    "message": "Income Range updated Successfully"
}
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>

<pre language="html">
<table style={{"width":"100%"}}>
  <thead style={{"height":"25px","padding":"10px"}}>
  </thead>
  <tr>
  <td colspan="2">**RESTAPI for AP Interfaces**</td>
RestAPI calls for AP Level User interfaces.
These calls require a separate License from StanSoft
  </tr>
</table>
</pre>

___
