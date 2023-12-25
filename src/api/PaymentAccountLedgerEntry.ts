import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IPaymentAccountLedgerEntry {
  /**
   * The ledger entry's numeric ID.
   */
  entry_id: number,
  /**
   * The ledger's numeric ID.
   */
  ledger_id: number,
  /**
   * The sequence allows ledger entries to be sorted chronologically. The higher the sequence, the more recent the entry.
   */
  sequence_number: number,
  /**
   * The amount of money credited to the ledger.
   */
  amount: number,
  /**
   * The currency of the entry on the ledger.
   */
  currency: string,
  /**
   * Details what kind of ledger entry this is: a payment, refund, reversal of a failed refund, disbursement, returned disbursement, recoupment, miscellaneous credit, miscellaneous debit, or bill payment
   */
  description: string,
  /**
   * The amount of money in the shop's ledger the moment after this entry was applied.
   */
  balance: number,
  /**
   * The date and time the ledger entry was created in Epoch seconds.
   */
  create_date: number
}

//parameters types
export interface IFindPaymentAccountEntriesParameters {
  shop_id: string | number,
  min_created: number,
  max_created: number,
  limit?: number,
  offset?: number,
  page?: number
}

//methods class
export class PaymentAccountLedgerEntry extends ApiRequest {
  constructor(
    options: IOptions
  ) {
    super(options);
  }


  /**
   * Get a Shop Payment Account Ledger's Entries
   */
  async findPaymentAccountEntries<TResult>(
    params: IFindPaymentAccountEntriesParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<IFindPaymentAccountEntriesParameters, TResult>>> {
    return this.request<IFindPaymentAccountEntriesParameters, TResult>("GET", "/shops/:shop_id/payment_account/entries", params, extra);
  }
}
