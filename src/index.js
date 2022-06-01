const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

app.get( '/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json([
    'Project 1',
    'Project 2',
  ]);
});

app.post( '/projects', (request, response) => {
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  return response.json([
    'Project 1',
    'Project 2',
    'Project 3',
  ]);
});

app.put( '/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log(id);

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
