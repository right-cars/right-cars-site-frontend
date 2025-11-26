export const data = {
  block1: [
    {
      question: "How do I reserve a vehicle?",
      answer: {
        txt: "To secure a vehicle, you can use our Reserve Now option, which allows you to hold a vehicle for 48 hours by paying a  R 2,500 holding deposit.",
        lists: [
          {
            numbering: true,
            title: "Steps to Reserve:",
            items: [
              { txt: "Log in or sign up on the Right Cars website." },
              {
                txt: "Find your car and click Reserve Now.",
              },
              {
                txt: "Follow the prompts to complete your reservation.",
              },
              {
                txt: "Make the payment through our secure ozow payment portal.",
              },
              {
                txt: "Receive confirmation—your car is reserved for 48 hours!",
              },
            ],
          },
        ],
      },
    },
    {
      question: "What documents are required to buy a vehicle?",
      answer: {
        lists: [
          {
            title: "Buying cash (as a South African):",
            items: [
              { txt: "Log in or sign up on the Right Cars website." },
              {
                txt: "ID / Driving licence.",
              },
              {
                txt: "Proof of physical address (not older than 3 months).",
              },
            ],
          },
          {
            title: "Buying cash (as a South African):",
            items: [
              {
                txt: "Completed and signed application form (Individual/Company).",
              },
              {
                txt: "Copy of ID.",
              },
              {
                txt: "Copy of valid driver's licence.",
              },
              {
                txt: "Latest 3 months' payslips.",
              },
              { txt: "Latest 3 months' stamped bank statements." },
              { txt: "Proof of physical address (not older than 3 months)." },
            ],
          },

          {
            title: "Buying cash (as a foreigner):",
            items: [
              { txt: "Passport." },
              {
                txt: "Traffic registration.",
              },
              {
                txt: "Proof of physical address (not older than 3 months)",
              },
            ],
          },
          {
            title: "Buying through finance (as a foreigner):",
            items: [
              {
                txt: "A clear copy of your passport with the original work permit.",
              },
              {
                txt: "A clear copy of your valid driver's licence. (Should you only be in possession of an international driver's licence it will have to be approved by the finance house and accompanied by an approval letter from your insurance company upon taking delivery of your new vehicle.)",
              },
              {
                txt: "A signed copy of your employment contract.",
              },
              { txt: "Latest 3 months' payslips." },
              {
                txt: "Stamped bank statements for the last 3 months. These statements must reflect your salary for the last 3 months. Internet bank statements will not be accepted.",
              },
              {
                txt: "Proof of your physical address (not older than 3 months).",
              },
              {
                txt: "A copy of your spouse's ID if you are married in community of property.",
              },
              { txt: "A traffic register." },
            ],
          },
        ],
      },
    },

    {
      question: "Can I get information about the previous vehicle owner ?",
      answer: {
        txt: "According to the POPI act, we cannot disclose this information",
      },
    },
    {
      question:
        "Am I allowed to have my own mechanic inspect and evaluate the vehicle?",
      answer: {
        txt: "Sure! You're welcome to bring a professional mechanic to inspect the vehicle. Your satisfaction and confidence in your purchase matter to us.",
      },
    },
    {
      question: "Can I finance a vehicle?",
      answer: {
        txt: "Yes, financing is available for all vehicles through major financial institutions.",
      },
    },
    {
      question: "What documents do I need to finance a vehicle?",
      answer: {
        lists: [
          {
            title: "For South African citizens:",
            items: [
              {
                txt: "Completed and signed finance application form (Individual/Company).",
              },
              {
                txt: "Copy of your ID.",
              },
              {
                txt: "Copy of a valid driver's licence.",
              },
              { txt: "Last 3 months' payslips." },
              { txt: "Last 3 months' stamped bank statements." },
              { txt: "Proof of physical address (not older than 3 months)." },
            ],
          },
          {
            title: "For foreign nationals:",
            items: [
              {
                txt: "Clear copy of your passport with a valid work permit.",
              },
              {
                txt: "Clear copy of a valid driver's licence.",
              },
              {
                txt: "If you only have an international driver's licence, it must be approved by the finance provider and accompanied by an approval letter from your insurance company.",
              },
              {
                txt: "Signed copy of your employment contract.",
              },
              { txt: "Last 3 months' payslips." },
              {
                txt: "Last 3 months' stamped bank statements (must show salary deposits; internet statements are not accepted).",
              },
              { txt: "Proof of physical address (not older than 3 months)." },
              {
                txt: "Copy of your spouse's ID if married in community of property.",
              },
              { txt: "Traffic register." },
            ],
          },
        ],
      },
    },
  ],
  block2: [
    {
      question: "Can blacklisted customers apply for vehicle finance?",
      answer: {
        txt: "we do not offer specialized finance options for blacklisted clients. At this time, blacklisted customers can only purchase vehicles with cash.",
      },
    },
    {
      question: "How do online auctions work?",
      answer: {
        lists: [
          {
            numbering: true,
            items: [
              {
                bold: "Register Online - ",
                txt: " complete a quick and easy",
                link: { href: "/", name: "online registration." },
              },
              {
                bold: "Pay Registration Fee - R 2,500.",
                txt: " it is required to join the auction.",
              },
              {
                bold: "Browse Vehicles - ",
                txt: "explore available auction vehicles, each with an independent Dekra used vehicle report.",
              },
              {
                bold: "Place Your Bid - ",
                txt: "submit your bid. The highest bidder at the auction's closing wins the vehicle.",
              },
              {
                bold: "Finance Options - ",
                txt: "auction vehicles can be financed through major financial institutions.",
              },
              {
                bold: "Final Price Includes VAT - ",
                txt: "the bid price is the total amount you pay, with no hidden costs.",
              },
            ],
          },
        ],
      },
    },

    {
      question: "What documents are required to register for an auction?",
      answer: {
        lists: [
          {
            items: [
              {
                bold: "Identification - ",
                txt: " a copy of your valid ID.omplete a quick and easy",
              },
              {
                bold: "Proof of Address - ",
                txt: "a document confirming your residential address (not older than 3 months).",
              },
              {
                bold: "Driver's Licence -  ",
                txt: "a copy of your valid driver's licence.",
              },
              {
                bold: "Banking Details - ",
                txt: "proof of your banking details.",
              },
              {
                bold: "Registration Fee Payment - ",
                txt: "proof of payment for the R 2,500 auction registration fee.",
              },
            ],
          },
        ],
      },
    },

    {
      question: "Can I get a refund for the auction registration fee?",
      answer: {
        txt: `Yes, if no purchase is made, your registration deposit is fully refundable.<br/>
However, once you successfully win a vehicle in the online auction, the deposit becomes non-refundable.<br/> 
Each R 2,500 registration deposit allows you to purchase one vehicle at the auction.<br/>
If the full purchase price is not paid within 48 hours after the auction ends, you will forfeit your deposit.<br/>
You can request a refund when a Right Cars representative contacts you within 72 hours of your deposit payment.`,
      },
    },
    {
      question: "Where to find our auction rules?",
      answer: {
        txt: "Our auction rules are available on our official website at ",
        link: { href: "/auction-rules", name: "auction rules." },
      },
    },
    {
      question: "Do you offer nationwide delivery?",
      answer: {
        txt: "Yes, we offer nationwide delivery to major cities for an additional fee. The cost of delivery depends on the distance and location. Please contact us for a quote.",
      },
    },
  ],
};
