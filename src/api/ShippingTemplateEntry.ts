import { ApiRequest } from "../client/ApiRequest";
import { IOptions } from "../types";

//fields
export interface IShippingTemplateEntry {
  /**
   * The numeric ID of this shipping template entry.
   */
  shipping_template_entry_id: number,
  /**
   * The numeric ID of the template this entry belongs to.
   */
  shipping_template_id: number,
  /**
   * The currency code for the prices in this template entry.
   */
  currency_code: string,
  /**
   * The numeric ID of the country from which the listing ships.
   */
  origin_country_id: number,
  /**
   * The numeric ID of the country to which the listing ships (optional).  If missing, these fees apply to all destinations.
   */
  destination_country_id: number,
  /**
   * The numeric ID of the region to which the listing ships (optional).  Regions are collections of countries.
   */
  destination_region_id: number,
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
   * The shipping fee for this item, if shipped alone.
   */
  primary_cost: number,
  /**
   * The shipping fee for this item, if shipped with another item.
   */
  secondary_cost: number
}

//parameters types


//methods class
export class ShippingTemplateEntry extends ApiRequest {
  constructor(
    options: IOptions
  ) {
    super(options);
  }


}
