import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  if (process.env.DEV) {
    return NextResponse.json(1000000);
  }

  if (!process.env.CRYPTO_API_KEY) {
    return NextResponse.json(
      { error: 'CRYPTO_API_KEY is not set' },
      { status: 500 },
    );
  }

  const symbol = req.nextUrl.searchParams.get('symbol');
  if (!symbol) {
    return NextResponse.json({ error: 'Symbol is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://rest.coinapi.io/v1/ohlcv/${String(
        symbol,
      )}/latest?period_id=30MIN&limit=1`,
      {
        headers: {
          'X-CoinAPI-Key': process.env.CRYPTO_API_KEY,
        },
      },
    );

    const jsonResponse = await response.json();
    const priceHigh = jsonResponse[0]?.price_high;
    return NextResponse.json(parseInt(priceHigh));
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
