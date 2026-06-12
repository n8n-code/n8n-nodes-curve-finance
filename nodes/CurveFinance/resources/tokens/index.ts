import type { INodeProperties } from 'n8n-workflow';

export const tokensDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					]
				}
			},
			"options": [
				{
					"name": "GET Get Tokens All",
					"value": "GET Get Tokens All",
					"action": "GET Get Tokens All",
					"description": "Returns all tokens that can be found in Curve pools, on a specific chain.\nPools need at least $10k TVL for tokens to make this list.\n\nNote that tokens’ `usdPrice` is very simply the usd price of that token reported\nby the largest Curve pool on that chain, at that one point in time. There is no effort\nmade to average or smooth out those prices, they should be used for presentation purposes only.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getTokens/all/{{$parameter[\"blockchainId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getTokens/all/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"GET Get Tokens All"
					]
				}
			}
		},
		{
			"displayName": "Blockchain ID",
			"name": "blockchainId",
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
					"name": "Aurora",
					"value": "aurora"
				},
				{
					"name": "Avalanche",
					"value": "avalanche"
				},
				{
					"name": "Base",
					"value": "base"
				},
				{
					"name": "Bsc",
					"value": "bsc"
				},
				{
					"name": "Celo",
					"value": "celo"
				},
				{
					"name": "Fantom",
					"value": "fantom"
				},
				{
					"name": "Fraxtal",
					"value": "fraxtal"
				},
				{
					"name": "Harmony",
					"value": "harmony"
				},
				{
					"name": "Hyperliquid",
					"value": "hyperliquid"
				},
				{
					"name": "Kava",
					"value": "kava"
				},
				{
					"name": "Mantle",
					"value": "mantle"
				},
				{
					"name": "Moonbeam",
					"value": "moonbeam"
				},
				{
					"name": "Optimism",
					"value": "optimism"
				},
				{
					"name": "Polygon",
					"value": "polygon"
				},
				{
					"name": "Sonic",
					"value": "sonic"
				},
				{
					"name": "X Layer",
					"value": "x-layer"
				},
				{
					"name": "Xdai",
					"value": "xdai"
				},
				{
					"name": "Zkevm",
					"value": "zkevm"
				},
				{
					"name": "Zksync",
					"value": "zksync"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Tokens"
					],
					"operation": [
						"GET Get Tokens All"
					]
				}
			}
		},
];
