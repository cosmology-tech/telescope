import generate from '@babel/generator';
import cases from 'jest-in-case'
import * as t from '@babel/types';
import {
    recursiveModuleBundle
} from './bundle'
import { getGenericParseContext } from '../../test-utils'


const preview = (ast) => {
    return generate(t.program(ast)).code;
}

const context = getGenericParseContext();

cases(`recursiveModuleBundle`, opts => {

    expect(preview(recursiveModuleBundle(context.options, opts.data))).toMatchSnapshot();
}, [
    {
        name: 'root',
        data: {
            osmosis: {
                __export: true,
                _0: true
            },
            tendermint: {
                __export: true,
                _0: true
            }
        }
    },
    {
        name: 'single',
        data: {
            ics23: {
                __export: true,
                _0: true
            }
        }
    },
    {
        name: 'tendermint',
        data: {
            tendermint: {
                abci: {
                    __export: true,
                    _223: true
                },
                crypto: {
                    __export: true,
                    _224: true,
                    _225: true
                },
                libs: {
                    bits: {
                        __export: true,
                        _226: true
                    }
                },
                p2p: {
                    __export: true,
                    _227: true
                },
                types: {
                    __export: true,
                    _228: true,
                    _229: true,
                    _230: true,
                    _231: true,
                    _232: true
                },
                version: {
                    __export: true,
                    _233: true
                }
            }
        }
    },
    {
        name: 'osmo',
        data: {
            osmosis: {
                claim: {
                    v1beta1: {
                        __export: true,
                        _177: true,
                        _178: true,
                        _179: true,
                        _180: true
                    }
                },
                epochs: {
                    v1beta1: {
                        __export: true,
                        _181: true,
                        _182: true
                    }
                },
                gamm: {
                    v1beta1: {
                        __export: true,
                        _183: true,
                        _184: true,
                        _185: true,
                        _186: true,
                        _187: true
                    }
                },
                incentives: {
                    __export: true,
                    _188: true,
                    _189: true,
                    _190: true,
                    _191: true,
                    _192: true
                },
                lockup: {
                    __export: true,
                    _193: true,
                    _194: true,
                    _195: true,
                    _196: true
                },
                mint: {
                    v1beta1: {
                        __export: true,
                        _197: true,
                        _198: true,
                        _199: true
                    }
                },
                poolincentives: {
                    v1beta1: {
                        __export: true,
                        _200: true,
                        _201: true,
                        _202: true,
                        _203: true
                    }
                },
                store: {
                    v1beta1: {
                        __export: true,
                        _204: true
                    }
                },
                superfluid: {
                    __export: true,
                    _205: true,
                    _206: true,
                    _207: true,
                    _208: true,
                    _209: true
                },
                txfees: {
                    v1beta1: {
                        __export: true,
                        _210: true,
                        _211: true,
                        _212: true,
                        _213: true
                    }
                }
            }
        }
    },
])

cases(`recursiveModuleBundleExperimental`, opts => {
  expect(preview(recursiveModuleBundle(context.options, opts.data))).toMatchSnapshot();
}, [
  {
    name: "osmosis",
    data: {
      "osmosis": {
        "ClientFactory": {
          "_644": true,
          "_645": true,
          "_646": true,
          "_647": true,
          "__export": true,
        },
        "accum": {
          "v1beta1": {
            "_328": true,
            "__export": true,
          },
        },
        "claim": {
          "v1beta1": {
            "_275": true,
            "_276": true,
            "_277": true,
            "_278": true,
            "_572": true,
            "_591": true,
            "__export": true,
          },
        },
        "concentratedliquidity": {
          "_329": true,
          "__export": true,
          "v1beta1": {
            "_557": true,
            "_568": true,
            "_585": true,
            "_604": true,
            "_617": true,
            "__export": true,
          },
        },
        "cosmwasmpool": {
          "v1beta1": {
            "_330": true,
            "_331": true,
            "_332": true,
            "_333": true,
            "_334": true,
            "_586": true,
            "_605": true,
            "__export": true,
          },
        },
        "downtimedetector": {
          "v1beta1": {
            "_335": true,
            "_336": true,
            "_337": true,
            "_587": true,
            "_606": true,
            "__export": true,
          },
        },
        "epochs": {
          "v1beta1": {
            "_279": true,
            "_280": true,
            "_573": true,
            "_592": true,
            "__export": true,
          },
        },
        "gamm": {
          "poolmodels": {
            "balancer": {
              "v1beta1": {
                "_286": true,
                "_550": true,
                "_561": true,
                "_610": true,
                "__export": true,
              },
            },
            "stableswap": {
              "v1beta1": {
                "_287": true,
                "_288": true,
                "_551": true,
                "_562": true,
                "_611": true,
                "__export": true,
              },
            },
          },
          "v1beta1": {
            "_281": true,
            "_282": true,
            "_283": true,
            "_284": true,
            "_285": true,
            "_552": true,
            "_563": true,
            "_574": true,
            "_593": true,
            "_612": true,
            "_621": true,
            "__export": true,
          },
          "v2": {
            "_289": true,
            "_575": true,
            "_594": true,
            "_622": true,
            "__export": true,
          },
        },
        "ibcratelimit": {
          "v1beta1": {
            "_290": true,
            "_291": true,
            "_292": true,
            "_576": true,
            "_595": true,
            "__export": true,
          },
        },
        "incentives": {
          "_293": true,
          "_294": true,
          "_295": true,
          "_296": true,
          "_297": true,
          "_553": true,
          "_564": true,
          "_577": true,
          "_596": true,
          "_613": true,
          "__export": true,
        },
        "lockup": {
          "_298": true,
          "_299": true,
          "_300": true,
          "_301": true,
          "_302": true,
          "_554": true,
          "_565": true,
          "_578": true,
          "_597": true,
          "_614": true,
          "__export": true,
        },
        "mint": {
          "v1beta1": {
            "_303": true,
            "_304": true,
            "_305": true,
            "_579": true,
            "_598": true,
            "__export": true,
          },
        },
        "poolincentives": {
          "v1beta1": {
            "_306": true,
            "_307": true,
            "_308": true,
            "_309": true,
            "_580": true,
            "_599": true,
            "__export": true,
          },
        },
        "poolmanager": {
          "v1beta1": {
            "_338": true,
            "_339": true,
            "_340": true,
            "_341": true,
            "_342": true,
            "_558": true,
            "_569": true,
            "_588": true,
            "_607": true,
            "_618": true,
            "__export": true,
          },
        },
        "protorev": {
          "v1beta1": {
            "_343": true,
            "_344": true,
            "_345": true,
            "_346": true,
            "_347": true,
            "_348": true,
            "_559": true,
            "_570": true,
            "_589": true,
            "_608": true,
            "_619": true,
            "__export": true,
          },
        },
        "store": {
          "v1beta1": {
            "_310": true,
            "__export": true,
          },
        },
        "superfluid": {
          "_311": true,
          "_312": true,
          "_313": true,
          "_314": true,
          "_315": true,
          "_555": true,
          "_566": true,
          "_581": true,
          "_600": true,
          "_615": true,
          "__export": true,
        },
        "tokenfactory": {
          "v1beta1": {
            "_316": true,
            "_317": true,
            "_318": true,
            "_319": true,
            "_320": true,
            "_556": true,
            "_567": true,
            "_582": true,
            "_601": true,
            "_616": true,
            "__export": true,
          },
        },
        "twap": {
          "v1beta1": {
            "_321": true,
            "_322": true,
            "_323": true,
            "_583": true,
            "_602": true,
            "__export": true,
          },
        },
        "txfees": {
          "v1beta1": {
            "_324": true,
            "_325": true,
            "_326": true,
            "_327": true,
            "_584": true,
            "_603": true,
            "__export": true,
          },
        },
        "valsetpref": {
          "v1beta1": {
            "_349": true,
            "_350": true,
            "_351": true,
            "_560": true,
            "_571": true,
            "_590": true,
            "_609": true,
            "_620": true,
            "__export": true,
          },
        },
      },
    }
  },
  {
    name: "osmosis_recursive",
    data: {
      "osmosis": {
        "concentratedliquidity": {
          "_329": true,
          "__export": true,
          "v1beta1": {
            "pool":{
              "_629": true,
              "_630": true,
              "__export": true,
            },
            "_557": true,
            "_568": true,
            "_585": true,
            "_604": true,
            "_617": true,
            "__export": true,
          },
          "v1": {
            "_757": true,
            "_768": true,
            "_785": true,
            "_786": true,
            "_787": true,
            "__export": true,
          },
        },
        "valsetpref": {
          "v1beta1": {
            "_349": true,
            "_350": true,
            "_351": true,
            "_560": true,
            "_571": true,
            "_590": true,
            "_609": true,
            "_620": true,
            "__export": true,
          },
        },
      },
    }
  }
])