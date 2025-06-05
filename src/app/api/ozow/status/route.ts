import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
    const { transactionReference } = await req.json();
    const siteCode = process.env.OZOW_SITE_CODE!;
    const privateKey = process.env.OZOW_PRIVATE_KEY!;

    const stringToHash = `${siteCode}|${transactionReference}|${privateKey}`;
    const hashCheck = crypto.createHash('sha512').update(stringToHash).digest('hex');

    const res = await fetch("https://api.ozow.com/GetTransactionByReference", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ siteCode, transactionReference, hashCheck }),
    });

    const result = await res.json();
    return NextResponse.json(result);
}
