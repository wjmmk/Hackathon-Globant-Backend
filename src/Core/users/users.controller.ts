import { Controller, Post, Res, Body, Get, Put, Delete, Param, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto, @Res() response) {
        this.userService.createUser(createUserDto).then(
            usuario => {
                response.status(HttpStatus.CREATED).json(usuario);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de crear un Usuario !!!'});
            });
    }

    @Get(':id')
    getUser(@Res() response, @Param('id') idUsuario) {
        this.userService.getUser(idUsuario).then( 
            usuario => {
                response.status(HttpStatus.OK).json(usuario);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de obtener el usuario !!!'});
            })
    }

    @Get()
    getAll(@Res() response) {
        this.userService.getAll().then( 
            usuarioList => {
                response.status(HttpStatus.OK).json(usuarioList);
            }).catch( () => {
                response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de obtener todos los usuarios !!!'});
            })
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateUserDto, @Res() response, @Param('id') idUsuario) {
        this.userService.updateUser(idUsuario, updateMensajeDto).then( usuario => {
            response.status(HttpStatus.OK).json(usuario);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de actualizar el Usuario !!!'});
        })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idUsuario) {
        this.userService.deleteUser(idUsuario).then( resp => {
            response.status(HttpStatus.OK).json(resp);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json( {usuario: 'Error al momento de eliminar el Usuario !!!'});
        })
    }
}
