const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

app.get( '/projects', (request, response) => {
  return response.json([
    'Project 1',
    'Project 2',
  ]);
});

app.post( '/projects', (request, response) => {
  return response.json([
    'Project 1',
    'Project 2',
    'Project 3',
  ]);
});

app.put( '/projects/:id', (request, response) => {
  return response.json([
    'Project 4',
    'Project 5',
    'Project 6',
  ]);
});

app.delete( '/projects/:id', (request, response) => {
  return response.json([
    'Project 6',
  ]);
});


app.listen(3333, () => {
  console.log('🚀Back-end started!');
});