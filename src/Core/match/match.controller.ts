import { Controller, Post, Res, Body, Get, Put, Delete, Param, HttpStatus } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match-dto';

@Controller('match')
export class MatchController {

    constructor(private matchService: MatchService) {}

    @Post()
    create(@Body() createMatchDto: CreateMatchDto, @Res() response) {
        this.matchService.createMatch(createMatchDto).then(
            matches => {
                response.status(HttpStatus.CREATED).json(matches);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {matches: 'Error al momento de crear el Match !!!'});
            });
    }

    @Get(':id')
    getUser(@Res() response, @Param('id') idMatch) {
        this.matchService.getMatch(idMatch).then( 
            matches => {
                response.status(HttpStatus.OK).json(matches);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {matches: 'Error al momento de obtener el Match !!!'});
            })
    }

    @Get()
    getAll(@Res() response) {
        this.matchService.getAll().then( 
            matchList => {
                response.status(HttpStatus.OK).json(matchList);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {matches: 'Error al momento de obtener todos los Matches !!!'});
            })
    }

    @Put(':id')
    update(@Body() updateMatchDto: CreateMatchDto, @Res() response, @Param('id') match) {
        this.matchService.updateMatch(match, updateMatchDto).then( match => {
            response.status(HttpStatus.OK).json(match);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json( {match: 'Error al momento de actualizar el Match !!!'});
        })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idMatch) {
        this.matchService.deleteMatch(idMatch).then( resp => {
            response.status(HttpStatus.OK).json(resp);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json( {match: 'Error al momento de eliminar el Match !!!'});
        })
    }
}
