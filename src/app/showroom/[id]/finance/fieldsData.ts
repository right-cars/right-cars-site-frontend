export const fieldsBlock = [
  {
    fieldsBlock: {
      title: "identification details",
      fields: [
        { id: "firstName", label: "first name", type: "input", required: true },
        {
          id: "middleName",
          label: "middle name",
          type: "input",
          required: false,
        },
        { id: "surname", label: "surname", type: "input", required: true },
        { id: "idNumber", label: "id number", type: "input", required: true },
        {
          id: "dateOfBirth",
          label: "date of birth (ccyymmdd)",
          type: "input",
          required: true,
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Personal Details",
      fields: [
        {
          id: "preferredLanguage",
          label: "preferred language",
          type: "select",
          options: [
            "English",
            "Spanish",
            "French",
            "German",
            "Italian",
            "Ukrainian",
            "Russian",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "preferredContactMethod",
          label: "preferred contact method",
          type: "select",
          options: ["Cell Phone", "Home Phone", "Work Phone", "Email"],
          placeholder: "Cell Phone",
        },

        {
          id: "countryOfNationality",
          label: "country of nationality",
          type: "select",
          options: [
            "USA",
            "Canada",
            "UK",
            "Germany",
            "France",
            "Ukraine",
            "Poland",
            "India",
            "China",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "mobileType",
          label: "mobile type",
          type: "select",
          options: ["Android", "iOS", "Other"],
          placeholder: "Not Selected",
        },
        {
          id: "gender",
          label: "gender",
          type: "select",
          options: ["Male", "Female", "Non-binary", "Prefer not to say"],
          placeholder: "Not Selected",
        },
        {
          id: "mobileNumber",
          label: "mobile number",
          type: "input",
          required: true,
          phone:true
        },

        {
          id: "title",
          label: "title",
          type: "select",
          options: ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."],
          placeholder: "Not Selected",
        },

        { id: "phoneNumberH", label: "phone number (h)", type: "input", phone:true },

        {
          id: "graduate",
          label: "graduate",
          type: "select",
          options: ["Yes", "No"],
          placeholder: "Not Selected",
        },

        { id: "eMailAddress", label: "e-mail address", type: "input" },

        {
          id: "maritalStatus",
          label: "marital status",
          type: "select",
          options: ["Single", "Married", "Divorced", "Widowed"],
          placeholder: "Not Selected",
        },
        {
          id: "isWorkPhoneNumber",
          label: "is work phone number a cell",
          type: "select",
          options: ["Yes", "No"],
          placeholder: "Not Selected",
        },
        {
          id: "raceOrEthnicGroup",
          label: "race/ethnic group",
          type: "select",
          options: [
            "Caucasian",
            "African American",
            "Hispanic",
            "Asian",
            "Native American",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        { id: "phoneNumberW", label: "phone number (w)", type: "input" },
      ],
    },
  },
  {
    fieldsBlock: {
      title: "Residential Details",
      fields: [
        {
          id: "residentialAddress1",
          label: "residential address 1",
          type: "input",
        },
        {
          id: "postalAddress",
          label: "postal address",
          type: "select",
          options: ["same as residential address", "different address"],
          placeholder: "Not Selected",
        },
        {
          id: "residentialAddress2",
          label: "residential address 2",
          type: "input",
        },
        {
          id: "postalAddressLine1",
          label: "postal address line 1",
          type: "input",
        },
        { id: "residentialCity", label: "residential city", type: "input" },
        { id: "postalCity", label: "postal city", type: "input" },
        { id: "residentialSuburb", label: "residential suburb", type: "input" },
        { id: "postalSuburb", label: "postal suburb", type: "input" },
        { id: "residentialCode", label: "residential code", type: "input" },
        { id: "postalCode", label: "postal code", type: "input" },
        {
          id: "ownerTenantLodger",
          label: "owner/tenant/lodger",
          type: "select",
          options: ["owner", "tenant", "lodger", "other"],
          placeholder: "Not Selected",
        },
        {
          id: "outstandingBondBalance",
          label: "outstanding bond balance",
          type: "input",
        },
        {
          id: "bondedVia",
          label: "bonded via",
          type: "select",
          options: ["bank", "private lender", "company", "not bonded"],
          placeholder: "Not Selected",
        },
        {
          id: "propertyCurrentValue",
          label: "property current value",
          type: "input",
        },
        {
          id: "periodAtAddress",
          label: "period at address (yy/mm)",
          type: "input",
        },
        {
          id: "periodAtPreviousAddress",
          label: "period at previous address (yy/mm)",
          type: "input",
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Employer Details",
      fields: [
        {
          id: "employerName",
          label: "employer name (please capture exactly as per payslip)",
          type: "input",
        },
        {
          id: "occupation",
          label: "occupation",
          type: "select",
          options: [
            "Software Engineer",
            "Data Analyst",
            "Project Manager",
            "Accountant",
            "Doctor",
            "Teacher",
            "Sales Manager",
            "Marketing Specialist",
            "Lawyer",
            "Architect",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "employerIndustryType",
          label: "employer industry type",
          type: "select",
          options: [
            "Information Technology",
            "Finance & Banking",
            "Healthcare",
            "Education",
            "Retail & E-commerce",
            "Manufacturing",
            "Real Estate",
            "Transportation & Logistics",
            "Government",
            "Other",
          ],
          placeholder: "Not Selected",
        },

        {
          id: "employmentType",
          label: "Employment Type",
          type: "select",
          options: [
            "full-time",
            "part-time",
            "contract",
            "freelance",
            "internship",
            "temporary",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "employmentLevel",
          label: "Employment Level",
          type: "select",
          options: [
            "full-time",
            "entry level",
            "junior",
            "mid-level",
            "senior",
            "manager",
            "director",
            "executive",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "clientType",
          label: "Client Type",
          type: "select",
          options: [
            "full-time",
            "individual",
            "business",
            "government entity",
            "non-profit organization",
            "startup",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "employerAddressLine1",
          label: "Employer Address Line 1",
          type: "input",
        },
        {
          id: "employerAddressLine2",
          label: "Employer Address Line 2",
          type: "input",
        },
        {
          id: "employerCity",
          label: "Employer City",
          type: "input",
        },
        {
          id: "companyYearEnd",
          label: "Company Year End:",
          type: "select",
          options: ["December 31", "March 31", "June 30", "September 30"],
          placeholder: "Not Selected",
        },
        {
          id: "employerSuburb",
          label: "employer Suburb",
          type: "input",
        },
        {
          id: "postalCodeEmployer",
          label: "Postal Code",
          type: "input",
        },
        {
          id: "periodEmployed",
          label: "Period Employed (YY/MM)",
          type: "input",
        },
        {
          id: "periodPreviouslyEmployed",
          label: "Period Previously Employed (YY/MM)",
          type: "input",
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Income Details",
      fields: [
        {
          id: "sourceOfIncome",
          label: "Source of income",
          type: "select",
          options: [
            "Salary",
            "Business Income",
            "Freelance / Contract Work",
            "Investments (Stocks, Bonds, etc.)",
            "Rental Income",
            "Pension / Retirement Fund",
            "Government Assistance",
            "Inheritance / Trust Fund",
            "Dividends",
            "Royalties",
            "Other",
          ],
          placeholder: "Not Selected",
        },

        {
          id: "carAllowance",
          label: "Car allowance (Inc in Gross)",
          type: "input",
        },
        {
          id: "monthlyCommission",
          label: "Monthly Commission (Inc in Gross)",
          type: "input",
        },
        {
          id: "otherIncome",
          label: "Other Income",
          type: "input",
        },
        {
          id: "netTakehomePay",
          label: "Net Take-home Pay",
          type: "input",
          requited: true,
        },
        {
          id: "totalMonthlyIncome",
          label: "Total Monthly Income",
          type: "input",
        },
        {
          id: "grossRemuneration",
          label: "Gross Remuneration",
          type: "input",
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Expenses Detail",
      fields: [
        {
          id: "bondPayment",
          label: "Bond Payment",
          type: "input",
          required: true,
        },
        {
          id: "telephonePayments",
          label: "Telephone Payments",
          type: "input",
        },
        {
          id: "rent",
          label: "Rent",
          type: "input",
          required: true,
        },
        {
          id: "transportCosts",
          label: "Transport Costs",
          type: "input",
        },
        {
          id: "bondPaymentRentTotal",
          label: "Bond Payment/Rent Total",
          type: "input",
        },
        {
          id: "foodAndEntertainment",
          label: "Food and Entertainment",
          type: "input",
        },
        {
          id: "ratesWaterElectricity",
          label: "Rates, Water & Electricity",
          type: "input",
        },
        {
          id: "educationCosts",
          label: "Education Costs",
          type: "input",
        },
        {
          id: "vehicleInstalments",
          label: "Vehicle Instalments (Excluding Instalments to be settled)",
          type: "input",
        },
        {
          id: "maintenance",
          label: "Maintenance",
          type: "input",
        },
        {
          id: "personalLoanRepayment",
          label: "Personal Loan Repayments",
          type: "input",
        },
        {
          id: "householdExpenses",
          label: "Household Expenses",
          type: "input",
        },
        {
          id: "creditCardRepayments",
          label: "Credit Card Repayments",
          type: "input",
        },
        {
          id: "otherExpenses",
          label: "Other Expenses",
          type: "input",
        },
        {
          id: "furnitureAccounts",
          label: "Furniture Accounts",
          type: "input",
        },
        {
          id: "loansRepaidViaPayrollDeduction",
          label: "Loans repaid via payroll deduction",
          type: "input",
        },
        {
          id: "clothingAccounts",
          label: "Clothing Accounts",
          type: "input",
        },
        {
          id: "totalExpenses",
          label: "TOTAL Expenses",
          type: "input",
        },
        {
          id: "overdraftRepayments",
          label: "Overdraft Repayments",
          type: "input",
        },
        {
          id: "disposableIncome",
          label: "Disposable Income",
          type: "input",
        },
        {
          id: "policyOrInsurancePayments",
          label: "Policy/Insurance Payments",
          type: "input",
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Guarantee Details",
      fields: [
        {
          id: "surety",
          label: "Surety",
          type: "select",
          options: [
            "Personal Surety",
            "Corporate Surety",
            "Bank Guarantee",
            "Insurance Bond",
            "Property Collateral",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "suretyDescription",
          label: "Surety Description",
          type: "input",
        },

        {
          id: "guarantor",
          label: "Guarantor",
          type: "select",
          options: [
            "Individual Guarantor",
            "Corporate Guarantor",
            "Government-backed Guarantor",
            "Financial Institution",
            "Family Member",
            "Employer",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "guarantorDescription",
          label: "Guarantor Description",
          type: "input",
        },
        {
          id: "coDebtor",
          label: "Co-Debtor",
          type: "select",
          options: [
            "Spouse",
            "Business Partner",
            "Family Member",
            "Friend",
            "Employer",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "coDebtorDescription",
          label: "Co-Debtor Description",
          type: "input",
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Payment History",
      fields: [
        {
          id: "underDebtReview",
          label: "Are You Currently Under Debt-Review?",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
        {
          id: "debtRearrangement",
          label:
            "Do you have a re-arrangement in place with any credit provider as a result of debt Counselling?",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
        {
          id: "administrationOrCurator",
          label:
            "Are you currently under administration order or Curator Bonus?",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
        {
          id: "previousAdministrationOrder",
          label: "Have you ever been under administration order?",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
        {
          id: "pastJudgmentRecord",
          label: "Have you ever had a judgment against you to your knowledge?",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
        {
          id: "creditBureauDispute",
          label: "Do you have a dispute in progress with a credit bureau?",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
        {
          id: "sequestrationOrder",
          label: "Are you currently under sequestration order?",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Finance Details",
      fields: [
        {
          id: "agreement",
          label: "Agreement",
          type: "select",
          options: [
            "Lease",
            "Loan",
            "Hire Purchase",
            "Rental",
            "Credit Agreement",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "repaymentPeriod",
          label: "Repayment Period",
          type: "select",
          options: [
            "6 Months",
            "12 Months",
            "24 Months",
            "36 Months",
            "48 Months",
            "60 Months",
          ],
          placeholder: "Not Selected",
        },

        {
          id: "paymentFrequency",
          label: "Payment Frequency",
          type: "select",
          options: ["Monthly", "Quarterly", "Bi-Weekly", "Weekly", "Annually"],
          placeholder: "Not Selected",
        },
        {
          id: "interestRate",
          label: "Interest Rate: %",
          type: "input",
        },
        {
          id: "rateIndicator",
          label: "Rate Indicator",
          type: "select",
          options: ["Fixed", "Variable", "Prime-Linked"],
          placeholder: "Not Selected",
        },
        {
          id: "residualOrBalloonValue",
          label: "Residual / Balloon Value: %",
          type: "input",
        },
        {
          id: "deposit",
          label: "Deposit",
          type: "input",
        },
        {
          id: "financeInitiationFees",
          label: "Finance Initiation Fees",
          type: "select",
          options: ["Included in Loan", "Paid Upfront"],
          placeholder: "Not Selected",
        },

        {
          id: "payInAdvance",
          label: "Pay in Advance",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Relative Details",
      fields: [
        {
          id: "firstNameRelative",
          label: "First Name",
          type: "input",
        },

        {
          id: "surnameRelative",
          label: "Surname",
          type: "input",
        },
        {
          id: "relation",
          label: "Relation",
          type: "select",
          options: [
            "Parent",
            "Sibling",
            "Spouse",
            "Child",
            "Grandparent",
            "Aunt/Uncle",
            "Cousin",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "preferredContactMethodRelative",
          label: "Preferred Contact Method",
          type: "select",
          options: ["Cell Phone", "Home Phone", "Work Phone", "Email"],
          placeholder: "Not Selected",
        },
        {
          id: "contactNumberRelative",
          label: "Contact Number",
          type: "input",
          phone:true
        },
        {
          id: "relativeAddress1",
          label: "Relative Address 1",
          type: "input",
        },
        {
          id: "relativeAddress2",
          label: "Relative Address 2",
          type: "input",
        },
        {
          id: "relativeCity",
          label: "Relative City",
          type: "input",
        },
        {
          id: "relativeSuburb",
          label: "Relative Suburb",
          type: "input",
        },
        {
          id: "postalCodeRelative",
          label: "Postal Code",
          type: "input",
        },
      ],
    },
  },

  {
    fieldsBlock: {
      title: "Banking Details",
      fields: [
        {
          id: "bankName",
          label: "Bank Name",
          type: "select",
          options: [
            "ABSA",
            "Capitec",
            "FNB",
            "Nedbank",
            "Standard Bank",
            "Other",
          ],
          placeholder: "Not Selected",
        },

        {
          id: "accountNumber",
          label: "Account Number",
          type: "input",
        },
        {
          id: "accountHolder",
          label: "Account Holder (Same as Applicant)",
          type: "input",
        },
        {
          id: "accountType",
          label: "Account Type",
          type: "select",
          options: ["Savings", "Cheque/Current", "Transmission"],
          placeholder: "Not Selected",
        },
        {
          id: "branchCode",
          label: "Branch Code",
          type: "input",
        },
        {
          id: "settleExistingInstalment",
          label: "Settle existing Instalment",
          type: "select",
          options: ["yes", "no"],
          placeholder: "Not Selected",
        },
        {
          id: "paymentMethod",
          label: "payment Method",
          type: "select",
          options: [
            "Debit Order",
            "EFT (Electronic Funds Transfer)",
            "Cash Deposit",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "accountToSettle",
          label: "Account No. to settle",
          type: "input",
        },
        {
          id: "bankNameSettledAcc",
          label: "Bank Name (Account to be settled)",
          type: "select",
          options: [
            "ABSA",
            "Capitec",
            "FNB",
            "Nedbank",
            "Standard Bank",
            "Other",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "monthlyInstalment",
          label: "Monthly Instalment (Account to be settled)",
          type: "input",
        },
        {
          id: "settlementAmount",
          label: "Settlement Amount",
          type: "input",
        },
        {
          id: "paymentDate",
          label: "Payment Date",
          type: "select",
          options: [
            "1st of the Month",
            "15th of the Month",
            "25th of the Month",
            "Last Day of the Month",
          ],
          placeholder: "Not Selected",
        },
        {
          id: "bankBranch",
          label: "Bank Branch",
          type: "input",
        },
      ],
    },
  },
];
