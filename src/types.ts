import { Cluster } from '@solana/web3.js';

export interface SolflareConfig {
  network?: Cluster
}

export interface SolflareIframeEvent {
  type: string;
  data: any;
}

export interface SolflareIframeRequest {
  method: string;
  params?: unknown;
}

export interface SolflareIframeMessage {
  type: 'response' | 'event',
  id: string;
  event?: SolflareIframeEvent;
  result?: unknown;
  error?: unknown;
}

export type MessageHandlers = {
  [id: string]: {
    resolve: (...args: unknown[]) => unknown,
    reject: (...args: unknown[]) => unknown
  }
}
