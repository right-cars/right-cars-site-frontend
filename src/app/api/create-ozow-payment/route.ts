import { NextRequest, NextResponse } from 'next/server';
import axios from "axios";

export async function POST(req: NextRequest) {
    const body = await req.json()

    const OZOW_API_KEY = process.env.OZOW_API_KEY!
    const OZOW_MERCHANT_CODE = process.env.OZOW_MERCHANT_CODE!

    const {
        amount,
        reference,
        buyerEmail,
        returnUrl,
        cancelUrl,
        notifyUrl,
    } = body;

    const payload = {
        merchantCode: OZOW_MERCHANT_CODE,
        amount: amount.toFixed(2),
        currencyCode: 'ZAR',
        transactionReference: reference,
        bankReference: reference,
        successUrl: returnUrl,
        cancelUrl,
        notifyUrl,
        isTest: true,
        buyer: {
            emailAddress: buyerEmail,
        },
    };

    try {
        const {data} = await axios.post("https://api.ozow.com/api/v1/transactions", payload, {
            headers: {
                'ApiKey': OZOW_API_KEY,
            }
        });
        return NextResponse.json({ redirectUrl: data.redirectUrl });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ error })
    }


}
