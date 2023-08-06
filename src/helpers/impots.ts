const defaultMilestones = [
	{
		amount: 10777,
		percent: 0
	},
	{
		amount: 27478,
		percent: 0.11
	},
	{
		amount: 78570,
		percent: 0.3
	},
	{
		amount: 168994,
		percent: 0.41
	},
	{
		amount: Infinity,
		percent: 0.45
	},

]

export const getIncomeTax = (income: number, milestones = defaultMilestones) => {
	const incomeTax = milestones.reduce((acc, milestone, index) => {
		let start = index === 0 ? 0 : milestones[index - 1].amount
		let end = milestone.amount
		if (start > income) 
			return acc;

		const taxableAmount = Math.min(income, end) - start
		return acc + taxableAmount * milestone.percent
	}, 0)

	return incomeTax
}