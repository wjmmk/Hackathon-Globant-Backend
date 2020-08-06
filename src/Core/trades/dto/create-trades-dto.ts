export class CreateTradesDto {
    readonly status: string;
    readonly service: string;
    readonly concurrence: boolean;
    readonly userAskingId: string;
    readonly trade: string;
}
