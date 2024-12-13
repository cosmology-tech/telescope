export const createClientMap = (QueryClientImpl: string) => [
  {
    "type": "ExportNamedDeclaration",
    "declaration": {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "useQueryService"
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "name": "ComputedRef"
                },
                "typeParameters": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "name": QueryClientImpl
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword"
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "id": null,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "name": "rpc",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "name": "Ref"
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "name": "ProtobufRpcClient"
                              }
                            },
                            {
                              "type": "TSUndefinedKeyword"
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "name": "_queryClients"
                      },
                      "init": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "WeakMap"
                        },
                        "arguments": []
                      }
                    }
                  ],
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "computed"
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "name": "rpc"
                                },
                                "computed": false,
                                "property": {
                                  "type": "Identifier",
                                  "name": "value"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_queryClients"
                                        },
                                        "computed": false,
                                        "property": {
                                          "type": "Identifier",
                                          "name": "has"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "name": "rpc"
                                          },
                                          "computed": false,
                                          "property": {
                                            "type": "Identifier",
                                            "name": "value"
                                          }
                                        }
                                      ]
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "name": "_queryClients"
                                              },
                                              "computed": false,
                                              "property": {
                                                "type": "Identifier",
                                                "name": "get"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "rpc"
                                                },
                                                "computed": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "value"
                                                }
                                              }
                                            ]
                                          }
                                        }
                                      ],
                                      "directives": []
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "Identifier",
                                          "name": "queryService"
                                        },
                                        "init": {
                                          "type": "NewExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "name": QueryClientImpl
                                          },
                                          "arguments": [
                                            {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "name": "rpc"
                                              },
                                              "computed": false,
                                              "property": {
                                                "type": "Identifier",
                                                "name": "value"
                                              }
                                            }
                                          ]
                                        }
                                      }
                                    ],
                                    "kind": "const"
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "name": "_queryClients"
                                        },
                                        "computed": false,
                                        "property": {
                                          "type": "Identifier",
                                          "name": "set"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "name": "rpc"
                                          },
                                          "computed": false,
                                          "property": {
                                            "type": "Identifier",
                                            "name": "value"
                                          }
                                        },
                                        {
                                          "type": "Identifier",
                                          "name": "queryService"
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "queryService"
                                    }
                                  }
                                ],
                                "directives": []
                              },
                              "alternate": null
                            }
                          ],
                          "directives": []
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "kind": "const"
    }
  }
]
