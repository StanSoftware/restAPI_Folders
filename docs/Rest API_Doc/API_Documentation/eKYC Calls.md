---
sidebar_position: 2
---



## ClientPANCheck ##
**Endpoint** : ClientPANCheck

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**  

*Checks whether the given Client PAN exists or not*

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
          "pan": "<<Pan Number>>"
      }
      ```
    </td>
      <td>
      ```
      {
        "key": "ezhDMEI5ND4MLE3YwNH0=",
        "pan": "PAN7121"
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
            "message": "PAN exists"
        }
        ```
      </td>
    </tr>
  </tbody>
</table>
</pre>






___
## ClientUCCCheck ##
**Endpoint** : ClientUCCCheck

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

*Checks whether the given Client UCC exists or not*
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
      <td colspan="2">**JSon Data:**</td>
      </tr>
      <tr>
      <td>
         ```
         {
          "key": "<<RestAPI Key>>",
          "ucc": "<<UCC>>"
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
      "message": "UCC exists"
      }

      ```
</td>
      
    </tr>
  </tbody>
</table>
</pre>



___

## NewClientRegistration
**Endpoint** : **NewClientRegistration**

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**

***Creates a new Client in Sharepro***

* **Request Data**

|API Parameter|Data Type|Explanation|
|:------:|:------:|:-------|
|*key|varchar(100)|REST API Key|
|cUcc|char(10)|UCC need to be unique for each client|
|*cClientName|varchar(75)|Client Name is compulsory|
|cFatherNm|varchar(38)| |
|cMotherNm|char(40)| |
|dBirth_Date|datetime|  |
|*cGender|char(1)|M : Male<br/> F : Female<br/>  N : None<br/>|
|*cMaritalStatus|varchar(2)|01 : Married<br/> 02 : Single<br/> 03 : Widow / Widower<br/>|
|dMarriageAniv|datetime|Marriage anniversary date|
|cNationality|char(2)|01 : Indian<br/> 02 : Others<br/>|
|cResIndStatus|varchar(1)|**Residential Status**<br/> R : Resident Individual<br/>N : Non Resident<br/>P : Foreign National<br/>|
|cOccupation|char(25)|Business<br/>Employed<br/>Professional<br/>Student<br/>Self Employed<br/>House Wife<br/>Others<br/>|
|cAnnualIncome|char(30)|**Annual income(This parameter also use as ***PMLA Annual income***)**<br/>Below Rs. 100000<br/>Rs. 100000 - 500000<br/>Rs. 500000 - 1000000<br/>Rs. 1000000 - 2500000<br/>Above Rs. 2500000<br/>|
|ClRiskProfile|char(30)|**RiskProfile**<br/>Low Risk<br/>High Risk<br/>Medium Risk<br/>|
|cBranchID|char(4)|SharePro Branchid. If not passed, the client is created in “HO”. Please refer to *<u>getBranchesList</u>* call to get a list of branches with the <br/>|
|*cPan_No|char(30)|PAN Number is compulsory<br/>PAN Number need to be unique for each client<br/>|
|cPassport|varchar(25)||
|dPPDate|datetime||
|dPPExpDate|datetime||
|cVoterId|varchar(25)||
|cRationId|varchar(25)||
|cDriveLicense|varchar(25)||
|dDLDate|datetime||
|dDLExpDate|datetime||
|cAadhaar|char(12)||
|cPhotoIdPrf|char(30)|PAN Card<br/>Voter ID<br/>Passport<br/>Driving License<br/>ADHAAR<br/>|
|cAddPrf|char(30)|Voter ID<br/>Passport<br/>Driving License<br/>Ration Card<br/>Telephone Bill<br/>Electricity Bill<br/>Credit-Card Bill<br/>Bank Pass Book<br/>ADHAAR|
|***Address***|
|cAdd1|varchar(50)||
|cAdd2|	varchar(50)||
|cAdd3|varchar(50)||
|cCity|varchar(25)|Please refer to this link get city list *https://docs.google.com/spreadsheets/d/1Mpou9hrcZUlQibfsM58J3Kw-JFkqAMuHZ4apR2OvTaE/edit?usp=sharing*|
|cPin|char(10)||
|*cStateCd|char(4)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **STATECD**|
|cCountry|varchar(35)|Like : *'India'*|
|cPhone|varchar(40)||
|cFax|char(20)|||
|***Residential Address***|
|cResAdd1|varchar(30)||
|cResAdd2|varchar(30)||
|cResAdd3|varchar(30)||
|cResCity|varchar(25)||
|cResPin|char(7)||
|cResStateCd|char(4)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **STATECD**|
|cResCountry|char(20)|Like :  *'India'*|
|cResPhone|char(20)||
|cResFax|char(20)||
|***Communication***|
|cEmail|char(80)||
|cMobile|char(40)||
|FmlyEmailFlag|bit|**Family Email Flag**<br/>0 : No<br/>1 : Yes<br/>|
|EmailStat|char(40)|(Self,Spouse,Dependent Children,Dependent Parent,Authorized,Contact Person)|
|FmlyMobileFlag|bit|**Family Mobile Flag**<br/>0 : No<br/>1 : Yes<br/>|
|MobileStat|char(40)|(Self,Spouse,Dependent Children,Dependent Parent,Authorized,Contact Person)|
|***KRA***|
|cKraApplDt|datetime|KRA Application date (yyyy-MM-dd)|
|cKraOccupation|varchar(2)|01 : Private Sector Service<br/>02 : Public Sector / Government Service<br/>03 : Business<br/>04 : Professional<br/>05 : Agriculturist<br/>06 : Retired<br/>07 : Housewife<br/>08 : Student<br/>09 : Forex Dealer<br/>99 : Others (please specify)<br/>|
|cKraOccupationDtlOth|varchar(50)|Others occupation details|
|cKraAnnualInc|varchar(2)|01 : Below Rs. 1  Lac<br/>02 : Btw Rs. 1 to Rs. 5 Lacs<br/>03 : Btw Rs. 5 to Rs. 10 Lacs<br/>04 : Btw Rs. 10 to Rs. 25 Lacs<br/>05 : Btw Rs. 25 Lacs to Rs. 1 CR<br/>06 : Greater than 1 CR<br/>|
|cKraAnnualIncDt|datetime||
|cKraPEP|varchar(4)|NA   : Not a PEP<br/>PEP : PEP<br/>RPE : Related to a PEP<br/>|
|cKraCorrAddPrf|varchar(2)|KRA correspondence address Proof Please refer to *<u>getKRAAddressProofList</u>* call to get a list of KRA address Proof|
|cKraCorrAddPrfId|varchar(100)|Correspondence address reference id|
|cKraCorrAddPrfDt|datetime||
|cKraPermAddPrf|varchar(2)|KRA permanent address proof Please refer to *<u>getKRAAddressProofList</u>* call to get a list of KRA address Proof|
|cKraPermAddPrfId|varchar(100)|Permanent  address reference id|
|cKraPermAddPrfDt|datetime||
|cKraPermCorrSame|varchar(1)|**Permanent address same as Corr. address?**<br/>Y : Yes<br/>N : No|
|cKraCorrAddState|varchar(20)|State of KRA Correspondence address Please refer to *<u>getKRAStateCodeList</u>* call to get a list of KRA States|
|cKraPermAddState|varchar(20)|State  of KRA Permanent address Please refer to *<u>getKRAStateCodeList</u>* call to get a list of KRA States|
|cKraCorrAddCntry|varchar(30)|Country of KRA Correspondence address Please refer to *<u>getKRACountryCodeList</u>* call to get a list of KRA Country|
|cKraPermAddCntry|varchar(30)|Country of KRA Permanent address Please refer to *<u>getKRACountryCodeList</u>* call to get a list of KRA Country|
|cKraIdProof|cKraIdProof|KRA Proof of Identity Submitted (Others) Please refer to *<u>getKRAPhotoIdProofList</u>* call to get a list of KRA Photo Id Proof|
|cKraStateCity|char(5)|KRA State City Please refer to *<u>getKRAStateCityList</u>* call to get a list of KRA State City|
|cKraIpvDt|datetime|IPV Date (yyyy-MM-dd)|
|cKraIpvDesig|varchar(50)|IPV Designation|
|cKraIpvName|varchar(50)|IPV Name|
|cKraIpvOrg|varchar(50)|IPV Organisation|
|cKraIdProofOth|varchar(50)|Proof of Identity Others|
|KRACompStatus| varchar(2)|01- Private Ltd Company<br/>02- Public Ltd Company<br/>03- Body Corporate<br/>04- Partnership<br/>05- Trust / Charities / NGOs<br/>06- FI<br/>07- FII<br/>08- HUF<br/>09- AOP<br/>10- Bank<br/>11- Government Body<br/>12- Non-Government Organisation<br/>13- Defense Establishment<br/>14- Body of Individuals<br/>15- Society<br/>16- LLP<br/>99- Others<br/>|
|**Introducer Details**|
|cIntroClId|char(10)||
|cIntroName|varchar(30)||
|cIntroCtgry|char(15)|01 : Individual<br/>02 : Partnership Firm<br/>03 : HUF<br/>04 : Public & Private Companies<br/>05 : Trust/Society<br/>06 : Mutual Fund<br/>07 : Domestic Financial Institution<br/>08 : Bank<br/>09 : Insurance<br/>10 : Statutory Bodies<br/>11 : NRI<br/>12 : FII<br/>13 : OCB<br/>14 : Foreign Ven Cap Funds/Direct Foreign Inv<br/>15 : PMS Clients<br/>16 : New Pension System (NPS),<br/>17 : Association (QFIG/A)<br/>18 : (QFI-I)<br/>19 : Non Govt.Organisation<br/>20 : Foreign Venture Capital Fund<br/>21 : Depository Receipts, LLP : LLP<br/>99 : Others<br/>|
|cIntroCatDscr|varchar(25)||
|cIntroAdd1|varchar(30)||
|cIntroAdd2|varchar(30)||
|cIntroAdd3|varchar(30)||
|cIntroCity|varchar(15)||
|cIntroPin|varchar(7)||
|cIntroCntry|varchar(35)||
|cIntroPhone|varchar(30)||
|cIntroFather|varchar(35)||
|cIntroRel|varchar(25)||
|cIntroIdPrf|char(30)|PAN Card<br/>Voter ID<br/>Passport<br/>Driving License<br/>|
|cIntroId|char(30)||
|cIntroIdExp|datetime||
|**Contact Person 1**|
|*cContactPerson|varchar(30)|Contact Person Name is compulsory|
|*cCpDesignation|varchar(25)|Contact Person Designation is compulsory|
|*cCpAddress|varchar(100)|Contact Person Address is compulsory|
|*cCpPhone|varchar(20)|Contact Person Phone No. is compulsory|
|cCpCity|varchar(50)||
|*cCpPin|varchar(10)|Contact Person PIN is compulsory|
|*cCpState|varchar(2)|Contact Person State is compulsory Please refer to <u>*getKRAStateCodeList*</u> call to get a list. Send **CODE**|
|*cCpCountry|varchar(3)|Contact Person Country is compulsory Please refer to <u>*getKRACountryCodeList*</u> call to get a list. Send **CODE**|
|**Primary Bank Details**|
|*cIfsc|varchar(40)|IFSC of Primary Bank Account is compulsory|
|cMicr|varchar(40)||
|cAcType|varchar(10)|Savings<br/>Current<br/>PIS A/c<br/>Others|
|*cAcNo|varchar(20)||
|*cBankClientName|varchar(40)||
|**Secondary Bank Details**|
|cSecIfsc|varchar(40)||
|cSecMicr|varchar(40)||
|cSecAcType|varchar(10)|Savings<br/>Current<br/>PIS A/c<br/>Others<br/>|
|cSecAcNo|varchar(20)||
|cSecBankClientName|varchar(40)||
|PayMode|char(1)|**Preferred mode of Payment**<br/>"1" : Any<br/>"2" : RTGS<br/>"3" : NEFT<br/> "4" : Cheque<br/>|
|cAutoFundPo|bit|0 : No<br/>1 : Yes<br/>|
|cClientType|char(2)|01 : Individual<br/>02 : Partnership Firm<br/>03 : HUF<br/>04 : Public & Private Companies<br/>05 : Trust/Society<br/>06 : Mutual Fund<br/>07 : Domestic Financial Institution<br/>08 : Bank<br/>09 : Insurance<br/>10 : Statutory Bodies<br/>11 : NRI<br/>12 : FII<br/>13 : OCB<br/>14 : Foreign Ven Cap Funds/Direct Foreign Inv<br/>15 : PMS Clients<br/>16 : New Pension System (NPS)<br/> 17 : Association (QFIG/A)<br/>18 : (QFI-I)<br/>19 : Non Govt.Organisation<br/>20 : Foreign Venture Capital Fund<br/>21 : Depository Receipts, LLP : LLP<br/>99 : Others<br/>|
|cDealMod|char(15)|T : Trading Member<br/>N : Custodian<br/>B : Both<br/>|
|cRegFrmRecvd|bit|0 : No<br/>1 : Yes<br/>|
|cIpvFlag|bit|0 : No,<br/>1 : Yes<br/>|
|**Segments to register in**|
|cREG_NSE|bit|NSE-CM   -    0 : No, 1 : Yes|
|cREG_NFO|bit|NSE-FO|
|cREG_BSE|bit|BSE-CM|
|cREG_BFO|bit|BSE-FO|
|cREG_CSE|bit|CSE|
|cREG_DSE|bit||
|cREG_NCDEX|bit|NCDEX|
|cREG_MCX|bit|MCX|
|cREG_MF|bit||
|cREG_NBFC|bit||
|cREG_DGCX|bit||
|cREG_NMCEIL|bit||
|cREG_CNFO|bit|NSE-CDS|
|cREG_CMFO|bit|MSEI-CDS|
|cREG_CBFO|bit|BSE-CDS|
|cREG_PMS|bit||
|cREG_ICFO|bit|ICEX|
|cREG_NMFS|bit|NSEE-MF|
|cREG_NSFO|bit||
|cREG_KCFO|bit||
|cREG_KCFO|bit||
|cREG_USFO|bit||
|cREG_CSENSE|bit||
|cREG_CSENFO|bit||
|cREG_MXEQ|bit||
|cREG_MXFO|bit||
|cREG_UCX|bit||
|cREG_NSEDS|bit||
|cREG_BMFS|bit||
|cREG_NSLB|bit|NSE-SLBM|
|cREG_NSPT|bit||
|cREG_NFOCOM|bit|NSE-CO|
|cREG_BFOCOM|bit|BSE-CO|
|IBTActive|datetime|yyyy-MM-dd|
|FATCAReceivedDate|datetime|yyyy-MM-dd|
|cHoldDlvry|bit|**Always Hold<br/>Traded purchase shares hold by broker?**<br/>0 : No<br/>1 : Yes<br/>|
|**DP Details**|||
|DP Account : *DPID may not be passed if a client wants a new DP Account opened in an eKYC system*|
|cDpId|char(10)||
|cBenAcNum|char(8)||
|Nominee Opt Out|||
|NomOptOutDt|datetime|yyyy-MM-dd|
|**Nominee Old** *(Obsolete in SharePro no need to pass now)*|
|cNomineeNm|char(40)|Nominee Name|
|cNomineeRel|char(40)|Nominee Relation|
|NomineeAdd1|char(40)||
|NomineeAdd2|char(40)||
|NomineeAdhar|char(12)||
|NomineeCity|char(20)||
|NomineeEmail|char(40)||
|NomineePan|char(10)||
|NomineePhone|char(20)||
|NomineePin|char(20)||
|**Nominee 1**|
|Nominee1_EffectDate|datetime|yyyy-MM-dd  (Default it is Current Date)|
|Nominee1_Prefix|varchar(5)|MR, MRS, etc|
|Nominee1_Descr|varchar(50)|Nominee Name   * ***mandatory for nominee1***|
|Nominee1_Percent|numeric(5,2)|Nominee percentage ( Like : “50.00”)|
|Nominee1_Relation|varchar(50)|Nominee Relation (Like :”Son”)|
|Nominee1_Add1|varchar(50)|* ***mandatory for nominee1***|
|Nominee1_Add2|varchar(50)||
|Nominee1_Add3|varchar(50)||
|Nominee1_City|varchar(50)||
|Nominee1_Pincode|varchar(50)||
|Nominee1_State|varchar(50)|(Like: West Bengal : WB) Please refer to <u>*getStateCodeList*</u> call to get a list of States with the broker. * **mandatory for nominee1**|
|Nominee1_Country|varchar(50)|(Like : "IN" OR “India”)  * **mandatory for nominee1**|
|Nominee1_Mobile|varchar(20)||
|Nominee1_Phone|varchar(20)||
|Nominee1_Email|varchar(50)||
|Nominee1_IdType|varchar(50)|**ID PROOF**<br/>  "D" : Driving License<br/>"F" : NREGA Job Card<br/> "Z" : Others<br/> "C" : PAN<br/>  "A" : Passport<br/> "S02" : Simple/SimplifiedID issued by a Gazetted Officer<br/> "S01" : SSId Issued by CG/SG/SB/RA/PSU/SCB/PFI<br/> "E" : UID / AADHAR<br/>  "B" : Voter Identity Card<br/>|
|Nominee1_IdNumber|varchar(30)|ID PROOF Number  ( Like : for AADHAR its **UID**)|
|Nominee1_IsMinor|bit|"1": yes, "0": No  *( default 0)*|
|Nominee1_MinorDOB|datetime|yyyy-MM-dd|
|Nominee1_GdDescr|varchar(50)|Nominee’s Guardian Name|
|Nominee1_GdRelation|varchar(50)|Guardian Relation with Nominee ( like : “Mother”)|
|Nominee1_GdAdd1|varchar(50)||
|Nominee1_GdAdd2|varchar(50)||
|Nominee1_GdAdd3|varchar(50)||
|Nominee1_GdCity|varchar(50)||
|Nominee1_GdPincode|varchar(50)||
|Nominee1_GdState|varchar(50)||
|Nominee1_GdCountry|varchar(50)||
|Nominee1_GdMobile|varchar(20)||
|Nominee1_GdPhone|varchar(20)||
|Nominee1_GdEmail|varchar(50)||
|Nominee1_GdIdType|varchar(50)|ID PROOF ( same as IdType)|
|Nominee1_GdIdNumber|varchar(30)|ID PROOF Number (Like : for AADHAR its **UID**)|
|**Nominee 2**|
|Nominee2_EffectDate|datetime|yyyy-MM-dd  (Default it is Current Date)|
|Nominee2_Prefix|varchar(5)|MR, MRS, etc|
|Nominee2_Descr|varchar(50)|Nominee Name   * **mandatory for nominee2**|
|Nominee2_Percent|numeric(5,2)|Nominee percentage ( Like : “50.00”)|
|Nominee2_Relation|varchar(50)|Nominee Relation (Like :”Son”)|
|Nominee2_Add1|varchar(50)|* **mandatory for nominee2**|
|Nominee2_Add2|varchar(50)||
|Nominee2_Add3|varchar(50)||
|Nominee2_City|varchar(50)||
|Nominee2_Pincode|varchar(50)||
|Nominee2_State|varchar(50)|(Like: West Bengal : WB) Please refer to <u>*getStateCodeList*</u> call to get a list of States with the broker. * **mandatory for nominee2**|
|Nominee2_Country|varchar(50)|(Like : "IN" OR “India”)  * **mandatory for nominee2**|
|Nominee2_Mobile|varchar(20)||
|Nominee2_Phone|varchar(20)||
|Nominee2_Email|varchar(50)||
|Nominee2_IdType|varchar(50)|**ID PROOF**<br/>  "D" : Driving License<br/>"F" : NREGA Job Card<br/> "Z" : Others<br/> "C" : PAN<br/>  "A" : Passport<br/> "S02" : Simple/SimplifiedID issued by a Gazetted Officer<br/> "S01" : SSId Issued by CG/SG/SB/RA/PSU/SCB/PFI<br/> "E" : UID / AADHAR<br/>  "B" : Voter Identity Card<br/>|
|Nominee2_IdNumber|varchar(30)|ID PROOF Number  ( Like : for AADHAR its **UID**)|
|Nominee2_IsMinor|bit|"1": yes, "0": No  *( default 0)*|
|Nominee2_MinorDOB|datetime|yyyy-MM-dd|
|Nominee2_GdPrefix|varchar(5)|MR, MRS, etc|
|Nominee2_GdDescr|varchar(50)|Nominee’s Guardian Name|
|Nominee2_GdRelation|varchar(50)|Guardian Relation with Nominee ( like : “Mother”)|
|Nominee2_GdAdd1|varchar(50)||
|Nominee2_GdAdd2|varchar(50)||
|Nominee2_GdAdd3|varchar(50)||
|Nominee2_GdCity|varchar(50)||
|Nominee2_GdPincode|varchar(50)||
|Nominee2_GdState|varchar(50)||
|Nominee2_GdCountry|varchar(50)||
|Nominee2_GdMobile|varchar(20)||
|Nominee2_GdPhone|varchar(20)||
|Nominee2_GdEmail|varchar(50)||
|Nominee2_GdIdType|varchar(50)|ID PROOF ( same as IdType)|
|Nominee2_GdIdNumber|varchar(30)|ID PROOF Number (Like : for AADHAR its **UID**)|
|**Nominee 3**|
|Nominee3_EffectDate|datetime|yyyy-MM-dd  (Default it is Current Date)|
|Nominee3_Prefix|varchar(5)|MR, MRS, etc|
|Nominee3_Descr|varchar(50)|Nominee Name   * **mandatory for nominee3**|
|Nominee3_Percent|numeric(5,2)|Nominee percentage ( Like : “50.00”)|
|Nominee3_Relation|varchar(50)|Nominee Relation (Like :”Son”)|
|Nominee3_Add1|varchar(50)|* **mandatory for nominee3**|
|Nominee3_Add2|varchar(50)||
|Nominee3_Add3|varchar(50)||
|Nominee3_City|varchar(50)||
|Nominee3_Pincode|varchar(50)||
|Nominee3_State|varchar(50)|(Like: West Bengal : WB) Please refer to <u>*getStateCodeList*</u> call to get a list of States with the broker. * **mandatory for nominee3**|
|Nominee3_Country|varchar(50)|(Like : "IN" OR “India”)  * **mandatory for nominee3**|
|Nominee3_Mobile|varchar(20)||
|Nominee3_Phone|varchar(20)||
|Nominee3_Email|varchar(50)||
|Nominee3_IdType|varchar(50)|**ID PROOF**<br/>  "D" : Driving License<br/>"F" : NREGA Job Card<br/> "Z" : Others<br/> "C" : PAN<br/>  "A" : Passport<br/> "S02" : Simple/SimplifiedID issued by a Gazetted Officer<br/> "S01" : SSId Issued by CG/SG/SB/RA/PSU/SCB/PFI<br/> "E" : UID / AADHAR<br/>  "B" : Voter Identity Card<br/>|
|Nominee3_IdNumber|varchar(30)|ID PROOF Number  ( Like : for AADHAR its **UID**)
|Nominee3_IsMinor|bit|"1": yes, "0": No  *( default 0)*|
|Nominee3_MinorDOB|datetime|yyyy-MM-dd|
|Nominee3_GdPrefix|varchar(5)|MR, MRS, etc|
|Nominee3_GdDescr|Nominee3_GdDescr|Nominee’s Guardian Name|
|Nominee’s Guardian Name|varchar(50)|Guardian Relation with Nominee ( like : “Mother”)|
|Nominee3_GdAdd1|varchar(50)||
|Nominee3_GdAdd2|varchar(50)||
|Nominee3_GdAdd3|varchar(50)||
|Nominee3_GdCity|varchar(50)||
|Nominee3_GdPincode|varchar(50)||
|Nominee3_GdState|varchar(50)||
|Nominee3_GdCountry|varchar(50)||
|Nominee3_GdMobile|varchar(20)||
|Nominee3_GdPhone|varchar(20)||
|Nominee3_GdEmail|varchar(50)||
|Nominee3_GdIdType|varchar(50)|ID PROOF ( same as IdType)|
|Nominee3_GdIdNumber|varchar(30)|ID PROOF Number (Like : for AADHAR its **UID**)|
|**Guardian**|
|cGuardianNm|char(35)|Guardian Name|
|cGuardianPan|char(10)||
|**Brokerage**|
|*Note : Passing this basket will add the Basket to the Client's Brokerage. Please ensure that you pass a valid Basket code as the system will not check whether the basket actually exists or not*|
|cBrkgBasketNSE|char(10)|Brokerage NSE Basket Code|
|cBrkgBasketBSE|char(10)|Brokerage BSE Basket Code|
|cBrkgBasketFO|char(10)|Brokerage FO Basket Code|
|cBrkgBasketCDS|char(10)|Brokerage CDS Basket Code|
|cBrkgBasketCOMM|char(10)|Brokerage COMM Basket Code|
|cBrkgBasketBSEFO|char(10)|Brokerage BSE FO Basket Code|
|cBrkgBasketBSECDS|char(10)|Brokerage BSE CDS Basket Code|
|cBrkgBasketNFOCOM|char(10)|Brokerage NSE Commodity Basket Code|
|cBrkgBasketBFOCOM|char(10)|Brokerage BSE Commodity Basket Code|
|cBrkgBasketMXEQ|char(10)|Brokerage MSEI - Equity Basket Code|
|cBrkgBasketMXFO|char(10)|Brokerage MSEI - Derivative Basket Code|
|dBrkgEffectDate|datetime|Brokerage Effect Date|
|nDelCMBrkg|numeric(9,6)|NSE-CM Delivery Brokerage %|
|nDelCMBrkgMin|numeric(8,4)|NSE-CM Delivery Brokerage Min|
|nSqCMBrkg|numeric(9,6)|NSE-CM Square Off Brokerage %|
|nSqCMBrkgMin|numeric(8,4)|NSE-CM Square Off Min|
|nFutBrkg|numeric(9,6)|Future  Brokerage %|
|nFutBrkgMin|numeric(8,4)|Future  Brokerage Min|
|nOptBrkg|numeric(7,4)|Option Brokerage %|
|**Running Accounts**|
|cRunAcSegment|varchar(10)|Securities, Commodity, Both|
||***Note:*** *If Segment is only Commodity and Commodity parameters does not have values then set Securities values auto set to Commodity parameters*||
|*<u>Securities</u>*|
|dRunAcRcvdDt|datetime|Received on (yyyy-MM-dd)|
|dRunAcRcvdDt|datetime|Received on (yyyy-MM-dd)|
|dRunAcRvkdDt|datetime|Revoked on (yyyy-MM-dd)|
|nSettleType|numeric(1,0)|0 : Not Set<br/>1 : Monthly<br/>2 : Quarterly,<br/>3 : Half Yearly<br/>|
|Retainable|numeric(6,0)|Securities Retainable (Like 10000)|
|*<u>Commodity</u>*|
|dRunAcRcvdDtCom|datetime|Received on (yyyy-MM-dd)|
|dRunAcRvkdDtCom|datetime|Revoked on (yyyy-MM-dd)|
|nSettleTypeCom|numeric(1,0)|0 : Not Set<br/>1 : Monthly<br/>2 : Quarterly<br/>3 : Half Yearly<br/>|
|RetainableCom|numeric(6,0)|Commodity Retainable (Like 10000)|
|**Operations  **|
|cGroupCd|char(4)||
|dAPEffectDate|datetime||
|cAPCd|char(10)||
|dRMEffectDate|datetime||
|cRMCd|char(10)||
|dDealerEffectDate|datetime||
|cDealerCd|char(10)||
|dSREffectDate|datetime||
|cSRCd|char(10)||
|eContract|bit|**Clients take e-contract ?**<br/>0 : No<br/>1 : Yes<br/>|
|DoNotPrint|bit|**Do not print physical contract?**<br/>0 : No<br/>1 : Yes<br/>|
|Web_login|bit|**Client can login from web?**<br/>0 : No<br/>1 : Yes<br/>|
|Web_Pwd|char(10)|Web Login Password. If the **Web_login** parameter is passed as 1 but the **Web_Pwd** parameter is **blank**, the web password will be set as the PAN number|
|**NETWORTH-- PMLA**|
|cACC_DateDESCR|char(9)|Financial year (Like 2021-2022)|
|nGROSSINCOME|numeric(16, 2)|Gross Income|
|nNETWORTH|numeric(16, 2)|Net Worth|
|dtNETWORTHDT|datetime|Net Worth date  (yyyy-MM-dd)|
|BusiCommenceDt|datetime|Business commencement date (yyyy-MM-dd)|
|cClientWithOthTM|char(1)|**Client account with another TM ?**<br/>Y : Yes<br/>N : No<br/>|
|NMFS_occupation|char(2)|1 : Business<br/>2 : Service<br/>3 : Professional<br/>4 : Agriculture<br/>5 : Retired<br/>6 : Housewife<br/>7 : Student<br/>8 : Others<br/>|
|NMFS_state|char(2)|Please refer to *<u>getKRAStateCodeList</u>* call to get a list of NMFS States, pass **"cSystem": "NMF"**|
|**Funding Rate of Interest**|
|***<u>Normal Interest Segment Type</u>***
|InterestEffectDate|datetime|Normal Interest EffectDate (yyyy-MM-dd)|
|FlatInterest|numeric(6,2)|Normal Flat Interest (Interest %) like : 18.00|
|InterestSlabCd|char(2)|Normal Interest SlabCd|
|DntCalcInterest|bit|**Normal Do not calculate Interest of Client?**<br/>0 : No<br/>1 : Yes<br/>|
|InterestRegPending|bit|Normal Interest Reg Pending|
|InterestRoundOff|int|**Normal Interest Rounding Off**<br/>1 : Nearest 5 Paisa<br/>2 : Higher 5 Paisa<br/>3 : Nearest Paisa<br/>4 : Higher Paisa<br/>5 : Higher 2 Paisa<br/>6 : Nearest Rupee<br/>7 : Higher Rupee<br/>|
|InterestGracePeriod|char(8)|**Normal Grace Days - Grace Period**<br/>Default<br/>0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>|
|InterestSpecShareCr|bit|**Normal SpecShareCr**<br/>0 : No<br/>1 : Yes<br/>|
|InterestShareCrPer|numeric(6,2)|Normal ShareCrPer|
|InterestExclSpanMarkup|bit|Normal Exclude Span Margin|
|InterestExclM2MValue|bit|Normal Exclude Exposure Margin [M2M]|
|***<u>MTF Interest Segment Type</u>***
|MTFInterestEffectDate|datetime|MTF Interest EffectDate (yyyy-MM-dd)|
|MTFFlatInterest|numeric(6,2)|MTF Flat Interest (Interest %) like : 18.00|
|MTFInterestSlabCd|char(2)|MTF Interest SlabCd|
|MTFDntCalcInterest|bit|**MTF Do not calculate Interest of Client ?**<br/>0 : No<br/>1 : Yes<br/>|
|MTFInterestRegPending|bit|MTF Interest Reg Pending|
|MTFInterestRoundOff|int|**MTF Interest Rounding Off**<br/>1 : Nearest 5 Paisa<br/>2 : Higher 5 Paisa<br/>3 : Nearest Paisa<br/>4 : Higher Paisa<br/>5 : Higher 2 Paisa<br/>6 : Nearest Rupee<br/>7 : Higher Rupee<br/>|
|MTFInterestGracePeriod|char(8)|**MTF Grace Days - Grace Period**<br/>Default<br/>0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>|
|MTFInterestSpecShareCr|bit|MTF SpecShareCr|
|MTFInterestShareCrPer|numeric(6,2)|MTF ShareCrPer|
|MTFInterestExclSpanMarkup|bit|MTF Exclude Span Margin|
|MTFInterestExclM2MValue|bit|MTF Exclude Exposure Margin [M2M]|
|***<u>NBFC Interest Segment Type</u>***|
|NBFCInterestEffectDate|datetime|NBFC Interest EffectDate (yyyy-MM-dd)|
|NBFCFlatInterest|numeric(6,2)|NBFC Flat Interest (Interest %) like : 18.00|
|NBFCInterestSlabCd|char(2)|NBFC Interest SlabCd|
|NBFCDntCalcInterest|bit|**NBFC Do not calculate Interest of Client**<br/>0 : No<br/>1 : Yes<br/>|
|NBFCInterestRegPending|bit|NBFC Interest Reg Pending|
|NBFCInterestRoundOff|int|**NBFC Interest Rounding Off **<br/>1 : Nearest 5 Paisa<br/>2 : Higher 5 Paisa<br/>3 : Nearest Paisa<br/>4 : Higher Paisa<br/>5 : Higher 2 Paisa<br/>6 : Nearest Rupee<br/>7 : Higher Rupee<br/>|
|NBFCInterestGracePeriod|char(8)|**NBFC Grace Days - Grace Period**<br/>Default<br/>0<br/>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>|
|NBFCInterestSpecShareCr|bit|NBFC SpecShareCr|
|NBFCInterestShareCrPer|numeric(6,2)|NBFC ShareCrPer|
|NBFCInterestExclSpanMarkup|bit|NBFC Exclude Span Margin|
|NBFCInterestExclM2MValue|bit|NBFC Exclude Exposure Margin [M2M]|
|**ADD USER**|
|ADD USER|varchar(15)|Record inserted by (like a 3rd party vendor name : **KYCDone**)<br/>**"AddUser": "KYCDone"**|
____

```jsx title="Request Sample (JSon Data)"


{
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "cUcc": "Z999",
    "cClientName": "Dummy Name",
    "cFatherNm": "Dummy Father",
    "cMotherNm": "Dummy Mother",
    "dBirth_Date": "1990-06-02",
    "cGender": "M",
    "cMaritalStatus": "02",
    "dMarriageAniv": "",
    "cNationality": "01",
    "cResIndStatus": "R",
    "cOccupation": "",
    "cAnnualIncome": "Below Rs. 100000",
    "cBranchID": "HO",
    "cPan_No": "PAN_EXEMPT",
    "cPassport": "",
    "dPPDate": "",
    "dPPExpDate": "",
    "cVoterId": "",
    "cRationId": "",
    "cDriveLicense": "",
    "dDLDate": "",
    "dDLExpDate": "",
    "cAadhaar": "111122223333",
    "cPhotoIdPrf": "",    "cAddPrf": "",
    "cAdd1": "Dummy Address 1",
    "cAdd2": "Dummy Address 2",
    "cAdd3": "Dummy Address 3",
    "cCity": "Kolkata",
    "cPin": "700019",
    "cStateCd": "WB",
    "cCountry": "India",
    "cPhone": "9999-9999",
    "cFax": "5555-5555",
    "cResAdd1": "Dummy Res Address 1",
    "cResAdd2": "Dummy Res Address 2",
    "cResAdd3": "Dummy Res Address 3",
    "cResCity": "Pune",
    "cResPin": "700059",
    "cResStateCd": "MAHA",
    "cResCountry": "India",
    "cResPhone": "",
    "cResFax": "",
    "cEmail": "dummy@gamil.com",
    "cMobile": "+919999999999",
    "cKraOccupation": "01",
    "cKraAnnualInc": "01",
    "cKraPEP": "NA",
    "cKraCorrAddPrf": "01",
    "cKraPermAddPrf": "01",
    "cKraPermCorrSame": "N",
    "cKraCorrAddState": "01",
    "cKraPermAddState": "01",
    "cKraCorrAddCntry": "01",
    "cKraPermAddCntry": "01",
    "cKraIdProof": "01",
    "cKraStateCity": "17102",
    "cIntroClId": "Z015",
    "cIntroName": "Dummy Introducer",
    "cIntroCtgry": "04",
    "cIntroCatDscr": "",
    "cIntroAdd1": "Dummy Intro Add 1",
    "cIntroAdd2": "Dummy Intro Add 2",
    "cIntroAdd3": "Dummy Intro Add 3",
    "cIntroCity": "Mumbai",
    "cIntroPin": "800001",
    "cIntroCntry": "India",
    "cIntroPhone": "8888-8888",
    "cIntroFather": "Dummy Intro Father",
    "cIntroRel": "Friend",
    "cIntroIdPrf": "",
    "cIntroId": "",
    "cIntroIdExp": "",
    "cContactPerson": "Dummy CP",
    "cCpDesignation": "Manager",
    "cCpAddress": "Dummy CP Add",
    "cCpPhone": "6767-4545",
    "cCpCity": "Kolkata",
    "cCpPin": "700025",
    "cCpState": "01",
    "cCpCountry": "01",
    "cIfsc": "UTIB0000034",
    "cMicr": "700211009",
    "cAcType": "Savings",
    "cAcNo": "123456789",
    "cSecIfsc": "ALLA0211713",
    "cSecMicr": "700010086",
    "cSecAcType": "Savings",
    "cSecAcNo": "987654321",
    "cAutoFundPo": "1",
    "cClientType": "01",
    "cDealMode": "T",
    "cRegFrmRecvd": "1",
    "cIpvFlag": "1",
    "cREG_NSE": "0",
    "cREG_NFO": "0",
    "cREG_BSE": "0",
    "cREG_BFO": "0",
    "cREG_CSE": "0",
    "cREG_DSE": "0",
    "cREG_NCDEX": "0",
    "cREG_MCX": "0",
    "cREG_MF": "0",
    "cREG_NBFC": "0",
    "cREG_DGCX": "0",
    "cREG_NMCEIL": "0",
    "cREG_CNFO": "0",
    "cREG_CMFO": "0",
    "cREG_CBFO": "0",
    "cREG_PMS": "0",
    "cREG_ICFO": "0",
    "cREG_NMFS": "0",
    "cREG_NSFO": "0",
    "cREG_KCFO": "0",
    "cREG_USFO": "0",
    "cREG_BMFS": "0",
    "cHoldDlvry": "1",
    "cDpId": "",
    "cBenAcNum": "",
    "cGuardianNm": "",
    "cGuardianPan": "",
    "Nominee1_EffectDate": "2022-02-22",
    "Nominee1_Prefix": "MRS",
    "Nominee1_Descr": "KAVITA HP SEN",
    "Nominee1_Percent": 100.00,
    "Nominee1_Relation": "Wife",
    "Nominee1_Add1": "15/12, Dr SEN Road",
    "Nominee1_Add2": "GolPark",
    "Nominee1_Add3": "Jadavpur",
    "Nominee1_City": "Kolkata",
    "Nominee1_Pincode": "700019",
    "Nominee1_State": "WB",
    "Nominee1_Country": "IN",
    "Nominee1_Mobile": "9038931047",
    "Nominee1_Phone": "1234567",
    "Nominee1_Email": "kavita@abc.com",
    "Nominee1_IdType": "E",
    "Nominee1_IdNumber": "529874145551",
    "Nominee1_IsMinor": "0",
    "Nominee2_EffectDate": "2022-02-22",
    "Nominee2_Prefix": "",
    "Nominee2_Descr": "Rahul Sen",
    "Nominee2_Percent": 50.00,
    "Nominee2_Relation": "Son",
    "Nominee2_Add1": "15/12, Dr SEN Road",
    "Nominee2_Add2": "GolPark",
    "Nominee2_Add3": "Jadavpur",
    "Nominee2_City": "Kolkata",
    "Nominee2_Pincode": "700019",
    "Nominee2_State": "WB",
    "Nominee2_Country": "IN",
    "Nominee2_Mobile": "9038931048",
    "Nominee2_Phone": "1234567",
    "Nominee2_Email": "rahulkav@abc.com",
    "Nominee2_IdType": "E",
    "Nominee2_IdNumber": "529874145667",
    "Nominee2_IsMinor": "1",
    "Nominee2_MinorDOB": "2012-02-25",
    "Nominee2_GdPrefix": "MRS",
    "Nominee2_GdDescr": "KAVITA HP SEN",
    "Nominee2_GdRelation": "Mother",
    "Nominee2_GdAdd1": "15/12, Dr SEN Road",
    "Nominee2_GdAdd2": "GolPark",
    "Nominee2_GdAdd3": "Jadavpur",
    "Nominee2_GdCity": "Kolkata",
    "Nominee2_GdPincode": "700019",
    "Nominee2_GdState": "WB",
    "Nominee2_GdCountry": "IN",
    "Nominee2_GdMobile": "9855558252",
    "Nominee2_GdPhone": "75544",
    "Nominee2_GdEmail": "kavita@abc.com",
    "Nominee2_GdIdType": "E",
    "Nominee2_GdIdNumber": "529874145551",
    "dBrkgEffectDate": "",
    "nDelCMBrkg": "0.3",
    "nDelCMBrkgMin": "0.3",
    "nSqCMBrkg": "0.03",
    "nSqCMBrkgMin": "0.03",
    "nFutBrkg": "0.03",
    "nFutBrkgMin": "0.03",
    "nOptBrkg": "50",
    "dRunAcRcvdDt": "",
    "cRunAcSegment": "Securities",
    "nSettleType": "2",
    "cGroupCd": "A003",
    "dAPEffectDate": "",
    "cAPCd": "AP001",
    "dRMEffectDate": "",
    "cRMCd": "000034",
    "dDealerEffectDate": "",
    "cDealerCd": "4A001",
    "dSREffectDate": "",
    "cClientWithOthTM": "Y",
    "cSRCd": "000500"
}
``` 

    *  **Return JSon Response**
    
  <pre language="html">
<table>
  <thead>
    <tr>
      <th>Return JSon Response:</th>
      <th>Sample</th>
    </tr>
  </thead>
  <tbody>
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
  "message": "Record imported Successfully in SharePro"
}
```
      </td>
    </tr>
  </tbody>
</table>
</pre>

___

    ## rest NewCDSLClientRegistration 
 
    **Method : POST or GET**| Send raw **Json** data in **Body**

    * *Creates a new CDSL Client in the Depository Segment*

    |Request Data|||
    |:---|:---|:---|
    |**API Parameter**|**Data Type**|**Explanation**|
    |*key|varchar(100)|REST API Key|
    |CompanyId|char(2)|SharePro Company Code of CDSL. A broker may have multiple CDSL Depository Licenses. If value is not passed, the call picks up the first available CDSL segment in SharePro.|
    |BranchID|char(4)|SharePro Branchid. If not passed, the client is created in “HO”. Please refer to <u>*getBranchesList*</u> call to get a list of branches with the broker.|
    |***First Holder information***|
    |FhTitle|varchar(10)|First Holder Title (Like MR, MRS)|
    |* FhFirstName|varchar(100)|First Holder First Name is compulsory|
    |FhMiddleName|varchar(20)|First Holder Middle Name|
    |*FhLastName|varchar(20)|First Holder Last Name is compulsory|
    |FhSuffix|varchar(10)|First Holder Suffix (Like DR)|
    |FhFather|varchar(50)|First Holder Father Name|
    |FhMother|varchar(100)|First Holder Mother Name|
    |UCC|char(10)|First Holder trading UCC|
    |FhDOB|datetime|First Holder Date of Birth|
    |FhGender|char(1)|*First Holder Gender*<br/>"M" - Male<br/>"F" - Female<br/>"X" - None<br/>
    | *FhAddr1|varchar(55)|First Holder Address is compulsory|
    |FhAddr2|varchar(55)|First Holder Address 2|
    |FhAddr3|varchar(55)|First Holder Address 3|
    |FhCity|varchar(25)|First Holder City is compulsory. If you not pass then we will search it using **Pincode**|
    |*FhStateCode|char(4)|GST State Code is compulsory Please refer to <u>*getStateCodeList*</u> call to get a list of States with the broker. Send **GSTSTATECD**|
    |FhState|varchar(25)|First Holder NRI State Name|
    |*FhCountry|varchar(25)|First Holder Country is compulsory (Like India)|
    |*FhPin|varchar(10)|First Holder Pincode is compulsory|
    |CitySeqNo|char(2)|City Sequence Number  -- 01, 02 *(Obsolete in SharePro no need to pass now)*|
    |FhNationCode|char(3)|**First Holder Nationality**<br/>"01" - Indian<br/>"99" - Others<br/>"02" - United States of America<br/>"03" - United Kingdom<br/>"04" - Middle East Nations<br/>"05" - Japan<br/>"06" - France<br/>"07" - Germany<br/>"08" - Singapore<br/>"09" - Canada<br/>|
    |FhPhoneInd1|char(1)|**Phone Indicator**<br/>*(Obsolete in SharePro no need to pass now)*<br/>"N" - None<br/>"M" - Mobile<br/>"O" - Office<br/>"P" - Pager<br/>"R" - Residence<br/>|
    |FhPhone1|varchar(17)|First Holder Primary Mobile No.|
    |FhPhoneInd2|char(1)|**Phone Indicator**<br/>*(Obsolete in SharePro no need to pass now)*<br/>"N" - None<br/>"M" - Mobile<br/>"O" - Office<br/>"P" - Pager<br/>"R" - Residence<br/>|
    |FhPhone2|varchar(17)|First Holder Secondary Mobile No|
    |FhAdtnlPhone|varchar(100)|First Holder Additional Secondary Phone No<br/> *(Obsolete in SharePro no need to pass now)*|
    |FhFax|varchar(17)|First Holder Fax|
    |FhEmail|varchar(50)|First Holder Primary Email|
    |*FhPan|varchar(25)|First Holder Income Tax PAN No. is compulsory|
    |FhPanExempt|varchar(1)|First Holder Pan Exempt<br/>*(Obsolete in SharePro no need to pass now)*|
    |FhPanVerify|numeric(1, 0)|**1st Holder PAN Verify (Verification Code)**<br/>"0" - Pan Not Verified<br/>"1" - PAN verified<br/>"2" - PAN Verification reversed<br/>"3" - PAN Verified & Aadhar linked<br/>"4" - PAN Exempted<br/>"5" - PAN Verified and Aadhar link to be checked<br/>"6" - PAN Verified and Aadhaar linked confirmed by DP<br/>"7" - Aadhaar Exempted Cases<br/>|
    |FhITCircle|varchar(15)|IT Circle / Ward / District|
    |FhDepAllowYesNo|char(1)|**First Holder Dependent ***Allow*****<br/>“N” - No<br/>“Y” - Yes<br/>|
    |FhDepDeclYesNo|char(1)|**First Holder Dependent ***Declaration*****<br/>“N” - No<br/>“Y” - Yes<br/>|
    |FhDepRelation|char(2)|**First Holder Dependent ***Relation*****<br/>"" - None<br/>"SA" - Same a/c Holder<br/>"DF" - Dependent Father<br/>"DF" - Dependent Father<br/>"SP" - Spouse<br/>"SO" - Son<br/>"UD" - Unmarried Daughter<br/>|
    |*FhPerAddr1|varchar(55)|1st Holder Permanent Address is compulsory|
    |FhPerAddr2|varchar(55)|1st Holder Permanent Address 2|
    |FhPerAddr3|varchar(55)|1st Holder Permanent Address 3|
    |*FhPerCity|varchar(25)|1st Holder Permanent City  is compulsory. If you not pass then we will search it using **Pincode**|
    |*FhPerStateCode|char(4)|1st Holder Permanent GST State Code is compulsory Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **GSTSTATECD**|
    |FhPerState|varchar(25)|1st Holder NRI Permanent State Name|
    |*FhPerCountry|varchar(25)|1st Holder Permanent Country is compulsory (Like : India )|
    |*FhPerPin|varchar(10)|1st Holder Permanent PIN Code is compulsory|
    |FhPerPhoneInd1|char(1)|1st Holder Permanent Phone Indicator<br/>*(Obsolete in SharePro no need to pass now)*|"N" - None<br/>"M" - Mobile<br/>"O" - Office<br/>"P" - Pager<br/>"R" - Residence<br/>|
    |FhPerPhone1|varchar(17)|1st Holder Permanent Primary Phone<br/>*(Obsolete in SharePro no need to pass now)*|
    |FhPerPhoneInd2|char(1)|1st Holder Permanent Secondary Phone Indicator<br/>*(Obsolete in SharePro no need to pass now)*<br/>"N" - None<br/>"M" - Mobile<br/>"O" - Office<br/>"P" - Pager<br/>"R" - Residence<br/>|
    |FhPerPhone2|varchar(17)|1st Holder Permanent Secondary Phone<br/>*(Obsolete in SharePro no need to pass now)*|
    |FhPerEmail|varchar(50)|1st Holder Permanent Email<br/>*(Obsolete in SharePro no need to pass now)*|
    |FhAadhaar|char(15)|1st Holder Aadhaar|
    |FhUidFlag|char(1)|1st Holder Aadhaar Flag (If send Y then **FhAadhaar** is mandatory)<br/>“N” - UID not verified<br/>“Y” - UID verified by DP<br/>   **OR**  <br/>You can send direct code (If send 2 then **FhAadhaar** is mandatory)<br/>“0” -  UID not verified<br/>“2” -  UID verified by DP|
    |FhInstraId|char(8)|Instra Id Length should be **8 digits**|
    |AcopenSource|char(1)|**Account Opening Flag:**<br/>“1” : Online Account opening by the BO<br/>“2” : Account Opening based on submission of Physical documents<br/>|
    |FhProductNo|varchar(2)|1st Holder Product Description - Product No. Value must be between "01" and "57" Please refer to *<u>view CDSL Product Description Codes</u>|
    |FhSubStatus|varchar(4)|1st Holder Product Sub Status Code Please refer to *<u>view CDSL Product Sub Status Codes</u>*|
    |FhCategory|varchar(2)|BO Product Category value must be between "01" and "15" Please refer to *<u>view CDSL Category Codes</u>*|
    |FhDPIntRefNo|varchar(10)|1st Holder DP Internal Ref No|
    |*FhOccupation|char(4)|**1st Holder Occupation is compulsory**<br/>"B" - Business<br/>"H" - Housewife<br/>"P" - Professional<br/>"O" - Others<br/>"R" - Retired<br/>"ST" - Student<br/>"F" - Farmer<br/>"PV" - Private Sector<br/>"PS" - Public Sector<br/>"GS" - Government Sector<br/>"S" - Service<br/>|
    |FhConfWaivedYesNo|char(1)|**Confirmation Waived**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhStmntCycle|char(2)|**BO Statement Cycle value must be in**<br/>"EM" - End of Month<br/>"2M" - Twice Monthly 15 & End of Month<br/>"DA" - Daily<br/>"EW" - End of Week<br/>|
    |FhECSYesNo|char(1)|**ECS/Mandate**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhSettPlanYesNo|char(1)|**Settlement Planning flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhIncomeCode|varchar(4)|**Annual Income Code**<br/>"1" - UpTo 1 Lakhs<br/>"6" - 1 Lakhs To 5 Lakhs<br/>"7" - 5 Lakhs To 10 Lakhs<br/>"8" - 10 Lakhs To 25 Lakhs<br/>"9" - Above 25 Lakhs<br/>"10" - 25 Lakhs To 1 Crore<br/>"11" - Above 1 Crore<br/>|
    |"11" - Above 1 Crore|varchar(2)|**Beneficiary Tax Deduction value must be in**<br/>"2" - Resident Individual<br/>"3" - NRI with Repatriation<br/>"4" - NRI without Repatriation<br/>"5" - Domestic Company<br/>"6" - Overseas Corporate Bodies<br/>"9" - Double Taxation Treaty<br/>"10" - Others<br/>|
    |FhEducation|char(4)|**Education/Degree value**<br/>"02" - Graduate<br/>"01" - High School<br/>"03" - Postgraduate<br/>"04" - Doctorate<br/>"05" - Professional Degree<br/>"06" - Under High School<br/>"07" - Illiterate<br/>"08" - Others<br/>"99" - None<br/>|
    |FhGeoCode|char(4)|**Geographical Code**<br/>"M" - Metropolitan<br/>"O" - Others<br/>"R" - Rural<br/>"SU" - Semi-Urban<br/>"U" - Urban,<br/>"N" - None<br/>|
    |FhStaff_Relative|char(1)|**Staff/Relative**<br/>"N" - Neither staff nor Relative<br/>"S" - Staff of the DP<br/>"R" - Relative of staff of DP<br/>"X" - None<br/>|
    |FhStaffCode|varchar(10)|Staff Code ( in Product Details)|
    |FhLanguageCode|varchar(2)|"3" - English<br/>"5" - Hindi<br/>"10" - Oriya<br/>"11" - Punjabi<br/>"12" - Sanskrit<br/>"13" - Sindhi<br/>"14" - Tamil<br/>"15" - Telegu<br/>"16" - Urdu<br/>"2" - Bengali<br/>"4" - Gujrati<br/>"6" - Kannada<br/>"7" - Kashmiri<br/>"8" - Malyalam<br/>"9" - Marathi<br/>"0" - None<br/>|
    |FhGroupCode|varchar(8)|Group Code ( in Product Details)|
    |FhClrngCorpId|char(2)|**1st Holder Clearing Corporation Id**<br/>* *If have Clearing Member Account then it is mandatory*<br/>"00" : None<br/>"10" : BOI Shareholding Limited<br/>"11" : National Securities Clearing Corporation Limited<br/>"12" : The Calcutta Stock Exchange  - Clearing House<br/>"13" : The Delhi Stock Exchange  - Clearing House<br/>"14" : Ahmedabad Stock Exchange –- Clearing House<br/>"15" : Vadodara Stock Exchange - Clearing House<br/>"16" : Madras Stock Exchange Limited<br/>"17" : Bangalore Stock Exchange<br/>"18" : National Securities Clearing Corporation Limited - OTCEI<br/>"19" : Bombay Stock Exchange Limited  -  CISA<br/>"20" : Ludhiana Stock Exchange - Clearing House<br/>"21" : National Commodity Derivates Exchange Limited<br/>"22" : Multi Commodity Exchange of India Limited -  Clearing House<br/>"23" : National Securities Clearing Corporation Limited  -  SLB<br/>"25" : BSE-SLB Limited  - SLB - CISA<br/>"26" : National Spot Exchange Limited<br/>|
    |FhStkExchngId|char(2)|**1st Holder Stock Exchange Id**<br/>* *If have Clearing Member Account then it is mandatory*<br/>“11” : Bombay Stock Exchange Limited -- CDSL<br/>“12” : National Stock Exchange Limited -- CDSL<br/>“22” : National Commodity Derivates Exchange Limited -- CDSL<br/>“23” : Multi Commodity Exchange of India Limited -- CDSL<br/>“29” : METROPOLITAN STOCK EXCHANGE OF INDIA LIMITED -- CDSL<br/>“01” : NSE  -- NSDL<br/>“02” : BSE   -- NSDL<br/>“03” : MSE  -- NSDL<br/>“04” : NCDEX -- NSDL<br/>“05” : MCX  -- NSDL<br/>“06” : ICEX -- NSDL<br/>|
    |FhClrngMemberId|char(8)|Clearing Member Id<br/>* *If have Clearing Member Account then it is mandatory*|
    |FhSebiRegNo|char(24)|SEBI Registration Id<br/>* *If have Clearing Member Account then it is mandatory*|
    |FhTradingId|char(8)|Trading Id<br/>* *If have Clearing Member Account then it is mandatory*|
    |FhPoaRegNo|varchar(16)|POA Reg No<br/>*b*If have POA id then it is mandatory*|
    |FhPoaId|varchar(16)|* *If have POA id then it is mandatory*|
    |FhPoaType|char(1)|"R" - Regular POA<br/>"C" - Clearing Member POA<br/>|
    |FhPoaPurposeCode|varchar(20)|"4" - All Holder<br/>"1" - First Holder<br/>"2" Second Holder<br/>"3" - Third Holder<br/>|
    |FhPoaSetupDate|datetime|* *If have POA id then it is mandatory*|
    |FhPoaOptrYesNo|char(1)|**POA Operator**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhGPA_BPA|char(1)|POA BPA/BPA<br/>"G" - "GPA"<br/>"B" - "BPA"<br/>"A" - "All DDPI Options"<br/>"S" - "Settlement"<br/>"P" - "Margin Pledge"<br/>"M" - "Mutual Fund MF"<br/>"T" - "Tendering shares in Open- offers TO"<br/>|
    |FhPoaFromDate|datetime|* *If have POA id then it is mandatory*|
    |FhPoaToDate|datetime||
    |FhPoaRemarks|varchar(50)||
    |FhAnnualReport|char(1)|**Annual Report Flag**<br/>"1" - Physical Annual Report<br/>"2" - Electronic Annual Report<br/>"3" - Both Physical and Electronic Annual Report<br/>|
    |FhBsda|char(1)|**BSDA Flag**<br/>"N" - No<br/>"Y" - Yes<br/>"O" - Opted Out<br/>|
    |FhEmailRtaYesNo|char(1)|**Download Email RTA Flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhPledgeIndYesNo|char(1)|**Pledge Standing Indicator**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhRgessYesNo|char(1)|**RGESS Flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhEmailStmntYesNo|char(1)|**Email Statement flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhDisabilityYesNo|char(1)|**Mental Disability flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhFmlyAccYesNo|char(1)|**Family Account flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |FhCasMode|char(2)|**CAS Mode**<br/>"" - None<br/>"PH" - Physical CAS<br/>"NO" - CAS not required<br/>|
    |FhCasDepository|char(1)|**Preferred  Depository for CAS**<br/>"" - None<br/>"C" - CDSL<br/>"N" - NSDL<br/>|
    |RMCode|char(10)||
    |GSTIN|char(15)||
    |GSTRegDate|datetime||
    |ChargeCd|char(8)|Charge Basket CD|
    |**Authorised Signatory**|
    |Img|text - Base64String||
    |**Bank**|
    |BankType|char(2)|Like : "22" - Dividend Bank<br/>*(Obsolete in SharePro no need to pass now)*|
    |BankAcNo|varchar(20)||
    |MicrNo|char(12)||
    |IFSC|char(15)||
    |BankAcType|varchar(15)|"10" - Savings<br/>"11" - Current<br/>"13" - Cash Credit<br/>|
    |BankCurrency|varchar(15)|"999001" - Indian Rupees<br/>"999002" - US Dollar<br/>"999003" - UK Pound<br/>|
    |**Second Holder**|
    |ShTitle|varchar(10)|Like MR, MRS|
    |ShFirstName|varchar(100)||
    |ShMiddleName|varchar(20)||
    |ShLastName|varchar(20)||
    |ShSuffix|varchar(10)||
    |ShFather|varchar(50)||
    |ShMother|varchar(100)||
    |ShPan|varchar(25)||
    |ShITCircle|varchar(15)|IT Circle / Ward / District|
    |ShAadhaar|char(15)||
    |ShEmail|varchar(50)||
    |ShMobile|char(10)||
    |**Third Holder**|
    |ThTitle|varchar(10)|Like MR, MRS|
    |ThFirstName|varchar(100)||
    |ThMiddleName|varchar(20)||
    |ThLastName|varchar(20)||
    |ThSuffix|varchar(10)||
    |ThFather|varchar(50)||
    |ThMother|varchar(100)||
    |ThPan|varchar(25)||
    |ThITCircle|varchar(15)|IT Circle / Ward / District|
    |ThAadhaar|char(15)||
    |ThEmail|varchar(50)||
    |ThMobile|char(10)||
    |**First Nominee**|
    |Nom1Title|varchar(10)|Like MR, MRS|
    |Nom1FirstName|varchar(100)||
    |Nom1MiddleName|varchar(20)|
    |Nom1LastName|varchar(20)||
    |Nom1Suffix|varchar(10)|Like DR|
    |Nom1Father|varchar(50)||
    |Nom1Addr1|varchar(30)||
    |Nom1Addr2|varchar(30)||
    |Nom1Addr3|varchar(30)||
    |Nom1City|varchar(25)||
    |Nom1State|varchar(25)|State Name|
    |Nom1StateCd|char(6)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **GSTSTATECD**<br/>Like : For West Bengal : WB|
    |Nom1Country|varchar(25)|Like: India|
    |Nom1Pin|varchar(10)|Pincode|
    |Nom1PhoneInd1|char(1)|*(Obsolete in SharePro no need to pass now)*|
    |Nom1Phone1|varchar(17)|Primary Mobile|
    |Nom1PhoneInd2|char(1)|*(Obsolete in SharePro no need to pass now)*|
    |Nom1Phone2|varchar(17)|*(Obsolete in SharePro no need to pass now)*|
    |Nom1AdtnlPhone|varchar(100)|*(Obsolete in SharePro no need to pass now)*|
    |Nom1Fax|varchar(17)||
    |Nom1Email|varchar(50)|Primary Email|
    |Nom1Pan|varchar(25)|Income Tax PAN No|
    |Nom1ITCircle|varchar(15)|IT Circle / Ward / District|
    |Nom1MinorYesNo|char(1)|**Minor Flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |Nom1MinorDOB|datetime|Minor Date of Birth (yyyy-mm-dd|
    |Nom1Relation|char(2)|"01" : Spouse<br/>"02" : Son<br/>"03" : Daughter<br/>"04" : Father<br/>"05" : Mother<br/>"06" : Brother<br/>"07" : Sister<br/>"08" : Grand-Son<br/>"09" : Granddaughter<br/>"10" : Grandfather<br/>"11" : Grandmother<br/>"12" : Not Provided<br/>"13" : Others<br/>|
    |Nom1SharePer|numeric(6, 2)|Nominee Share %|
    |Nom1ResSecYesNo|char(1)|**Residual Security flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |**Second Nominee**|
    |Nom2Title|varchar(20)|Like MR, MRS|
    |Nom2FirstName|varchar(200)||
    |Nom2MiddleName|varchar(20)||
    |Nom2LastName|varchar(20)||
    |Nom2Suffix|varchar(20)|Like DR|
    |Nom2Father|varchar(50)||
    |Nom2Addr1|varchar(30)||
    |Nom2Addr2|varchar(30)||
    |Nom2Addr3|varchar(30)||
    |Nom2City|varchar(25)||
    |Nom2State|varchar(25)|State Name|
    |Nom2StateCd|char(6)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **GSTSTATECD**|
    |Nom2Country|varchar(25)|Like: India|
    |Nom2Pin|varchar(20)|Pincode|
    |Nom2PhoneInd1|char(2)|*(Obsolete in SharePro no need to pass now)*|
    |Nom2Phone1|varchar(27)|Primary Mobile|
    |Nom2PhoneInd2|char(2)|*(Obsolete in SharePro no need to pass now)*|
    |Nom2Phone2|varchar(27)|*(Obsolete in SharePro no need to pass now)*|
    |Nom2AdtnlPhone|varchar(200)|(Obsolete in SharePro no need to pass now)|
    |Nom2Fax|varchar(27)||
    |Nom2Email|varchar(50)|Primary Email|
    |Nom2Pan|varchar(25)|Income Tax PAN No|
    |Nom2ITCircle|varchar(25)|IT Circle / Ward / District|
    |Nom2MinorYesNo|char(2)|**Minor Flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |Nom2MinorDOB|datetime|Minor Date of Birth|
    |Nom2Relation|char(2)|"01" : Spouse<br/>"02" : Son<br/>"03" : Daughter<br/>"04" : Father<br/>"05" : Mother<br/>"06" : Brother<br/>"07" : Sister<br/>"08" : Grand-Son<br/>"09" : Granddaughter<br/>"10" : Grandfather<br/>"11" : Grandmother<br/>"12" : Not Provided<br/>"13" : Others<br/>|
    |Nom2SharePer|numeric(6, 2)|Nominee Share %|
    |Nom2ResSecYesNo|char(2)|**Residual Security flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |**Third Nominee**|
    |Nom3Title|varchar(30)|Like MR, MRS|
    |Nom3FirstName|varchar(300)||
    |Nom3MiddleName|varchar(20)||
    |Nom3LastName|varchar(20)||
    |Nom3Suffix|varchar(30)|Like DR|
    |Nom3Father|varchar(50)||
    |Nom3Addr1|varchar(30)||
    |Nom3Addr2|varchar(30)||
    |Nom3Addr3|varchar(30)||
    |Nom3City|varchar(25)||
    |Nom3State|varchar(25)|State Name|
    |Nom3StateCd|char(6)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **GSTSTATECD**|
    |Nom3Country|varchar(25)|Like: India|
    |Nom3Pin|varchar(30)|Pincode|
    |Nom3PhoneInd1|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |Nom3Phone1|varchar(37)|Primary Mobile|
    |Nom3PhoneInd2|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |Nom3Phone2|varchar(37)|*(Obsolete in SharePro no need to pass now)*|
    |Nom3AdtnlPhone|varchar(300)|*(Obsolete in SharePro no need to pass now)*|
    |Nom3Fax|varchar(37)||
    |Nom3Email|varchar(50)|Primary Email|
    |Nom3Pan|varchar(25)|Income Tax PAN No|
    |Nom3ITCircle|varchar(35)|IT Circle / Ward / District|
    |Nom3MinorYesNo|char(3)|**Minor Flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |Nom3MinorDOB|datetime|Minor Date of Birth|
    |Nom3Relation|char(2)|"01" : Spouse<br/>"02" : Son<br/>"03" : Daughter<br/>"04" : Father<br/>"05" : Mother<br/>"06" : Brother<br/>"07" : Sister<br/>"08" : Grand-Son<br/>"09" : Granddaughter<br/>"10" : Grandfather<br/>"11" : Grandmother<br/>"12" : Not Provided<br/>"13" : Others<br/>|
    |Nom3SharePer|numeric(6, 2)|Nominee Share %|
    |Nom3ResSecYesNo|char(3)|**Residual Security flag**<br/>“Y” - Yes<br/>“N” - No|
    |**Minor Guardian**|
    |MinGrdTitle|varchar(30)|Like MR, MRS|
    |MinGrdFirstName|varchar(300)||
    |MinGrdMiddleName|varchar(20)||
    |MinGrdLastName|varchar(20)||
    |MinGrdSuffix|varchar(30)|Like DR|
    |MinGrdFather|varchar(50)||
    |MinGrdAddr1|varchar(30)||
    |MinGrdAddr2|varchar(30)||
    |MinGrdAddr3|varchar(30)||
    |MinGrdCity|varchar(25)||
    |MinGrdState|varchar(25)|State Name|
    |MinGrdStateCd|char(6)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **GSTSTATECD**<br/>Like : For West Bengal : WB|
    |MinGrdCountry|varchar(25)|Like: India|
    |MinGrdPin|varchar(30)|Pincode|
    |MinGrdPhoneInd1|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |MinGrdPhone1|varchar(37)|Primary Mobile|
    |MinGrdPhoneInd2|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |MinGrdPhone2|varchar(37)|*(Obsolete in SharePro no need to pass now)*|
    |MinGrdAdtnlPhone|varchar(300)|*(Obsolete in SharePro no need to pass now)*|
    |MinGrdFax|varchar(37)||
    |MinGrdEmail|varchar(50)|Primary Email|
    |MinGrdPan||Income Tax PAN No|
    |MinGrdITCircle|varchar(35)|IT Circle / Ward / District|
    |MinGrdMinorYesNo|char(3)|**Minor Flag**<br/>“Y” - Yes<br/>“N” - No|
    |MinGrdMinorDOB|datetime|Minor Date of Birth|
    |MinGrdRelation|char(2)|"01" : Spouse<br/>"02" : Son<br/>"03" : Daughter<br/>"04" : Father<br/>"05" : Mother<br/>"06" : Brother<br/>"07" : Sister<br/>"08" : Grand-Son<br/>"09" : Granddaughter<br/>"10" : Grandfather<br/>"11" : Grandmother<br/>"12" : Not Provided<br/>"13" : Others<br/>|
    |**First Minor Nominee Guardian**|
    |MinNom1GrdTitle|varchar(30)|Like MR, MRS|
    |MinNom1GrdFirstName|varchar(300)||
    |MinNom1GrdMiddleName|varchar(20)||
    |MinNom1GrdLastName|varchar(20)||
    |MinNom1GrdSuffix|varchar(30)|Like DR|
    |MinNom1GrdFather|varchar(50)||
    |MinNom1GrdAddr1|varchar(30)||
    |MinNom1GrdAddr2|varchar(30)||
    |MinNom1GrdAddr3|varchar(30)||
    |MinNom1GrdCity|varchar(25)||
    |MinNom1GrdState|varchar(25)|State Name|
    |MinNom1GrdStateCd|char(6)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **GSTSTATECD**<br/>Like : For West Bengal : WB|
    |MinNom1GrdCountry|varchar(25)|Like: India|
    |MinNom1GrdPin|varchar(30)|Pincode|
    |MinNom1GrdPhoneInd1|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom1GrdPhone1|varchar(37)|Primary Mobile|
    |MinNom1GrdPhoneInd2|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom1GrdPhone2|varchar(37)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom1GrdAdtnlPhone|varchar(300)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom1GrdFax|varchar(37)||
    |MinNom1GrdEmail|varchar(50)|Primary Email|
    |MinNom1GrdPan|varchar(25)|Income Tax PAN No|
    |MinNom1GrdITCircle|varchar(35)|IT Circle / Ward / District|
    |MinNom1GrdMinorYesNo|char(3)|**Minor Flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |MinNom1GrdMinorDOB|datetime|Minor Date of Birth|
    |MinNom1GrdRelation|char(2)|"01" : Spouse<br/>"02" : Son<br/>"03" : Daughter<br/>"04" : Father<br/>"05" : Mother<br/>"06" : Brother<br/>"07" : Sister<br/>"08" : Grand-Son<br/>"09" : Granddaughter<br/>"10" : Grandfather<br/>"11" : Grandmother<br/>"12" : Not Provided<br/>"13" : Others<br/>|
    |**Second Minor Nominee Guardian**|
    |MinNom2GrdTitle|varchar(30)|Like MR, MRS|
    |MinNom2GrdFirstName|varchar(300)||
    |MinNom2GrdMiddleName|varchar(20)||
    |MinNom2GrdLastName|varchar(20)||
    |MinNom2GrdSuffix|varchar(30)|Like DR|
    |MinNom2GrdFather|varchar(50)||
    |MinNom2GrdAddr1|varchar(30)||
    |MinNom2GrdAddr2|varchar(30)||
    |MinNom2GrdAddr3|varchar(30)||
    |MinNom2GrdCity|varchar(25)||
    |MinNom2GrdState|varchar(25)|State Name|
    |MinNom2GrdStateCd|char(6)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **GSTSTATECD**<br/>Like : For West Bengal : WB|
    |MinNom2GrdCountry|varchar(25)|Like: India|
    |MinNom2GrdPin|varchar(30)|Pincode|
    |MinNom2GrdPhoneInd1|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom2GrdPhone1|varchar(37)|Primary Mobile|
    |MinNom2GrdPhoneInd2|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom2GrdPhone2|varchar(37)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom2GrdAdtnlPhone|varchar(300)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom2GrdFax|varchar(37)||
    |MinNom2GrdEmail|varchar(50)|Primary Email|
    |MinNom2GrdPan|varchar(25)|Income Tax PAN No|
    |MinNom2GrdITCircle|varchar(35)|IT Circle / Ward / District|
    |MinNom2GrdMinorYesNo|char(3)|**Minor Flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |MinNom2GrdMinorDOB|datetime|Minor Date of Birth|
    |MinNom2GrdRelation|char(2)|"01" : Spouse<br/>"02" : Son<br/>"03" : Daughter<br/>"04" : Father<br/>"05" : Mother<br/>"06" : Brother<br/>"07" : Sister<br/>"08" : Grand-Son<br/>"09" : Granddaughter<br/>"10" : Grandfather<br/>"11" : Grandmother<br/>"12" : Not Provided<br/>"13" : Others<br/>|
    |**Third Minor Nominee Guardian**|
    ||MinNom3GrdTitle|varchar(30)|Like MR, MRS|
    |MinNom3GrdFirstName|varchar(300)||
    |MinNom3GrdMiddleName|varchar(20)||
    |MinNom3GrdLastName|varchar(20)||
    |MinNom3GrdSuffix|varchar(30)|Like DR|
    |MinNom3GrdFather|varchar(50)||
    |MinNom3GrdAddr1|varchar(30)||
    |MinNom3GrdAddr2|varchar(30)||
    |MinNom3GrdAddr3|varchar(30)||
    |MinNom3GrdCity|varchar(25)||
    |MinNom3GrdState|varchar(25)|State Name|
    |MinNom3GrdStateCd|char(6)|Please refer to *<u>getStateCodeList</u>* call to get a list of States with the broker. Send **GSTSTATECD**<br/>Like : For West Bengal : WB|
    |MinNom3GrdCountry|varchar(25)|Like: India|
    |MinNom3GrdPin|varchar(30)|Pincode|
    |MinNom3GrdPhoneInd1|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom3GrdPhone1|varchar(37)|Primary Mobile|
    |MinNom3GrdPhoneInd2|char(3)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom3GrdPhone2|varchar(37)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom3GrdAdtnlPhone|varchar(300)|*(Obsolete in SharePro no need to pass now)*|
    |MinNom3GrdFax|varchar(37)||
    |MinNom3GrdEmail|varchar(50)|Primary Email|
    |MinNom3GrdPan|varchar(25)|Income Tax PAN No|
    |MinNom3GrdITCircle|varchar(35)|IT Circle / Ward / District|
    |MinNom3GrdMinorYesNo|char(3)|**Minor Flag**<br/>“Y” - Yes<br/>“N” - No<br/>|
    |MinNom3GrdMinorDOB|datetime|Minor Date of Birth|
    |MinNom3GrdRelation|char(2)|"01" : Spouse<br/>"02" : Son<br/>"03" : Daughter<br/>"04" : Father<br/>"05" : Mother<br/>"06" : Brother<br/>"07" : Sister<br/>"08" : Grand-Son<br/>"09" : Granddaughter<br/>"10" : Grandfather<br/>"11" : Grandmother<br/>"12" : Not Provided<br/>"13" : Others<br/>|
    **Other data**
    |OpMode|char(1)|Mode of Operation<br/>Anyone or Survivor : 2, Jointly: 1, Sole Holder: 0<br/>|
    |CommPref|char(1)|Communication Preference<br/>All Holder: 2, First Holder: 1, None: 3<br/>|
    |NomOpt|char(1)|Nomination Opt Out<br/>No: N, Yes: Y|
    |**SMS**|
    |Mobile|char(10)|*(Obsolete in SharePro no need to pass now)*|
    |Email2|char(100)|*(Obsolete in SharePro no need to pass now)*|
    |SmsRemarks|char(100)|*(Obsolete in SharePro no need to pass now)*|
    ||||
    |ADDUSER|char(10)|Record inserted by (like a 3r party vendor name : **KYCDone**)<br/>**"AddUser": "KYCDone"**|

    ___

    ```jsx title="Request Sample (JSon Data)"
{
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "CompanyId": "06",
    "BranchID": "HO",
    "FhTitle": "Mr",
    "FhFirstName": "Dummy First Name",
    "FhMiddleName": "Dummy Middle Name",
    "FhLastName": "Dummy Last Name",
    "FhFather": "Dummy Father Name",
    "FhDOB": "1990-06-02",
    "FhGender": "M",
    "FhAddr1": "25/1, Goaltuli Lane",
    "FhAddr2": "Taltala",
    "FhAddr3": "New Market",
    "FhCity": "Kolkata",
    "FhStateCode": "WB",
    "FhCountry": "India",
    "FhPin": "700013",
    "FhNationCode": "01",
    "FhPan": "AAAAA1111A",
    "FhPhoneInd1": "M",
    "FhPhone1": "9748585397",
    "FhPhone2": "22441139",
    "FhEmail": "dummy@gmail.com",
    "FhPerAddr1": "25/1, Goaltuli Lane",
    "FhPerAddr2": "Taltala",
    "FhPerAddr3": "New Market",
    "FhPerCity": "Kolkata",
    "FhPerState": "West Bengal",
    "FhPerCountry": "India",
    "FhPerPin": "700013",
    "FhAadhaar": "111122223333",
    "GSTIN": "AAAAA1111A1ZA",
    "BankAcNo": "1111222233334444",
    "MicrNo": "110002031",
    "IFSC": "SBIN0006064",
    "Nom1FirstName": "Nominee First Name",
    "Nom1LastName": "Nominee Last Name",
    "Nom1Father": "Nominee Father Name",
    "Nom1Addr1": "Nominee Addr1",
    "Nom1City": "Kolkata",
    "Nom1State": "West Bengal",
    "Nom1Country": "India",
    "Nom1Pin": "700013",
    "Mobile": "9758782569",
    "Email2": "nominee@gmail.com",
    "SmsRemarks": "Test CDSL Client"
}
```

<pre language="html">
<table>
  <caption>***Return JSon Response***</caption>
  <thead>
    <tr>
      <th>Return Data</th>
      <th>Sample</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
         **JSon Data:**
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
   "message": "Record imported Successfully in SharePro"

}
```
</td>
      </tr>
       </tbody>
</table>
</pre>



## NewNSDLClientRegistration

**Endpoint : NewNSDLClientRegistration**

**Method : POST or GET**| Send raw **Json** data in **Body**

* *Creates a new NSDL Client in DPPro*
* *Get NSDL Code Details : ***<u>view NSDL Codes</u>****

* Request Data

|**API Parameter**|**Data Type**|**Explanation**|
|:---|:---|:---|
|*key|varchar(100)|REST API Key|
|CompanyId|char(2)|SharePro Company Code of NSDL. A broker may have multiple NSDL Depository Licenses. If value is not passed, the call picks up the first available NSDL segment in SharePro.|
|BranchId|char(4)|SharePro Branchid. If not passed, the client is created in **“HO”**. Please refer to <u>*getBranchesList*</u> call to get a list of branches with the broker|
|ClientId|char(8)|Instra ClientId|
|**First Holder**|
|*FhName|char(45)|1st Holder Name is compulsory|
|ShortName|char(16)||
|*FhDOB|datetime|1st Holder Date of Birth is compulsory|
|Gender|char(1)|"M" - Male<br/>"F" - Female<br/>"X" - None<br/>*(This parameter is Obsolete no need to pass now)*|
|*FhGender|char(1)|**1st Holder Gender is compulsory**<br/>Male: 1<br/> Female: 2<br/>Transgender: 3<br/>|
|*FhFather|char(45)|1st Holder Father's Name is compulsory|
|FhMother|varchar(100)||
|*BenType|char(2)|Beneficiary Type is compulsory Please refer to **<u>view NSDL Codes</u>** and search<br/>**Client Type / Ben Type** (For single digit code please pass code with leading zero like for 1 = 01)|
|*BenSubType|char(4)|Beneficiary Sub Type is compulsory Please refer to **<u>view NSDL Codes</u>** and search<br/>**Ben SubType**<br/>(For single digit code please pass code with leading zero like for 1 = 01)<br/>|
|*BenCategory|char(2)|Beneficiary Sub Type is compulsory Please refer to **<u>view NSDL Codes</u>** and search<br/>**Account Category**<br/>(For single digit code please pass code with leading zero like for 1 = 01)<br/>|
|*BenOccupation|char(2)|Beneficiary Sub Type is compulsory Please refer to **<u>view NSDL Codes</u>** and search<br/>**Client Occupation Code**<br/>(For single digit code please pass code with leading zero like for 1 = 01)<br/>|
|BoardOfReso|bit|**Board meeting/resolution is done?**<br/>“0” : No<br/>“1” : Yes<br/>|
|MemoOfArticle|bit| Have Company details ?|
|*FhEmail|char(50)|1st Holder Email is compulsory|
|FhAltEmail1|char(50)|1st Holder Secondary Email 1|
|FhAltEmail2|char(50)|1st Holder Secondary Email 2|
|FhLandPhone|char(30)||
|*FhMobile|char(12)|1st Holder Mobile is compulsory|
|*FhSmsYesNo|char(1)|**1st Holder send SMS value must be in**<br/>"Y" - Yes<br/>"N" - No<br/>|
|PidProofCd|char(2)|1st Holder Proof of Identity Please refer to **<u>view NSDL Codes</u>** and search **PHOTOID PROOF (idProofCd)**|
|*FhPAN|char(10)|1st Holder PAN is compulsory|
|*FhAadhaar|char(12)|1st Holder Aadhaar is compulsory|
|FhMapin|char(9)|Mapin Id given by company|
|FhRtaYesNo|char(1)|**Is Registered of transferred agent registered ?**<br/>”N” - No<br/>“Y” - Yes<br/>|
|FhFmlyEmailYesNo|char(1)|**Family Email Flag**<br/>”N” - No<br/>“Y” - Yes<br/>|
|FhFmlyMobileYesNo|char(1)|**Family Mobile Flag**<br/>”N” - No<br/>“Y” - Yes<br/>|
|UCC|char(10)|Client with this UCC must be exists in SharePro|
|StaningIndicator|char(1)|**Auto Credit**<br/>”N” - No<br/>“Y” - Yes<br/>|
|CustClntYesNo|char(1)|**Having Custodian Identification no?**<br/>”N” - No<br/>“Y” - Yes<br/>|
|CustIncomeCd|char(4)|""   - None<br/>"1" - UpTo 1 Lakhs<br/>"6" - 1 Lakhs To 5 Lakhs<br/>"7" - 5 Lakhs To 10 Lakhs<br/>"8" - 10 Lakhs To 25 Lakhs<br/>"9" - Above 25 Lakhs<br/>"10" - 25 Lakhs To 1 Crore<br/>"11" - Above 1 Crore<br/>|
|SharePerYesNo|char(1)|**Having Share %?**<br/>”N” - No<br/>“Y” - Yes<br/>|
|RiskProfile|char(20)|Low Risk<br/>High Risk<br/>Medium Risk<br/>|
|RmCode|char(10)||
|GSTIN|char(15)||
|GSTRegDate|datetime||
|*FhBankAcNo|char(30)|1st Holder Bank Account No. is compulsory|
|*BankAcType|numeric(2, 0)|1st Holder Bank Account Type is compulsory<br/>"10" - Savings<br/>"11" - Current<br/>"13" - Other<br/>Please refer to <u>*view NSDL Codes*</u> and search **Bank Account Type**<br/>|
|*MicrNo|char(9)|MICR No. of Bank is compulsory|
|*IFSC|char(11)|IFSC of Bank is compulsory|
|EStatementYesNo|char(1)|E-Statement Flag<br/>”N” - No<br/>“Y” - Yes|
|FhRbiRefNo|char(50)||
|RbiApprovalDate|datetime||
|SebiRegNo|char(24)||
|FhTds|char(20)||
|AdrProofCd|char(2)|1st Holder Proof of Address<br/>Please refer to <u>**view NSDL Codes**</u> and search **Address Proof - AdrProofCd**|
|*StateCode|char(4)|GST State Code is compulsory<br/>Please refer to <u>*getStateCodeList*</u> call to get a list of States with the broker. Need to pass **GSTStateCD**|
|*BenLclAdrYesNo|char(1)|Beneficiary Local Address value must be either "Y" or "N"<br/>”N” - No<br/>“Y” - Yes<br/>|
|NoOfFhSignAuth|numeric(2, 0)||
|ExchangeId|char(8)||
|SenderRefNo1|char(35)||
|SenderRefNo2|char(35)||
|ChargeCd|char(8)|Charge Basket Cd|
|GroupCd|char(4)|Family Group Cd|
|CommissionCd|char(5)||
|DespatchCd|char(5)||
|RgessYesNo|char(1)|RGESS value must be in<br/>”N” - No<br/>“Y” - Yes<br/>|
|BsdaYesNo|char(1)|BSDA value must be in<br/>”N” - No<br/>“Y” - Yes<br/>|
|CommodityYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|AutoPledgeYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|MinorIndYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|MinorName|char(45)||
|MinorGuardian|char(45)||
|NomineeIndicator|char(1)|""   : No Nominee | Opt out<br/>"N" : Nominee<br/>|
|NomineeName|char(45)|1st Holder 1st Nominee Name|
|NomineeGuardian|char(45)|1st Holder 1st Nominee Guardian Name|
|NomineeDOB|datetime|1st Holder 1st Nominee DOB|
|MinorNominee1DOB|datetime|1st Holder 1st Minor Nominee DOB|
|NomineeName2|char(45)|1st Holder 2nd Nominee Name|
|NomGrdn2SameAs1|char(1)|Nominee Guardian 2 same as 1<br/>”N” - No<br/>|“Y” - Yes<br/>|
|NomineeGuardian2|char(45)|1st Holder 2nd Nominee Guardian Name|
|MinorNominee2DOB|datetime|1st Holder 2nd Minor Nominee DOB|
|NomineeName3|char(45)|1st Holder 3rd Nominee Name|
|NomGrdn3SameAs1|char(1)|Nominee Guardian 3 same as 1<br/>”N” - No<br/>“Y” - Yes<br/>|
|NomineeGuardian3|char(45)|1st Holder 3rd Nominee Guardian Name|
|MinorNominee3DOB|datetime|1st Holder 3rd Minor Nominee DOB|
|GrossIncome|char(2)|"01" - Below 1 Lac<br/>"02" - 1-5 Lacs<br/>"03" - 5-10 Lacs<br/>"04" - 10-25 Lacs<br/>"05" - Above 25 Lacs<br/>|
|**Second Holder**|
|ShName|char(45)||
|ShDOB|datetime||
|ShGender|char(1)|2nd Holder Gender<br/>Male: 1, Female: 2, Transgender: 3<br/>|
|ShFather|char(45)||
|ShMother|varchar(100)||
|ShEmail|char(50)||
|ShAltEmail|char(50)||
|ShLandPhone|char(30)||
|ShMobile|char(12)||
|ShSmsYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|ShPAN|char(10)||
|ShAadhaar|char(12)||
|ShMapin|char(9)||
|ShRtaYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|ShFmlyEmailYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|ShFmlyMobileYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|NoOfShSignAuth|numeric(2, 0)||
|**Third Holder**|
|ThName|char(45)||
|ThDOB|datetime||
|ThGender|char(1)|3rd Holder Gender<br/>Male: 1, Female: 2, Transgender: 3<br/>|
|ThFather|char(45)||
|ThMother|varchar(100)||
|ThEmail|char(50)||
|ThAltEmail|char(50)||
|ThLandPhone|char(30)||
|ThMobile|char(12)||
|ThSmsYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|ThPAN|char(10)||
|ThAadhaar|char(12)||
|ThMapin|char(9)||
|ThRtaYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|ThFmlyEmailYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|ThFmlyMobileYesNo|char(1)|”N” - No<br/>“Y” - Yes<br/>|
|NoOfThSignAuth|numeric(2, 0)||
|**First Holder Local**|
|*FhLclAddress1|char(36)|1st Holder Local Address is compulsory|
|FhLclAddress2|char(36)||
|FhLclAddress3|char(36)||
|FhLclAddress4|char(36)||
|FhLclStateCd|char(2)|Please refer to *<u>view NSDL Codes</u>* and search **State Code**|
|*FhLclCntryCd|char(3)|“356” : India<br/>Please refer to *<u>view NSDL Codes</u>* and search **Country  Code**|
|*FhLclPin|char(10)|1st Holder Local PIN is compulsory|
|FhLclPhone|char(24)||
|FhLclFax|char(24)||
|*FhLclMobile|numeric(13, 0)|1st Holder Local Mobile is compulsory|
|*FhLclEmail|char(50)|1st Holder Local Email is compulsory|
|*FhLclPAN|char(10)|1st Holder Local PAN compulsory|
|*FhLclAadhaar|char(12)|1st Holder Local Aadhaar compulsory|
|FhLclSharePer|numeric(3, 0)||
|**First Holder Bank Address**|
|*FhBnkAddress1|char(36)|1st Holder Bank Address is compulsory|
|FhBnkAddress2|char(36)||
|FhBnkAddress3|char(36)||
|FhBnkAddress4|char(36)||
|*FhBnkPin|char(10)|1st Holder Bank PIN is compulsory|
|FhBnkPhone|char(24)|1st Holder Bank Phone|
|FhBnkFax|char(24)||
|FhBnkEmail|char(50)|1st Holder Bank Email|
|**First Holder Foreign Address**|
|FhFrgnAddress1|char(36)||
|FhFrgnAddress2|char(36)||
|FhFrgnAddress3|char(36)||
|FhFrgnAddress4|char(36)||
|FhFrgnPin|char(10)||
|FhFrgnPhone|char(24)||
|FhFrgnFax|char(24)||
|FhFrgnMobile|numeric(13, 0)||
|FhFrgnEmail|char(50)||
|FhFrgnPAN|char(10)||
|FhFrgnAadhaar|char(12)||
|FhFrgnSharePer|numeric(3, 0)||
|**First Holder 1st Nominee Address**|
|Fh1NomAddress1char(36)||
|Fh1NomAddress2|char(36)||
|Fh1NomAddress3|char(36)||
|Fh1NomAddress4|char(36)||
|Fh1NomPin|char(10)||
|Fh1NomPhone|char(24)||
|Fh1NomFax|char(24)||
|Fh1NomMobile|numeric(13, 0)||
|Fh1NomEmail|char(50)||
|Fh1NomPAN|char(10)||
|Fh1NomAadhaar|char(12)||
|Fh1NomSharePer|numeric(3, 0)||
|**First Holder 2nd Nominee Address**|
||Fh2NomAddress1char(36)||
|Fh2NomAddress2|char(36)||
|Fh2NomAddress3|char(36)||
|Fh2NomAddress4|char(36)||
|Fh2NomPin|char(10)||
|Fh2NomPhone|char(24)||
|Fh2NomFax|char(24)||
|Fh2NomMobile|numeric(13, 0)||
|Fh2NomEmail|char(50)||
|Fh2NomPAN|char(10)||
|Fh2NomAadhaar|char(12)||
|Fh2NomSharePer|numeric(3, 0)||
|**First Holder 3rd Nominee Address**|
||Fh3NomAddress1char(36)||
|Fh3NomAddress2|char(36)||
|Fh3NomAddress3|char(36)||
|Fh3NomAddress4|char(36)||
|Fh3NomPin|char(10)||
|Fh3NomPhone|char(24)||
|Fh3NomFax|char(24)||
|Fh3NomMobile|numeric(13, 0)||
|Fh3NomEmail|char(50)||
|Fh3NomPAN|char(10)||
|Fh3NomAadhaar|char(12)||
|Fh3NomSharePer|numeric(3, 0)||
|**1st Minor**|
|Fh1MinAddress1|char(36)||
|Fh1MinAddress2|char(36)||
|Fh1MinAddress3|char(36)||
|Fh1MinAddress4|char(36)||
|Fh1MinPin|char(10)||
|Fh1MinPhone|char(24)||
|Fh1MinFax|char(24)||
|Fh1MinMobile|numeric(13, 0)||
|Fh1MinEmail|char(50)||
|Fh1MinPAN|char(10)||
|Fh1MinAadhaar|char(12)||
|Fh1MinSharePer|numeric(3, 0)||
|**2nd Minor**|
|Fh2MinAddress1|char(36)||
|Fh2MinAddress2|char(36)||
|Fh2MinAddress3|char(36)||
|Fh2MinAddress4|char(36)||
|Fh2MinPin|char(10)||
|Fh2MinPhone|char(24)||
|Fh2MinFax|char(24)||
|Fh2MinMobile|numeric(13, 0)||
|Fh2MinEmail|char(50)||
|Fh2MinPAN|char(10)||
|Fh2MinAadhaar|char(12)||
|Fh2MinSharePer|numeric(3, 0)||
|**3rd Minor**|
|Fh3MinAddress1|char(36)||
|Fh3MinAddress2|char(36)||
|Fh3MinAddress3|char(36)||
|Fh3MinAddress4|char(36)||
|Fh3MinPin|char(10)||
|Fh3MinPhone|char(24)||
|Fh3MinFax|char(24)||
|Fh3MinMobile|numeric(13, 0)||
|Fh3MinEmail|char(50)||
|Fh3MinPAN|char(10)||
|Fh3MinAadhaar|char(12)||
|Fh3MinSharePer|numeric(3, 0)||
|**Second Holder Local Address**|
|ShLclAddress1|char(36)||
|ShLclAddress2|char(36)||
|ShLclAddress3|char(36)||
|ShLclAddress4|char(36)||
|ShLclPin|char(10)||
|ShLclPhone|char(24)||
|ShLclFax|char(24)||
|ShLclMobile|numeric(13, 0)||
|ShLclEmail|char(50)||
|ShLclPAN|char(10)||
|ShLclAadhaar|char(12)||
|ShLclSharePer|numeric(3, 0)||
|**Second Holder Bank Address**|
|ShBnkAddress1|char(36)||
|ShBnkAddress2|char(36)||
|ShBnkAddress3|char(36)||
|ShBnkAddress4|char(36)||
|ShBnkPin|char(10)||
|ShBnkPhone|char(24)||
|ShBnkFax|char(24)||
|ShBnkEmail|char(50)||
|**Second Holder Foreign Address**|
|ShFrgnAddress1|char(36)||
|ShFrgnAddress2|char(36)||
|ShFrgnAddress3|char(36)||
|ShFrgnAddress4|char(36)||
|ShFrgnPin|char(10)||
|ShFrgnPhone|char(24)||
|ShFrgnFax|char(24)||
|ShFrgnMobile|numeric(13, 0)||
|ShFrgnEmail|char(50)||
|ShFrgnPAN|char(10)||
|ShFrgnAadhaar|char(12)||
|ShFrgnSharePer|numeric(3, 0)|
|**Second Holder 1st Nominee**|
|Sh1NomAddress1|char(36)||
|Sh1NomAddress2|char(36)||
|Sh1NomAddress3|char(36)||
|Sh1NomAddress4|char(36)||
|Sh1NomPin|char(10)||
|Sh1NomPhone|char(24)||
|Sh1NomFax|char(24)||
|Sh1NomMobile|numeric(13, 0)||
|Sh1NomEmail|char(50)||
|Sh1NomPAN|char(10)||
|Sh1NomAadhaar|char(12)||
|Sh1NomSharePer|numeric(3, 0)||
|**Second Holder 2nd Nominee**|
|Sh2NomAddress1|char(36)||
|Sh2NomAddress2|char(36)||
|Sh2NomAddress3|char(36)||
|Sh2NomAddress4|char(36)||
|Sh2NomPin|char(10)||
|Sh2NomPhone|char(24)||
|Sh2NomFax|char(24)||
|Sh2NomMobile|numeric(13, 0)||
|Sh2NomEmail|char(50)||
|Sh2NomPAN|char(10)||
|Sh2NomAadhaar|char(12)||
|Sh2NomSharePer|numeric(3, 0)||
|**Second Holder 3rd Nominee**|
|Sh3NomAddress1|char(36)||
|Sh3NomAddress2|char(36)||
|Sh3NomAddress3|char(36)||
|Sh3NomAddress4|char(36)||
|Sh3NomPin|char(10)||
|Sh3NomPhone|char(24)||
|Sh3NomFax|char(24)||
|Sh3NomMobile|numeric(13, 0)||
|Sh3NomEmail|char(50)||
|Sh3NomPAN|char(10)||
|Sh3NomAadhaar|char(12)||
|Sh3NomSharePer|numeric(3, 0)||
|**Second Holder 1st Minor**|
|Sh1MinAddress1|char(36)||
|Sh1MinAddress2|char(36)||
|Sh1MinAddress3|char(36)||
|Sh1MinAddress4|char(36)||
|Sh1MinPin|char(10)||
|Sh1MinPhone|char(24)||
|Sh1MinFax|char(24)||
|Sh1MinMobile|numeric(13, 0)||
|Sh1MinEmail|char(50)||
|Sh1MinPAN|char(10)||
|Sh1MinAadhaar|char(12)||
|Sh1MinSharePer|numeric(3, 0)||
|**Second Holder 2nd Minor**|
|Sh2MinAddress1|char(36)||
|Sh2MinAddress2|char(36)||
|Sh2MinAddress3|char(36)||
|Sh2MinAddress4|char(36)||
|Sh2MinPin|char(10)||
|Sh2MinPhone|char(24)||
|Sh2MinFax|char(24)||
|Sh2MinMobile|numeric(13, 0)||
|Sh2MinEmail|char(50)||
|Sh2MinPAN|char(10)||
|Sh2MinAadhaar|char(12)||
|Sh2MinSharePer|numeric(3, 0)||
|**Second Holder 3rd Minor**|
|Sh3MinAddress1|char(36)||
|Sh3MinAddress2|char(36)||
|Sh3MinAddress3|char(36)||
|Sh3MinAddress4|char(36)||
|Sh3MinPin|char(10)||
|Sh3MinPhone|char(24)||
|Sh3MinFax|char(24)||
|Sh3MinMobile|numeric(13, 0)||
|Sh3MinEmail|char(50)||
|Sh3MinPAN|char(10)||
|Sh3MinAadhaar|char(12)||
|Sh3MinSharePer|numeric(3, 0)||
|**Third Holder Local Address**||
|ThLclAddress1|char(36)||
|ThLclAddress2|char(36)||
|ThLclAddress3|char(36)||
|ThLclAddress4|char(36)||
|ThLclPin|char(10)||
|ThLclPhone|char(24)||
|ThLclFax|char(24)||
|ThLclMobile|numeric(13, 0)||
|ThLclEmail|char(50)||
|ThLclPAN|char(10)||
|ThLclAadhaar|char(12)||
|ThLclSharePer|numeric(3, 0)||
|**Third Holder Bank Address**|
|ThBnkAddress1|char(36)||
|ThBnkAddress2|char(36)||
|ThBnkAddress3|char(36)||
|ThBnkAddress4|char(36)||
|ThBnkPin|char(10)||
|ThBnkPhone|char(24)||
|ThBnkFax|char(24)||
|ThBnkEmail|char(50)||
|**Third Holder Foreign Address**|
|ThFrgnAddress1|char(36)||
|ThFrgnAddress2|char(36)||
|ThFrgnAddress3|char(36)||
|ThFrgnAddress4|char(36)||
|ThFrgnPin|char(10)||
|ThFrgnPhone|char(24)||
|ThFrgnFax|char(24)||
|ThFrgnMobile|numeric(13, 0)||
|ThFrgnEmail|char(50)||
|ThFrgnPAN|char(10)||
|ThFrgnAadhaar|char(12)||
|ThFrgnSharePer|numeric(3, 0)||
|**Third Holder 1st Nominee Address**|
|Th1NomAddress1|char(36)||
|Th1NomAddress2|char(36)||
|Th1NomAddress3|char(36)||
|Th1NomAddress4|char(36)||
|Th1NomPin|char(10)||
|Th1NomPhone|char(24)||
|Th1NomFax|char(24)||
|Th1NomMobile|numeric(13, 0)||
|Th1NomEmail|char(50)||
|Th1NomPAN|char(10)||
|Th1NomAadhaar|char(12)||
|Th1NomSharePer|numeric(3, 0)||
|**Third Holder 2nd Nominee Address**|
|Th2NomAddress1|char(36)||
|Th2NomAddress2|char(36)||
|Th2NomAddress3|char(36)||
|Th2NomAddress4|char(36)||
|Th2NomPin|char(10)||
|Th2NomPhone|char(24)||
|Th2NomFax|char(24)||
|Th2NomMobile|numeric(13, 0)||
|Th2NomEmail|char(50)||
|Th2NomPAN|char(10)||
|Th2NomAadhaar|char(12)||
|Th2NomSharePer|numeric(3, 0)||
|**Third Holder 3rd Nominee Address**|
|Th3NomAddress1|char(36)||
|Th3NomAddress2|char(36)||
|Th3NomAddress3|char(36)||
|Th3NomAddress4|char(36)||
|Th3NomPin|char(10)||
|Th3NomPhone|char(24)||
|Th3NomFax|char(24)||
|Th3NomMobile|numeric(13, 0)||
|Th3NomEmail|char(50)||
|Th3NomPAN|char(10)||
|Th3NomAadhaar|char(12)||
|Th3NomSharePer|numeric(3, 0)||
|**Third Holder 1st Minor Address**|
|Th1MinAddress1|char(36)||
|Th1MinAddress2|char(36)||
|Th1MinAddress3|char(36)||
|Th1MinAddress4|char(36)||
|Th1MinPin|char(10)||
|Th1MinPhone|char(24)||
|Th1MinFax|char(24)||
|Th1MinMobile|numeric(13, 0)||
|Th1MinEmail|char(50)||
|Th1MinPAN|char(10)||
|Th1MinAadhaar|char(12)||
|Th1MinSharePer|numeric(3, 0)||
|**Third Holder 2nd Minor Address**|
|Th2MinAddress1|char(36)||
|Th2MinAddress2|char(36)||
|Th2MinAddress3|char(36)||
|Th2MinAddress4|char(36)||
|Th2MinPin|char(10)||
|Th2MinPhone|char(24)||
|Th2MinFax|char(24)||
|Th2MinMobile|numeric(13, 0)||
|Th2MinEmail|char(50)||
|Th2MinPAN|char(10)||
|Th2MinAadhaar|char(12)||
|Th2MinSharePer|numeric(3, 0)||
|**Third Holder 3rd Minor Address**|
|Th3MinAddress1|char(36)||
|Th3MinAddress2|char(36)||
|Th3MinAddress3|char(36)||
|Th3MinAddress4|char(36)||
|Th3MinPin|char(10)||
|Th3MinPhone|char(24)||
|Th3MinFax|char(24)||
|Th3MinMobile|numeric(13, 0)||
|Th3MinEmail|char(50)||
|Th3MinPAN|char(10)||
|Th3MinAadhaar|char(12)||
|Th3MinSharePer|numeric(3, 0)||
|**Authorised Signatories**|
|<u>***First Holder***</u>|
|FhAuthName|char(135)||
|FhAuthRefNo|char(10)||
|FhAuthPidProofCd|char(2)|1st Holder Authorised Signatory Proof of Identity|
|FhAuthAdrProofCd|char(2)|1st Holder Authorised Signatory Proof of Address|
|<u>***Second Holder***</u>|
|ShAuthName|char(135)||
|ShAuthRefNo|char(10)||
|ShAuthPidProofCd|char(2)|2nd Holder Authorised Signatory Proof of Identity|
|ShAuthAdrProofCd|char(2)|2nd Holder Authorised Signatory Proof of Address|
|<u>***Third Holder***</u>|
|ThAuthName|char(135)||
|ThAuthRefNo|char(10)||
|ThAuthPidProofCd|char(2)|3rd Holder Authorised Signatory Proof of Identity|
|ThAuthAdrProofCd|char(2)|3rd Holder Authorised Signatory Proof of Address|
|**Ben POA**|
|<u>***First Holder***</u>|
|FhPoaType|char(1)||
|FhPoaId|char(8)||
|FhPoaActiveDate|datetime||
|<u>***Second Holder***</u>|
|ShPoaType|char(1)||
|ShPoaId|char(8)||
|ShPoaActiveDate|datetime||
|<u>***Third Holder***</u>|
|ThPoaType|char(1)||
|ThPoaId|char(8)||
|ThPoaActiveDate|datetime||
|**Add Signature**|
|SigImg|text Base64String|Sent Signature image as  **Base64String**|

```jsx title="Request Sample (JSon Data)"
{
    "key": "ezhDMEI5ND4MLE3YwNH0=",
    "CompanyId": "04",
    "BranchId": "HO",
    "FhName": "Dummy FH Name",
    "ShortName": "Dummy Short Name",
    "FhDOB": "1984-05-27",
    "Gender": "M",
    "FhFather": "Dummy Father Name",
    "BenType": "01",
    "BenSubType": "01",
    "BenCategory": "02",
    "BenOccupation": "02",
    "FhEmail": "dummy@gmail.com",
    "FhLandPhone": "033-24008804",
    "FhMobile": "9804616461",
    "FhSmsYesNo": "Y",
    "FhPAN": "AMUPH7894E",
    "FhAadhaar": "ASSD56666",
    "FhMapin": "700020",
    "FhRtaYesNo": "N",
    "FhFmlyEmailYesNo": "N",
    "FhFmlyMobileYesNo": "N",
    "StaningIndicator": "Y",
    "CustClntYesNo": "N",
    "CustIncomeCd": "",
    "SharePerYesNo": "N",
    "FhBankAcNo": "12345566",
    "BankAcType": "10",
    "MicrNo": "110002031",
    "IFSC": "SBIN0006064",
    "EStatementYesNo": "Y",
    "StateCode": "WB",
    "BenLclAdrYesNo": "Y",
    "RgessYesNo": "N",
    "BsdaYesNo": "N",
    "CommodityYesNo": "N",
    "AutoPledgeYesNo": "N",
    "MinorIndYesNo": "N",
    "NomineeIndicator": "N",
    "NomineeName": "K M",
    "NomineeDOB": "1983-01-01",
    "FhLclAddress1": "226/1",
    "FhLclAddress2": "MINTO PARK",
    "FhLclAddress3": "J C BOSE RD",
    "FhLclAddress4": "KOLKATA",
    "FhLclPin": "700020",
    "FhLclPhone": "033-24008804",
    "FhLclMobile": "9804616461",
    "FhLclEmail": "dummy@gmail.com",
    "FhLclPAN": "AFDRM2769E",
    "FhLclAadhaar": "ASGTM4578E",
    "FhBnkAddress1": "228",
    "FhBnkAddress2": "AJC",
    "FhBnkAddress3": "BOSE ROAD",
    "FhBnkAddress4": "KOLKATA",
    "FhBnkPin": "700056",
    "FhBnkPhone": "033-24008804",
    "FhBnkEmail": "bank@gmail.com",
    "Fh1NomAddress1": "228/1",
    "Fh1NomAddress2": "AJC",
    "Fh1NomAddress3": "BOSE RD",
    "Fh1NomAddress4": "KOLKATA",
    "Fh1NomPin": "700080",
    "Fh1NomPhone": "033-24007785",
    "Fh1NomMobile": "9804644684",
    "Fh1NomEmail": "nominee@gmail.com",
    "Fh1NomSharePer": "100",
    "AdrProofCd": "10",
    "PidProofCd": "07",
    "FhLclStateCd": "19",
    "FhLclCntryCd": "356"
}
```

<pre language="html">
<table>
  <caption>***Return JSon Response***</caption>
  <thead>
    <tr>
      <th>Return Data</th>
      <th>Sample</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
         **JSon Data:**
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
    "message": "Record imported Successfully in SharePro"
}
```
</td>
      </tr>
       </tbody>
</table>
</pre>

___

## InsertClientImage ##

**Endpoint** : InsertClientImage

**Method** : **POST** or **GET**   |  Send raw **Json** data in **Body**


***Insert a new Client's Image / File (like photo, signature) into SharePro***

<table>
<tr>
<td>
**Request Data**
___
```key       <<RestAPI Key>>
cUcc          varchar(10)
cSegment      varchar(4)    -- "CM", "NSDL", "CDSL"
cCategory     varchar(10)
              "KYC"  : KYC Scan Copy,
              "SIG": Signature ,
              "MISC": Miscellaneous
              "1": CKYC - KYC
              "2": CKYC - PHOTO
              "3": CKYC - PAN
              "4": CKYC - UID / AADHAR
              "5": CKYC - Passport
              "6": CKYC - Driving License
              "7": CKYC - Voters Identity Card
              "8": CKYC - NREGA Job Card
              "9": CKYC - SIGN
              "10": CKYC - Simplified ID - issued by CG/SG/SB/RA/PSU/S
              "11": CKYC - Simplified ID - issued by a Gazzetted Offic
              "12": CKYC - Utility:Elec/Tel/Mob-PostPaid/PipeGas/Water
              "13": CKYC - Property / Municipal Tax Receipt
              "14": CKYC - Bank account / Post Office SB Statement
              "15": CKYC - Pension(Family) PO issued to Govt/PSU retir
              "16": CKYC - Allot Letter/Agreement (specified Employers
              "17": CKYC - Doc from ForEmbassy/ForGovtDepts/MissionInI
              "98": CKYC - Other
              "99": CKYC - Multiple Images

FileType                  char(10)              -- File, Image
cDescr                    varchar(100)
cNotes                    text
cImgFileName        varchar(100)       -- File Name  ( Like : signature.JPG )
cImg                        text                      -- Sent image as  Base64String
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
    "cUcc": "151A355",
    "cSegment": "CM",
    "cCategory": "SIG",
    "FileType": "Image",
    "cDescr": "This is my signature",
    "cNotes": "Notes",
    "cImgFileName": "signature.JPG",
    "cImg": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAxAJ4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAoqO7u4rC1knnkjhghQySSSMFWNQMkkngADnJr8qv2Cf+DkXVP+Clv/BVSx+Dvwv+FMjfCO3tdSn1XxZeTyPfxw28MjQXpiUCO3hlnEMIRy7k3CnKnKUAfqzRX5v/ALRf/Bzz+z9+zb/wULt/gPq/9qXFnY3jaR4l8YQkDTfDeohtn2eRCN8io3yyyIcRHIw21tv6QUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRXiv8AwUX/AOFyn9ib4hr+z7DYXHxik05Y/DS3csMSCVpo1lZWnIhEqwGVo/NITzAm75c0AfCP/B1X/wAFK/h/8B/+Cfnjb4J2njOW3+MHxEgsYbLSdJlJurKyW+t5riW7ZSPIhlt45YgGO6XzcBWTey6n/Bqf/wAE2F/Yu/4J92nxG1y3tv8AhNvjpDa+ImkRlka10cxb9Og3DIBeOVp2AOczqrDMfGL+yX/wa3/DHUP2UfE8f7Q1/wCJPH3xu+L9jDc+LPFcl+smoeHrppIrl4tPmcSrvSWNVe4cOZgrDCxuYq5//iCp/ZZ/6H79oD/weaR/8rKAPx7/AOCj11Al9+3tC0kIupP2ptOeOMsPMZFPjoMQOuAWTJHALL6iv6/NO1G31fT4Lu0nhurW6jWaGaFw8cyMMqysOCpBBBHBBr+K/wDbj/ZL+H/7Cnx0/aM+FvirS/ivbeNvC/iaK0+F80slmmnXeji8nL3mqFohJM0tkLVoTbCNDI8hbAUIf1O/4NK/+Ch/xM0X4+/8KD+LXiXxZqHh/wAbeDodb+G0HiC7lnW1hsWkh+z2Xmkslu9vHKVRf3arY/IADyAf0EV+b/7X3/B0x+zD+xn+07rXwq1xPiJ4i1rwzeHTtZ1DQNIt7jTdMulO2WB3luYpGeNsq/lxuAwK5JBA/SCv57/Fvx/+Kn/BAX9v39tXxR4u/Zj8T/GL4O/HDxTD4im8TBJ7Tw/ZW1xeXs8MUty1ncW7lpNUFu0cjIRJGAN25QQD9rP2LP8AgoD8IP8AgoZ8NpPFXwh8a6b4u0y1kEF5HGklveafLgHZPbyqssZ54LLtbBKlhzXslfyueGvG3/BLf/goN431fxf8TrH4wfsj+IrxnuLrRPCtwmreG7qRm+9bGPTbiSJjkkxiCCJQMKK4H9rn/hjj9gLUPht8WP2IP2hviV42+K/hPxbbXVzpfiTS7mG3FmiSS+d5jadZIyebFHFJCWfzUuDwArZAP64a/N//AILE/wDBxPof/BJD9p/wd8M7r4V658QLrxBoKeJtRvLPV0sv7NsmuLiEGOMwyefIPsk7MrNEoUL8/J2/nz+wX/wS/vv+DkTxp8ev2nviN8RPiV4GN14wl034YzWF3HINGhi3S+W8UiZeCCKazjT7PLDmRLgli2SPrz9m/wD4Ne9X8Kftc6P8Ufjj+054w/aIh0vw7qnhh9L8R6NP51xY31heWTW/2u41C5dIUW+uHVEUYdsgjJyAfpp+zh+0J4W/av8AgR4U+JHgm/8A7S8K+MtOi1PTpyu1/Lcco6/wyI25HU8qysDyK7avjf8A4I2/8Epdb/4JK/CrxV4Hn+MuvfFHwnqeoJeeH9MvtJXT4fC8e6ZpUiAmlLtM0qs5GxC0e4RqWYn7IoAKKKKACiiigAooooAKKKKACiiigAr80f8Agv5/wTg+Jnxl8QfDX9pr9ntof+F5/AF3urfThD5k3iPTw/m/Z0HSR42M2ITjzUuZlB3FVb9LqKAPkH/gjv8A8Fd/B/8AwVl+Alxq1hat4a+InhMx2fjHwtMT5uk3LbgJIy3L28hjk2MfmBVlYBl5+E/+CxPxl8Vf8Fqv+CgWj/sH/B3VFs/A/he4XWPix4mhhFxFZNbsreR6HyGKLtyN9zIiHaIWNe5ft2f8G2lh+0J+1nrHxu+Cvx4+IH7OHxC8WOz+Ibjw/E8ttflo1R2iW3uLSWF5CpaUmZ1kZidiksT9Df8ABJj/AIJFeBf+CTfwm1rSdA1bVPGPjHxhdrf+J/Feqxql5rEyg7VCgt5cKlpGVC7tulcs7E8AHnf7Xv8AwbZ/so/tX/DD+yY/hzpfgPxRY6OulaV4m8NobC6tGQKI554ImSC8k+UBmuEd2UkB1OGX5d/YA/4M9fBv7Iv7VXh34g+PPifovxo8O6DHdiXwjrHw9gj0/U3mtpYEacTXdyjLGZfNVTHnfHGQRtr9mKKAKmg6DY+FdDs9L0uytNN03ToEtrS0tYVhgtYkUKkaIoCqqqAAoAAAAFW6KKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z"
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
        "message": "File imported Successfully in SharePro"
      }
      ```
</td>
      
    </tr>
    <tr>
      
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

