import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IReceipt {
  /**
   * The receipt's numeric ID.
   */
  receipt_id: number,
  /**
   * The enum of the order type this receipt is associated with.
   */
  receipt_type: number,
  /**
   * The numeric ID of the order this receipt is associated with.
   */
  order_id: number,
  /**
   * The numeric ID of the seller for this receipt.
   */
  seller_user_id: number,
  /**
   * The numeric ID of the buyer for this receipt.
   */
  buyer_user_id: number,
  /**
   * Creation time, in epoch seconds.
   */
  creation_tsz: number,
  /**
   * Whether or not a refund is allowed for this Receipt.
   */
  can_refund: boolean,
  /**
   * Last modification time, in epoch seconds.
   */
  last_modified_tsz: number,
  /**
   * The name portion of the buyer's address.
   */
  name: string,
  /**
   * The first line of the buyer's address.
   */
  first_line: string,
  /**
   * The second line of the buyer's address.
   */
  second_line: string,
  /**
   * The city for the buyer's address.
   */
  city: string,
  /**
   * The state for the buyer's address.
   */
  state: string,
  /**
   * The zip code of the buyer's address.
   */
  zip: string,
  /**
   * The locally formatted address strng of the buyer's shipping address.
   */
  formatted_address: string,
  /**
   * The numeric ID of the buyer's country.
   */
  country_id: number,
  /**
   * The payment method used. May be pp, cc, ck, mo, or other (stands for paypal, credit card, check, money order, other).
   */
  payment_method: string,
  /**
   * The email address where payment confirmation is sent.
   */
  payment_email: string,
  /**
   * An optional message from the seller.
   */
  message_from_seller: string,
  /**
   * An optional message from the buyer.
   */
  message_from_buyer: string,
  /**
   * True if the receipt was paid.
   */
  was_paid: boolean,
  /**
   * The total sales tax of the receipt.
   */
  total_tax_cost: number,
  /**
   * The total VAT of the receipt.
   */
  total_vat_cost: number,
  /**
   * Sum of the individual listings' (price * quantity). Does not included tax or shipping costs.
   */
  total_price: number,
  /**
   * The total shipping cost of the receipt.
   */
  total_shipping_cost: number,
  /**
   * The ISO code (alphabetic) for the seller's native currency.
   */
  currency_code: string,
  /**
   * The machine generated acknowledgement from the payment system.
   */
  message_from_payment: string,
  /**
   * True if the items in the receipt were shipped.
   */
  was_shipped: boolean,
  /**
   * The email address of the buyer. Access to this field is granted on a case by case basis for third-party integrations that require full access. Sellers using private apps to manage their shops can still access this field.
   */
  buyer_email: string,
  /**
   * The email address of the seller.
   */
  seller_email: string,
  /**
   * Whether the buyer marked item as a gift.
   */
  is_gift: boolean,
  /**
   * Whether the buyer purchased gift wrap.
   */
  needs_gift_wrap: boolean,
  /**
   * The message the buyer wants sent with the gift.
   */
  gift_message: string,
  /**
   * The gift wrap price of the receipt.
   */
  gift_wrap_price: number,
  /**
   * The total discount for the receipt, if using a discount (percent or fixed) Coupon. Free shipping Coupons are not reflected here.
   */
  discount_amt: number,
  /**
   * The total discount for the receipt, if using an Etsy-funded coupon.
   */
  etsy_coupon_discount_amt: number,
  /**
   * total_price minus coupon discounts. Does not included tax or shipping costs.
   */
  subtotal: number,
  /**
   * total_price minus coupon discount plus tax and shipping costs.
   */
  grandtotal: number,
  /**
   * grand total after payment adjustments.
   */
  adjusted_grandtotal: number,
  /**
   * grand total after payment adjustments from the buyer's perspective
   */
  buyer_adjusted_grandtotal: number,
  /**
   * Shipment information associated to this receipt.
   */
  shipments: any[]
}

//parameters types
export interface IGetShopReceipt2Parameters {
  receipt_id: number[]
}

export interface IUpdateReceiptParameters {
  receipt_id: number,
  was_paid?: boolean,
  was_shipped?: boolean
}

export interface IFindAllShopReceiptsParameters {
  shop_id: string | number,
  min_created?: number,
  max_created?: number,
  min_last_modified?: number,
  max_last_modified?: number,
  limit?: number,
  offset?: number,
  page?: number,
  was_paid?: boolean,
  was_shipped?: boolean
}

export interface ISubmitTrackingParameters {
  tracking_code: string,
  carrier_name: string,
  send_bcc?: boolean
}

export interface IFindAllShopReceiptsByStatusParameters {
  shop_id: string | number,
  status: "open" | "unshipped" | "unpaid" | "completed" | "processing" | "all",
  limit?: number,
  offset?: number,
  page?: number
}

export interface ISearchAllShopReceiptsParameters {
  shop_id: string | number,
  search_query: string,
  limit?: number,
  offset?: number,
  page?: number
}

export interface IFindAllUserBuyerReceiptsParameters {
  user_id: string | number,
  limit?: number,
  offset?: number,
  page?: number
}

//methods class
export class Receipt extends ApiRequest {
  constructor(
    options: IOptions
  ) {
    super(options);
  }


  /**
   * Retrieves a Shop_Receipt2 by id.
   */
  async getShop_Receipt2<TResult>(
    params: IGetShopReceipt2Parameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<IGetShopReceipt2Parameters, TResult>>> {
    return this.request<IGetShopReceipt2Parameters, TResult>("GET", "/receipts/:receipt_id", params, extra);
  }

  /**
   * Updates a Shop_Receipt2
   */
  async updateReceipt<TResult>(
    params: IUpdateReceiptParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<IUpdateReceiptParameters, TResult>>> {
    return this.request<IUpdateReceiptParameters, TResult>("PUT", "/receipts/:receipt_id", params, extra);
  }

  /**
   * Retrieves a set of Receipt objects associated to a Shop.
   */
  async findAllShopReceipts<TResult>(
    params: IFindAllShopReceiptsParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<IFindAllShopReceiptsParameters, TResult>>> {
    return this.request<IFindAllShopReceiptsParameters, TResult>("GET", "/shops/:shop_id/receipts", params, extra);
  }

  /**
   * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
   */
  async submitTracking<TResult>(
    params: ISubmitTrackingParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<ISubmitTrackingParameters, TResult>>> {
    return this.request<ISubmitTrackingParameters, TResult>("POST", "/shops/:shop_id/receipts/:receipt_id/tracking", params, extra);
  }

  /**
   * Retrieves a set of Receipt objects associated to a Shop based on the status.
   */
  async findAllShopReceiptsByStatus<TResult>(
    params: IFindAllShopReceiptsByStatusParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<IFindAllShopReceiptsByStatusParameters, TResult>>> {
    return this.request<IFindAllShopReceiptsByStatusParameters, TResult>("GET", "/shops/:shop_id/receipts/:status", params, extra);
  }

  /**
   * Searches the set of Receipt objects associated to a Shop by a query
   */
  async searchAllShopReceipts<TResult>(
    params: ISearchAllShopReceiptsParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<ISearchAllShopReceiptsParameters, TResult>>> {
    return this.request<ISearchAllShopReceiptsParameters, TResult>("GET", "/shops/:shop_id/receipts/search", params, extra);
  }

  /**
   * Retrieves a set of Receipt objects associated to a User.
   */
  async findAllUserBuyerReceipts<TResult>(
    params: IFindAllUserBuyerReceiptsParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<IFindAllUserBuyerReceiptsParameters, TResult>>> {
    return this.request<IFindAllUserBuyerReceiptsParameters, TResult>("GET", "/users/:user_id/receipts", params, extra);
  }
}
