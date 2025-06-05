import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import axios from 'axios';

export async function POST(req: NextRequest) {
    const body = await req.json();

    const siteCode = process.env.OZOW_SITE_CODE!;
    const privateKey = process.env.OZOW_PRIVATE_KEY!;
    const transactionReference = `TX-${Date.now()}`;
    console.log({
        siteCode,
        privateKey,
    })

    const data = {
        siteCode,
        countryCode: 'ZA',
        currencyCode: 'ZAR',
        amount: body.amount,
        transactionReference,
        bankReference: 'Right cars',
        isTest: true,
        customer: {
            name: body.name,
            email: body.email,
            phone: body.phone,
        },
        successUrl: `${process.env.BASE_URL}/payment-success`,
        errorUrl: `${process.env.BASE_URL}/payment-failed`,
        cancelUrl: `${process.env.BASE_URL}/payment-cancelled`,
        notifyUrl: `${process.env.BASE_URL}/api/ozow/notify`,
    };

    const stringToHash = `${data.siteCode}${data.countryCode}${data.currencyCode}${data.amount}${data.transactionReference}${data.bankReference}${data.customer.email}${data.successUrl}${data.errorUrl}${data.cancelUrl}${data.notifyUrl}${privateKey}`;
    const hash = crypto.createHash('sha512').update(stringToHash.toLowerCase()).digest('hex');
    console.log(hash);
    try {
        const payload = {
            countryCode: "ZA",
            amount: body.amount,
            transactionReference,
            bankReference: 'Right cars',
            cancelUrl: `${process.env.BASE_URL}/payment-cancelled`,
            currencyCode: "ZAR",
            errorUrl: `${process.env.BASE_URL}/payment-failed`,
            isTest: true,
            notifyUrl: `${process.env.BASE_URL}/api/ozow/notify`,
            siteCode,
            successUrl: `${process.env.BASE_URL}/payment-success`,
            hashCheck: hash
        };
        console.log(payload);
        const {data} = await axios.post("https://stagingapi.ozow.com/PostPaymentRequest", payload, {
            headers: {
                ApiKey: process.env.OZOW_API_KEY!
            }
        });
        // console.log(data);
        return NextResponse.json({ redirectUrl: data.url });
    }
    catch(error) {
        //@ts-expect-error
        return NextResponse.json({ error: JSON.stringify(error?.response) });
    }



    // const redirectUrl = `https://pay.ozow.com/?SiteCode=${siteCode}&TransactionReference=${transactionReference}&Amount=${data.amount}&BankReference=${data.bankReference}&CustomerEmail=${data.customer.email}&SuccessUrl=${encodeURIComponent(data.successUrl)}&CancelUrl=${encodeURIComponent(data.cancelUrl)}&ErrorUrl=${encodeURIComponent(data.errorUrl)}&NotifyUrl=${encodeURIComponent(data.notifyUrl)}&HashCheck=${hash}`;


}


