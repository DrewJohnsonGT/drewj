export const getPercentOfGoal = (date: Date, goal: number) => {
  const ms = Date.now() - date.getTime();
  const percentage = (ms / goal) * 100;
  return Math.round(percentage * 100) / 100;
};
