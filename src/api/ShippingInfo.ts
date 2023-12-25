import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IShippingInfo {
  /**
   * The numeric ID of this shipping info record.
   */
  shipping_info_id: number,
  /**
   * The numeric ID of the country from which the listing ships.
   */
  origin_country_id: number,
  /**
   * The numeric ID of the country to which the listing ships (optional). If missing, these fees apply to all destinations.
   */
  destination_country_id: number,
  /**
   * Identifies the currency unit for shipping fees (currently, always 'USD').
   */
  currency_code: string,
  /**
   * The shipping fee for this item, if shipped alone.
   */
  primary_cost: number,
  /**
   * The shipping fee for this item, if shipped with another item.
   */
  secondary_cost: number,
  /**
   * The numeric ID of the listing to which this shipping info applies.
   */
  listing_id: number,
  /**
   * The numeric ID of the region to which this shipping info applies (optional). If missing, no region is selected.  Regions are shorthand for lists of individual countries.
   */
  region_id: number,
  /**
   * The numeric ID of the shipping carrier.
   */
  shipping_carrier_id: number,
  /**
   * The string representation of a shipping carrier's mail class.
   */
  mail_class: string,
  /**
   * The minimum delivery time that a shipment will take, in days.
   */
  min_delivery_time: number,
  /**
   * The maximum delivery time that a shipment will take, in days.
   */
  max_delivery_time: number,
  /**
   * The name of the country from which this item ships.
   */
  origin_country_name: string,
  /**
   * The name of the country to which this item ships.
   */
  destination_country_name: string
}

//parameters types
export interface IFindAllListingShippingProfileEntriesParameters {

}

//methods class
export class ShippingInfo extends ApiRequest {
  constructor(
    options: IOptions
  ) {
    super(options);
  }


  /**
   * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
   */
  async findAllListingShippingProfileEntries<TResult>(
    params: IFindAllListingShippingProfileEntriesParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<IFindAllListingShippingProfileEntriesParameters, TResult>>> {
    return this.request<IFindAllListingShippingProfileEntriesParameters, TResult>("GET", "/listings/:listing_id/shipping/info", params, extra);
  }
}
