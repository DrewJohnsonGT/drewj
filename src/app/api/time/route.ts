import { NextResponse } from 'next/server';
import { GOAL, START_DATE } from '~/constants';
import { getPercentOfGoal } from '~/utils/getPercentOfGoal';
import { getTimeSince } from '~/utils/getTimeSince';

export async function GET() {
  return NextResponse.json({
    percentOfGoal: getPercentOfGoal(START_DATE, GOAL),
    time: START_DATE,
    timeSince: getTimeSince(START_DATE),
  });
}
