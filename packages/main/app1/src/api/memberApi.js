const neo4jApi = require('./neo4jApi');
const _ = require('lodash');

async function getMemberGraph(cy) {
    const elements = [];
    try {
        const results = await neo4jApi.getGraph('MATCH (m:MemberOjt)<-[:MEMBER_DEPARTMENT]-(d:Department) \
      RETURN d as dep, collect(m) as mem');

        const records = results.records;
        for (let i = 0; i < records.length; i++) {
            let res = records[i];
            const dep = res.get('dep');
            const data = { id: dep.properties.id.low, label: dep.properties.name, type: 'dep' };
            elements.push({ 'data': data });
            const target = dep.properties.id.low;

            res.get('mem').forEach(data => {
                const member = { id: data.properties.idx.low, label: data.properties.userName, type: 'mem' };
                if (_.findIndex(elements, member) === -1) {
                    elements.push({ 'data': member });
                }
                const source = data.properties.idx.low;
                const edge = { 'source': source, 'target': target }
                elements.push({ 'data': edge });
            })
        }
        return elements;
    } finally {
        console.log('get Member Graph');
        console.log(elements);
    }
}

exports.getMemberGraph = getMemberGraph;
