import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import type { DateTime } from "./types";


const server = new McpServer({
  name: "datetime",
  version: "0.0.1",
  capabilities: {
    resources: {},
    tools: {},
  }
});


async function getDate(): Promise<DateTime> {
  const now = new Date();
  return {
    dayOfWeek: dayNumToString(now.getDay()),
    dayOfMonth: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  }
}


function dayNumToString(dayNum: number): string {
  switch (dayNum) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid";
  }
}

//type with field for 







