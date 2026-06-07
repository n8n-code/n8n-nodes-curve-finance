import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { gaugesDescription } from './resources/gauges';
import { volumesAndApYsDescription } from './resources/volumes-and-ap-ys';
import { crvUsdDescription } from './resources/crv-usd';
import { miscDescription } from './resources/misc';
import { poolsDescription } from './resources/pools';
import { lendingDescription } from './resources/lending';
import { tokensDescription } from './resources/tokens';

export class CurveFinance implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'curve-finance',
		name: 'N8nDevCurveFinance',
		icon: { light: 'file:./curve-finance.svg', dark: 'file:./curve-finance.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Curve Finance decentralized exchange protocol for stablecoin swaps with low slippage across multiple blockchains',
		defaults: { name: 'curve-finance' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevCurveFinanceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Gauges",
					"value": "Gauges",
					"description": ""
				},
				{
					"name": "Volumes And AP Ys",
					"value": "Volumes And AP Ys",
					"description": ""
				},
				{
					"name": "Crv USD",
					"value": "Crv USD",
					"description": ""
				},
				{
					"name": "Misc",
					"value": "Misc",
					"description": ""
				},
				{
					"name": "Pools",
					"value": "Pools",
					"description": ""
				},
				{
					"name": "Lending",
					"value": "Lending",
					"description": ""
				},
				{
					"name": "Tokens",
					"value": "Tokens",
					"description": ""
				}
			],
			"default": ""
		},
		...gaugesDescription,
		...volumesAndApYsDescription,
		...crvUsdDescription,
		...miscDescription,
		...poolsDescription,
		...lendingDescription,
		...tokensDescription
		],
	};
}
