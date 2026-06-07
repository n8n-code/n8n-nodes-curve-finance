import type { INodeProperties } from 'n8n-workflow';

export const crvUsdDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Crv USD"
					]
				}
			},
			"options": [
				{
					"name": "GET Get Crv Circ Supply",
					"value": "GET Get Crv Circ Supply",
					"action": "GET Get Crv Circ Supply",
					"description": "Returns the circulating supply of crvUSD",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getCrvCircSupply"
						}
					}
				},
				{
					"name": "GET Get Crvusd Total Supply",
					"value": "GET Get Crvusd Total Supply",
					"action": "GET Get Crvusd Total Supply",
					"description": "Returns the total supply of crvUSD",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getCrvusdTotalSupply"
						}
					}
				},
				{
					"name": "GET Get Crvusd Total Supply Number",
					"value": "GET Get Crvusd Total Supply Number",
					"action": "GET Get Crvusd Total Supply Number",
					"description": "Returns the total supply of crvUSD as a number",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getCrvusdTotalSupplyNumber"
						}
					}
				},
				{
					"name": "GET Get Scrvusd Total Supply Number",
					"value": "GET Get Scrvusd Total Supply Number",
					"action": "GET Get Scrvusd Total Supply Number",
					"description": "Returns the total supply of scrvUSD as a number",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getScrvusdTotalSupplyNumber"
						}
					}
				},
				{
					"name": "GET Get Scrvusd Total Supply Result",
					"value": "GET Get Scrvusd Total Supply Result",
					"action": "GET Get Scrvusd Total Supply Result",
					"description": "Returns the total supply of scrvUSD as a JSON object",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getScrvusdTotalSupplyResult"
						}
					}
				},
				{
					"name": "GET Get Volumes Ethereum Crvusd Amms",
					"value": "GET Get Volumes Ethereum Crvusd Amms",
					"action": "GET Get Volumes Ethereum Crvusd Amms",
					"description": "Returns last daily volume for each [crvUSD AMM](https://docs.curve.fi/crvUSD/amm/)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getVolumes/ethereum/crvusd-amms"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getCrvCircSupply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crv USD"
					],
					"operation": [
						"GET Get Crv Circ Supply"
					]
				}
			}
		},
		{
			"displayName": "GET /getCrvusdTotalSupply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crv USD"
					],
					"operation": [
						"GET Get Crvusd Total Supply"
					]
				}
			}
		},
		{
			"displayName": "GET /getCrvusdTotalSupplyNumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crv USD"
					],
					"operation": [
						"GET Get Crvusd Total Supply Number"
					]
				}
			}
		},
		{
			"displayName": "GET /getScrvusdTotalSupplyNumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crv USD"
					],
					"operation": [
						"GET Get Scrvusd Total Supply Number"
					]
				}
			}
		},
		{
			"displayName": "GET /getScrvusdTotalSupplyResult",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crv USD"
					],
					"operation": [
						"GET Get Scrvusd Total Supply Result"
					]
				}
			}
		},
		{
			"displayName": "GET /getVolumes/ethereum/crvusd-amms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Crv USD"
					],
					"operation": [
						"GET Get Volumes Ethereum Crvusd Amms"
					]
				}
			}
		},
];
