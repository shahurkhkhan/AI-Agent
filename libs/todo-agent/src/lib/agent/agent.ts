import { Injectable } from "@nestjs/common";
import { ChatGraph } from "./graph";
import { HumanMessage } from "@langchain/core/messages";
import { RadisMemoryService } from "./memory/radis.service";

@Injectable()
export class AgentRuntimeService {
    private graph;

    constructor(
        private readonly chatGraph: ChatGraph,
        private readonly mempory: RadisMemoryService
    ) {
        this.graph = this.chatGraph.build();
    }

    async invoke({
        message, sessionId
    }: { message: string, sessionId: string }) {
        const result = await this.graph.invoke(
            {
                messages: [new HumanMessage(message)],
                sessionId: sessionId,
            }
        );

        return {
            messages: result.memory,
            sessionId: result.sessionId,
        };
    }

    memory = (sessionId: string) => {
        return this.mempory.getSession(sessionId);
    };
}