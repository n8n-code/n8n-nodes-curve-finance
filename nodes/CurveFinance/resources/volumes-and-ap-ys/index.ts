import type { INodeProperties } from 'n8n-workflow';

export const volumesAndApYsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
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
				},
				{
					"name": "GET Get All Pools Volume",
					"value": "GET Get All Pools Volume",
					"action": "GET Get All Pools Volume",
					"description": "Returns total 24h volume for a chain.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getAllPoolsVolume/{{$parameter[\"blockchainId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Base Apys",
					"value": "GET Get Base Apys",
					"action": "GET Get Base Apys",
					"description": "Returns all base APY data for Curve pools on each chain.\n\nNote: [`/getVolumes/{blockchainId}`](#/default/get_getVolumes__blockchainId_) is preferred\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getBaseApys/{{$parameter[\"blockchainId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Facto Gauges Crv Rewards",
					"value": "GET Get Facto Gauges Crv Rewards",
					"action": "GET Get Facto Gauges Crv Rewards",
					"description": "Returns unboosted CRV APRs for sidechain facto gauges",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getFactoGaugesCrvRewards/{{$parameter[\"blockchainId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Factory AP Ys",
					"value": "GET Get Factory AP Ys",
					"action": "GET Get Factory AP Ys",
					"description": "Returns *inaccurate* volume and base APY data for Curve pools on chains that aren’t indexed by either the [Curve Prices API](https://prices.curve.fi/feeds-docs) or the [Curve subgraphs](https://github.com/curvefi/volume-subgraphs).\nData returned by this endpoint is necessarily inaccurate due to the manual chain-walking involved, coupled with the limitations of RPC endpoints available for this subset of chains. Using this endpoint should be considered an imperfect last resort.\nIf the chain for which you want to retrieve volume and base APY data is available through either [`/getVolumes/{blockchainId}`](#/default/get_getVolumes__blockchainId_) or [`getSubgraphData/[blockchainId]`](#/default/get_getSubgraphData__blockchainId_), please use these.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getFactoryAPYs/{{$parameter[\"blockchainId\"]}}/{{$parameter[\"version\"]}}"
						}
					}
				},
				{
					"name": "GET Get Subgraph Data",
					"value": "GET Get Subgraph Data",
					"action": "GET Get Subgraph Data",
					"description": "Returns all 24h volume and base APY data for Curve pools on each chain.\nIt relies on [Curve subgraphs](https://github.com/curvefi/volume-subgraphs), and is being slowly transitioned to the more reliable [`/getVolumes/{blockchainId}`](#/default/get_getVolumes__blockchainId_) endpoint (where support for more chains is being added). When this transition is done, this endpoint will however remain available as simple proxy for [`/getVolumes/{blockchainId}`](#/default/get_getVolumes__blockchainId_).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getSubgraphData/{{$parameter[\"blockchainId\"]}}"
						}
					}
				},
				{
					"name": "GET Get Volumes",
					"value": "GET Get Volumes",
					"action": "GET Get Volumes",
					"description": "Returns all 24h volume and base APY data for Curve pools on each chain.\nIt relies on the [Curve Prices API](https://prices.curve.finance/feeds-docs), and is meant as a more reliable replacement to the [`getSubgraphData/[blockchainId]`](#/default/get_getSubgraphData__blockchainId_) endpoints.\n\nNote: Not all chains are currently available on the Curve Prices API. Currently available chains: `ethereum | polygon | arbitrum | base | optimism | fantom`\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getVolumes/{{$parameter[\"blockchainId\"]}}"
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
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get All Gauges"
					]
				}
			}
		},
		{
			"displayName": "GET /getAllPoolsVolume/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get All Pools Volume"
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
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get All Pools Volume"
					]
				}
			}
		},
		{
			"displayName": "GET /getBaseApys/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Base Apys"
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
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Base Apys"
					]
				}
			}
		},
		{
			"displayName": "GET /getFactoGaugesCrvRewards/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Facto Gauges Crv Rewards"
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
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Facto Gauges Crv Rewards"
					]
				}
			}
		},
		{
			"displayName": "GET /getFactoryAPYs/{blockchainId}/{version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Factory AP Ys"
					]
				}
			}
		},
		{
			"displayName": "Blockchain ID",
			"name": "blockchainId",
			"required": true,
			"default": "bsc",
			"type": "options",
			"options": [
				{
					"name": "Bsc",
					"value": "bsc"
				},
				{
					"name": "Kava",
					"value": "kava"
				},
				{
					"name": "Zkevm",
					"value": "zkevm"
				},
				{
					"name": "Zksync",
					"value": "zksync"
				},
				{
					"name": "X Layer",
					"value": "x-layer"
				},
				{
					"name": "Mantle",
					"value": "mantle"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Factory AP Ys"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"default": "stable",
			"type": "options",
			"options": [
				{
					"name": "Stable",
					"value": "stable"
				},
				{
					"name": "Crypto",
					"value": "crypto"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Factory AP Ys"
					]
				}
			}
		},
		{
			"displayName": "GET /getSubgraphData/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Subgraph Data"
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
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Subgraph Data"
					]
				}
			}
		},
		{
			"displayName": "GET /getVolumes/{blockchainId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Volumes"
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
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Volumes"
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
						"Volumes And AP Ys"
					],
					"operation": [
						"GET Get Volumes Ethereum Crvusd Amms"
					]
				}
			}
		},
];
