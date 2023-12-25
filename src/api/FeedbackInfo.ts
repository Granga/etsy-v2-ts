import { ApiRequest } from "../client/ApiRequest";
import { IOptions } from "../types";

//fields
export interface IFeedbackInfo {
  /**
   * The number of feedbacks.
   */
  count: number,
  /**
   * The feedback score percentage.
   */
  score: number
}

//parameters types


//methods class
export class FeedbackInfo extends ApiRequest {
  constructor(
    options: IOptions
  ) {
    super(options);
  }


}
