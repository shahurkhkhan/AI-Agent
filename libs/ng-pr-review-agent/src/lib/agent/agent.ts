import { Injectable } from "@nestjs/common";
import { ChatGraph } from "./graph";

@Injectable()
export class AgentRuntimeService {
    private graph;

    constructor(
        private readonly chatGraph: ChatGraph,
    ) {
        this.graph = this.chatGraph.build();
    }

    async invoke() {
        const result = await this.graph.invoke({
            files: [],
            newComments: [],
            oldComments: []
        });
        return result;
    }
}