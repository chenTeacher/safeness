import {Injectable} from "@angular/core";

/*安全指标*/
const saftcode = [
  {'Icon': './assets/imgs/zximg.png', 'key': 'S1001', 'value': '隐患总数量', 'level1': ['1', '2', '3', '4']},
  {'Icon': './assets/imgs/zximg.png', 'key': 'S1002', 'value': '待整改隐患', 'level1': ['1', '2', '3', '4']},
  {'Icon': './assets/imgs/zximg.png', 'key': 'S1003', 'value': '待验收隐患', 'level1': ['1', '3']},
  {'Icon': './assets/imgs/zximg.png', 'key': 'S1004', 'value': '逾期未整改隐患', 'level1': ['1', '2', '3', '4']},
  {'Icon': './assets/imgs/zximg.png', 'key': 'S1005', 'value': '违章数量', 'level1': ['1', '2', '3']},
  {'Icon': './assets/imgs/zximg.png', 'key': 'S1006', 'value': '今日施工人数', 'level1': ['1', '2', '3']},
  {'Icon': './assets/imgs/zximg.png', 'key': 'S1007', 'value': '已关闭隐患', 'level1': ['2', '3']},
  {'Icon': './assets/imgs/zximg.png', 'key': 'S1008', 'value': '重大隐患数量', 'level1': ['4']},
];

//工作提醒
const workremind = [

  { 'Icon': './assets/imgs/zximg.png', 'key': 'W2001', 'value': '待填写工作计划', 'level1': ['1'], 'level2': ['1001']},
  {'Icon': './assets/imgs/zximg.png', 'key': 'W2002', 'value': '待召开班前会', 'level1': ['1'], 'level2': ['1001']},
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2003',
    'value': '待验收隐患',
    'level1': ['3'],
    'level2': ['3002', '3003']
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2004',
    'value': '待整改隐患',
    'level1': ['3'],
    'level2': ['3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009',]
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2005',
    'value': '待完善隐患',
    'level1': ['3'],
    'level2': ['3002', '3003']
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2006',
    'value': '即将到期未整改隐患',
    'level1': ['3'],
    'level2': ['3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009',]
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2007',
    'value': '审核未通过隐患',
    'level1': ['3'],
    'level2': ['3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009',]
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2008',
    'value': '待审核隐患',
    'level1': ['3'],
    'level2': ['3005']
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2009',
    'value': '验收不合格隐患',
    'level1': ['3'],
    'level2': ['3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009',]
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2010',
    'value': '复查验证未通过隐患',
    'level1': ['3'],
    'level2': ['3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009',]
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W20011',
    'value': '逾期未整改隐患',
    'level1': ['3'],
    'level2': ['3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009',]
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2012',
    'value': '待开展安全检查',
    'level1': ['3', '4'],
    'level2': ['3001', '3002', '3003', '3004', '3005', '3006', '3007', '3008', '3009', '4001', '4002', '4003', '4004', '4005', '4006', '4007', '4008']
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2013',
    'value': '待处理危险作业',
    'level1': ['3'],
    'level2': ['3001', '3002', '3003', '3005',]
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2014',
    'value': '待复查验证隐患',
    'level1': ['4'],
    'level2': ['4001', '4002', '4003', '4004', '4005', '4006', '4007', '4008']
  },
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2015',
    'value': '审批未通过检查计划',
    'level1': ['4'],
    'level2': ['4001', '4002', '4003', '4004', '4005', '4006', '4007', '4008']
  },
  {'Icon': './assets/imgs/zximg.png', 'key': 'W2016', 'value': '待审批检查计划', 'level1': ['4'], 'level2': ['4001', '4002']},
  {
    'Icon': './assets/imgs/zximg.png',
    'key': 'W2017',
    'value': '待处理危险作业',
    'level1': ['4'],
    'level2': ['4002', '4003', '4005', '4006']
  },
];
//项目风险预警
const riskwarning = [
  {'Icon': './assets/imgs/zximg.png', 'key': 'R3001', 'value': '七天未进行周检', 'level1': [4]},
  {'Icon': './assets/imgs/zximg.png', 'key': 'R3002', 'value': '存在重大隐患', 'level1': [4]},
  {'Icon': './assets/imgs/zximg.png', 'key': 'R3003', 'value': '隐患整改率低于80%', 'level1': [4]},
  {'Icon': './assets/imgs/zximg.png', 'key': 'R3004', 'value': '逾期未整改重大隐患', 'level1': [4]},
];

/**
 * 判断用户的权限 根据权限给予用户可以使用的功能
 * level1 用户的权限1级别编码 1 班组层级 2 分包商层级 3 项目级 4 公司层级
 * level2 用户的权限2级别编码
 * 其中
 * level1  为 1 的用户的level2编码说明
 * 1001 班组长
 * 1000 非班组长
 * level1  为 2 的用户的level2编码说明
 * 暂无
 * level1  为 3 的用户的level2编码说明
 * 3001 项目技术负责人
 * 3002 项目安全员
 * 3003 项目安全总监
 * 3004 项目材料员
 * 3005 项目负责人
 * 3006 项目普通用户
 * 3007 项目施工员
 * 3008 项目领导班子
 * 3009 项目机管员
 * level1  为 4 的用户的level2编码说明
 * 4001 公司安全总监
 * 4002公司安全部经理
 * 4003公司技术总工
 * 4004公司领导班子
 * 4005公司技术部经理
 * 4006公司生产部经理
 * 4007公司普通人员
 * 4008公司安全管理人员
 */
@Injectable()
export class AuthorityServiec {
  constructor() {
  }

  /**
   * 工作提醒
   */
  getWorkRemind(level1,level2) {
    const w  = [];
    for(let i = 0 ;i<workremind.length;i++){
      if(level1 == workremind[i].level1 && level2 == workremind[i].level2){
        w.push(workremind[i]);
      }
    }
    return w;
  }

  /**
   * 安全指标
   */
  getSaftCode(level1,level2) {
    const  r =[];
    for(let i = 0 ;i<saftcode.length;i++){
      if(level1 == saftcode[i].level1){
        r.push(saftcode[i]);
      }
    }
    return r;
  }

  /**
   * 项目风险预警
   */
  getRiskWarning(level1,level2) {
    const  s =[];
    for(let i = 0 ;i<riskwarning.length;i++){
      if(level1 == riskwarning[i].level1 ){
        s.push(riskwarning[i]);
      }
    }
    return s;
  }

}
