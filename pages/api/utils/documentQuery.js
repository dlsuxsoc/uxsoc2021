export function documentQuery(documentId) {
  return `
  query {
    documents(id:"${documentId}"){
      title
      content
    }
  }
  `;
}
