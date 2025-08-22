import { MANDATORY, AN_OPTION_MUST_BE_SELECTED } from "../constants/Constants";
import { Operation } from "../models/Operation";

export const validate = (operation: Operation): OperationErrors => {
    const errors = new OperationErrors();
    if (!operation.type) errors.type = MANDATORY;
    if (!operation.from) errors.from = MANDATORY;
    if (!operation.to) errors.to = MANDATORY;
    if (!operation.amount) errors.amount = MANDATORY;
    return errors;
}

export class OperationErrors {
    type: string = "";
    from: string = "";
    to: string = "";
    // amount: number = 0;
    amount: string = "";

    isNotEmpty = () => this.type || this.from || this.to || this.amount;
}