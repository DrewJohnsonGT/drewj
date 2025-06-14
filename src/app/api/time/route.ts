import { NextResponse } from 'next/server';
import { GOAL, START_DATE } from '~/constants';

export async function GET() {
  return NextResponse.json({
    goal: GOAL,
    time: START_DATE.getTime(),
  });
}
