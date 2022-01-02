import { createStore } from 'restoa';

export interface StoreInformation {
  id: string;
  transactionId: number;
  activated: boolean;
  updated: Date;
}

export const [
  useStoreInformations,
  setStoreInformations,
  getStoreInformations,
] = createStore<StoreInformation[]>([]);
