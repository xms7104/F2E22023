const defaultData = {
    voting:[
        {value:14300940, name:'有效票數', itemStyle: { color: '#000000' }}, 
        {value:163631, name:'無效票數', itemStyle: { color: '#cccccc' }}
    ],
    votingInformation: {
        '投票率' : '74.9029',
        '投票數' : '14,464,571',
        '有效票數' : '14,300,940',
        '無效票數' : '163,631'
    },
    party: [
        {value:608590, name:'親民黨', itemStyle: { color: '#dfa175' }}, 
        {value:5522119, name:'中國國民黨', itemStyle: { color: '#8894d9' }}, 
        {value:8170231, name:'民主進步黨', itemStyle: { color: '#84cb98' }}
    ],
    partyInformation: {
        '親民黨' : {voting: '608,590', color: '#dfa175', cp: '宋楚瑜', cvp: '余湘'},
        '中國國民黨' : {voting: '5,522,119', color: '#8894d9', cp: '韓國瑜', cvp: '張善政'},
        '民主進步黨' : {voting: '8,170,231', color: '#84cb98', cp: '蔡英文', cvp: '賴清德'}, 
        '有效票數' : '14,300,940'
    }
}
export default defaultData;