import type { INodeProperties } from 'n8n-workflow';

export const gaugesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Gauges"
					]
				}
			},
			"options": [
				{
					"name": "GET Get All Gauges",
					"value": "GET Get All Gauges",
					"action": "GET Get All Gauges",
					"description": "Returns all Curve gauges, on all chains, in all registries. If any Curve pool, anywhere, has a gauge, then it’ll be returned by this endpoint.\nThe only exception are sidechain non-factory gauges, which aren’t indexed by any registry, and have been discontinued for a long time now. On sidechains, only factory gauges exist; on Ethereum, both \"main\" (non-factory) and factory gauges exist.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getAllGauges"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getAllGauges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gauges"
					],
					"operation": [
						"GET Get All Gauges"
					]
				}
			}
		},
];
