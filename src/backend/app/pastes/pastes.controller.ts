import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PastesService } from './pastes.service';

@Controller('paste')
export class PastesController {
  constructor(private readonly pastesService: PastesService) {}

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.pastesService.findById(id);
  }

  @Post()
  create(@Body() content: string) {
    return this.pastesService.create(content);
  }
}
