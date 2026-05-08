import { Injectable } from '@nestjs/common';

@Injectable()
export class ToolRegistry {
 
  getTools() {
    return [
    ];
  }

  // getToolsMyName = () => {
  //   return Object.fromEntries(this.getTools().map((t) => [t.name, t]));
  // }
}