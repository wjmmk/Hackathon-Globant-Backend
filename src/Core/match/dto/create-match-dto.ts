export class CreateMatchDto {
    readonly status: string;
    readonly tradeId: number;
    readonly userAcceptsId: number;
    readonly tradeScore: number;
    readonly userScore: number;
}
