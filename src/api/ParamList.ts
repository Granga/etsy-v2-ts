import { ApiRequest } from "../client/ApiRequest";
import { IOptions } from "../types";

//fields
export interface IParamList {
  /**
   * Each field in the record represents an Etsy API method parameter.  The value corresponds to one of the documented data or resource types.
   */
  param_name: string
}

//parameters types


//methods class
export class ParamList extends ApiRequest {
  constructor(
    options: IOptions
  ) {
    super(options);
  }


}
