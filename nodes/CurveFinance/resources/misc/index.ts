import type { INodeProperties } from 'n8n-workflow';

export const miscDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					]
				}
			},
			"options": [
				{
					"name": "GET Get All Gauges Status",
					"value": "GET Get All Gauges Status",
					"action": "GET Get All Gauges Status",
					"description": "Returns per-scope cache status for `getAllGauges`, including stale scopes,\nfailed cold scopes, and scopes missing required curve-prices gauges.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getAllGaugesStatus"
						}
					}
				},
				{
					"name": "GET Get Gas",
					"value": "GET Get Gas",
					"action": "GET Get Gas",
					"description": "Returns Ethereum gas prices (in wei), computed onchain from `eth_feeHistory`",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getGas"
						}
					}
				},
				{
					"name": "GET Get Platforms",
					"value": "GET Get Platforms",
					"action": "GET Get Platforms",
					"description": "Returns platforms (also known as `blockchainId` in other API endpoints) that Curve is deployed on, and which pool registries are available on each platform.\nUseful to then query e.g. [`/api/getPools/{blockchainId}/{registryId}`](#/default/get_getPools__blockchainId___registryId_)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPlatforms"
						}
					}
				},
				{
					"name": "GET Get Points Campaigns",
					"value": "GET Get Points Campaigns",
					"action": "GET Get Points Campaigns",
					"description": "Returns points campaigns (see https://github.com/curvefi/curve-frontend/tree/main/packages/external-rewards/src)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPointsCampaigns"
						}
					}
				},
				{
					"name": "GET Get Registry Address",
					"value": "GET Get Registry Address",
					"action": "GET Get Registry Address",
					"description": "Returns address of the Ethereum registry\nSee <https://curve.readthedocs.io/registry-registry.html#registry>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getRegistryAddress"
						}
					}
				},
				{
					"name": "GET Get Weekly Fees",
					"value": "GET Get Weekly Fees",
					"action": "GET Get Weekly Fees",
					"description": "Returns weekly fees",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getWeeklyFees"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getAllGaugesStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Get All Gauges Status"
					]
				}
			}
		},
		{
			"displayName": "GET /getGas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Get Gas"
					]
				}
			}
		},
		{
			"displayName": "GET /getPlatforms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Get Platforms"
					]
				}
			}
		},
		{
			"displayName": "GET /getPointsCampaigns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Get Points Campaigns"
					]
				}
			}
		},
		{
			"displayName": "GET /getRegistryAddress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Get Registry Address"
					]
				}
			}
		},
		{
			"displayName": "GET /getWeeklyFees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Get Weekly Fees"
					]
				}
			}
		},
];
