import { NextResponse } from 'next/server';
import { GOALS } from '~/constants';

export async function GET() {
  return NextResponse.json(GOALS);
}
