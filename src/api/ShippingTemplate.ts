import { AxiosResponse } from "axios";
import { ApiRequest } from "../client/ApiRequest";
import { IOptions, IRequestOptions, IStandardParameters, IStandardResponse } from "../types";

//fields
export interface IShippingTemplate {
  /**
   * The numeric ID of this shipping template.
   */
  shipping_template_id: number,
  /**
   * The name of this shipping template.
   */
  title: string,
  /**
   * The numeric ID of the user who owns this shipping template.
   */
  user_id: number,
  /**
   * The minimum number of days for processing the listing.
   */
  min_processing_days: number,
  /**
   * The maximum number of days for processing the listing.
   */
  max_processing_days: number,
  /**
   * Translated display label for processing days.
   */
  processing_days_display_label: string,
  /**
   * The numeric ID of the country from which the listing ships.
   */
  origin_country_id: number,
  /**
   * The postal code string (not necessarily a number) for the location from which the listing ships.
   */
  origin_postal_code: string
}

//parameters types
export interface IFindAllUserShippingProfilesParameters {
  user_id: string | number,
  limit?: number,
  offset?: number,
  page?: number
}

//methods class
export class ShippingTemplate extends ApiRequest {
  constructor(
    options: IOptions
  ) {
    super(options);
  }


  /**
   * Retrieves a set of ShippingTemplate objects associated to a User.
   */
  async findAllUserShippingProfiles<TResult>(
    params: IFindAllUserShippingProfilesParameters & IStandardParameters,
    extra?: IRequestOptions
  ): Promise<AxiosResponse<IStandardResponse<IFindAllUserShippingProfilesParameters, TResult>>> {
    return this.request<IFindAllUserShippingProfilesParameters, TResult>("GET", "/users/:user_id/shipping/templates", params, extra);
  }
}
