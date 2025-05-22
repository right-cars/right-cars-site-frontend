import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
    const OZOW_API_KEY = process.env.OZOW_API_KEY!
    const OZOW_MERCHANT_CODE = process.env.OZOW_MERCHANT_CODE!

    const { transactionReference } = await req.json()

    const payload = {
        merchantCode: OZOW_MERCHANT_CODE,
        transactionReference,
    }

    try {
        const {data, status} = await axios.post("https://api.ozow.com/api/v1/transactions/gettransaction", payload, {
            headers: {
                'ApiKey': OZOW_API_KEY,
            }
        });
        return NextResponse.json({ status, payment: data })
    }
    catch(error) {
        return NextResponse.json({ error })
    }
}
