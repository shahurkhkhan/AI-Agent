## AI Agent Memory 
  **Redis short-term execution memory** : https://www.npmjs.com/package/redis
  **MongoDB persistence** : 
  **pgvector semantic memory** : https://github.com/pgvector/pgvector

# Graphs
  At its core, LangGraph models agent workflows as graphs. You define the behavior of your agents using three key components:
  1. **State:** A shared data structure that represents the current snapshot of your application. It can be any data type, but is typically defined using a shared state schema.
  2. **Nodes:** Functions that encode the logic of your agents. They receive the current state as input, perform some computation or side-effect, and return an updated state.
  3. **Edges:** Functions that determine which Node to execute next based on the current state. They can be conditional branches or fixed transitions.