import { ApiRequest } from "../client/ApiRequest";
import { IOptions } from "../types";

//fields
export interface IShippingOption {
  /**
   * The ID of the shipping option.
   */
  option_id: string,
  /**
   * The name of the shipping option.
   */
  name: string,
  /**
   * The type of shipping option.
   */
  option_type: number,
  /**
   * The total cart shipping price if the shipping option is selected.
   */
  cost: string,
  /**
   * The ISO (alphabetic) code for the shipping option's currency.
   */
  currency_code: string
}

//parameters types


//methods class
export class ShippingOption extends ApiRequest {
  constructor(
    options: IOptions
  ) {
    super(options);
  }


}
