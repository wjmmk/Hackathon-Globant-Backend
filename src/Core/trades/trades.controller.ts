import { Controller, Post, Res, Body, Get, Put, Delete, Param, HttpStatus } from '@nestjs/common';
import { CreateTradesDto } from './dto/create-trades-dto';
import { TradesService } from './trades.service';

@Controller('trades')
export class TradesController {

    constructor(private tradeService: TradesService) {}

    @Post()
    create(@Body() createServicesTraderDto: CreateTradesDto, @Res() response) {
        this.tradeService.createTrader(createServicesTraderDto).then(
                trade => {
                response.status(HttpStatus.CREATED).json(trade);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {trade: 'Error al momento de crear un Comerciante !!!'});
            });
    }

    @Get(':id')
    getUser(@Res() response, @Param('id') idTrade) {
        this.tradeService.getTrader(idTrade).then( 
            trade => {
                response.status(HttpStatus.OK).json(trade);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {trade: 'Error al momento de obtener el Comerciante !!!'});
            })
    }

    @Get()
    getAll(@Res() response) {
        this.tradeService.getAll().then( 
            tradeList => {
                response.status(HttpStatus.OK).json(tradeList);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {tradeList: 'Error al momento de obtener todos los Comerciantes !!!'});
            })
    }

    @Put(':id')
    update(@Body() updateTradesDto: CreateTradesDto, @Res() response, @Param('id') trade) {
        this.tradeService.updateTrader(trade, updateTradesDto).then( trade => {
            response.status(HttpStatus.OK).json(trade);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json( {trade: 'Error al momento de actualizar el Comerciante !!!'});
        })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idTrade) {
        this.tradeService.deleteTrader(idTrade).then( resp => {
            response.status(HttpStatus.OK).json(resp);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json( {trade: 'Error al momento de eliminar el Comerciante !!!'});
        })
    }
}