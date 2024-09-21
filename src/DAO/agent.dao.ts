import { BaseDAO } from "./base.dao";

import Agent from "@models/agent.model";

class AgentDAO extends BaseDAO<Agent> {
  constructor() {
    super(Agent);
  }
}

export default new AgentDAO();
