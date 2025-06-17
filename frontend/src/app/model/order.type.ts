export type Order = {
  id: number;
  orderNumber: number;
  amount: number;
  paymentDescription: string;
  streetAddress: string;
  town: string;
  country: string;
  currency: string;
  paymentDueDate: string;
};

export type OrderSearchCriteria = {
  country?: string | null;
  description?: string | null;
};
