import { Body, Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload-files')
export class UploadFilesController {
    @Post('single')
    @UseInterceptors(FileInterceptor('file'))
    single(@UploadedFile() file, @Body() body) {
        return {}
    }

    @Post('multiple')
    @UseInterceptors(FilesInterceptor('files'))
    multiple(@UploadedFiles() FilesInterceptor, @Body() body) {
        return {}
    }
}
