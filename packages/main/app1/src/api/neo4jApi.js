const neo4j = require("neo4j-driver");
const neo4jUri = process.env.REACT_APP_NEO4J_URI;
let neo4jVersion = process.env.REACT_APP_NEO4J_VERSION;
if (neo4jVersion === '') {
  // assume Neo4j 4 by default
  neo4jVersion = '4';
}
let database = process.env.REACT_APP_NEO4J_DATABASE;
// if (!neo4jVersion.startsWith("4")) {
//   database = null;
// }
const driver = neo4j.driver(
  neo4jUri,
  neo4j.auth.basic(process.env.REACT_APP_NEO4J_USER, process.env.REACT_APP_NEO4J_PASSWORD),
);

async function getGraph(cy) {
  const session = driver.session({ database: database });

  try {
    const results = await session.readTransaction((tx) =>
      tx.run(cy));
    return results;
  } finally {
    await session.close()
  }
}

// function getGraph() {
//     const session = driver.session({database: database});
//     return session.readTransaction((tx) =>
//       tx.run('MATCH (m:Movie)<-[:ACTED_IN]-(a:Person) \
//       RETURN m.title AS movie, collect(a.name) AS cast \
//       LIMIT $limit', {limit: neo4j.int(100)}))
//       .then(results => {
//         const nodes = [], rels = [];
//         let i = 0;
//         results.records.forEach(res => {
//           nodes.push({title: res.get('movie'), label: 'movie'});
//           const target = i;
//           i++;
//
//           res.get('cast').forEach(name => {
//             const actor = {title: name, label: 'actor'};
//             let source = _.findIndex(nodes, actor);
//             if (source === -1) {
//               nodes.push(actor);
//               source = i;
//               i++;
//             }
//             rels.push({source, target})
//           })
//         });
//
//         return {nodes, links: rels};
//       })
//       .catch(error => {
//         throw error;
//       })
//       .finally(() => {
//         return session.close();
//       });
//   }

exports.getGraph = getGraph;
