import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { DecksService } from './decks.service';

@Controller('decks')
export class DecksController {

    /*
    Note: due to the DecksService has @Injectable by providing the param here to the constructor, nestjs will instanitate the DecksService

    Should not need to manually instanitate classes in nestjs, most will automatically happen

    */
    constructor(private readonly decksService: DecksService) {}


  // GET /decks --> []
  @Get()
  getDecks(@Query('name') name: string) {
    return this.decksService.getDecks(name);
  }

  // GET /decks/:id --> {...}
  @Get(':id')
  getOneDeck(@Param('id') id: string) {
    return this.decksService.getDeck(+id)
  }
  // POST /decks
  @Post()
  createDeck(@Body() createDeckDto: CreateDeckDto) {
    return this.decksService.createDeck(createDeckDto)
  }

  // PUT /decks/:id --> {...}
  @Put(':id')
  updateDeck(@Param('id') id: string, @Body() updateDeckDto: UpdateDeckDto) {
    return this.decksService.updateDeck(+id, updateDeckDto)
  }

  // DELETE /decks/:id --> {...}
  @Delete(':id')
  deleteDeck(@Param('id') id: string) {
    return this.decksService.removeDeck(+id)
  }
}
