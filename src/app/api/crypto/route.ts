import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  if (process.env.DEV) {
    return NextResponse.json(1000000);
  }

  const symbol = req.nextUrl.searchParams.get('symbol');
  if (!symbol) {
    return NextResponse.json({ error: 'Symbol is required' }, { status: 400 });
  }

  try {
    await fetch(
      `https://rest.coinapi.io/v1/ohlcv/${String(
        symbol,
      )}/latest?period_id=30MIN&limit=1`,
      {
        headers: {
          'X-CoinAPI-Key': process.env.CRYPTO_API_KEY,
        },
      },
    )
      .then(async (res) => await res.json())
      .then((price) => {
        console.log(price);
        const priceHigh = price[0]?.price_high;
        return NextResponse.json(parseInt(priceHigh));
      })
      .catch((e) => {
        console.error(e);
        return NextResponse.json({ error: e }, { status: 500 });
      });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
