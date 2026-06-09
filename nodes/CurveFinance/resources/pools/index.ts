import type { INodeProperties } from 'n8n-workflow';

export const poolsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					]
				}
			},
			"options": [
				{
					"name": "GET Get Hidden Pools",
					"value": "GET Get Hidden Pools",
					"action": "GET Get Hidden Pools",
					"description": "Returns a list of pool ids, grouped by chain id, that are known to be dysfunctional in some way. This list can be used by front-ends to avoid displaying these pools, and protect users from interacting with these pools.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getHiddenPools"
						}
					}
				},
				{
					"name": "GET Get Pool List",
					"value": "GET Get Pool List",
					"action": "GET Get Pool List",
					"description": "Returns addresses of all pools, in all registries, on a specific chain.\n\nNote: For backward compatibility, in this endpoint the \"factory\" registry is renamed to \"stable-factory\"\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPoolList/{{$parameter[\"blockchainId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Pools",
					"value": "GET Get Pools",
					"action": "GET Get Pools",
					"description": "Returns information on all pools, in a specific registry, on a specific chain.\n\nNote:\n- Doesn't work for Harmony: its 3pool isn't in the main registry, and Harmony is lacking a crypto registry\n- Doesn't work for Moonbeam: it's lacking a main registry\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPools/{{$parameter[\"blockchainId\"]}}/{{$parameter[\"registryId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Pools All",
					"value": "GET Get Pools All",
					"action": "GET Get Pools All",
					"description": "Returns all pools, in all registries, on a specific chain.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPools/all/{{$parameter[\"blockchainId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Pools Big",
					"value": "GET Get Pools Big",
					"action": "GET Get Pools Big",
					"description": "Returns all pools whose TVL is ≥$10k, in all registries, on a specific chain.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPools/big/{{$parameter[\"blockchainId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Pools Empty",
					"value": "GET Get Pools Empty",
					"action": "GET Get Pools Empty",
					"description": "Returns all pools whose TVL is $0, in all registries, on a specific chain.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPools/empty/{{$parameter[\"blockchainId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Pools Small",
					"value": "GET Get Pools Small",
					"action": "GET Get Pools Small",
					"description": "Returns all pools whose TVL is <$10k, in all registries, on a specific chain.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getPools/small/{{$parameter[\"blockchainId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getHiddenPools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Get Hidden Pools"
					]
				}
			}
		},
		{
			"displayName": "GET /getPoolList/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Get Pool List"
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
						"Pools"
					],
					"operation": [
						"GET Get Pool List"
					]
				}
			}
		},
		{
			"displayName": "GET /getPools/{blockchainId}/{registryId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Get Pools"
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
						"Pools"
					],
					"operation": [
						"GET Get Pools"
					]
				}
			}
		},
		{
			"displayName": "Registry ID",
			"name": "registryId",
			"required": true,
			"default": "factory",
			"type": "options",
			"options": [
				{
					"name": "Factory",
					"value": "factory"
				},
				{
					"name": "Main",
					"value": "main"
				},
				{
					"name": "Crypto",
					"value": "crypto"
				},
				{
					"name": "Factory Crypto",
					"value": "factory-crypto"
				},
				{
					"name": "Factory Crvusd",
					"value": "factory-crvusd"
				},
				{
					"name": "Factory Twocrypto",
					"value": "factory-twocrypto"
				},
				{
					"name": "Factory Tricrypto",
					"value": "factory-tricrypto"
				},
				{
					"name": "Factory Eywa",
					"value": "factory-eywa"
				},
				{
					"name": "Factory Stable Ng",
					"value": "factory-stable-ng"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Get Pools"
					]
				}
			}
		},
		{
			"displayName": "GET /getPools/all/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Get Pools All"
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
						"Pools"
					],
					"operation": [
						"GET Get Pools All"
					]
				}
			}
		},
		{
			"displayName": "GET /getPools/big/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Get Pools Big"
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
						"Pools"
					],
					"operation": [
						"GET Get Pools Big"
					]
				}
			}
		},
		{
			"displayName": "GET /getPools/empty/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Get Pools Empty"
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
						"Pools"
					],
					"operation": [
						"GET Get Pools Empty"
					]
				}
			}
		},
		{
			"displayName": "GET /getPools/small/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pools"
					],
					"operation": [
						"GET Get Pools Small"
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
						"Pools"
					],
					"operation": [
						"GET Get Pools Small"
					]
				}
			}
		},
];
