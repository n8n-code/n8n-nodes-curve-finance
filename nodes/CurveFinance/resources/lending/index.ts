import type { INodeProperties } from 'n8n-workflow';

export const lendingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Lending"
					]
				}
			},
			"options": [
				{
					"name": "GET Get Lending Vaults",
					"value": "GET Get Lending Vaults",
					"action": "GET Get Lending Vaults",
					"description": "Returns information on all lending vaults, in a specific registry, on a specific chain.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getLendingVaults/{{$parameter[\"lendingBlockchainId\"]}}/{{$parameter[\"lendingRegistryId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Lending Vaults All",
					"value": "GET Get Lending Vaults All",
					"action": "GET Get Lending Vaults All",
					"description": "Returns all lending vaults, in all registries, on a specific chain.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getLendingVaults/all/{{$parameter[\"blockchainId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getLendingVaults/{lendingBlockchainId}/{lendingRegistryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lending"
					],
					"operation": [
						"GET Get Lending Vaults"
					]
				}
			}
		},
		{
			"displayName": "Lending Blockchain ID",
			"name": "lendingBlockchainId",
			"required": true,
			"default": "ethereum",
			"type": "options",
			"options": [
				{
					"name": "Ethereum",
					"value": "ethereum"
				},
				{
					"name": "Arbitrum",
					"value": "arbitrum"
				},
				{
					"name": "Optimism",
					"value": "optimism"
				},
				{
					"name": "Fraxtal",
					"value": "fraxtal"
				},
				{
					"name": "Sonic",
					"value": "sonic"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Lending"
					],
					"operation": [
						"GET Get Lending Vaults"
					]
				}
			}
		},
		{
			"displayName": "Lending Registry ID",
			"name": "lendingRegistryId",
			"required": true,
			"default": "oneway",
			"type": "options",
			"options": [
				{
					"name": "Oneway",
					"value": "oneway"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Lending"
					],
					"operation": [
						"GET Get Lending Vaults"
					]
				}
			}
		},
		{
			"displayName": "GET /getLendingVaults/all/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Lending"
					],
					"operation": [
						"GET Get Lending Vaults All"
					]
				}
			}
		},
		{
			"displayName": "Lending Blockchain ID",
			"name": "lendingBlockchainId",
			"required": true,
			"default": "ethereum",
			"type": "options",
			"options": [
				{
					"name": "Ethereum",
					"value": "ethereum"
				},
				{
					"name": "Arbitrum",
					"value": "arbitrum"
				},
				{
					"name": "Optimism",
					"value": "optimism"
				},
				{
					"name": "Fraxtal",
					"value": "fraxtal"
				},
				{
					"name": "Sonic",
					"value": "sonic"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Lending"
					],
					"operation": [
						"GET Get Lending Vaults All"
					]
				}
			}
		},
];
